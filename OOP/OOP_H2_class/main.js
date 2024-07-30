var WepAlumni = /** @class */ (function () {
    function WepAlumni(eperienceInVueJS, eperienceInNodeJS, canCodeOOP, salary) {
        this.eperienceInVueJS = eperienceInVueJS;
        this.eperienceInNodeJS = eperienceInNodeJS;
        this.canCodeOOP = canCodeOOP;
        this.salary = salary;
    }
    WepAlumni.prototype.getSalary = function () {
        return this.salary;
    };
    return WepAlumni;
}());
var WepAlumni_1 = new WepAlumni('Less than a year', 'Less than a year', 'no', 250);
var WepAlumni_2 = new WepAlumni('more than a year', 'Less than a year', 'no', 350);
var WepAlumni_3 = new WepAlumni('more than a year ', 'more than a year', 'no', 450);
var WepAlumni_4 = new WepAlumni('more than a year', 'more than a year', 'yes', 700);
console.log(WepAlumni_1.getSalary(), WepAlumni_2.getSalary(), WepAlumni_3.getSalary(), WepAlumni_4.getSalary());
