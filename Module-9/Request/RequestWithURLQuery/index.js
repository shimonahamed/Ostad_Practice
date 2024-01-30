var express=require('express')
const {query} = require("express");

app=express();

app.get('/',function (req,res){
    let firstName=req.query.firstName;
    let lastName=req.query.lastName;

    res.end(firstName+"  "+lastName)
})
app.listen(405,function (){
    console.log("Server Run Success")
})