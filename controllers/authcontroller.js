const usedatabase = require('../config/Dbschema');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const session=require('express-session');
const hamarsignup = async (req, res) => {
  try {

    // console.log("REQ BODY:", req.body);

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username or password missing",
        success: false
      });
    }

    const emailbaa = await usedatabase.findOne({ username });

    if (emailbaa) {
      return res.status(400).json({
        message: "Email Id Already Exist",
        success: false
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newData = await usedatabase.create({
      username: username,
      password: hashpassword
    });

    return res.status(200).json({
      message: "You Signup Successfully",
      success: true,
      saradata: newData
    });

  } catch (error) {
    return res.status(500).json({
      message: "error from the signup page",
      success: false,
      reason: error.message
    });
  }
};

const hamarlogin=async(req,res)=>{ 

  try {
    const {username,password}=req.body;

    if(!username || !password){
      return res.status(400).json({message:"something is Missing ",success:false});
    }

    const emailbaa=await usedatabase.findOne({username});
    if(!emailbaa){
      return res.status(404).json({message:"email not found",success:false});
    }

    const ismatch=await bcrypt.compare(password,emailbaa.password);

    if(!ismatch){
      return res.status(500).json({message:"password not found",success:false});
    }

    //after joining the 
    req.session.islogin=true;
    req.session.userid=emailbaa._id;

    const token=jwt.sign({userid:emailbaa._id},"iamthefatherofalldeveleper",{expiresIn:"2d"});

    //now here i am going to use the session and saving some infoemration for 
    

    //now here i am going to seting the cookies simply ....
    


    return res.status(200).json({message:"You Login Successfully ...",success:true,hamartoken:token});
  } catch (error) {
     return res.status(500).json({message:"errorr from the login the page ",success:false});
  }
}


module.exports = {hamarsignup,hamarlogin};

//now i am going to varify this by making the controler 