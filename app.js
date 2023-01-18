const express = require("express");
const bodyParser = require("body-parser");
const { url } = require("inspector");
const path = require("path");
const mysql = require("./connection.js").con;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", "./view");
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/javascript"));
app.use(express.static(__dirname + "/resources"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("login");
});

let uid = null;

app.get("/loginuser", (req, res) => {
  const { email, password } = req.query;


  let qry = "select * from users where uemail=? and upassword=?";

  mysql.query(qry, [email, password], (err, result) => {
    if (err) {
      res.render("login", { errlogin: true });
    } else {
      res.render("index", { sucessLogin: true });
      uid = result[0].uid;
    }
  });
});

app.get("/registeruser", (req, res) => {
  const { username, email, password } = req.query;


  let qry = "insert into users(username,uemail,upassword) values(?,?,?)";

  mysql.query(qry, [username, email, password], (err, results) => {
    if (err) {
      res.render("login", { errRegister: true });
    } else {
      res.render("index", { sucessRegister: true });

      let qry = "select * from users where username=?";

      mysql.query(qry, [username], (err, result) => {
        if (err) {
          res.render("login", { errlogin: true });
        } else {
          res.render("index", { sucessLogin: true });
          uid = result[0].uid;
        }
      });
    }
  });
});

app.get(`/newmanager`, (req, res) => {
  res.render("newmanager");
});

app.get(`/signcontract`, (req, res) => {
    
  res.render("signContract");
});

app.get(`/addnewplayers`, (req, res) => {
  res.render("addPlayer");
});

app.get(`/addnewplayertodb`, (req, res) => {
  const {pname, position, country, rating, image } = req.query;

  let qry = "insert into player values(?,?,?,?,?,?)";

  mysql.query(
    qry,
    [pid, pname, position, country, rating, image],
    (err, result) => {
      if (err) {
      } else {
        res.redirect("/globalplayers");
      }
    }
  );
});

let mid = null;

app.get("/managerinputs", (req, res) => {
  const { managername } = req.query;

  let qry = "insert into manager(mname,uid) values(?,?)";

  mysql.query(qry, [managername, uid], (err, result) => {
    if (err) {
      res.render("newmanager", { minputErr: true });
    } else {
      mysql.query(
        "select mid from manager where uid=?",
        [uid],
        (err, result) => {
          if (err) {
            console.log(err);
            res.render("login", { errlogin: true });
          } else {
            mid = result[0].mid;
            res.render("newManager", { sucessLogin: true });
          }
        }
      );
    }
  });
});

let clubid = null;

app.get("/clubinputs", (req, res) => {
  const { clubname, clubformation } = req.query;

  let qry = "insert into club(clubname,clubformation,mid) values(?,?,?)";

  mysql.query(qry, [clubname, clubformation, mid], (err, result) => {
    if (err) {
      console.log(err);
      res.render("newManager");
    } else {
      mysql.query(
        "select clubid from club where mid=?",
        [mid],
        (err, results) => {
          if (err) {
            console.log(err);
            res.render("newManager");
          } else {
            clubid = results[0].clubid;
            console.log(clubid);
            res.redirect("/teamformation");
          }
        }
      );
    }
  });
});

app.get(`/teamformation`, (req, res) => {
  let qry = "select * from clubformation where clubid=?";

  try {
    mysql.query(qry, [clubid], (err, result) => {
      console.log(result);
      res.render("teamFormation", { result: result });
    });
  } catch (err) {
    res.send(err);
  }
});

let pid = null;

app.get("/signnewplayer", (req, res) => {
    pid = Number(req.query.pid);

    let qry = `select * from player where pid=${pid}`;

    mysql.query(qry,[],(err,result)=>{
        
        res.render("signContract",{res:result})
        
    })
});

app.get("/deleteplayer", (req, res) => {
  const po = req.query.position;

  let qry = `UPDATE clubformation SET ${po}=null WHERE clubid=${clubid}`;

  mysql.query(qry, [], (err, result) => {
    console.log(result);
    res.redirect("/teamformation");
  });
});

// app.get('/signplayerwithpos',(req, res)=>{

//     const position = req.query.position;
//     console.log(`position: ${position}`);
//     console.log(pid);
//     console.log(clubid)

//     try{
//         let qry = `insert into clubformation(clubid,${position}) values(?,?)`;
//         mysql.query(qry,[clubid,pid],(err,result)=>{
//             res.redirect('/teamformation');
//         })
//     }
//     catch(err){

//         let qry = `UPDATE clubformation SET ${position}=${pid} WHERE clubid=${clubid}`;

//         mysql.query(qry,[],(err,result)=>{
//             res.redirect('/teamformation');
//         })

//         if(err){
//             console.log(err);
//         }

//     }

// });

app.get("/allplayersApi",(req, res)=>{
   
    let qry = 'select * from player';

    mysql.query(qry,[],(err,result)=>{
        res.json(result);
    })
    
});

app.get("/signplayerwithpos", (req, res) => {
  const position = req.query.position;

  let qry = `insert into clubformation(clubid,${position}) values(?,?)`;

  mysql.query(qry, [clubid, pid], (err, result) => {
    if (err) {
      console.log(err);

      let qry = `UPDATE clubformation SET ${position}=${pid} WHERE clubid=${clubid}`;

      mysql.query(qry, [], (err, result) => {
        if (err) throw err;
        else {
          res.redirect("/teamformation");
        }
      });
    } else {
      res.redirect("/teamformation");
    }
  });
});


app.get("/globalplayers", (req, res) => {
  let qry = `select * from player`;

  mysql.query(qry, [clubid, pid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.render("globalplayers", { res: result });
    }
  });
});

app.get("/myteam", (req, res) => {

  let qry = `select mid from manager where uid=${uid};`;

  mysql.query(qry, [],(err, result) => {

    if(err){
      console.log(err);
    }else{
      console.log(`uid: ${uid}`);    
      console.log(`mid: ${result[0]["mid"]}`);   
      mid = result[0]["mid"];
      let qry = `select clubid from club where mid=${mid}`;

      mysql.query(qry, [],(err, result) =>{
        if(err){
          console.log(err);
        }else{
          console.log(`clubid: ${result[0]["clubid"]}`);   
          clubid = result[0]["clubid"];

          res.redirect("/teamformation");
        }
      });

      

    }

  })


})



app.listen(port, () => console.log(`Listen on Port ${port}`));
