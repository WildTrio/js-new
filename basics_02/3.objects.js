//singleton: object created by constructor is always singleton...and created by literals is not singleton


//object literals
// Object.create...this is constructor method
//object...key:value
const sym=Symbol("key1")
const user={
    name:"walter",
    "full name":"walter white",
    [sym]:"value1",
    age: 18,
    location:"US",
    email:"w@gmail.com",
    is_logged_in:false
}
console.log(user.name)
console.log(user["name"])
console.log(user["full name"])//full name can't be accessed by dot operator
console.log(user[sym])//syntax for using symbol

user.email="abc@gmail.com"
console.log(user["email"])
// Object.freeze(user)//now the object values can't be changed

user.email="abcd@gmail.com"//the value of the email is not changed because it is freezed
console.log(user["email"])//abc@gmail.com
console.log(user)

user.greeting=function(){
    console.log("hello world")
}
user.greeting2=function(){
    console.log(`hello world ${this.name}`)//this operator is used to give reference to the same object in which the functioni defined
}
console.log(user.greeting)//[Function (anonymous)]
console.log(user.greeting())//hello world
console.log(user.greeting2())//hello world walter