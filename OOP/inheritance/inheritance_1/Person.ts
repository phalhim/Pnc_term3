export class Person {
    constructor(private name: string, private address: string, private dateOfBirth: string) {
        this.name = name;
        this.address = address;
        this.dateOfBirth = dateOfBirth;

    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
}