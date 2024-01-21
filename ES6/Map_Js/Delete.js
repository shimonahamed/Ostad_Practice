var myMap= new Map();

myMap.set("key1","bangladesh")
myMap.set("key2","India")
myMap.set("key3","Pakistan")
myMap.set("key4","Maldib")
myMap.set("key5","Vutan")
myMap.set("key6","Japan")
myMap.set("key7","Ledarlend")


myMap.delete('key4')
myMap.delete('key2')

for(let myValue of myMap.values()){
    console.log(myValue)
}
