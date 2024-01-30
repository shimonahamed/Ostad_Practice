//Express js Routing হলো আলাদা আলাদা Url Path দেওয়ার পদ্ধতি কে বলা হয় Routing

var express=require('express')

app=express();

app.get("/",function (req,res){
    res.send("This Is Home Page")
})
app.get("/one",function (req,res){
    res.send("This Is Response page One")
})
app.get("/two",function (req,res){
    res.send("This Is Response Page Two")
})

app.get("/four",function (req,res){
    res.cookie('name','Shimon')
    res.cookie('city','Bogura')
    res.cookie('age','18 Years Old')
    res.status(401).end("This Is Cookie Body")

})
app.get("/five",function (req,res){
    res.clearCookie('name')
    res.clearCookie('age')
    res.status(405).end("This Is ClearCookie Body")

})
app.listen(102,function (){
    console.log("Server Run Success")
})

