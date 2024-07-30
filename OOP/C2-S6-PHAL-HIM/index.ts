import { Product } from "./product";
import { Store } from "./store";
import { Feedback } from "./feedback";
import { Customer } from "./customer";


let feedbacks = new Feedback('good', 10)
console.log(feedbacks.getComment());

let product1 = new Product('food', 20)
let product2 = new Product('eat',10);
// console.log(product1, product2);

let store1 = new Store("free food");
store1.addProduct([product1, product2]);
store1.getProductLessThan(2000)

console.log(store1.getProductLessThan(2));

let myNane = new Customer('phal', 'him');
// console.log(myNane);



