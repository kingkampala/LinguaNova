const express = require('express');
const router = express.Router();
const { translateText } = require('../controller/translate');

router.post('/', translateText);

module.exports = router;
