//Response Redirect এর মাধ্যমে URL দিয়ে এক function কে কল করলে যে function এর সাথে লিংক করা থাকে সেই function এর Response পাওয়া যাই


var express=require('express')

app=express();

app.get("/one",function (req,res){
    res.send("This Is Simple String  Response")
})
app.get("/two",function (req,res) {
    res.status("400").end();
});
app.get("/three",function (req,res) {
    res.redirect("http://localhost:5060/four")
});
app.get("/four",function (req,res) {
    res.send("This is response four")
});




app.listen(5060,function (){
    console.log("Server Run Success")
})