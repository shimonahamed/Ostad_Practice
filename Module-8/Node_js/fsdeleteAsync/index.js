//কোনো ফাইল ডিলিট করার প্রয়োজন হলে fs.unlink ব্যৱহাৰ করতে হবে
//ফাইলটি যদি Asynchronous পদ্ধতিতে ডিলিট কোর্ট হয় তাহলে fs.unlink  এবং function ব্যাবহার করতে হবে

var fs = require('fs')
var http = require('http')
var server = http.createServer(function(req,res){

    if(req.url="/"){

        fs.unlink('demosync.txt',function (error){
            if(error){
                res.writeHead(200,{'Content-Type':'text.html'})
                res.write("File Unlink Fail")
                res.end()
            }
            else {
                res.writeHead(200,{'Content-Type':'text.html'})
                res.write("File unlink Success")
                res.end()
            }
        })
    }
})
server.listen(4014)
console.log("Server Run Success")