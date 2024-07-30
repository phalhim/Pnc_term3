var Preson = /** @class */ (function () {
    function Preson(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Preson.prototype.getName = function () {
        return this.name;
    };
    Preson.prototype.getYearOfBirth = function () {
        return this.yearOfBirth;
    };
    return Preson;
}());
var Calendar = /** @class */ (function () {
    function Calendar(currentYear) {
        this.currentYear = currentYear;
    }
    Calendar.prototype.getAge = function (preson) {
        return this.currentYear - preson.getYearOfBirth();
    };
    return Calendar;
}());
var calendar = new Calendar(2012);
var agePreson1 = new Preson('phal', 2002);
var agePreson2 = new Preson('chan', 2005);
console.log(calendar.getAge(agePreson1));
console.log(calendar.getAge(agePreson2));
