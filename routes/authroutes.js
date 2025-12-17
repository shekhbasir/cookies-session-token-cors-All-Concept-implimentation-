const express=require('express');
const routesforall=express.Router();
const {hamarsignup,hamarlogin}=require('../controllers/authcontroller');
const {isvalidtoken,bysessioncheck}=require('../controllers/isauth');
const usedatabase=require('../config/Dbschema')

routesforall.post('/signup',hamarsignup);
routesforall.post('/login',hamarlogin)
routesforall.get('/home',bysessioncheck,async(req,res)=>{

  //here i am going to finding the some information
  try {
    const sabdata=req.session.userid;

  const sabdetail=await usedatabase.findById(sabdata);

  if(!sabdetail){
    return res.status(500).json({message:"No Data Infoo Found Here ",success:false})
  }




  return res.status(200).json({message:"i am the father of all develper ",success:true,userinfo:sabdata,sarainfo:sabdetail});
  } catch (error) {
     return res.status(500).json({message:"error from the home  routes  ",success:false})
  }
})


module.exports=routesforall;

//now i am going to  see the details also