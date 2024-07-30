class Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Classroom {
  private name: string;
  private school: School;
  private students: Student[] = [];

  constructor(school: School, name: string) {
    this.school = school;
    this.name = name;
  }

  addStudent(student: Student): string {
    this.students.push(student);
  }

  getNumberOfStudents(): number {
    return this.students.length;
  }
}

class School {
  private name: string;
  private classrooms: Classroom[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addClassroom(classroomName: string): Classroom {
    let newCLassroom = new Classroom(this, classroomName);
    this.classrooms.push(newCLassroom);
    return newCLassroom;
  }
}
let school1 = new School('PNC');
let school2 = new School('UK');

let classroom1 = school1.addClassroom('web2024 B');
let classroom2 = school2.addClassroom('web2025 C');

let student1 = new Student('phal', 'him');
let student2 = new Student('him', 'phal');
let student3 = new Student('chan', 'phal');
let student4 = new Student('Ly', 'nan')

classroom1.addStudent(student1);
classroom2.addStudent(student2);
classroom1.addStudent(student3);
classroom2.addStudent(student4);

console.log(classroom1.getNumberOfStudents());
console.log(classroom2.getNumberOfStudents());

