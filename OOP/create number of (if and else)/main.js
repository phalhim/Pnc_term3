var WebAlumini = /** @class */ (function () {
    function WebAlumini(ExperienceVueJS, ExperienceNodeJS, canWriteOOP) {
        this.ExperienceVueJS = ExperienceVueJS;
        this.ExperienceNodeJS = ExperienceNodeJS;
        this.canWriteOOP = canWriteOOP;
    }
    WebAlumini.prototype.getSalary = function () {
        var salary = 700;
        if (this.ExperienceVueJS < 1 && this.ExperienceNodeJS < 1 && this.canWriteOOP == false) {
            salary = 250;
        }
        else if (this.ExperienceVueJS >= 1 && this.ExperienceNodeJS <= 1 && this.canWriteOOP == false) {
            salary = 350;
        }
        else if (this.ExperienceVueJS >= 1 && this.ExperienceNodeJS >= 1 && this.canWriteOOP == false) {
            salary = 450;
        }
        return salary;
    };
    return WebAlumini;
}());
var webOne = new WebAlumini(2, 2, true);
console.log(webOne.getSalary());
