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
    router.delete('/:id', (req, res) => {
      let sql = 'DELETE FROM employeetbl WHERE empId = ?';
        mysqlConnection.query(sql, [req.params.id], (err, rows, fields) => {
              if(!err)
               // console.log(rows);
                 res.send('dELETED successfully');
              else
                console.log(err);
           })
    });
    
    
        //add employee 
    router.post('/', (req, res) => {
        let employees = req.body;
        let sql = `INSERT INTO employeetbl (name, contact, email, address) VALUES(?, ?, ?, ?)`;
        mysqlConnection.query(sql, [employees.name, employees.contact, employees.email, employees.address], 
         (err, rows, fields) => {
              if(!err)
               // console.log(rows);
                 res.send(rows);
              else
                console.log(err);
        })
    });
    
        //update employee 
        router.put('/:id', (req, res) => {
          let id = req.params.id;
          let employees = req.body;
          let sql = `UPDATE employeetbl 
                     SET name=?, contact=?, email=?, address=?
                     WHERE empId=?`;
          let data = [employees.name, employees.contact, employees.email, employees.address, id];
          mysqlConnection.query(sql, data, (err, rows, fields) => {
                if(!err)
                 // console.log(rows);
                   res.send(rows);
                else
                  console.log(err);
          })
      });

  module.exports = router;