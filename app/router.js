// Express + router
const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

// home page
router.get('/', mainController.homePage);

// icons pages
router.get('/scissors', mainController.scissorsPage);
router.get('/spock', mainController.spockPage);
router.get('/paper', mainController.paperPage);
router.get('/lizard', mainController.lizardPage);
router.get('/rock', mainController.rockPage);

module.exports = router;