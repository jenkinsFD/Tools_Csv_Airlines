# Tools_Csv_Airlines
Make file CSV for Airlines
Genera un archivo CSV para pruebas unitarias

-----Ejecucion------ node index.js

----- Dependencias ----- const faker = require('faker'); const fs = require('fs'); const Papa = require('papaparse'); var usaCities = require('./USCities3.js');

----JSON Data -----

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

Referencia de los metodos dispobibles https://marak.github.io/faker.js/#toc7__anchor
