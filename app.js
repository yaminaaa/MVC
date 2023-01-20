const express = require('express');
const app = express();
const port = 3000;

const router = require('./routers');

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});