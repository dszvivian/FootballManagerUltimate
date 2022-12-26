const express =  require('express');
const bodyParser =  require('body-parser');
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
    database: 'footballmanagerdb'
});


// let btnRegister = document.getElementById("btnRegister");
// let btnLogin = document.getElementById("btnLogin");

// let registerUsername;
// let registerEmail;
// let registerPassword;


//select * from beers ;
// app.get('', (req,res)=>{
    
//     pool.getConnection((err , connection)=>{
//         if(err) throw err;
//         console.log(`Conneted as id ${pool.threadId}`)


//          query(sqlString)

//         connection.query('SELECT * FROM beers', (err, results) => {
//             if(!err){
//                 res.send(results);
//             }else{
//                 console.log(err);
//             }
//         });

//     })

// })

// app.get('/id', (req,res)=>{
    
//     pool.getConnection((err , connection)=>{
//         if(err) throw err;
//         console.log(`Conneted as id ${pool.threadId}`)


//          query(sqlString)

//         connection.query('SELECT * FROM beers where id=1', (err, results) => {
//             if(!err){
//                 res.send(results);
//             }else{
//                 console.log(err);
//             }
//         });

//     })

// })


// app.post('/', function(req, res){
    
//     pool.getConnection((err, connection)=>{

//         if(err) throw err;
//         console.log(`Conneted as id ${pool.threadId}`)

// query(sqlString)

//         connection.query('INSERT INTO `beers` (`id`, `name`, `tagline`, `description`, `image`) VALUES (NULL, "hello", "beer", "erw", "hhhh")' , (err,results)=>{
//             if(!err){
//                 res.send(results);
//             }else{
//                 console.log(err);
//             }
//         } )
//     })

// })


// post: new User 

// function addNewUser(username,email,password){

    app.post('/users', function(req, res){
        pool.getConnection((err, connection)=>{
                if(err) throw err;
                console.log(`Conneted as id ${pool.threadId}`)

                // query(sqlString)

                connection.query('INSERT INTO `users` (`username`, `email`, `password`) VALUES(username, email,password)',(err,result) => {
                    if(!err){
                        res.send(result);
                    }else{
                        console.log(err.message);
                    }

                })

        })

    })


// }

// addNewUser('dszvivian','dszvivian@gmail.com','dszvivian')





// btnRegister.addEventListener("click",() => {

//     registerUsername = document.getElementById("registerUsername").innerHTML;
//     registerEmail = document.getElementById("registerEmail").innerHTML;
//     registerPassword = document.getElementById("registerPassword").innerHTML;

//     if(registerEmail == "" || registerPassword == "" || registerUsername == ""){
//         alert("Please fill all the fields");
//         return;
//     }else{
//         addNewUser(registerUsername,registerEmail,registerPassword);
//     }

// })
