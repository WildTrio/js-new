const user={
    name:"walter",
    price:1000,
    message:function(){
        console.log(`${this.name}, hello`)
        console.log(this)
    }
}
user.message()//hello, walter
user.name="jesse"
user.message()//hello, jesse
console.log(this);//{}

// function fun(){
//     let name="white"
//     console.log(this.name)//undefined
// }
// fun()

const f=()=>{
    let name="white"
    console.log(this.name)//undefined
    console.log(this)//{}...empty
}//arrow function....()=>{}
f()
const addtwo=(num1,num2)=> num1+num2 //implicit return
const multiply=(num1,num2)=>(num1*num2)//implicit return

console.log(addtwo(4,5))//9
console.log(multiply(4,5))
// const a=()=>{name:"walter"}//undefined...without () we cannot return object
// console.log(a())//undefined

const a=()=>({name:"walter"})
console.log(a())//walter