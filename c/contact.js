var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
//const path = require('path');
// cryptr = new Cryptr('myTotalySecretKey');
module.exports.contactt=function(req,res){
  //var encryptedString = cryptr.encrypt(req.body.password);
    var contactus={
        "name":req.body.name,
      "email":req.body.email,
      "message":req.body.message
    }
    connection.query('INSERT INTO contactus SET ?',contactus, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query either the email id used already exist or some fields are empty'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
