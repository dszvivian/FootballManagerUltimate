const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { url } = require('inspector');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}))

app.listen(port,() =>  console.log(`Listen on Port ${port}`));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_beers'
});

//select * from beers ;
app.get('', (req,res)=>{
    
    pool.getConnection((err , connection)=>{
        if(err) throw err;
        console.log(`Conneted as id ${pool.threadId}`)


        // query(sqlString)

        connection.query('SELECT * FROM beers', (err, results) => {
            if(!err){
                res.send(results);
            }else{
                console.log(err);
            }
        });

    })

})

app.get('/id', (req,res)=>{
    
    pool.getConnection((err , connection)=>{
        if(err) throw err;
        console.log(`Conneted as id ${pool.threadId}`)


        // query(sqlString)

        connection.query('SELECT * FROM beers where id=1', (err, results) => {
            if(!err){
                res.send(results);
            }else{
                console.log(err);
            }
        });

    })

})