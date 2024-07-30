import { Person } from './Person'
export class Student extends Person {
    constructor(private phone: string, name: string, age: number) {
        super(name, age)
        this.phone = phone;
    }
}