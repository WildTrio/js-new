const full_name = {
    firstname: "jesse",
    lastname: "pinkman",
    get fullname() {
        return `${this.firstname} ${this.lastname}`
    },
    set name(value) {
        if(typeof value !==String){
            throw new Error("enter a valid name");
        }
        let parts = value.split(' ')
        this.firstname = parts[0]
        this.lastname = parts[1]
    }
}
console.log(full_name.fullname);//jesse pinkman
try {
    full_name.name = "walter white"
}
catch (e) {
    alert(e)//will run on browser
}
console.log(full_name.fullname);//walter white
