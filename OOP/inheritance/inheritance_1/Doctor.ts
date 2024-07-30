import { Employee } from "./Employee";
export class Doctor extends Employee {
    constructor(name: string, addree: string, dateOfBirth: string, salary: number, vearArrivals: number , private medicolService:string[]){
        super(name, addree, dateOfBirth, salary, vearArrivals);
        this.medicolService = medicolService;
    }
}