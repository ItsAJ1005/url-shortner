const mongoose = require("mongoose");

async function connectToMongoDb(url){
    return mongoose.connect(url)
    .then(()=> {console.log("MongoDb connected!")}).catch((err)=> {
        console.log("Error in connecting to MongoDB: ", err);
    });
}

module.exports = connectToMongoDb;