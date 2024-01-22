class myClass{
    constructor(a, b){
        this.firstNum = a
        this.lastNum = b    
    }
    add(){
        let result = this.firstNum + this.lastNum
        console.log(result)
    }
}

let obj = new myClass(45,56)

obj.add()