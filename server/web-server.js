const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';

const pgp         = require('pg-promise')(/* initialization options */);
const express     = require('express');
const csv_handler = require('./csv-handler.js');
const db_options  = require('./database_connection_options.json');

const app         = express();
const port        = 3000;


class Options {

    constructor(origin) {
        this.origin = origin;
    }
    
    set_db(db_connections) {

        if (this.origin === 'http://procollect.beta.creditexpress.ru'){
            this.db_connection = db_connections["procollect-beta (ru)"];
        }
        else if (['http://procollect.test.creditexpress.ru', 'https://procollect-test.ru.creditexpress.com'].includes(this.origin)) {
            this.db_connection = db_connections["procollect-test (ru)"];
        }
        else if (this.origin === 'https://cehr-test.creditorro.com') {
            this.db_connection = db_connections["cehr-test.creditorro"];
        }
        else if (this.origin === 'https://creditkasa-test.creditorro.com') {
            this.db_connection = db_connections["creditkasa-test.creditorro"];
        }

        return this

    }

    set_geo() {

        if (['http://procollect.beta.creditexpress.ru', 'http://procollect.test.creditexpress.ru', 'https://procollect-test.ru.creditexpress.com'].includes(this.origin)){
            this.project_type = "ru";
        }
        else if (['https://cehr-test.creditorro.com'].includes(this.origin)) {
            this.project_type = "hr";
        }
        else if (['https://creditkasa-test.creditorro.com'].includes(this.origin)) {
            this.project_type = "ua";
        }

        return this

    }

}



app.get('/collateral-users', (request, response) => {

    let option = new Options (request.headers.origin).set_db(db_options);

    console.log(`${newLineChar}/collateral-users → ` + JSON.stringify(option));

    let db = pgp(option.db_connection);     // database instance;
    
    db.task(async (t) => {
        return await t.many('select \"ID\", \"Login\" from \"Data\".\"User\" order by random() limit $1', [2]);
    })
    .then(data => {
        console.log(`${newLineChar}/collateral-users → ` + JSON.stringify(data));
        response.send(data);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(pgp.end); // alternative de-initialization: .finally(db.$pool.end);

});


app.get('/templates/:name', async (request, response) => {

    let option           = new Options (request.headers.origin).set_geo();

    console.log(`${newLineChar}/templates/${request.params["name"]} → ` + JSON.stringify(option))
 
    let template         = `${request.params["name"]}.csv`;
    let data             = await csv_handler.csv_parser(`../external_files/${option.project_type}/${template}`);

    console.log(`${newLineChar}/templates/${request.params["name"]} → ` + JSON.stringify(data));
    response.send(data);

});


app.get('/schemas/:name', async (request, response) => {

    let option           = new Options (request.headers.origin).set_geo();

    console.log(`${newLineChar}/schemas/${request.params["name"]} → ` + JSON.stringify(option))
 
    let schema           = `${request.params["name"]}.js`;
    let data             =  require(`../external_files/${option.project_type}/${schema}`);

    console.log(`${newLineChar}/schemas/${request.params["name"]} → ` + JSON.stringify(data));
    response.send(data);

});


app.listen(port, (err) => {

    if (err) {
        return console.log('Something bad has happened', err)
    }
    
    console.log(`server is listening on ${port}`)

})