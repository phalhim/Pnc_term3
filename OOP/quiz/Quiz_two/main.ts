class Rectangle{
    width: number
    height: number
    constructor(width: number, height: number){
        this.width = width
        this.height = height
    }
    getArea(){
        return this.width * this.height
    }
}
let kitchen = new Rectangle(4,5)
let bedroom = new Rectangle(5,6)
let classroom = new Rectangle(8,9)
let total:number = kitchen.getArea() + bedroom.getArea() + classroom.getArea()
console.log(total)