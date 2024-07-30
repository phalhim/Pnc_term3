import { Customer } from "./Customer";
export class Menultem {
    private customer: Customer[]= [];
    constructor(private name: string, private description: string, private price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    addCustomer(customer: Customer) {
        this.customer.push(customer);
    }
}