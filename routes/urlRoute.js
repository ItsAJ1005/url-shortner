const express = require("express");
const { genNewShortenUrl } = require('../controllers/url');
const router = express.Router();

router.post('/', genNewShortenUrl);

module.exports = router;