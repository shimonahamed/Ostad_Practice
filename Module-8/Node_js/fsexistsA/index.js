var fs =require('fs')
var http =require('http')

var server=http.createServer(function(req,res){

    if(req.url="/"){
        fs.exists("index.txt",function(result){
            if(result){
                res.end("true")
            }
            else{
                res.end("false")
            }
        })

    }

})
server.listen(404)
console.log("server run success..")