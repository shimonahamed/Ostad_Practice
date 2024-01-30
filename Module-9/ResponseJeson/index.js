//Response Json এর মাধ্যমে request পাঠানোর পর আমরা পুরো একটি Json Arry পাওয়া যাই

var express=require('express')

app=express();

app.post("/two",function (req,res) {
    res.send("This Is Simple string Response Two")
});
app.get("/three",function (req,res) {
    res.status("400").end();
});
app.get("/four",function (req,res) {
    let myArray=[
        {
            Name:"Jibon",
            city:"Bogura",
            occu:"Students"
        },
        {
            Name:"Shimon",
            city:"Bogura",
            occu:"learner"
        },
        {
            Name:"sm",
            city:"Bogura",
            occu:"Students"
        }
    ]

    res.json(myArray);
});
app.listen(5051,function (){
    console.log("Server Run Success")
})