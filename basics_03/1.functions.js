function saymyname(){
    console.log("Heisenberg")
}
saymyname()

// function add(number1,number2){//parameters
//     console.log(number1+number2)
// }
// add(3,4);//arguments
// add(3,null)//3
// const ans=add(9,10)
// console.log(ans)//undefined

function add(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}
const ans=add(9,8);
console.log(ans)//17
console.log(add(9,2))

function message(username="abc"){//default value is abc
    if(!username){
        console.log("enter your name");
        
    }
    else{return `${username} just logged in`}
    
}
console.log(message("walter"))//walter just logged in...default value overwrited
console.log(message());//abc just logged in

function cart(...num1){//... is a rest operator
    return num1
}
console.log(cart(200,400,500));//[200,400,500]...beacuse of ... operator

function cart2(num1,num2,...num3){
    return num3
}
console.log(cart2(200,400,500,600,700))//num1 will take 200,num2 will take 400 and the rest values will be taken by num3

const user={
    name:"walter",
    age:18
}
function fun(obj){
    return `${obj.name} is ${obj.age} years old`
}
console.log(fun(user));

console.log(fun({name:"jesse",age:20}));

const arr=[100,200,300,400]
function val(a){
    return a[1]
}
console.log(val(arr));
