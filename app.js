const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var connection = require('./config');
//const roootdir= require('./util/path');
var authenticateController=require('./c/ca');

var registerController=require('./c/register-controller');
var loood=require('./c/contact');
var make=require('./c/after');


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/view')));
app.use(express.static(path.join(__dirname, 'c')));
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname +"/"+ 'front.html');
});
app.get('/aboutus', (req, res, next) => {
  res.sendFile(__dirname +"/" +'aboutus.html');
  });
app.get('/login', (req, res, next) => {
  res.sendFile(__dirname +"/" +'login.html');
  });
app.get('/signup', (req, res, next) => {
  res.sendFile(__dirname +"/" +'signup.html');
});
app.get('/contactus', (req, res, next) => {
    res.sendFile(__dirname +"/"+ 'contactus.html');
});

app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/lass',make.lass);


console.log(authenticateController);

app.post('/c/register-controller', registerController.register);
app.post('/c/ca', authenticateController.authenticate);
app.post('/c/after',make.lass);
app.post('/api/contact',loood.contactt);
app.post('/c/contact',loood.contactt);

//app.use((req, res, next) => {
  //  res.status(404).sendFile(__dirname +"/"+'untitled.html');
//});
app.listen(3069);



//anupam.1721me1054
//789456123