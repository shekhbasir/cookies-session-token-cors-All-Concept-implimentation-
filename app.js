const express=require('express');
const app=express();
const cors=require('cors');
const path=require('path');
const session=require('express-session');
const DbConnection=require('./config/Dbconnection');
const routesforall=require('./routes/authroutes');



app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors());


app.use(session({
  secret:"iamthefatherofalldeveloper",
  resave:false,
  saveUninitialized:false,
  cookie:{
    maxAge:60*60*60*24
  }
}))


app.use('/auth',routesforall);



const PORT=7000;

app.listen(PORT,()=>{
   DbConnection();
  console.log(`this is  the link http://localhost:${PORT}`);
})

