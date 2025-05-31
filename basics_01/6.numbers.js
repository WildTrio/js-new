const score=400
console.log(score)
const balance =new Number(1000)//data type is number...console(log) will display its data type also
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))//1000.00
const num=23.8966
console.log(num.toPrecision(3));//returns string
const s=1000000000;
console.log(s.toLocaleString('en-US'))
console.log(Math.abs(-4))
console.log(Math.round(9.5))//10
//floor and ceil
console.log(Math.random())//btw 0 and 1
console.log((Math.random()*10)+1)//btw 1 ans 11
const max=10
const min=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//btw min and max