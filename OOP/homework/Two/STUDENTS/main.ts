class Preson {
    private name: string;
    private yearOfBirth: number;
    constructor(name: string, yearOfBirth: number) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    public getName(): string {
        return this.name;
    }
    public getYearOfBirth(): number {
        return this.yearOfBirth;
    }
}

class Calendar {
    private currentYear: number;
    constructor(currentYear: number) {
        this.currentYear = currentYear;
    }
    public getAge(preson: Preson): number {
        return this.currentYear - preson.getYearOfBirth();
    }
}

let calendar = new Calendar(2012)
let agePreson1 = new Preson('phal', 2002)
let agePreson2 = new Preson('chan',2005)
console.log(calendar.getAge(agePreson1));
console.log(calendar.getAge(agePreson2));


