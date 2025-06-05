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
//before begin- insert the new element as the previous sibling of the element
//after begin- insert the element as the first child of the element
//before end- last child
//after end- next sibling


let newelement=document.createElement('h3')
newelement.className='abcd'
newelement.textContent="abcd"
content.insertAdjacentElement('afterbegin',newelement)


//------remove element-------
//removeChild()
//opposite of the appendchild
//parent element of the node to be removed should be known
//the element to be removed should be known
//syntax- parent.removeChild(childelement)
let c=document.querySelector('.abcd')
content.removeChild(c)

//easier way to fing parent node
//parent=childelement.parent


//direct method to remove an element
content.remove()