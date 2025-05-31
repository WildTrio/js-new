const arr=[0,1,2,3,4,5]
//javascript array are resizeable and can contain mix data type elements
//shallow copy: reference pass
//deep copy: copy pass
const name=["walter","jesse"]
const a=new Array(1,2,3,4)
console.log(a)//[ 1, 2, 3, 4 ]
console.log(a[3])//4
//-------array methods--------
a.push(6);
console.log(a)
a.pop()
console.log(a)
a.unshift(10)//element get inserted at the start
console.log(a);
a.shift()//removes the first element
console.log(a);
console.log(a.includes(9));
console.log(a.indexOf(4));
const new_arr=a.join(":")//joins the elements of the arr with "-" in btw them and converts the array into string
console.log(new_arr);
console.log(typeof new_arr)//string
console.log(typeof a)//object
// slice and splice
console.log("a",a);
const b=a.slice(1,3)//returns the section of a string...3 not included...does not change the original array
console.log(b)
console.log(a)
const c=a.splice(0,3)//returns the number of values given from the starting index here 0 is the starting index and 3 are the number of values from the starting index...splice changes the original array and now in the original array there remains the remaining values after splicing
console.log(c)//1,2,3
console.log(a)//4