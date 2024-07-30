import { Doctor } from "./Doctor";
import { Employee } from "./Employee";
import { Person } from "./Person";



let person = new Person('phal','RTK','12/22/2023');
let employee = new Employee('him','RTK','11/33/2212',222,22);
let doctor = new Doctor('Ly','RTK','33/33/3333',44,1,['panadol', 'para']);

console.log(person.getName(),person.getAddress());
console.log(employee.getName(),person.getAddress());
console.log(doctor.getName(),person.getAddress());

