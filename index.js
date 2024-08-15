const express = require("express");
const urlRoute = require("./routes/urlRoute");
const connectToMongoDb = require("./config/connection");
const URL = require("./models/urlModel");
const PORT = 3000;
const app = express();

connectToMongoDb('mongodb://127.0.0.1:27017/shorten-url');

app.use(express.json());

app.use('/url', urlRoute);

app.use("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory: { timestamp: Date.now() },
    }});

    if (entry && entry.redirectId) {
        res.redirect(entry.redirectId);
    } else {
        console.error('Entry not found or redirectId is missing.');
        res.status(404).send('Entry not found');
    }
    
})

app.listen(PORT, ()=> {
    console.log(`Running at port ${PORT}`);
});