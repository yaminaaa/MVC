const express = require('express');
const router = express.Router();

const controller = require('../../controllers/product');

// define the about route
router.get('/:productName', controller.show);

module.exports = router;