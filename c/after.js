
var connection = require('./../config');

var data=[];
module.exports.lass=function(req,res){
  var field=req.body.field;
  //console.log(req.body.email);
  connection.query('SELECT name,email,year,branch,number FROM users WHERE field1=? or field2=?',[field,field] ,function (error, resuls, fields) {
    if (error) {
      console.log('ho gya bhai');
        res.json({
          status:false,
          message:'there are some error with query'
          })}
          else{
            resuls.push({useremail:req.body.email});
              console.log(resuls);
              res.render("list.ejs",{data:resuls});
          }

    });

    
  }

