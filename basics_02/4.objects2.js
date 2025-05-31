// const user=new Object()
const user={
}
user.id="123abc"
user.name="walter"
user.isloggedin=false
console.log(user);
const regularuser={
    email:"abc@gmial.com",
    fullname:{
        userfullname:{
            firstname:"walter",
            lastname:"white"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)
const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)//copies one or more object into a target object and returns the target object...the first argument that is passes is treated as target object...here obj1 is the target so obj3==obj1...that is why {} is passed as first argument so that the copied object do not change
const obj3={...obj1,...obj2}//spread
console.log(obj3);
const users=[
    {
        id1:1,
        email:"xyz@gmail.com"
    },
    {
        id1:1,
        email:"ab@gmail.com"
    },
    {
        id1:1,
        email:"a@gmail.com"
    },
    {
        id1:1,
        email:"a@gmail.com"
    },

]
console.log(users[1].email)
console.log(user)
console.log(Object.keys(user));//returns an array
console.log(Object.values(user))

console.log(Object.entries(user))//return array within an array the key value pairs are made as array
console.log(user.hasOwnProperty("isloggedin"));

const course={
    coursename:"js",
    price:999,
    courseinstructor:"walter"
}
// console.log(course.courseinstructor)//walter

const{coursename:cn}=course//it works like typedef 
console.log(cn);


//---------API--------
// {
//     "name":"abcd",
//     "age":18,
//     "id":12345
// }


// [
//     {},
//     {},
//     {}
// ]