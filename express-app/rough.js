const e =require("express");
var express =require("express");
var router = express.Router();

const credential={
   email:"har@gmailcom",
   password:"har123"
}

router.post('/login',(req,res)=>{
   if(req.body.email == credential.email && req.body.password == credential.password){
      req.session.user=req.body.email;
      //res.redirect('/dashboard');
      res.end("Login Sucessfull...!");
   }else{
    res.end("Invalid Username")
   }
});

module.exports = router;