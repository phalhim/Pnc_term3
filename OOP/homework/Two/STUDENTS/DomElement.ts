class DomElement{
    private name: string;
    private parent?: DomElement;
    private children:DomElement[] =[];
    constructor(name:string){
        this.name = name;
    }
    public getName():string{
        return this.name;
    }
    public isRoot():boolean{
        //
        return !this.parent;

    }
    public addChild(Child:DomElement){
       this.children.push(Child);
    }
    public setParent(parent:DomElement):void{
        this.parent=parent
    }
}
let html = new DomElement('html');
let head = new DomElement('head');
let body = new DomElement('body');
let title = new DomElement('title');
let a = new DomElement('a');
let h1 = new DomElement('h1');

html.addChild(head);
html.addChild(body);
head.addChild(title)
body.addChild(a);
body.addChild(h1);

head.setParent(html)
body.setParent(html)
a.setParent(body)
h1.setParent(body)

console.log(html.isRoot() ,head.isRoot() ,body.isRoot() ,title.isRoot());


