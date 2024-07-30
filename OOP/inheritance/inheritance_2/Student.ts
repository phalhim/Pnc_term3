import { Person } from "./Person";
export class Student extends Person{

    constructor(name: string, private batch:string) {
        super(name);
        this.batch = batch;
    }
}