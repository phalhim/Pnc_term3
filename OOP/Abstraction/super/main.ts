class Person{
    name = "phal"
    printMe(){
        // console.log("name: "+this.name)
    }
}
class Employee extends Person{
    salary = 10;
    printMe(){
        super.printMe()
        // console.log("salary: "+this.salary)
    }
}

let ronan = new Employee();
ronan.printMe();
console.log(ronan);
