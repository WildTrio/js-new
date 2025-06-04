const arr=[1,2,3,4,5];
// const total=arr.reduce(function (acc,curr){
//     console.log(`acc:${acc},curr:${curr}`);
//     return acc+curr
// },0)
const total=arr.reduce((acc,curr)=>acc+curr,0)
console.log(total);


const cart=[
    {
        itemname:"js",
        price:2999
    },
    {
        itemname:"css",
        price:4999
    },
    {
        itemname:"java",
        price:5999
    },
    {
        itemname:"ds",
        price:1999
    },
]
const t=cart.reduce((acc,item)=>(item.price+acc),0)
console.log(t);
