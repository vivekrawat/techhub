
var Cryptr = require('cryptr');
const path = require('path');
cryptr = new Cryptr('myTotalySecretKey');
const rootDir = require('../util/path');
 
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
        console.log('ho gya bhai');
          res.jsson({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password!=decryptedString){
                res.json({
                    status:false,
                    message:'prease enter the correct credentials'
                })
            }else{
                message:"successfully autheticated"
                res.sendFile(path.join(rootDir,'new.html'));
            }
        }
       else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}
