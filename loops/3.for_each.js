const arr =["js","cpp","java","javascript"]
// arr.forEach( function (val){
//     console.log(val);
// } )
// arr.forEach((item)=>{
//     console.log(item);
    
// })
// function print(item){
//     console.log(item);
// }
// arr.forEach(print)//only give reference of the function do not execute the function
// arr.forEach((value,index,arr)=>{//element, index, array
//     console.log(value,index,arr);
    
// })
const a=[
    {
        language_name:"javascript",
        file_name:"js"
    },
    {
        language_name:"c++",
        file_name:"cpp"
    },
    {
        language_name:"java",
        file_name:"java"
    }
]
a.forEach((item)=>{
    console.log(item["language_name"]);
})