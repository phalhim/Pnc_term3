var House = /** @class */ (function () {
    function House(colros) {
        this.tree = [];
        this.colros = colros;
        this.tree = [];
    }
    House.prototype.addTree = function (tree) {
        this.tree.push(tree);
    };
    return House;
}());
var Tree = /** @class */ (function () {
    function Tree(size) {
        this.size = size;
    }
    return Tree;
}());
var house1 = new House('red');
var tree1 = new Tree(10);
house1.addTree(tree1);
console.log(house1);
// comment run 
// tsc .\index.ts
// node .\index.js
