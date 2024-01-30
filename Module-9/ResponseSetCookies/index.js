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
app.get("/three",function (req,res){
    res.append('name','JIbon')
    res.append('city','Bogura')
    res.append('age','19 Years Old')
    res.status(201).end("This Is Header Page")

})
app.get("/four",function (req,res){
    res.cookie('name','Shimon')
    res.cookie('city','Bogura')
    res.cookie('age','18 Years Old')
    res.status(401).end("This Is Cookie Body")

})
app.listen(101,function (){
    console.log("Server Run Success")
})

