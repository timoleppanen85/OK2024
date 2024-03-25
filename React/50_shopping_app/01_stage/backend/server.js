const express = require("express");
const mongoose = require("mongoose");
const shoppingRoute = require("./routes/shoppingroute");

let app = express();

app.use(express.json());

const mongo_url = process.env.MONGODB_URL;
const mongo_username = process.env.MONGODB_USERNAME;
const mongo_password = process.env.MONGODB_PASSWORD;

const url =
    "mongodb+srv://" +
    mongo_username +
    ":" +
    mongo_password +
    "@" +
    mongo_url +
    "/shopping?retryWrites=true&w=majority&appName=MyCluster0";

mongoose.connect(url).then(
    () => console.log("Connected to MongoDB"),
    (err) => console.log("Failed to connect to MongoDB. Reason: " + err)
);

app.use("/api", shoppingRoute);

app.listen(3000);

console.log("Running in port 3000");
