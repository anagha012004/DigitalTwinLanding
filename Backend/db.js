const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/digital-twin";

const connectToMongo = () => {
    mongoose.connect(mongoURL).then(() => {
        console.log("Connected to MongoDB")
    }).catch((e) => {
        console.log("Error: ", e)
    })

}

module.exports = connectToMongo;