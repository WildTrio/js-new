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



// let newdiv=document.createElement('div')
// function fun(event,i){
//         console.log(`clicked ${i}`);
//     }
// for(let i=0;i<100;i++){
//     let newelement=document.createElement('p')
//     newelement.textContent="this is paraagraph "+i;
//     newelement.addEventListener('click',(event)=>fun(event,i) )
//     newdiv.appendChild(newelement)
// }
// document.body.appendChild(newdiv)
//but this code is not optimized




let newdiv=document.createElement('div')
function fun(event){
        console.log("clicked");
    }
newdiv.addEventListener('click',fun)
for(let i=0;i<100;i++){
    let newelement=document.createElement('p')
    newelement.textContent="this is paraagraph "+i;
    newdiv.appendChild(newelement)
}
document.body.appendChild(newdiv)
//this ccode is more optimized but the paragraphs that were added hast lost there individuality
//now we cant access the paragraph individually



//event target property