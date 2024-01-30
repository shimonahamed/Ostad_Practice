//কোনো ফাইল ডিলিট করার প্রয়োজন হলে fs.unlink ব্যৱহাৰ করতে হবে
//ফাইলটি যদি synchronous পদ্ধতিতে ডিলিট কোর্ট হয় তাহলে fs.unlinksync  এবং function ব্যাবহার করতে হবে na

var fs = require('fs')
var http = require('http')
var server = http.createServer(function(req,res){

    if(req.url="/"){

    let error = fs.unlinkSync('deno.html')
            if(error){
                res.writeHead(200,{'Content-Type':'text.html'})
                res.write("File Unlink Fail")
                res.end()
            }
            else {
                res.writeHead(200, {'Content-Type': 'text.html'})
                res.write("File unlink Success")
                res.end()
            }
    }
})
server.listen(4017)
console.log("Server Run Successfull")