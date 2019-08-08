const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let User = require('./models/user');
mongoose.connect('mongodb://localhost/cdac',{useNewUrlParser:true});
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send("Hello world")
});
app.get('/register', (req,res) => {
    res.send('Register page');
})

app.post('/register', (req,res) => {
    let username = req.body.username,
        password = req.body.password;    
    let user = new User({
        username:username,
        password:password
    });
    User.create(user,(err,user) => {
        
        if(err){
            console.log(err)
            return;
        }
        user.save();

    });
    res.send("Registered");
});
app.get('/login',(req,res) => {
    res.send("Login here");
})

app.post('/login',(req,res) => {
    let username = req.body.username,
        password = req.body.password;
    User.find({username:username},(err,user) => {
        if(err){
            console.log(err);
            return;
        }
        if(user.username == username && user.password == password){
            res.json({success:'login Successful'});
        } else {
            res.json({error:'Username and password do not match'})
        }
    })
})
const port = process.env.PORT || 3000
app.listen(port, "127.0.0.1", () => {
    console.log("Server started ...")
})

