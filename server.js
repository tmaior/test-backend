require('dotenv').config();

const { Pool } = require('pg');
var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var config = {
    user: process.env.PSQL_USER, 
    database: process.env.PSQL_DATABASE, 
    password: process.env.PSQL_PASSWORD, 
    host: process.env.PSQL_HOST, 
    port: process.env.PSQL_PORT, 
};
const conn = new Pool(config);

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-auth-token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

conn.connect((err)=>{
	
	if(err) throw err;
	console.log("Psql connected successfully");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', function (req, res) {

let dd = [
  req.body.name,
  req.body.age,
  req.body.address,
  req.body.salary,
  req.body.join_date
]
  console.log(req.body);

let sql = `INSERT INTO COMPANY(name, age, address, salary, join_date) VALUES ($1, $2, $3, $4, $5)`;
console.log(sql)


 conn.query(sql, dd, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({"status": 200,"error": null,"response": results}));

  });
});

app.get('/showall',  function (req, res) {

  //console.log(req.body);
  let sql = "SELECT * FROM COMPANY";
  let query = conn.query(sql, (err, results) => {

    if (err) throw err;
    console.log(JSON.stringify(results));
    res.json({ results:results });
  })
})

app.delete('/delete',function (req, res) {
  let data = { id: req.body.id };
  
  let sql = "DELETE FROM COMPANY WHERE id = ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    console.log(data);
    res.send({ "output": data.id });
  })
});

app.put('/update',function (req, res) {

  let data = [req.body.first_name, req.body.last_name, req.body.email, req.body.mobile, req.body.id];
  //console.log(req.body);
  let sql = "UPDATE register SET first_name = ?,last_name = ?, email = ?, mobile = ? WHERE id=?";
  let query = conn.query(sql, data, (err, results, fields) => {

    if (err) throw err;
    console.log(data);
    res.end(JSON.stringify(results));
  })
});

app.listen(process.env.PORT || 4000);
