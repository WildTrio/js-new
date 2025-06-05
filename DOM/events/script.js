// function fun(){
//     document.body.style.backgroundColor="green"
// }
// document.addEventListener('click',fun)
// document.removeEventListener('click',fun)//for removing the event listner same function should be passed as argument(the function definition should be done before the addeventlistner and removeeventlistner and the same function should be passed in both -addeventlistner and removeeventlistner)
//conditions for removeeventlistner
    //1.same target
    //2.same type
    //3.same function
// document.dispatchEvent(new Event("click"))//this is used when we want to do a event programatically
// const h=document.querySelector(".heading")
// h.addEventListener('click',function(hello){//the function receives event object
//     console.log(hello)//prints the event
// })
// const a=document.querySelector("a")
// a.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("now the link will not open")
// })
let newdiv=document.createElement('div')
for(let i=0;i<100;i++){
    let newelement=document.createElement('p')
    newelement.textContent="this is paraagraph "+i;
    newelement.addEventListener('click', function(event){
        console.log(`clicked ${i}`);
    })
    newdiv.appendChild(newelement)
}
document.body.appendChild(newdiv)