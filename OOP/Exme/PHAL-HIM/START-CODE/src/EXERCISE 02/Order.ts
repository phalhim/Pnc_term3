import { Customer } from "./Customer";
import { Menultem } from "./Menultem";
export class Order {
    private customer: Customer;
    private menultem: Menultem;
    constructor(private orderliems: string, private total: number) {
        this.orderliems = orderliems;
        this.total = total;
    }
    getCustomer(): Customer {
        return this.customer;
    }
    getMenultem(): Menultem {
        return this.menultem;
    }
    addItem() {
        throw this.total;
    }

}