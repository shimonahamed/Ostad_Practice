
const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200)
    res.write('Hello I"am Server');
    res.end();
    
}).listen(5000)
console.log("Servar Run Success")