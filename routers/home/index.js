const express = require('express');
const router = express.Router();

const controller = require('../../controllers/home');

// define the about route
router.get('/', controller.homepage);

module.exports = router;