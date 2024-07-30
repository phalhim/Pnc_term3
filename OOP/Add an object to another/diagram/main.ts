class School {
    trees: Director[];
}

class Director {
    directorName: string;
    constructor(directorName: string) {
        this.directorName = directorName;
    }
}

let myschool = new Director('Him');
console.log(myschool);
