var DomElement = /** @class */ (function () {
    function DomElement(name) {
        this.children = [];
        this.name = name;
    }
    DomElement.prototype.getName = function () {
        return this.name;
    };
    DomElement.prototype.isRoot = function () {
        //
        return !this.parent;
    };
    DomElement.prototype.addChild = function (Child) {
        this.children.push(Child);
    };
    DomElement.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    return DomElement;
}());
var html = new DomElement('html');
var head = new DomElement('head');
var body = new DomElement('body');
var title = new DomElement('title');
var a = new DomElement('a');
var h1 = new DomElement('h1');
html.addChild(head);
html.addChild(body);
head.addChild(title);
body.addChild(a);
body.addChild(h1);
head.setParent(html);
body.setParent(html);
a.setParent(body);
h1.setParent(body);
console.log(html.isRoot(), head.isRoot(), body.isRoot(), title.isRoot());
