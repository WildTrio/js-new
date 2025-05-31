//dates
let my_date=new Date()
console.log(my_date.toString())//Thu May 29 2025 12:37:33 GMT+0530 (India Standard Time)
console.log(my_date.toDateString())//Thu May 29 2025
console.log(my_date.toLocaleString())//29/5/2025, 12:39:44 pm
console.log(my_date.toLocaleDateString())//29/5/2025
console.log(my_date.toLocaleTimeString())//12:40:36 pm
console.log(typeof my_date)//object
let my_created_date=new Date(2023,0,23)//months start from 0 in js
console.log(my_created_date.toDateString())//Mon Jan 23 2023
let a=new Date(2023,5,3,10,5)
console.log(a.toLocaleString())//3/6/2023, 10:05:00 am
let b=new Date("2023-02-14")//YYYY-MM-DD...here the months starts from 01 
console.log(b.toDateString())//Tue Feb 14 2023
let c=new Date("02-14-2023")//MM-DD-YYYY
console.log(c.toDateString())//Tue Feb 14 2023


let my_time_stamp=Date.now()
console.log(my_time_stamp);
console.log(my_created_date.getTime());
console.log(Math.floor(Date.now()/1000));//in seconds
let new_date=new Date()
console.log(new_date.getDay());

console.log(new_date.toLocaleString('default',{
    weekday:"short",
}));
