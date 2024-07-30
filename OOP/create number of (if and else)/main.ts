class WebAlumini {
    ExperienceVueJS: number;
    ExperienceNodeJS: number;
    canWriteOOP: boolean;
    constructor(ExperienceVueJS: number, ExperienceNodeJS: number, canWriteOOP: boolean) {
        this.ExperienceVueJS = ExperienceVueJS;
        this.ExperienceNodeJS = ExperienceNodeJS;
        this.canWriteOOP = canWriteOOP;
    }
    getSalary() {
        let salary = 700;
        if (this.ExperienceVueJS < 1 && this.ExperienceNodeJS < 1 && this.canWriteOOP == false) {
            salary = 250;
        } else if (this.ExperienceVueJS >= 1 && this.ExperienceNodeJS <= 1 && this.canWriteOOP == false) {
            salary = 350;
        } else if (this.ExperienceVueJS >= 1 && this.ExperienceNodeJS >= 1 && this.canWriteOOP == false) {
            salary = 450;
        }
        return salary;
    }
}
let webOne = new WebAlumini(2, 2, true)
console.log(webOne.getSalary());