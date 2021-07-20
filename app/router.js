// Express + router
const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

// home page
router.get('/', mainController.homePage);

module.exports = router;