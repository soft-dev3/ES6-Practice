class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "Addhapak Rofiqul Islam Academy and Collage"
    }
}

const student1 = new Student(35,"Saddam");
const student2 = new Student(36,"Mohiuddin");
const student3 = new Student(37,"Towkir");

console.log(student1,student2);
console.log(student1.name,student2.name);
console.log(student3);