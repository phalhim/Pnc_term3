var PhalStudent = /** @class */ (function () {
    function PhalStudent(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return PhalStudent;
}());
var schools = /** @class */ (function () {
    function schools(name) {
        this.namePhal = [];
        this.name = name;
    }
    schools.prototype.addPhal = function (PhalStudent) {
        this.namePhal.push(PhalStudent);
    };
    return schools;
}());
var school1 = new schools("PNC");
var phalName = new PhalStudent(1, "phal", 89);
school1.addPhal(phalName);
console.log(school1);
