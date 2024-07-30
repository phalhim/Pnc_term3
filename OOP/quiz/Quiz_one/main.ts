class Numder{
    constructor(public a: number,public b: number){
        
    }
    getSquare(){
        return new Numder((this.a)**2 ,(this.b)**2);
    }
}
let obj = new Numder(2,3)
console.log("a=" +obj.getSquare().a+",b=" +obj.getSquare().b)