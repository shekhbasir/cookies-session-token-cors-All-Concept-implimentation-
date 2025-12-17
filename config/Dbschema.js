const express=require('express');
const mongoose=require('mongoose');

const HamarSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,

  },
})


const usedatabase=mongoose.model('kam',HamarSchema);
module.exports=usedatabase;
