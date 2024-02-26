const express = require("express");

let app = express();

app.use(express.json());

app.use(function (req, res, next) {
    console.log("Hi, I am a filter");
    return next();
})


// Database

let database = [];
let id = 100;

/*
Data model

{
    "type":string,
    "count":number,
    "price":number,
    "id":number
}
*/

/*
REST API
    GET - /api/shopping
    POST - /api/shopping
    DELETE - /api/shopping/:id
    PUT - /api/shopping/:id
*/

app.get("/api/shopping", function (req, res) {
    return res.status(200).json(database);
});

app.listen(3000);

console.log("Running in port 3000");