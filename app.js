const express =  require('express');
const bodyParser =  require('body-parser');
const { url } = require('inspector');
const path = require('path');
const mysql = require('./connection.js').con

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.set("view engine", "hbs");
app.set("views", "./view")
app.use(express.static(__dirname + "/css"))
app.use(express.static(__dirname + "/javascript"))
app.use(express.static(__dirname + "/resources"))

app.get('/', (req, res) =>{
    res.render("index")
})

app.get('/login', (req, res) =>{
    res.render('login')
});

app.get('/register', (req, res) =>{
    res.render('login')
});

app.get('/loginuser', (req, res) =>{
    const {email,password} = req.query;

    let qry = 'select * from users where email=? and password=?'

    mysql.query(qry,[email,password],(err, result) =>{
        if(err){
            res.render('login',{errlogin:true});
        }else{
            res.render('index',{sucessLogin:true})
        }
    });

});

app.get('/registeruser', (req, res) =>{
    const {username,email,password} = req.query;

    let qry = 'insert into users values(?,?,?)'

    mysql.query(qry, [username, email, password],(err,results)=>{
        if (err){
           res.render("login",{errRegister:true})
        }
        else{
            res.render("index", {sucessRegister:true});
        }
    });

});





app.get("/newmanager",(req,res)=>{
 
    
    res.render("newmanager")
})


app.get("/globalplayers",(req,res)=>{
 
    
    res.render("globalplayers")
})


app.listen(port,() =>  console.log(`Listen on Port ${port}`));




