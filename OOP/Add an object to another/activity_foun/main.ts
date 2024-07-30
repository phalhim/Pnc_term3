class PhalStudent {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class schools {
    name: string;
    namePhal: PhalStudent[] = [];
    constructor(name: string) {
        this.name = name;
    }
    addPhal(PhalStudent: PhalStudent) {
        this.namePhal.push(PhalStudent);
    }
}

let school1 = new schools("PNC");
let phalName = new PhalStudent(1, "phal", 89)

school1.addPhal(phalName);
console.log(school1);
