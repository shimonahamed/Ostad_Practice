//fs Module এর মাধ্যমে আমরা যেকোনো ফাইল কে রিড করতে পারি। fs মডিউলে যদি Asynchronous পদ্ধতিতে ফাইল কে রিড করতে হলে 
//fs মডিউলে থেকে fs.readFail মেথড ব্যবহার করতে হবে।

var fs = require('fs');
var http = require('http')
var server=http.createServer(function (req,res){

    if (req.url="/"){
        fs.readFile('home.html',function (error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end();
        })
    }

})
server.listen(4050)
console.log("Server Run Success.")
