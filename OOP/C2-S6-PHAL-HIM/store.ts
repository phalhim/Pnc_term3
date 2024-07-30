
import { Customer } from "./customer";
import { Feedback } from "./feedback";
import { Product } from "./product";
export class Store {
    name: string;
    products?: Product[];
    customer?: Customer[];
    constructor(name: string) {
        this.name = name;
    }
    addProduct(product: Product[]) {
        this.products = product;
    }
    addCustomer(customer: Customer[]) {
        this.customer = customer;
    }
    getProductLessThan(price: number): Product[] {
        let priceLessThan: Product[] = [];
        this.products?.forEach(product => {
            if(product.getPrice()< price){
                priceLessThan.push(product);
            }
        });
        return priceLessThan;
    }
}

