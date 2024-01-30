const fs =require('fs')
const http =require('http')

const server=http.createServer(function(req,res){

    if(req.url="/"){
        let result=fs.existsSync("index.txt")

        if(result){
            res.end("true")
        }
        else{
            res.end("false")
        }
    }

})
server.listen(407)
console.log("server run success..")