const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsMysqlDb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
  if(!err)
     console.log('DB Connection succeeded.');
   else 
     console.log('DB connection fialed \n : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mysqlConnection;
