
class WepAlumni {
    eperienceInVueJS: string;
    eperienceInNodeJS: string;
    canCodeOOP: string;
    salary: number;
    constructor(eperienceInVueJS: string, eperienceInNodeJS: string, canCodeOOP: string, salary: number) {
        this.eperienceInVueJS = eperienceInVueJS
        this.eperienceInNodeJS = eperienceInNodeJS;
        this.canCodeOOP = canCodeOOP;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
let WepAlumni_1 = new WepAlumni('Less than a year', 'Less than a year','no', 250);
let WepAlumni_2 = new WepAlumni('more than a year', 'Less than a year','no', 350);
let WepAlumni_3 = new WepAlumni('more than a year ', 'more than a year','no',450);
let WepAlumni_4 = new WepAlumni('more than a year','more than a year' ,'yes', 700);
console.log(WepAlumni_1.getSalary(), WepAlumni_2.getSalary(), WepAlumni_3.getSalary(), WepAlumni_4.getSalary());