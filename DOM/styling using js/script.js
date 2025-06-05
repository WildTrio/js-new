//-------style page content-------
//style
//css text
//setattribute
//classname
//classlist


//style
let content=document.querySelector(".heading")
// content.style.color='green'
// content.style.backgroundColor='pink'


//using css text
// content.style.cssText='color:green; background-color:pink'


//setattribute
// content.setAttribute('style','color:green; background-color:pink')
// content.setAttribute("id","hello")//setting id using setAttribute

let cnames=content.className.trim().split(' ');//(5) ['first', 'second', 'third', 'fourth', 'heading']

let clist=content.classList//will return a array of the classes
//methods on class list:
    //add(), remove(), toggle(), contains()

