var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req,res){
    if(req.url="/"){
        fs.writeFile("demo.txt","Wellcome to Node Js" ,function (error){
            if (error){
                res.writeHead(200,{'Content-Type':'text.html'})
                res.write("File Write Fall")
                res.end();
            }
            else {
                res.writeHead(200,{'Content-Type':'text.html'})
                res.write("File Write Success")
                res.end()
            }
        })
    }
})
server.listen(4001)
console.log("server run success")