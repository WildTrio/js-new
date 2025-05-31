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
console.log(message());//undefined
