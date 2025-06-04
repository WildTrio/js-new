const arr=[1,2,3,4,5,6,7,8,9,10]
// const newnums=arr.map((num)=>{return num+10})
// console.log(newnums);
// let newnums=[]
// arr.forEach((nums)=>{newnums.push(nums+10)})

const newnums=arr.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>51)//chaining
console.log(newnums);
