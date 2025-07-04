// let p=new Promise((resolve,reject)=>{
//     let a=1+1
//     if(a==3){
//         resolve("success")
//     }
//     else{
//         reject("failed")
//     }
// })
// p.then((message)=>{
//     console.log(`then ${message}`)
// }).catch((message)=>{
//     console.log(`catch ${message}`);
// })


// let p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside promise1")
//         reject(new Error("error"))
//     },5000)
//     // resolve(2244);
//     // reject(new Error("error"))
// })
// let p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside promise2")
//         resolve(2244);
//     },3000)
//     // reject(new Error("error"))
// })
// console.log("outside promise")
// p2.then((value)=>{console.log("value")})
// p1.catch((error)=>{console.log("error")}) 

// let p3=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("promise1")
//     }, 2000);
//     resolve(true)
// })
// p3.then(()=>{
//     let p4=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("promise2")
//         }, 2000);
//         resolve("promise2")
//     })
//     return p4;
// }).then((value)=>{console.log(value)})



// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Step 1: Preparing data");
//         resolve(10); // Initial value
//     }, 1000);
// })
// .then((value) => {
//     console.log("Step 2: Received", value);
//     return value * 2; // Passes 20 to next then
// })
// .then((value) => {
//     console.log("Step 3: Received", value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 4: Delayed by 2s");
//             resolve(value + 5); // Passes 25 to next then
//         }, 2000);
//     });
// })
// .then((value) => {
//     console.log("Final Step: Result is", value); // 25
// });



// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("step1");
//         resolve(20)
        
//     }, 2000);
// }).then((value)=>{
//     console.log("recived"+value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("step2");
//             resolve(value*2);
//         }, 2000);
//     })
// }).then((value)=>{
//     console.log("step3");
    
//     console.log(value);
    
// })

// async function fun(){
//     return 7;
// }
// console.log(fun())//the output will not be 7, the output will be a promise because async will return a promise


async function weather(){
    let mh_weather=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("rainy")
        }, 2000);
    })
    let rj_weather=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("sunny")
        }, 5000);
    })
    let mw=await mh_weather;
    let rw=await rj_weather;
    return [mw,rw];
}


// async function fun(){
//     let content=await fetch('https://jasonplaceholder.typicode.com/posts/1')
//     let output=await content.json();//javascript object notation
//     console.log(output)
// }
// fun()


// async function helper(){
//     let options={
//         method:'POST',
//         body:JSON.stringify({
//             title:'hello',
//             body:'hello',
//             userId:1,
//         }),
//         headers:{
//             'Content-type':'application/json; charset=UTF-8',
//         },
//     }
//     let content=await fetch('https://jasonplaceholder.typicode.com/posts',options)
//     let response=content.json()
//     return response
// }
// async function fun(){
//     let ans=await helper();
//     console.log(ans)
// }
// fun()

