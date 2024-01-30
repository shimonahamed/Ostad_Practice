

var express=require('express')

app=express();

app.post("/two",function (req,res) {
    res.send("This Is Simple string Response Two")
});
app.get("/three",function (req,res) {
    res.status("400").end();
});
app.get("/four",function (req,res) {
    res.download("./img/jibon.jpg");
});


app.listen(5058,function (){
    console.log("Server Run Success")
})