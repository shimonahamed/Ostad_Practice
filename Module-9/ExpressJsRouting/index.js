//Express js Routing হলো আলাদা আলাদা Url Path দেওয়ার পদ্ধতি কে বলা হয় Routing

var express=require('express')

app=express();

app.get("/",function (req,res){
    res.send("This Is Home Page")
})
app.get("/contact",function (req,res){
    res.send("This Is contact Page")
})
app.get("/About",function (req,res){
    res.send("This Is About Page")
})
app.get("/Services",function (req,res){
    res.send("This Is Services Page")
})
app.listen(58,function (){
    console.log("Server Run Success")
})

