//Response status code এর মাধ্যমে Response code নিজের ইচ্ছা মতো দেওয়া যাই এটি ব্যবহার করার নিয়ম নিচে দেওয়া হলো


var express=require('express')

app=express();

app.get("/one",function (req,res){
    res.send("This Is Simple String  Response")
})
app.post("/two",function (req,res) {
    res.send("This Is Simple string Response Two")
});
app.get("/three",function (req,res) {
    res.status("400").end();
});
app.listen(5050,function (){
    console.log("Server Run Success")
})