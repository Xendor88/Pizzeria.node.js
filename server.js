const express = require('express')
const bodyParser = require('body-parser');
const registerController = require('./utils/registercontroller')
const app = express();

app.use(bodyParser.json());
registerController(app, __dirname);

app.listen(3000, function () {
  console.log('¡Puerto 3000 abierto!');
})
