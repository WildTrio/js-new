let content=document.querySelector(".hello")
let newpara=document.createElement('p')
content.appendChild(newpara)
//the newpara will be added inside the hello class at the end


//creating text node
//not a quick way
let textnode=document.createTextNode("text node created")
newpara.appendChild(textnode)
content.appendChild(newpara)



//quicker way
let mypara=document.createElement('p')
mypara.textContent="new text content"
content.appendChild(mypara)



//appendChild will add new element always in the last 
//if we want to add a new element anywhere else: insertAdjacenthtml()
//it ha sto be called wit6h two arguments 
//first is the location where we wnt to insert the element and second is the new content
//locations are: before begin, after begin, before end, after end