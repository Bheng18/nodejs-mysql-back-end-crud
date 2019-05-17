const express = require('express');
const router = express.Router(); //eslint-disable-line
const mysqlConnection = require('../../config/config');

//get all employee
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM employeetbl';
    mysqlConnection.query(sql, (err, rows, fields) => {
        if(!err)
         // console.log(rows);
           res.send(rows);
        else
          console.log(err);
     })
  });

  //get employee id
router.get('/:id', (req, res) => {
    let sql = 'SELECT * FROM employeetbl WHERE empId = ?';
    mysqlConnection.query(sql, [req.params.id], (err, rows, fields) => {
          if(!err)
            //console.log(rows);
             res.send(rows);
          else
            console.log(err);
       })
    });
    
    // //delete employee id
    router.delete('/delete/:id', (req, res) => {
      let sql = 'DELETE FROM employeetbl WHERE empId = ?';
        mysqlConnection.query(sql, req.params.id, (err, rows, fields) => {
              if(!err){
                //  console.log(rows);
                 res.json('dELETED successfully'); //res.send() nag error siya
              }else{
                console.log(err);
              }
           });
    });
    
    
        //add employee 
    router.post('/add', (req, res) => {
        let employees = req.body;
        let sql = `INSERT INTO employeetbl (fullName, email, mobile, city, gender, department, hireDate, isPermanent) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
        mysqlConnection.query(sql, 
          [employees.fullName, employees.email, employees.mobile, employees.city, employees.gender, employees.department, employees.hireDate, employees.isPermanent], 
         (err, rows, fields) => {
              if(!err)
               // console.log(rows);
                 res.send(rows);
              else
                console.log(err);
        })
    });
    
        //update employee 
        router.put('/update/:id', (req, res) => {
          let id = req.params.id;
          let employees = req.body;
          let sql = `UPDATE employeetbl 
                     SET fullName=?, email=?, mobile=?, city=?, gender=?, department=?, hireDate=?, isPermanent=?
                     WHERE empId=?`;
          let data = [employees.fullName, employees.email, employees.mobile, employees.city, employees.gender, employees.department, employees.hireDate, employees.isPermanent, id];
          mysqlConnection.query(sql, data, (err, rows, fields) => {
                if(!err)
                 // console.log(rows);
                   res.send(rows);
                else
                  console.log(err);
          })
      });

  module.exports = router;