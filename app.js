var express=require('express');
var bodyParser=require('body-parser');
var Cryptr=require('cryptr');
var connection=require('./config');
var authenticateController=require('./c/ca');

var registerController=require('./c/register-controller');

var make=require('./c/after');
var messagess=require('./c/messagesdis');
var msgg=require('./c/message');
var url=require('url');
var app=express();
var connection=require('./config');
app.use('/public',express.static('public'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
});
app.get('/login',function(req,res){
    res.render(__dirname+'/views/login');
});
app.get('/about',function(req,res){
    res.render(__dirname+'/views/About');
});
app.get('/signup',function(req,res){
    res.render(__dirname+'/views/signup');
});
app.get('/form',function(req,res){
    res.render(__dirname+'/views/form');
});
app.get('/profile/:emaill',function(req,res)
{   
    var sql='';
    connection.query('SELECT * FROM users WHERE email=?',[req.params.emaill],function(err,result){
        if(!err){
            res.render(__dirname+'/views/profile2',{data:result[0]});
        }
    });
});

app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/lass',make.lass);
app.post('/api/disp',messagess.disp);
app.post('/api/msg',msgg.msg);
console.log(authenticateController);
app.post('/c/register-controller', registerController.register);
app.post('/c/ca', authenticateController.authenticate);
app.post('/c/after',make.lass);
app.post('/c/messagesdis',messagess.disp);
app.post('/c/message',msgg.msg);
app.listen(2001,function(){
    console.log('running');
});