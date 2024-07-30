class House {
    numberDoor: number;
    Housename: string;
    trees: Tree[] = [];
    constructor(numberDoor: number, Housename: string) {
        this.numberDoor = numberDoor;
        this.Housename = Housename;
    }
    getInOf(): void {
        console.log("Hello, this is " + this.Housename + ",there are " + this.trees.length.toString() + " trees");
    }
}
class Tree {
    size: number;
    constructor(size: number) {
        this.size = size;
    }
}

let phalHouse = new House(2, 'phal');
let treeOne = new Tree(29);

phalHouse.trees.push(treeOne);
phalHouse.getInOf()
console.log(phalHouse);

