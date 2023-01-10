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


let uid = null;

app.get('/loginuser', (req, res) =>{
    const {email,password} = req.query;

    let qry = 'select * from users where uemail=? and upassword=?'
    
    mysql.query(qry,[email,password],(err, result) =>{
        if(err){
            res.render('login',{errlogin:true});
        }else{
            res.render('index',{sucessLogin:true})
            uid = result[0].uid;
        }
    });

});

app.get('/registeruser', (req, res) =>{
    const {username,email,password} = req.query;

    let qry = 'insert into users(username,uemail,upassword) values(?,?,?)'

    mysql.query(qry, [username, email, password],(err,results)=>{
        if (err){
           res.render("login",{errRegister:true})
        }
        else{
            res.render("index", {sucessRegister:true});

            let qry = 'select * from users where username=?'
    
            mysql.query(qry,[username],(err, result) =>{
            if(err){
                res.render('login',{errlogin:true});
            }else{
                res.render('index',{sucessLogin:true})
                uid = result[0].uid;
            }
    });

        }
    });

});

app.get(`/newmanager`,(req,res)=>{
    res.render("newmanager")
})

app.get(`/teamformation`,(req,res)=>{
    res.render("teamFormation")
})

app.get(`/signcontract`,(req,res)=>{
    res.render("signContract")
})


let mid = null;

app.get("/managerinputs",(req,res)=>{
    const {managername} = req.query;

    let qry = "insert into manager(mname,uid) values(?,?)"
    
    mysql.query(qry,[managername,uid],(err,result)=>{
        if(err){
            res.render('newmanager',{minputErr:true})
        }else{

            mysql.query("select mid from manager where uid=?",[uid],(err, result) =>{
                if(err){
                    console.log(err);
                    res.render('login',{errlogin:true});
                }else{
                    
                    mid = result[0].mid;
                    res.render('newManager',{sucessLogin:true})
                }})
        }
    });


})

let clubid = null;

app.get('/clubinputs',(req, res)=>{

    const {clubname,clubformation} = req.query;
 
    let qry = "insert into club(clubname,clubformation,mid) values(?,?,?)"
    
    mysql.query(qry,[clubname,clubformation,mid],(err,result)=>{
        if(err){
            console.log(err);
            res.render('newManager')
        }else{

            mysql.query("select clubid from club where mid=?",[mid],(err, results) =>{
            if(err){
                console.log(err);
                res.render('newManager');
            }else{
               
                clubid = results[0].clubid;
                console.log(clubid)
                res.render('teamFormation')
            }})

        }
    });
   

})

let pid = null;

app.get('/signnewplayer',(req, res)=>{
    pid = req.query.pid;
    console.log(pid)
    res.render('signContract');
})

app.get('/signplayerwithpos',(req, res)=>{
    
    const position = req.query;
 
    let qry = "insert into club(clubname,clubformation,mid) values(?,?,?)"
    
    mysql.query(qry,[clubname,clubformation,mid],(err,result)=>{
        if(err){
            console.log(err);
            res.render('newManager')
        }else{


        }
    });


})




app.get("/globalplayers",(req,res)=>{
    res.render("globalplayers")
})


app.listen(port,() =>  console.log(`Listen on Port ${port}`));




