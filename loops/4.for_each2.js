// const arr =["js","cpp","java","javascript"]
// const values=arr.forEach((items)=>{
//     console.log(items);
//     return items//for each not return value
    
// })
// console.log(values);//undefined
const nums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=nums.filter((num)=>{return num>4})
// console.log(newnums);
const newnums=[]
nums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums)