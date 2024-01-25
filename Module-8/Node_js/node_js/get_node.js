//এই এখানে বুঝা যাচ্ছে যে request পাঠানোর পর সেই request অনুযায়ী রেস্পনসসে পাওয়া যায় এবং Response এর একটা ভিউ পাওয়া যাই

let http = require ('http')

let servar= http.createServer(function(req, res){

if(req.url=="/"){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("This is Responce a Home page")
    res.end();
}
else if(req.url=="/about"){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("This is Responce a About page")
    res.end();
}
else if(req.url=="/contact"){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("This is Responce a Contact page")
    res.end();
}
});
servar.listen(5050)
console.log("servar Run Secuess") 