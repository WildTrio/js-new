//for of
const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}
const str="walter"
for (const ch of str) {
    console.log(`char: ${ch}`);   
}

//maps
const map =new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('UK',"United Kingdoms")
map.set('UK',"United Kingdoms")
// console.log(map);
// for (const [key,value] of map) {
//     console.log(key,":",value);
// }
const obj={
    "game1":"NFS",
    "game2":"GTA"
}
// for (const [key,value] of obj) {
//     console.log(key,value);//object is not iterable
// }//does not work for object
for (const key in map) {
    console.log(key);//map is not iterable
}
