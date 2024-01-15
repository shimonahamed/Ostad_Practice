

function genareteRandomColor(){
    var letters = "123456789ABCDEFG"
    
    var color = "#";
    for(var i=0; i < 6; i++){
        color = color + letters[Math.floor(Math.random()*16)]
    }
    document.getElementById('colodisplay').textContent = color
    document.body.style.backgroundColor=color
}