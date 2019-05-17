const express = require('express');
const router = express.Router(); //eslint-disable-line
const mysqlConnection = require('../../config/config');

//get all employee
// router.get('/', (req, res) => {
//     let sql = 'SELECT * FROM employeetbl';
//     mysqlConnection.query(sql, (err, rows, fields) => {
//         if(!err)
//          // console.log(rows);
//            res.send(rows);
//         else
//           console.log(err);
//      })
//   });

  router.post('/:m/:p', (req, res) => {
      
      console.log(req.body)
    //   solution(req.params);
    //  res.send(result);
  });

var solution = (m, p) => {
    let money = m;
    let price = p;
    let resultChange = money - price;
    return resultChange;
}

  module.exports = router;