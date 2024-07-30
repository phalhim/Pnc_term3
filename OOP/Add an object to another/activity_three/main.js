var School = /** @class */ (function () {
    function School(nameSchool) {
        this.allStudent = [];
        this.director = [];
        this.nameSchool = nameSchool;
    }
    School.prototype.addStudent = function (allStudent) {
        this.allStudent.push(allStudent);
    };
    School.prototype.addDirector = function (director) {
        this.director.push(director);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(mambers) {
        this.mambers = mambers;
    }
    return Student;
}());
var Director = /** @class */ (function () {
    function Director(nameDirector) {
        this.nameDirector = nameDirector;
    }
    return Director;
}());
var school1 = new School('PNC');
var studentName = new Student(10);
var director = new Director('him');
school1.addStudent(studentName);
school1.addDirector(director);
console.log(school1);
