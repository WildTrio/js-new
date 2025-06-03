const obj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in obj) {
    console.log(`${key} is for ${obj[key]}`);
}
const arr=["js","ruby","cpp","javascript"]
for (const key in arr) {
    console.log(arr[key]);//0 1 2 3
}