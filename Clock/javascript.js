function updateClock(){
    var dateNow = new Date()
    var hour = dateNow.getHours()%12
    var minute = dateNow.getMinutes()
    var scecond = dateNow.getSeconds()

document.getElementById('hour').innerHTML=hour
document.getElementById('minute').innerHTML =minute
document.getElementById('scecond').innerHTML=scecond
}
setInterval(updateClock,1000)

function updateDay(){
    var dateNow = new Date()
    var day = dateNow.getDay()
    var month = dateNow.getMonth()
    var year = dateNow.getFullYear()

document.getElementById('day').innerHTML=day
document.getElementById('month').innerHTML =month
document.getElementById('year').innerHTML=year
}

setInterval(updateDay,1000)