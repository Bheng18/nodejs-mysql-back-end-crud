const express = require('express');
// var http = require('http');
// var morgan = require('morgan');
var app = express();
const bodyParser = require('body-parser');
// const { getAllEmployeeRoute, getOneEmployeeRoute, postEmployeeRoute, deleteEmployeeRoute, updateEmployeeRoute } = require('./src/routes/employeeRouter')
const getEmployeeRoute = require('./src/routes/employeeRouter')

// const cors = require('cors');
// var data = require('./public/data');

//configurration of body parser
// app.use(cors());
// app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(function (req, res, next) {
//   console.log('Global middleware here.');
//   next();
// });

var PORT = 3000;

//router
app.use('/', getEmployeeRoute);

app.listen(PORT, console.log(`connected in port ${PORT}`));

