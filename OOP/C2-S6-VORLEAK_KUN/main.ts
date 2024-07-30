import { Store } from "./store";
import { Product } from "./product";
import { Customer } from "./customer";
import { Feedback } from "./feedback";

//Add customer
let customer1=new Customer("Leak","Smos");
let customer2=new Customer("Heang","Sava");
let customer3=new Customer ("tra","PP");


//Add feedback
let feedback1=new Feedback("It's good",20);
feedback1.addCustomerfeedback(customer2);
feedback1.addCustomerfeedback(customer1);
// console.log(feedback1);


let feedback2=new Feedback("It's bad",900);
feedback2.addCustomerfeedback(customer3);


//Add product
let product1=new Product("Banana",1000);
product1.addFeedback([feedback1,feedback2]);
let product2=new Product("Apple",6);
product1.addFeedback([feedback1]);
// console.log(product1);

let LeakStore=new Store("Leak SHop");
LeakStore.addCustomer([customer2,customer1,customer3]);
LeakStore.addProduct([product2,product1]);

LeakStore.getProductLessThan(5000);
// console.log(LeakStore.getProductLessThan(3));
LeakStore.getFeedbackContaining("good");
LeakStore.getCustomerComments(customer1);
console.log(LeakStore.getCustomerComments(customer1));



