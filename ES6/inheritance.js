// class inheritance
/**এখানে বাবার চেয়ে ছেলের ক্ষমতা বেশি বাবা তার প্রোপাটি গুলো ওভাররাইট করতে পারবে না ,কিন্তু ছেলে বাবার প্রোপাটি গুলো ওভাররাইট করতে পারবে*/

class parent{
    parentFun(){
        console.log("Hello Iam Jibon ahamed")
    }
    
    parentFun1(){
        console.log("Hello Iam Shimon Ahamed")
    }
}

class child extends parent{
    parentFun1(){
        console.log("Hello Iam Shimon Ahamed,My Last Name Jibon Ahamed")
    }
}

let obj = new child;

obj.parentFun();
obj.parentFun1();