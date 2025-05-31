const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)//it will take array within array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])//flash
// console.log(marvel_heros[3][1][2])//a
// marvel_heros.concat(dc_heros);
// const heros=marvel_heros.concat(dc_heros)//returns a new array with marvelheros + dc heros as the new elements
// console.log(heros)
const new_heros=[...marvel_heros,...dc_heros,...marvel_heros]//spread 
console.log(new_heros)
const a=[1,2,3,4,[5,6,7],8,[4,5,[5,1]]];
const b=a.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth...here the depth is Infinity
console.log(b)
console.log(Array.isArray("Walter"))//false because it is a string not an array
console.log(Array.from("white"))
console.log(Array.from({name:"walter"}))//interesting
let s1=100;
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))//[100,200,300]
