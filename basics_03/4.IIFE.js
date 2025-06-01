//immediately invoked function expression

// function temp(){
//     console.log("data base connected")
// }
// temp()
(function temp(){
    console.log("data base connected")
})();//semicolon is placed to end the function(IIFE)
((name)=>{
    console.log(`${name}, hello`)
})("walter")