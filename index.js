const express = require("express");
const urlRoute = require("./routes/urlRoute");
const PORT = 3000;
const app = express();

app.use('/url', urlRoute);

app.listen(PORT, ()=> {
    console.log(`Running at port ${PORT}`);
});