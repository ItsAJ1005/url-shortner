const express = require("express");
const  {genNewShortenUrl, getAnalytics}  = require('../controllers/urlController');
const router = express.Router();

router.post('/', genNewShortenUrl);

router.get("/analytics/:shortId", getAnalytics)

module.exports = router;