var fs = require('fs');

var http = require('http')

var server=http.createServer(function (req,res){

    if (req.url="/"){
        let mydata=fs.readFileSync('home.html')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(mydata)
        res.end();
    }

})
server.listen(4001)
console.log("Server Runimg Success.")