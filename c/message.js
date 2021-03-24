var express=require("express");
var connection = require('./../config');
module.exports.msg=function(req,res){
    var messg={
        "date":new Date().toISOString().slice(0, 19).replace('T', ' '),
        "sender":req.body.sender,
      "reciever":req.body.reciever,
      "message":req.body.message,
    }
    connection.query('INSERT INTO messages SET ?',messg, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query either the email id used already exist or some fields are empty'
        })
      }else{
        /*
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })*/
        //res.redirect("/messages.ejs");
        console.log("messages successfully");
        connection.query('SELECT sender,reciever,message,date FROM messages WHERE sender=? and reciever=? or reciever=? and sender=? ',[req.body.sender,req.body.reciever,req.body.sender,req.body.reciever],function (error,resuls,fields) {
            if (error) {
              console.log('ho gya bhai');
                res.json({
                  status:false,
                  message:'there are some error with query'
                  })}
                  else{
                    resuls.push({sendr:req.body.sender,recievr:req.body.reciever});
                      console.log(resuls);
                      res.render("messages.ejs",{data:resuls});
                  }
            }); 
      }
    });
}
