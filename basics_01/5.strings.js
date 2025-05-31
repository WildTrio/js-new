const name="abcd"
const repocount=50
// console.log(name+repocount+"val")
console.log(`hello my name is ${name}`)
const gamename="abc-defg";
console.log(gamename.__proto__)
console.log(gamename.length)//8
const str=gamename.substring(0,2)//2 not included
console.log(str)
const s=gamename.slice(-4,-2)
console.log(s)
//trim removes whitespace
console.log(gamename.replace("ab","cd"))
console.log(gamename.split("-"))
console.log(gamename)//strings are immutable