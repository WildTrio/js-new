"use strict";//treat all js code as newer version
// alert("hello")
// we are using node.js not browser
let name="walter"
let age=18
let isLoggedIn=false
//number 2^53
//bigint
//string ""
// boolean true or false
//null =>standalone value...data type is object
//symbol =>unique
//object
console.log(typeof null)//object




//primitive and non-primitive
//-------primitive-------
// 7 types: string,number,boolean,null,undefined,symbol,BigInt
const id=Symbol(`123`)
const id2=123
console.log(id===id2)//false
//---------reference type(non primitive)---------
//types: array,object,function
const arr=[1,2,3];
let obj={
    name:"abc",
    age:12
}
const myfunction =function(){
    console.log("hello world")
}
myfunction()