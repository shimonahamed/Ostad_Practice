
var data=[
    "Jibon",
    "Mim",
    "Shimon",
    "Masura",
    "Brsty"
]
function generatorQuoteFun(){
var randomIndeex = Math.floor(Math.random()*data.length)
document.getElementById('quoteDisplay').innerHTML=data[randomIndeex]
}