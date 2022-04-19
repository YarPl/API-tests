module.exports = {

    "title": `JSON schema describing structure of the template, intended for package and debtors' cases creation / "Импорт ('Загрузка')" → "Реестр" → "Скачать шаблон"`,
    "items": {
        "title": "Array consisting of debtors' cases data",
        "required": [
            "DebtorAccountID",
            "AccountNumber",
            "AccountStartDate",
            "AccountCloseDate",
            "AccountName",
            "OriginalLoanSum",
            "InterestRate",
            "Interest",
            "Interest395",
            "Fee",
            "Currency",
            "OriginalDaysPastDue",
            "TotalPaidAmount",
            "LastPaymentDate",
            "DebtIssueDate",
            "ReceiverBank",
            "BankAccount",
            "Surname",
            "Name",
            "Patronymic",
            "DateOfBirth",
            "PassportNumber",
            "PassportExtraInfo",
            "WorkPlace",
            "JobTitle",
            "WorkZip",
            "WorkAddressRegion",
            "WorkDistrict",
            "WorkCity",
            "WorkStreet",
            "WorkHouseNum",
            "WorkBuildingNum",
            "WorkApartmentNum",
            "DebtorMobilePhone",
            "DebtorHomePhone",
            "DebtorWorkPhone",
            "DebtorOtherPhone",
            "RegisteredZip",
            "RegisteredAddressRegion",
            "RegisteredAddressDistrict",
            "RegisteredAddressCity",
            "RegisteredAddressStreet",
            "HouseNum",
            "BuildingNum",
            "AppartamentNum",
            "MailingZip",
            "MailingAddressRegion",
            "MailingDistrict",
            "MailingCity",
            "MailingStreet",
            "MailingHouseNum",
            "MailingBuildingNum",
            "MailingApartmentNum",
            "CaseExtra1",
            "CaseExtra2",
            "CaseExtra3",
            "CaseExtra4",
            "CaseExtra5",
            "CaseExtra6",
            "CaseExtra7",
            "CaseExtra8",
            "CaseExtra9",
            "CaseExtra10",
            "ContactpersonSurname",
            "ContactpersonName",
            "ContactpersonPatronimic",
            "BailerSurname",
            "BailerName",
            "BailerPatronymic",
            "Bailerzip",
            "BailerAddressRegion",
            "BailerDistrict",
            "BailerCity",
            "BailerStreet",
            "BailerHouseNum",
            "BailerBuildingNum",
            "BailerApartmentNum",
            "BirthPlace",
            "PassportIssuingDate",
            "CodeIssuingAuthority",
            "MinPaymentAmount",
            "DebtorAuthorizedForPayment",
            "InvoiceBankAccount",
            "DebtorBankID",
            "CreditCardLimit",
            "DebtorLastContactDate",
            "CreditTerm",
            "LastPaymentAmount",
            "InvoiceNoteAdditional",
            "InvoiceNote",
            "PrimaryCreditor",
            "StatusDebtBeforeAssignment",
            "InfoAboutCourt",
            "CourtRuling",
            "CostOfRightToClaim",
            "InvoiceAssignmentDate",
            "InvoiceAssignmentDateNumber",
            "Gender",
            "PersonDocumentType",
            "ActivityNote",
            "Segment",
            "ExpirationDate",
            "InvoiceExt1",
            "InvoiceExt2",
            "InvoiceExt3",
            "InvoiceExt4",
            "InvoiceExt5",
            "InvoiceExt6",
            "InvoiceExt7",
            "InvoiceExt8",
            "InvoiceExt9",
            "InvoiceExt10",
            "InvoiceAgreementCloseDate",
            "MainDebtExpired",
            "PercentOverdue",
            "Penalty",
            "PenaltyforMainDebtDelay",
            "PenaltyforPercentDelay",
            "CommissionOverdue",
            "StateFee",
            "MainDebtUrgent",
            "PercentUrgent",
            "CommissionUrgent",
            "Unstructured",
            "Equipment",
            "DiscountFromDate",
            "DiscountToDate",
            "DiscountAmount",
            "DebtorType",
            "DebtorEmail",
            "Taxnumber",
            "ActualSavedBalanceAmount",
            "InitialSavedBalanceAmount",
            "InvoiceUUID",
            "InvoiceFullLoanCost",
            "SaleRate"
        ],
        "properties": {
            "DebtorAccountID": {
                "title": `Клиентский рег. номер`,
                "description": `(вкладка "Доверитель") / select "ContragentCaseID" from "Data"."Case";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "DebtorAccountID / Клиентский рег. номер (вкладка \"Доверитель\") / 123450 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/DebtorAccountID",
                "type": "string"
            },
            "AccountNumber": {
                "title": `Номер договора;`,
                "description": `(вкладка "Договоры" и вкладка "Способ оплаты" → "Реквизиты") / select "AccountNum" from "Data"."Invoice"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "AccountNumber / Номер договора / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/AccountNumber",
                "type": "string"
            },
            "AccountStartDate": {
                "title": `Дата заключения`,
                "description": `(вкладка "Договоры") / select "FromDate" from "Data"."Invoice";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "01.01.1901", "31.12.9999"
                ],
                "$id": "#/items/properties/AccountStartDate",
                "type": "string"
            },
            "AccountCloseDate": {
                "title": `Дата закрытия`,
                "description": `(вкладка "Договоры") / select "ToDate" from "Data"."Invoice";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "01.01.1901", "31.12.9999"
                ],
                "$id": "#/items/properties/AccountCloseDate",
                "type": "string"
            },
            "AccountName": {
                "title": `Тип продукта`,
                "description": `(вкладка "Договоры") / select "InitialInfo" -> 'ProductType' from "Data"."Invoice";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "AccountName / Тип продукта / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/AccountName",
                "type": "string"
            },
            "OriginalLoanSum": {
                "title": "Сумма выданного кредита",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "699740837.11", "758400782"
                ],
                "$id": "#/items/properties/OriginalLoanSum",
                "type": "string"
            },
            "InterestRate": {
                "title": "% ставка по договору",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "692182876.39", "314162668"
                ],
                "$id": "#/items/properties/InterestRate",
                "type": "string"
            },
            "Interest": {
                "title": "Процент",
                "description": `Тип транзакции: 111 - Изначальная сумма`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "392399822.68", "531483161"
                ],
                "$id": "#/items/properties/Interest",
                "type": "string"
            },
            "Interest395": {
                "title": "Тело → Проценты по ст. 395 ГК РФ",
                "description": `Тип транзакции: 111 - Изначальная сумма`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "492055346.67", "183898624"
                ],
                "$id": "#/items/properties/Interest395",
                "type": "string"
            },
            "Fee": {
                "title": "Пеня",
                "description": `Тип транзакции: 111 - Изначальная сумма`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "214857499.56", "345578216"
                ],
                "$id": "#/items/properties/Fee",
                "type": "string"
            },
            "Currency": {
                "title": `Валюта`,
                "description": `(вкладка "Договоры") / select "Name" from "Dictionary"."Currency" where "IsDeleted" = 0;`,
                "default": "RUB",
                "enum": ["Piece", "USD", "RUB", "EUR", "UAH", "CHF"],
                "pattern": "^(.*)$",
                "examples": [
                    "Piece", "USD", "RUB", "EUR", "UAH", "CHF"
                ],
                "$id": "#/items/properties/Currency",
                "type": "string"
            },
            "OriginalDaysPastDue": {
                "title": `Просрочка изначальная`,
                "description": `(вкладка "Договоры") / select "InitialDPD" from "Data"."Invoice"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "70"
                ],
                "$id": "#/items/properties/OriginalDaysPastDue",
                "type": "string"
            },
            "TotalPaidAmount": {
                "title": "Сумма платежей",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "788761549.71", "751915773"
                ],
                "$id": "#/items/properties/TotalPaidAmount",
                "type": "string"
            },
            "LastPaymentDate": {
                "title": "Дата последнего платежа",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "17.10.8335"
                ],
                "$id": "#/items/properties/LastPaymentDate",
                "type": "string"
            },
            "DebtIssueDate": {
                "title": `Дата выхода в просрочку`,
                "description": `(вкладка "Договоры")`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "20.10.4851"
                ],
                "$id": "#/items/properties/DebtIssueDate",
                "type": "string"
            },
            "ReceiverBank": {
                "title": `Банк получатель`,
                "description": `(вкладка "Способ оплаты" → "Реквизиты")`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "ReceiverBank / Банк получатель / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/ReceiverBank",
                "type": "string"
            },
            "BankAccount": {
                "title": "Номер счета должника",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BankAccount `'- Номер счета должника 1234567890"
                ],
                "$id": "#/items/properties/BankAccount",
                "type": "string"
            },
            "Surname": {
                "title": `Фамилия`,
                "description": `select "LastName" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "Surname `'- Фамилия 1234567890"
                ],
                "$id": "#/items/properties/Surname",
                "type": "string"
            },
            "Name": {
                "title": `Имя`,
                "description": `select "FirstName" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "Name `'- Имя 1234567890"
                ],
                "$id": "#/items/properties/Name",
                "type": "string"
            },
            "Patronymic": {
                "title": `Отчество`,
                "description": `select "MiddleName" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "Patronymic `'- Отчество 1234567890"
                ],
                "$id": "#/items/properties/Patronymic",
                "type": "string"
            },
            "DateOfBirth": {
                "title": `Дата рождения должника`,
                "description": `(вкладка "Личные данные") / select "BirthDate" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "19.05.4910"
                ],
                "$id": "#/items/properties/DateOfBirth",
                "type": "string"
            },
            "PassportNumber": {
                "title": `Номер паспорта`,
                "description": `(вкладка "Личные данные") / select "PassportNumber" from "Data"."Debtor"; (Размерность реквизита: [6 - 10])`,
                "default": "",
                "pattern": "^(.*)$",
                "minLength": 6,
                "maxLength": 10,
                "examples": [
                    "1234567890", "123456"
                ],
                "$id": "#/items/properties/PassportNumber",
                "type": "string"
            },
            "PassportExtraInfo": {
                "title": `Паспорт выдан`,
                "description": `(вкладка "Личные данные") / select "PassportInfo" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "PassportExtraInfo / Паспорт выдан / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/PassportExtraInfo",
                "type": "string"
            },
            "WorkPlace": {
                "title": `Место работы должника`,
                "description": `(вкладка "Личные данные") / select "WorkPlace" from "Data"."Debtor"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "WorkPlace / Место работы / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/WorkPlace",
                "type": "string"
            },
            "JobTitle": {
                "title": `Должность должника`,
                "description": `(вкладка "Личные данные") / select "Position" from "Data"."Debtor"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "JobTitle / Должность / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/JobTitle",
                "type": "string"
            },
            "WorkZip": {
                "title": `Индекс`,
                "description": `(Размерность реквизита: до 6, Тип: Рабочий, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 6,
                "examples": [
                    "123456"
                ],
                "$id": "#/items/properties/WorkZip",
                "type": "string"
            },
            "WorkAddressRegion": {
                "title": "Область(Регион)",
                "description": `(Тип: Рабочий, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "WorkAddressRegion / Область (Регион) / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/WorkAddressRegion",
                "type": "string"
            },
            "WorkDistrict": {
                "title": "Район",
                "description": `(Тип: Рабочий, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "WorkDistrict / Район / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/WorkDistrict",
                "type": "string"
            },
            "WorkCity": {
                "title": "Нас.пункт",
                "description": `(Тип: Рабочий, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "WorkCity / Населенный пункт / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/WorkCity",
                "type": "string"
            },
            "WorkStreet": {
                "title": "Улица",
                "description": `(Тип: Рабочий, Сторона: Должник)"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "WorkStreet / Улица / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/WorkStreet",
                "type": "string"
            },
            "WorkHouseNum": {
                "title": "Дом",
                "description": `(Размерность реквизита: до 10, Тип: Рабочий, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 10,
                "examples": [
                    "WorkHouse№", "Дом 12/*#$"
                ],
                "$id": "#/items/properties/WorkHouseNum",
                "type": "string"
            },
            "WorkBuildingNum": {
                "title": "Корпус",
                "description": `(Размерность реквизита: до 10, Тип: Рабочий, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 10,
                "examples": [
                    "WorkBuild.", "Корпус 53*"
                ],
                "$id": "#/items/properties/WorkBuildingNum",
                "type": "string"
            },
            "WorkApartmentNum": {
                "title": "Кв.",
                "description": `(Размерность реквизита: до 10, Тип: Рабочий, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 10,
                "examples": [
                    "WorkApart.", "Кв. 56 ^:&"
                ],
                "$id": "#/items/properties/WorkApartmentNum",
                "type": "string"
            },
            "DebtorMobilePhone": {
                "title": "Номер телефона",
                "description": `(сторона: Личный)`,
                "default": "",
                "pattern": "^(.*)$",
                "minLength": 10,
                "maxLength": 10,
                "examples": [
                    "9170000000", "9170000001"
                ],
                "$id": "#/items/properties/DebtorMobilePhone",
                "type": "string"
            },
            "DebtorHomePhone": {
                "title": "Номер телефона",
                "description": `(сторона: Домашний)`,
                "default": "",
                "pattern": "^(.*)$",
                "minLength": 10,
                "maxLength": 10,
                "examples": [
                    "9170000002", "9170000003"
                ],
                "$id": "#/items/properties/DebtorHomePhone",
                "type": "string"
            },
            "DebtorWorkPhone": {
                "title": "Номер телефона",
                "description": `(сторона: Рабочий)`,
                "default": "",
                "pattern": "^(.*)$",
                "minLength": 10,
                "maxLength": 10,
                "examples": [
                    "9170000004", "9170000005"
                ],
                "$id": "#/items/properties/DebtorWorkPhone",
                "type": "string"
            },
            "DebtorOtherPhone": {
                "title": "Номер телефона",
                "description": `(сторона: Неизвестно)`,
                "default": "",
                "pattern": "^(.*)$",
                "minLength": 10,
                "maxLength": 10,
                "examples": [
                    "9170000006", "9170000007"
                ],
                "$id": "#/items/properties/DebtorOtherPhone",
                "type": "string"
            },
            "RegisteredZip": {
                "title": "Индекс",
                "description": `(Размерность реквизита: до 6, Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 6,
                "examples": [
                    "123456"
                ],
                "$id": "#/items/properties/RegisteredZip",
                "type": "string"
            },
            "RegisteredAddressRegion": {
                "title": "Область(Регион)",
                "description": `(Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "RegisteredAddressRegion / Область (Регион) / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/RegisteredAddressRegion",
                "type": "string"
            },
            "RegisteredAddressDistrict": {
                "title": "Район",
                "description": `(Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "RegisteredAddressDistrict / Район / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/RegisteredAddressDistrict",
                "type": "string"
            },
            "RegisteredAddressCity": {
                "title": "Нас.пункт",
                "description": `(Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "RegisteredAddressCity / Населенный пункт / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/RegisteredAddressCity",
                "type": "string"
            },
            "RegisteredAddressStreet": {
                "title": "Улица",
                "description": `(Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "RegisteredAddressStreet / Улица / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/RegisteredAddressStreet",
                "type": "string"
            },
            "HouseNum": {
                "title": "Дом",
                "description": `(Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "HouseNum / Дом / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/HouseNum",
                "type": "string"
            },
            "BuildingNum": {
                "title": "Корпус",
                "description": `(Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BuildingNum / Корпус / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BuildingNum",
                "type": "string"
            },
            "AppartamentNum": {
                "title": "Кв.",
                "description": `(Тип: Регистрации, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "AppartamentNum / Кв. / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/AppartamentNum",
                "type": "string"
            },
            "MailingZip": {
                "title": "Индекс",
                "description": `(Размерность реквизита: до 6, Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 6,
                "examples": [
                    "123456"
                ],
                "$id": "#/items/properties/MailingZip",
                "type": "string"
            },
            "MailingAddressRegion": {
                "title": "Область(Регион)",
                "description": `(Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "MailingAddressRegion / Область (Регион) / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/MailingAddressRegion",
                "type": "string"
            },
            "MailingDistrict": {
                "title": "Район",
                "description": `(Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "MailingDistrict / Район / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/MailingDistrict",
                "type": "string"
            },
            "MailingCity": {
                "title": "Нас.пункт",
                "description": `(Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "MailingCity / Населенный пункт / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/MailingCity",
                "type": "string"
            },
            "MailingStreet": {
                "title": "Улица",
                "description": `(Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "MailingStreet / Улица / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/MailingStreet",
                "type": "string"
            },
            "MailingHouseNum": {
                "title": "Дом",
                "description": `(Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "MailingHouseNum / Дом  / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/MailingHouseNum",
                "type": "string"
            },
            "MailingBuildingNum": {
                "title": "Корпус",
                "description": `(Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "MailingBuildingNum / Корпус  / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/MailingBuildingNum",
                "type": "string"
            },
            "MailingApartmentNum": {
                "title": "Кв.",
                "description": `(Тип: Проживания, Сторона: Должник)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "MailingApartmentNum / Кв. / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/MailingApartmentNum",
                "type": "string"
            },
            "CaseExtra1": {
                "title": "Доп. инфо. 1",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra1 / Доп. Поле1 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra1",
                "type": "string"
            },
            "CaseExtra2": {
                "title": "Доп. инфо. 2",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra2 / Доп. Поле2 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra2",
                "type": "string"
            },
            "CaseExtra3": {
                "title": "Доп. инфо. 3",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra3 / Доп. Поле3 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra3",
                "type": "string"
            },
            "CaseExtra4": {
                "title": "Доп. инфо. 4",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra4 / Доп. Поле4 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra4",
                "type": "string"
            },
            "CaseExtra5": {
                "title": "Доп. инфо. 5",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra5 / Доп. Поле5 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra5",
                "type": "string"
            },
            "CaseExtra6": {
                "title": "Доп. инфо. 6",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra6 / Доп. Поле6 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra6",
                "type": "string"
            },
            "CaseExtra7": {
                "title": "Доп. инфо. 7",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra7 / Доп. Поле7 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra7",
                "type": "string"
            },
            "CaseExtra8": {
                "title": "Доп. инфо. 8",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra8 / Доп. Поле8 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra8",
                "type": "string"
            },
            "CaseExtra9": {
                "title": "Доп. инфо. 9",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra9 / Доп. Поле9 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra9",
                "type": "string"
            },
            "CaseExtra10": {
                "title": "Доп. инфо. 10",
                "description": `Местонахождение: 'Дополнительно' → 'Доп. инфо', Настройка отображения на клиенте: 'Доп. информация' → 'Дополнительная информация'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CaseExtra10 / Доп. Поле10 / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/CaseExtra10",
                "type": "string"
            },
            "ContactpersonSurname": {
                "title": "Фамилия контактного лица",
                "description": `(вкладка '3-ьи лица')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 50,
                "examples": [
                    "ContactpersonSurname (Фамилия конт. лица) 01 #$%^*"
                ],
                "$id": "#/items/properties/ContactpersonSurname",
                "type": "string"
            },
            "ContactpersonName": {
                "title": "Имя контактного лица",
                "description": `(вкладка '3-ьи лица')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 50,
                "examples": [
                    "ContactpersonName (Имя конт. лица) 0123456 .!@№#$;"
                ],
                "$id": "#/items/properties/ContactpersonName",
                "type": "string"
            },
            "ContactpersonPatronimic": {
                "title": "Отчество контактного лица",
                "description": `(вкладка '3-ьи лица')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 50,
                "examples": [
                    "ContactpersonPatronimic (Отчество конт. лица) 01 *"
                ],
                "$id": "#/items/properties/ContactpersonPatronimic",
                "type": "string"
            },
            "BailerSurname": {
                "title": "Фамилия поручителя",
                "description": `(вкладка '3-ьи лица')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 50,
                "examples": [
                    "BailerSurname / Фамилия поручителя / 012 .!@№,`$'`"
                ],
                "$id": "#/items/properties/BailerSurname",
                "type": "string"
            },
            "BailerName": {
                "title": "Имя поручителя",
                "description": `(вкладка '3-ьи лица')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 50,
                "examples": [
                    "BailerName / Имя поручителя / 012345 .!@№#$;%^:&?*"
                ],
                "$id": "#/items/properties/BailerName",
                "type": "string"
            },
            "BailerPatronymic": {
                "title": "Отчество поручителя",
                "description": `(вкладка '3-ьи лица')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 50,
                "examples": [
                    "BailerPatronymic / Отчество поручителя / 012 .!@№#"
                ],
                "$id": "#/items/properties/BailerPatronymic",
                "type": "string"
            },
            "Bailerzip": {
                "title": "Индекс",
                "description": `(Размерность реквизита: до 6, Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 6,
                "examples": [
                    "123456"
                ],
                "$id": "#/items/properties/Bailerzip",
                "type": "string"
            },
            "BailerAddressRegion": {
                "title": "Область(Регион)",
                "description": `(Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BailerAddressRegion / Область (Регион) / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BailerAddressRegion",
                "type": "string"
            },
            "BailerDistrict": {
                "title": "Район",
                "description": `(Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BailerDistrict / Район / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BailerDistrict",
                "type": "string"
            },
            "BailerCity": {
                "title": "Нас.пункт",
                "description": `(Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BailerCity / Населенный пункт / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BailerCity",
                "type": "string"
            },
            "BailerStreet": {
                "title": "Улица",
                "description": `(Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BailerStreet / Улица / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BailerStreet",
                "type": "string"
            },
            "BailerHouseNum": {
                "title": "Дом",
                "description": `(Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BailerHouseNum / Дом / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BailerHouseNum",
                "type": "string"
            },
            "BailerBuildingNum": {
                "title": "Корпус",
                "description": `(Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BailerBuildingNum / Корпус / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BailerBuildingNum",
                "type": "string"
            },
            "BailerApartmentNum": {
                "title": "Кв.",
                "description": `(Тип: Регистрации, Сторона: Поручитель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BailerApartmentNum / Область (Регион) / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BailerApartmentNum",
                "type": "string"
            },
            "BirthPlace": {
                "title": `Место рождения должника`,
                "description": `select "BirthPlace" from "Data"."Debtor"; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "BirthPlace / Место рождения / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/BirthPlace",
                "type": "string"
            },
            "PassportIssuingDate": {
                "title": `Дата выдачи паспорта`,
                "description": `(вкладка 'Личные данные') / select "PassportIssuingDate" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "06.09.7500"
                ],
                "$id": "#/items/properties/PassportIssuingDate",
                "type": "string"
            },
            "CodeIssuingAuthority": {
                "title": `Код подразделения, выдавшего паспорт`,
                "description": `(вкладка 'Личные данные') / select "CodeIssuingAuthority" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 10,
                "examples": [
                    "Code*Код:0"
                ],
                "$id": "#/items/properties/CodeIssuingAuthority",
                "type": "string"
            },
            "MinPaymentAmount": {
                "title": "Минимальная сумма к оплате",
                "description": `(вкладка 'Договоры' → колонка 'Минимальная сумма к оплате')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "825565922.12", "305504415"
                ],
                "$id": "#/items/properties/MinPaymentAmount",
                "type": "string"
            },
            "DebtorAuthorizedForPayment": {
                "title": `Получатель платежа`,
                "description": `(вкладка "Способ оплаты" → "Реквизиты" → "Получатель")`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "DebtorAuthorizedForPayment / Получатель / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/DebtorAuthorizedForPayment",
                "type": "string"
            },
            "InvoiceBankAccount": {
                "title": `Расчётный счёт (теку́щий счёт, счёт до востре́бования, че́ковый счёт)`,
                "description": `Отображение на веб-интерфейсе: вкладка "Способ оплаты" → "Реквизиты" → "р/с"; вкладка "Договоры" → "Номер счета"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceBankAccount / Расчетный счет / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceBankAccount",
                "type": "string"
            },
            "DebtorBankID": {
                "title": `Банковский идентификационный код, БИК`,
                "description": `Уникальный идентификатор банка, используемый в платежных документах (платёжное поручение, аккредитив) на территории России. Корреспондентский счёт — счёт, открываемый банковской организацией (банком-респондентом) в подразделении самого банка или в иной банковской организации (корреспонденте). Предназначен для отражения расчётов, производимых одной банковской организацией по поручению и за счёт другой на основании заключённого между ними корреспондентского соглашения. Отображение на веб-интерфейсе: вкладка "Способ оплаты" → "Реквизиты" → "Корр.сч, БИК"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "DebtorBankID / 'Банковский идентификационный код' или 'Корреспондентский счёт' / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'"
                ],
                "$id": "#/items/properties/DebtorBankID",
                "type": "string"
            },
            "CreditCardLimit": {
                "title": "Сумма лимита по кредитной карте",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "767796866.29", "942969136"
                ],
                "$id": "#/items/properties/CreditCardLimit",
                "type": "string"
            },
            "DebtorLastContactDate": {
                "title": "Дата последнего контакта с должником",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "15.07.8604"
                ],
                "$id": "#/items/properties/DebtorLastContactDate",
                "type": "string"
            },
            "CreditTerm": {
                "title": "Срок кредита",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 10,
                "examples": [
                    "CreditTerm", "Срок_09%:$"
                ],
                "$id": "#/items/properties/CreditTerm",
                "type": "string"
            },
            "LastPaymentAmount": {
                "title": "Сумма последнего платежа",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "LastPaymentAmount / Сумма последнего платежа / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/LastPaymentAmount",
                "type": "string"
            },
            "InvoiceNoteAdditional": {
                "title": "Доп.комментарий",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceNoteAdditional / Доп.комментарий / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceNoteAdditional",
                "type": "string"
            },
            "InvoiceNote": {
                "title": "Комментарий",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceNote / Комментарий /  1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceNote",
                "type": "string"
            },
            "PrimaryCreditor": {
                "title": "Первоначальный кредитор",
                "description": `(боковая панель)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    ""
                ],
                "$id": "#/items/properties/PrimaryCreditor",
                "type": "string"
            },
            "StatusDebtBeforeAssignment": {
                "title": "Статус задолженности до уступки",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "maxLength": 100,
                "examples": [
                    "StatusDebtBeforeAssignment / Статус задолженности до уступки / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$"
                ],
                "$id": "#/items/properties/StatusDebtBeforeAssignment",
                "type": "string"
            },
            "InfoAboutCourt": {
                "title": "Инфо о суд.исп",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InfoAboutCourt / Инфо о суд.исп / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$"
                ],
                "$id": "#/items/properties/InfoAboutCourt",
                "type": "string"
            },
            "CourtRuling": {
                "title": "Решение суда",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "CourtRuling / Решение суда / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$"
                ],
                "$id": "#/items/properties/CourtRuling",
                "type": "string"
            },
            "CostOfRightToClaim": {
                "title": "Стоимость права требования",
                "description": `('Договоры' → 'История от контрагента' → 'Показать')`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "216804478.95", "512489219"
                ],
                "$id": "#/items/properties/CostOfRightToClaim",
                "type": "string"
            },
            "InvoiceAssignmentDate": {
                "title": `'От:' в боковой панели`,
                "description": `select "InitialInfo" -> 'InvoiceAssignmentDate' from "Data"."Invoice" / 'От:' в боковой панели. Отображается, только если заполнено значение в колонке 'InvoiceAssignmentDateNumber'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "13.02.5519"
                ],
                "$id": "#/items/properties/InvoiceAssignmentDate",
                "type": "string"
            },
            "InvoiceAssignmentDateNumber": {
                "title": "Договор уступки",
                "description": `(боковая панель). Отображается, только если заполнено значение в колонке 'InvoiceAssignmentDate'`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    ""
                ],
                "$id": "#/items/properties/InvoiceAssignmentDateNumber",
                "type": "string"
            },
            "Gender": {
                "title": `Пол`,
                "description": `(вкладка 'Личные данные') / select * from "Dictionary"."SexType";`,
                "default": "N/A",
                "pattern": "^(.*)$",
                "enum": ["Female", "Entity", "Male", "N/A"],
                "examples": [
                    "Female", "Entity", "Male", "N/A"
                ],
                "$id": "#/items/properties/Gender",
                "type": "string"
            },
            "PersonDocumentType": {
                "title": `Словарное значение: select * from "Dictionary"."PersonDocumentType";`,
                "description": `Словарное значение: select * from "Dictionary"."PersonDocumentType"`,
                "default": "Паспорт",
                "pattern": "^(.*)$",
                "enum": ["Паспорт"],
                "examples": [
                    "Паспорт"
                ],
                "$id": "#/items/properties/PersonDocumentType",
                "type": "string"
            },
            "ActivityNote": {
                "title": `Комментарий к записи с типом действия "Info" во вкладке "История"`,
                "description": `Комментарий к записи с типом действия "Info" во вкладке "История"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    'ActivityNote / Комментарий к "Info" / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'
                ],
                "$id": "#/items/properties/ActivityNote",
                "type": "string"
            },
            "Segment": {
                "title": ``,
                "description": `select "InitialInfo" -> 'Segment' from "Data"."Invoice" / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "Segment / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$"
                ],
                "$id": "#/items/properties/Segment",
                "type": "string"
            },
            "ExpirationDate": {
                "title": "",
                "description": `в базе данных не обнаружено / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "ExpirationDate / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$"
                ],
                "$id": "#/items/properties/ExpirationDate",
                "type": "string"
            },
            "InvoiceExt1": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt1 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt1",
                "type": "string"
            },
            "InvoiceExt2": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt2 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt2",
                "type": "string"
            },
            "InvoiceExt3": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt3 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt3",
                "type": "string"
            },
            "InvoiceExt4": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt4 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt4",
                "type": "string"
            },
            "InvoiceExt5": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt5 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt5",
                "type": "string"
            },
            "InvoiceExt6": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt6 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt6",
                "type": "string"
            },
            "InvoiceExt7": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt7 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt7",
                "type": "string"
            },
            "InvoiceExt8": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt8 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt8",
                "type": "string"
            },
            "InvoiceExt9": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt9 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt9",
                "type": "string"
            },
            "InvoiceExt10": {
                "title": ``,
                "description": `select * from "Data"."AdditionalNote" where "AttributeValue" = {{InvoiceID}}; / на веб-интерфейсе не обнаружено`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "InvoiceExt10 / на веб-интерфейсе не обнаружено / 1234567890 .!@№#$;%^:&?*()_-+=/> <,`$'`"
                ],
                "$id": "#/items/properties/InvoiceExt10",
                "type": "string"
            },
            "InvoiceAgreementCloseDate": {
                "title": `Дата закрытия счета должника`,
                "description": `select "InvoiceAgreementCloseDate" from "Data"."Invoice" / "Договоры" → "История от контрагента" → "Показать"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "16.04.9821"
                ],
                "$id": "#/items/properties/InvoiceAgreementCloseDate",
                "type": "string"
            },
            "MainDebtExpired": {
                "title": "Тело → ОД просроченный",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "125901.45"
                ],
                "$id": "#/items/properties/MainDebtExpired",
                "type": "string"
            },
            "PercentOverdue": {
                "title": "Тело → % просроченные",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "192378205.26", "402159791"
                ],
                "$id": "#/items/properties/PercentOverdue",
                "type": "string"
            },
            "Penalty": {
                "title": "Тело → Штраф на ОД",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "106594665.39", "642073484"
                ],
                "$id": "#/items/properties/Penalty",
                "type": "string"
            },
            "PenaltyforMainDebtDelay": {
                "title": "Тело → Неустойка за просрочку ОД",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "773012130.46", "428670386"
                ],
                "$id": "#/items/properties/PenaltyforMainDebtDelay",
                "type": "string"
            },
            "PenaltyforPercentDelay": {
                "title": "Тело → Неустойка за просрочку % % пользования",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "845565702.17", "614117276"
                ],
                "$id": "#/items/properties/PenaltyforPercentDelay",
                "type": "string"
            },
            "CommissionOverdue": {
                "title": "Тело → Комиссия просроченная",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "746119388.25", "827773677"
                ],
                "$id": "#/items/properties/CommissionOverdue",
                "type": "string"
            },
            "StateFee": {
                "title": "Тело → Госпошлина",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "944091809.74", "243117456"
                ],
                "$id": "#/items/properties/StateFee",
                "type": "string"
            },
            "MainDebtUrgent": {
                "title": "Тело → ОД срочный",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "873786004.40", "729360306"
                ],
                "$id": "#/items/properties/MainDebtUrgent",
                "type": "string"
            },
            "PercentUrgent": {
                "title": "Тело → % срочные",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "814283975.96", "148011454"
                ],
                "$id": "#/items/properties/PercentUrgent",
                "type": "string"
            },
            "CommissionUrgent": {
                "title": "Тело → Комиссия срочная",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "507824064.43", "672930758"
                ],
                "$id": "#/items/properties/CommissionUrgent",
                "type": "string"
            },
            "Unstructured": {
                "title": "Без структуры",
                "description": `Тип транзакции: (111 - Изначальная сумма)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "670398609.45", "616000079"
                ],
                "$id": "#/items/properties/Unstructured",
                "type": "string"
            },
            "Equipment": {
                "title": "Оборудование",
                "description": `Тип транзакции: (121 - Начальное кол-во оборудования)`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "690948514.58", "933318868"
                ],
                "$id": "#/items/properties/Equipment",
                "type": "string"
            },
            "DiscountFromDate": {
                "title": `Акция действует с`,
                "description": `('Договоры' → 'Номер договора' → 'Акция') / select * from "Data"."InvoiceDiscount"; / Для отображения также необходимо заполнить: "DiscountToDate", "DiscountAmount"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "02.02.1902"
                ],
                "$id": "#/items/properties/DiscountFromDate",
                "type": "string"
            },
            "DiscountToDate": {
                "title": `Акция действует по`,
                "description": `('Договоры' → 'Номер договора' → 'Акция') / select * from "Data"."InvoiceDiscount"; / Для отображения также необходимо заполнить: "DiscountFromDate", "DiscountAmount"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "30.11.9998"
                ],
                "$id": "#/items/properties/DiscountToDate",
                "type": "string"
            },
            "DiscountAmount": {
                "title": `Сумма к оплате по акции`,
                "description": `('Договоры' → 'Номер договора' → 'Акция') / select * from "Data"."InvoiceDiscount"; / Для отображения также необходимо заполнить: "DiscountFromDate", "DiscountToDate"`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "344778729.51", "835011410"
                ],
                "$id": "#/items/properties/DiscountAmount",
                "type": "string"
            },
            "DebtorType": {
                "title": `Тип должника`,
                "description": `select * from "Dictionary"."DebtorType"; / select "TypeID" from "Data"."Debtor";`,
                "default": "",
                "pattern": "^(.*)$",
                "enum": ["Physical", "Unrecognized", "PrivateEntrepreneur", "Entity"],
                "examples": [
                    "Physical", "Unrecognized", "PrivateEntrepreneur", "Entity"
                ],
                "$id": "#/items/properties/DebtorType",
                "type": "string"
            },
            "DebtorEmail": {
                "title": `Электронный почтовый адрес должника`,
                "description": `(Статус: Unknown, Дата валидации: -) (вкладка "Личные данные")`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "debtor_email@FromPackageImport.com"
                ],
                "$id": "#/items/properties/DebtorEmail",
                "type": "string"
            },
            "Taxnumber": {
                "title": `Идентификационный номер налогоплательщика`,
                "description": `(вкладка "Личные данные")`,
                "default": "",
                "pattern": "^\s*$|^[^а-яА-ЯёЁ]{10}$|^[^а-яА-ЯёЁ]{12}$",
                "examples": [
                    "123450_*#&", "Taxnumber_*$" 
                ],
                "$id": "#/items/properties/Taxnumber",
                "type": "string"
            },
            "ActualSavedBalanceAmount": {
                "title": `Сумма сохраненного баланса текущая`,
                "description": `select "ActualSavedBalanceAmount" from "Data"."Custom002Invoice"; / на веб-интерфейсе не обнаружено`,
                "default": "",
                //"pattern": "^\s*$|^\b\d{1,10}\b$|^\b\d{1,10}\b.\d+$",
                "examples": [
                    "8400797258.23", "6939665319"
                ],
                "$id": "#/items/properties/ActualSavedBalanceAmount",
                "type": "string"
            },
            "InitialSavedBalanceAmount": {
                "title": `Сумма сохраненного баланса изначальная`,
                "description": `select "InitialSavedBalanceAmount" from "Data"."Custom002Invoice"; / на веб-интерфейсе не обнаружено`,
                "default": "",
                //"pattern": "^\s*$|^\b\d{1,10}\b$|^\b\d{1,10}\b.\d+$",
                "examples": [
                    "1050507584.53", "2021101635"
                ],
                "$id": "#/items/properties/InitialSavedBalanceAmount",
                "type": "string"
            },
            "InvoiceUUID": {
                "title": "UUID (universally unique identifier) / УИД (универсальный уникальный идентификатор)",
                "description": `для отображения в 'Договоры' → 'История от контрагента' → 'Показать' установить 'Отправка данных в БКИ' = 'Да' в 'Специфика работы' (/admin/client/{{ContrahensID}}/work-specification) перед загрузкой реестра`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "da815252-a8d9-11eb-8000-010000000000-7"
                ],
                "$id": "#/items/properties/InvoiceUUID",
                "type": "string"
            },
            "InvoiceFullLoanCost": {
                "title": `Полная стоимость кредита (ПСК)`,
                "description": `('Договоры' → 'История от контрагента' → 'Показать') / select "FullLoanCost" from "Data"."Custom002Invoice";`,
                "default": "",
                "pattern": "^(.*)$",
                "examples": [
                    "894902916.205", "269130441"
                ],
                "$id": "#/items/properties/InvoiceFullLoanCost",
                "type": "string"
            },
            "SaleRate": {
                "title": `Цена уступки (%)`,
                "description": `select "SaleRate" from "Data"."Custom002Invoice";`,
                "default": "",
                //"pattern": "^\b\d{1,3}\b.\b\d{2}\b$",
                "examples": [
                    "577.44", "6.80"
                ],
                "$id": "#/items/properties/SaleRate",
                "type": "string"
            }
        },
        "$id": "#/items",
        "type": "object",
        "additionalProperties": false
    },
    "$id": "localhost/templates/reestr-template",
    "type": "array",
    "definitions": {},
    "$schema": "http://json-schema.org/draft/2020-12/json-schema-validation.html"

}