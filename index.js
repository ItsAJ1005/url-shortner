const express = require("express");
const path = require('path');
const connectToMongoDb = require("./config/connection");
const URL = require("./models/urlModel");
const PORT = 3000;
const app = express();

connectToMongoDb('mongodb://127.0.0.1:27017/shorten-url');

const urlRoute = require("./routes/urlRoute");
const staticRouter = require('./routes/saticRouter');
const userRoute = require("./routes/user")

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/url', urlRoute);
app.use('/', staticRouter);
app.use('/user', userRoute);

// app.get('/test', async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render("home", {
//         urls: allUrls,
//     })
// })

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