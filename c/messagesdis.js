
var connection = require('./../config');

var data=[];
module.exports.disp=function(req,res){
  var field1=req.body.email;
  var field2=req.body.email2;
  console.log(field1);
  connection.query('SELECT sender,reciever,message,date FROM messages WHERE sender=? and reciever=? or reciever=? and sender=? ',[field1,field2,field1,field2],function (error,resuls,fields) {
    if (error) {
      console.log('ho gya bhai');
        res.json({
          status:false,
          message:'there are some error with query'
          })}
          else{
            resuls.push({sendr:req.body.email2,recievr:req.body.email});
              console.log(resuls);
              res.render("messages.ejs",{data:resuls});
          }
    }); 
  }