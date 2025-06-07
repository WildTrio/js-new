let courses=[
    {no:1,
        name:"javascript"
    },
    {
        no:2,
        name:"cpp"
    }
]
// let a=courses.find(function(course){
//     return course.name=="javascript"
// })
let a=courses.find(course=>course.name=="javascript")
console.log(a)