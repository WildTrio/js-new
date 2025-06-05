function fun(){
    document.body.style.backgroundColor="green"
}
document.addEventListener('click',fun)
document.removeEventListener('click',fun)//for removing the event listner same function should be passed as argument(the function definition should be done before the addeventlistner and removeeventlistner and the same function should be passed in both -addeventlistner and removeeventlistner)
//conditions for removeeventlistner
    //1.same target
    //2.same type
    //3.same function