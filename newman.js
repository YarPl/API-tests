const newman = require('./server/node_modules/newman');
const fs     = require('fs');

let testName = process.argv[2];

newman.run({
            collection:  require(`./postman_tests/${testName}.postman_collection.json`),
            environment: require(`./postman_tests/environments/${testName}.postman_environment.json`),
            globals:     require(`./postman_tests/environments/global/bridge.json`),
            reporters:   ["cli", "allure"],
            reporter : { allure : { export : './allure-results' } } 
        }).on('start', function (err, args) {
            console.log('running a collection...');
        }).on('done', function (err, summary) {
            
            fs.writeFileSync(`./postman_tests/environments/${testName}.postman_environment.json`, JSON.stringify(summary.environment));
            fs.writeFileSync(`./postman_tests/environments/global/bridge.json`, JSON.stringify(summary.globals));
       
            if (err || summary.error) {
                console.error('collection run encountered an error.');
            }
            else {
                console.log('collection run completed.');
            }
            
        });


