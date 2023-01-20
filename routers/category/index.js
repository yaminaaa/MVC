const express = require('express');
const router = express.Router();

const controller = require('../../controllers/category');

// define the about route
router.get('/:categoryName', controller.show);

module.exports = router;