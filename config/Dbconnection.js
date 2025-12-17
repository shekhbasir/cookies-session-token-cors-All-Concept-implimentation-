
const express=require('express');
const mongoose=require('mongoose');


 const DbConnection=async()=>{
  try{

    const kam=await mongoose.connect( "mongodb+srv://Basir:Basir@cluster0.tdy5uue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    if(!kam){
      console.log("Data base Not Connected ");

    }
    console.log("Data Base Connected Successfully ...")
  }catch(error){

    console.log("errror from the Data abse Connection ",error.message);

  }
 }

 module.exports=DbConnection;

//  lets i am going to wrting the code for the  signup wi the file uploading  of the cod e
