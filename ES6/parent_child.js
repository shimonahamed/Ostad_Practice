// class inheritance

class parent{
    parentFun(){
        console.log("Hello Iam Jibon ahamed")
    }
    
    parentFun1(){
        console.log("Hello Iam Shimon Ahamed")
    }
}

class child extends parent{

}

let obj = new child;

obj.parentFun();
obj.parentFun1();