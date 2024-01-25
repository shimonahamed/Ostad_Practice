var fs = require('fs')
var http = require('http')

var server= http.createServer(function (req,res){
    let error= fs.writeFileSync('deno.txt','wellcome to Fs Module synchronous')
    if(error){
        res.writeHead(200, {'Content-Type':'text,html'})
        res.write("File Write Fail")
        res.end()
    }
    else {
        res.writeHead(200, {'Content-Type':'text.html'})
        res.write("File Write Successfull")
        res.end()
    }

})
server.listen(4002)
console.log("server run success")