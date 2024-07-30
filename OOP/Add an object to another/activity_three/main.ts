class School {
    nameSchool: string;
    allStudent: Student[]=[];
    director:Director[]=[];
    constructor(nameSchool: string) {
        this.nameSchool = nameSchool;
    }
    addStudent(allStudent: Student): void {
        this.allStudent.push(allStudent);
    }
    addDirector(director: Director): void {
        this.director.push(director);
    }
}
class Student{
    members: number;
    constructor(members: number){
        this.members = members;
    }
}
class Director{
    nameDirector: string;
    constructor(nameDirector: string) {
        this.nameDirector = nameDirector;
    }
}

let school1 = new School('PNC');
let studentName = new Student(10);
let director = new Director('him')

school1.addStudent(studentName);
school1.addDirector(director);

console.log(school1);