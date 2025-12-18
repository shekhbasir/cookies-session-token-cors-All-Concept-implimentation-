const jwt = require('jsonwebtoken');
const session=require('express-session');
const isvalidtoken = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Please login first",
      success: false
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      "iamthefatherofalldeveleper"
    );

    req.userid = decoded.userid;
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false
    });
  }
};




const bysessioncheck=(req,res,next)=>{
  
  if(!req.session || !req.session.islogin){
    return res.status(500).json({message:"go and Login First ",success:true});
  }

  const sarakam=req.session.userid;
  next();
}






module.exports = {isvalidtoken,bysessioncheck};
