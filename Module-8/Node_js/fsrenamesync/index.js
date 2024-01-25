var fs = require('fs')
var http = require('http')
var server = http.createServer(function(req,res){

    if(req.url="/"){

    let error=fs.renameSync('demoAsync.txt','synchronous.txt')
        if(error){
            res.writeHead(200,{'Content-Type':'text.html'})
            res.write("File Rename Fail")
            res.end()
        }
        else {
            res.writeHead(200,{'Content-Type':'text.html'})
            res.write("File Rename Success")
            res.end()
        }
}
})
server.listen(4013)
console.log("Server Run Success")