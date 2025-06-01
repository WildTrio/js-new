var c=300
let b=400
if(true){
    const a=10;
    let b=20;
    var c=40
    // console.log(b);//20
    
}
// console.log(a);
// console.log(b);//error
// console.log(c);//40
// console.log(b);//400


function one(){
    const name="walter"
    function two(){
        const website="youtube"
        console.log(name)
    }
    // console.log(website)//error
    two()
}
// console.log(name);//error
one()
// two()//error


add(5)
function add(num){
    return num+1
}
temp(2)//error...because temp is not defined here
const temp=function(num){//expressions
    return num+2
}