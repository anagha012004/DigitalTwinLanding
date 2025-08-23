const express = require("express")
const app = express();
const mongoose = require("mongoose");
const connectToMongo = require("./db");
connectToMongo();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hello world I am root");

});

app.listen(PORT, () => {
    console.log(`Digital Twin Backend listening at http://localhost:${PORT}`);
});
