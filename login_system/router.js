const e =require("express");
var express =require("express");
var router = express.Router();

const credential= {
   email:"har@gmail.com",
   password:"har123"
}

router.post('/login',(req,res)=>{
   if(req.body.email == credential.email && req.body.password == credential.password){
      req.session.user = req.body.email;
      res.redirect('/route/dashboard');
      //res.end("Login Sucessfull Harsha...!");
   }else{
    res.end("Invalid Username")
   }
});

router.get('/dashboard',(req,res)=>{
   if(req.session.user){
      res.render('dashboard',{user:req.session.user})
   }else{
      res.send('Unauthorize User')
   }
})

router.get('/logout',(req,res)=>{
   req.session.destroy(function(err){
    if(err){
      console.log(err);
      res.end("Error")
      }else{
         res.render('base',{title:"Express",logout:"logout Sucessfully Harsha"})
      }
     })
   })


module.exports = router;