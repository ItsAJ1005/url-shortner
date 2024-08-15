const express = require("express");
const urlRoute = require("./routes/urlRoute");
const connectToMongoDb = require("./config/connection");
const PORT = 3000;
const app = express();

connectToMongoDb('mongodb://127.0.0.1:27017/shorten-url');

app.use('/url', urlRoute);

app.listen(PORT, ()=> {
    console.log(`Running at port ${PORT}`);
});