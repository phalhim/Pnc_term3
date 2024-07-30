import { Person } from "./Person";
export class Employee extends Person {
    constructor(name: string, addree: string, dateOfBirth: string, private salary: number, private vearArrivals: number) {
        super(name, addree, dateOfBirth);
        this.salary = salary;
        this.vearArrivals = vearArrivals;
    }
}