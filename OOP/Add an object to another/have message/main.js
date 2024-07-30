var House = /** @class */ (function () {
    function House(numberDoor, Housename) {
        this.trees = [];
        this.numberDoor = numberDoor;
        this.Housename = Housename;
    }
    House.prototype.getInOf = function () {
        console.log("Hello, this is " + this.Housename + ",there are " + this.trees.length.toString() + " trees");
    };
    return House;
}());
var Tree = /** @class */ (function () {
    function Tree(size) {
        this.size = size;
    }
    return Tree;
}());
var phalHouse = new House(2, 'phal');
var treeOne = new Tree(29);
phalHouse.trees.push(treeOne);
phalHouse.getInOf();
console.log(phalHouse);
