var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
//const path = require('path');
// cryptr = new Cryptr('myTotalySecretKey');
module.exports.register=function(req,res){
  var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "name":req.body.name,
      "gender":req.body.gender,
      "email":req.body.email,
      "branch":req.body.branch,
      "id":req.body.stdid,
      "number":req.body.number,
      "year":req.body.year,
      "field1":req.body.field1,
      "field2":req.body.field2,
      "password":encryptedString
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
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
        res.redirect("/login");
      }
    });
}
