import { Customer } from "./Customer";
import { Menultem } from "./Menultem";
import { Order } from "./Order";
import { Restaurant } from "./Restaurant";

let menultem1 = new Menultem('Big Meal', 'A delicious burger with fries and a drink', 99.9);
let menultem2 = new Menultem('Big ', 'drink',22)
// console.log(menultem);

let customer1 = new Customer('1', 'phal');
// console.log(customer);

// menultem  =================================
menultem1.addCustomer(customer1);
// console.log(menultem);

// order =================================
let order1 = new Order('big', 30);
let order2 = new Order('milk', 22);
customer1.addOrder(order1);
// console.log(customer);

// restaurant =================================
let restaurant = new Restaurant();
restaurant.addItem(menultem1);  
restaurant.addItem(menultem2);
restaurant.placeOrder(customer1, [menultem1,menultem2]);
restaurant.getOrdersByCustomer(customer1)

console.log(restaurant);




