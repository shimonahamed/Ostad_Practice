var fs=require('fs')
var http = require('http')

let server = http.createServer(function (req,res){
if(req.url=="/"){
    let data= fs.readFileSync('home.html','utf8')
    res.end(data)

}
else if(req.url=="/contact") {
    let data= fs.readFileSync('contact.html','utf8')
    res.end(data)
}
else if(req.url=="/services") {
    let data= fs.readFileSync('services.html','utf8')
    res.end(data)
}
else if(req.url=="/treams") {
    let data= fs.readFileSync('treams.html','utf8')
    res.end(data)
}

})
server.listen(450)
console.log("Server Run Success.")