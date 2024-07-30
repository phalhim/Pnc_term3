import { Menultem } from './Menultem';
import { Order } from './Order'

export class Customer {

    private order: Order[]=[]
    constructor(private id: string, private name: string) {
        this.id = id;
        this.name = name;
    }
    getNmae(): string {
        return this.name
    }
    addOrder(order: Order) {
        return this.order.push(order)
    }
    getId(): string {
        return this.id
    }
    getOrder():void{
        this.order
    }
}