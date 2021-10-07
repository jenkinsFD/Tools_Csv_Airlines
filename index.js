"use strict"


const faker = require('faker');
const fs = require('fs');
const Papa = require('papaparse');
var usaCities = require('./USCities3.js');


/*
Referencia de los metodos dispobibles
https://marak.github.io/faker.js/#toc7__anchor 
*/

/* fehca de hoy personalizada dd_mm_yyyy  */
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //Enero es 0!
    let yyyy = today.getFullYear();
    today = dd + '_' + mm + '_' +  yyyy;
    let uui = faker.random.number();
    let ArrayAirlines = ["VW","AA","AF","IJ","WS","AE","SS","AS","GH","LB","EW","AJ"];
    let ArrayTicketClass = ["IN","FK","KL","UV","OP","UI","FT","MU"];
    let ArrayAirport = ["ORD", "MX", "TJ", "KK", "UK", "JU", "FD", "KL", "TR", "TY"];
    let ArrayMonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    let ArrayYear = [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027];
    let ArrayLevel = ["GOLD", "PLATINUM", "ZAFIR", "VIP", "BASIC", "JR"];
    let nameFile = "./"+today+"_"+uui+"_Airlines_"+numberTest+".csv";  // construlle nombre del archivo
    let arrayData = [];
    for (var i = 0; i < numberTest; i++) {

        let randomAirline = ArrayAirlines[faker.random.number({'min': 1,'max': 11})];
        let randomTicketClass = ArrayTicketClass[faker.random.number({'min': 1,'max': 7})];
        let numberR = Math.floor(1000 + Math.random() * 900);
        var jsonCity = usaCities.RandomCity(numberR);
        var jsonCity2 = usaCities.RandomCity(numberR+1);
        let randomAirport= ArrayAirport[faker.random.number({'min': 1,'max': 9})];
        let randomAirport2= ArrayAirport[faker.random.number({'min': 1,'max': 9})];
        let randomMonth = ArrayMonth[faker.random.number({'min': 1,'max': 11})];
        let randomYear  = ArrayYear[faker.random.number({'min': 1,'max': 28})];
        let dateExp = randomMonth+"/"+randomYear;
        let randomLevel  = ArrayLevel[faker.random.number({'min': 1,'max': 5})];

      
        let stringjson =  {
            "PNR":faker.random.alphaNumeric()+faker.random.number({'min': 3,'max': 500}),
            "Round_Trip_One_Way": "Round Trip/ Oneway/Multi-leg",
            "Airline_name":randomAirline,
            "Flight_Number": faker.random.number({'min': 3,'max': 500}),
            "Ticket_Class": randomTicketClass,
            "Departure_date_time": faker.date.past(),
            "Departure_City":jsonCity.city,
            "Departure_State":jsonCity.state,
            "Departure_Contry":"USA",
            "Departure_Airport": randomAirport,
            "Arrival_City":jsonCity2.city,
            "Arrival_State":jsonCity2.state,
            "Arrival_Country":"USA",
            "Arrival_Airport":randomAirport2,
            "Ticket_Number":faker.random.alphaNumeric()+faker.random.number({'min': 3,'max': 500}),
            "Passager_Date_of_Birth": faker.date.past(),
            "Passager_Gender":faker.name.gender(),
            "Passager_Adult_Or_Child": "ADT",
            "Passager_Title": "Mr",
            "Passager_First_Name":faker.name.firstName(),
            "Passager_Middle_Name": faker.name.firstName(),
            "Passager_Last_Name":faker.name.lastName(),
            "Passager_Number":faker.random.number({'min': 2,'max': 50}),
            "Passager_Phone":faker.phone.phoneNumber(),
            "Passager_Loyalty_Number": faker.random.number()+faker.company.suffixes(),
            "Passager_Loyalty_Memebership_Since_Date": dateExp,
            "Passager_Loyalty_Level": randomLevel,
            "Passager_Passport_Number": faker.random.alphaNumeric()+faker.random.number()+faker.random.number()+faker.random.number()+faker.random.number(),
            "Passager_Passport_Country":"USA",
            "Passager_Passport_Expiration_Date":dateExp
         };
         arrayData.push(stringjson);
    }

    
       
   
    var textCsv = Papa.unparse(arrayData);

    fs.writeFile(nameFile, textCsv, (error) => {
        if (error) {
            throw error;
        }
        console.log('Create CSV file DONE!!');
    });


   
