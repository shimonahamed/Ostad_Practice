var myMap= new Map();

myMap.set("key1","bangladesh")
myMap.set("key2","India")
myMap.set("key3","Pakistan")
myMap.set("key4","Maldib")

for(let myValue of myMap.values()){
    console.log(myValue)
}

for(let myKey of myMap.keys()){
    console.log(myKey)
}