class House {
    colros: string;
    tree: Tree[] = [];
    constructor(colros: string) {
        this.colros = colros;
        this.tree = [];
    }
    addTree(tree: Tree): void {
        this.tree.push(tree);
    }
}
class Tree {
    size: number;
    constructor(size: number) {
        this.size = size;
    }
}
let house1 = new House('red');
let tree1 = new Tree(10);
house1.addTree(tree1);
console.log(house1);


// comment run 
// tsc .\index.ts
// node .\index.js