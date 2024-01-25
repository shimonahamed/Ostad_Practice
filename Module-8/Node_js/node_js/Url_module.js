let http = require("http")

let Url = require("url")

let sarver=http.createServer(function(req,res){
    let myUrl="https://ostad.app/dashboard/my-courses?65029bca6ac293e56aa9ed9c/videos"

    //ইউআরএল তিন ভাগে বিভক্ত যেমন (হোস্ট ,পাথ ,কুয়েরি বা সার্চ )
    //ইউআরএল মডিউল এর মাধ্যমে একটি ইউআরএল কে পার্ট বাই পার্ট খুঁজে পাওয়া যাই বা পার্ট বাই পার্ট বিভক্ত করা হয় । যে তিনটি পার্ট এ বিভক্ত করা যাই এবং যা পাওয়া যাই তা হলো ১.হোস্ট নাম ২.কুয়েরি বা সার্চ নাম ৩.পাথ নাম  
    
    let myUrlObj = Url.parse(myUrl, true)

    let myHostName = myUrlObj.host;
    let myPathName = myUrlObj.pathname;
    let mySearchName = myUrlObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(myHostName)
    res.end();
})
sarver.listen(4500);

console.log("This server runs")