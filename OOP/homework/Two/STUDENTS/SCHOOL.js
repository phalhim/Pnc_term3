var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
var Classroom = /** @class */ (function () {
    function Classroom(school, name) {
        this.students = [];
        this.school = school;
        this.name = name;
    }
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.getNumberOfStudents = function () {
        return this.students.length;
    };
    return Classroom;
}());
var School = /** @class */ (function () {
    function School(name) {
        this.classrooms = [];
        this.name = name;
    }
    School.prototype.addClassroom = function (classroomName) {
        var newCLassroom = new Classroom(this, classroomName);
        this.classrooms.push(newCLassroom);
        return newCLassroom;
    };
    return School;
}());
var school1 = new School('PNC');
var school2 = new School('UK');
var classroom1 = school1.addClassroom('web2024 B');
var classroom2 = school2.addClassroom('web2025 C');
var student1 = new Student('phal', 'him');
var student2 = new Student('him', 'phal');
var student3 = new Student('chan', 'phal');
var student4 = new Student('Ly', 'nan');
classroom1.addStudent(student1);
classroom2.addStudent(student2);
classroom1.addStudent(student3);
classroom2.addStudent(student4);
console.log(classroom1.getNumberOfStudents());
console.log(classroom2.getNumberOfStudents());
var classroom3 = school1.addClassroom('web2026 D');
classroom3.addStudent(student1);
