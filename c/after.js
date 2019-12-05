var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
const path = require('path');
var data=[];
module.exports.lass=function(req,res){
  var field=req.body.field;
  connection.query('SELECT email FROM users WHERE field1 = ?',[field], function (error, resuls, fields) {
    for(i=0;i<resuls.length;i++)
    {
      data.push(resuls[i]);
    }
    console.log(resuls);
    });

    connection.query('SELECT email FROM users WHERE field2 = ?',[field], function (error, results, fields) {
      for(i=0;i<results.length;i++)
      {
        data.push(results[i]);
      }
      console.log(results);
    });
   //console.log(data);

   data=[];
  }

