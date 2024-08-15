const express = require("express");
const { genNewShortenUrl } = require('../controllers/urlController');
const router = express.Router();

router.post('/', genNewShortenUrl);

module.exports = router;