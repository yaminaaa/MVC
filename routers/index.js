const express = require('express');
const router = express.Router();

const homeRouter = require('./home');
const productRouter = require('./product');
const categoryRouter = require('./category');

// define the home page route
router.use(homeRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);

// define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds');
// });

module.exports = router;