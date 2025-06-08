let p=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("inside promise");
    },5000);
    resolve(2244);
})
console.log("outside promise");