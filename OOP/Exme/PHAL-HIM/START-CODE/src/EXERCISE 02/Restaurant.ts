import { Customer } from "./Customer";
import { Order } from "./Order"
import { Menultem } from "./Menultem";
export class Restaurant {
    private menultem: Menultem[]=[];
    private customer: Customer[]=[];

    constructor() { }
    addItem(item: Menultem): void{
        this.menultem.push(item);
    }
    
    placeOrder(customer: Customer, items: Menultem[]): void{
        let order = new Order(items.toString(), 0);
        customer.addOrder(order);
        this.customer.push(customer);
    }

    getOrdersByCustomer(customer: Customer): Order[]{
        let orders: Order[] = [];
        this.customer.forEach(orders => {
            if(orders.getId() === orders.getId()){
                orders.getOrder();
            }
        });
        return orders;
        
    }


}