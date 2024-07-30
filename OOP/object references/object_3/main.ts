class Student {
    constructor( private name: string){
        this.name = name;
    }
    isEquals(other: Student){
        // console.log(this.name);
        // console.log(other.name);
        return this.name === other.name;
    }
}

let student1= new Student('phal')
let student2 = new Student('phal')

console.log(student1 === student2);
console.log(student1.isEquals(student2));

