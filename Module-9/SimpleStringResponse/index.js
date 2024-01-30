
var express=require('express')

app=express();

app.get("/one",function (req,res){
    res.send("This Is Simple String  Response")
})
app.post("/two",function (req,res) {
    res.send("This Is Simple string Response Two")
});
app.listen(5055,function (){
    console.log("Server Run Success")
})