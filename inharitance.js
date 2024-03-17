class Parent{
    constructor(){
        this.fatherName =  "Hasan ali";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("sakib");
const baby2 = new Child("rakib");
console.log(baby.getFullName());
console.log(baby2);