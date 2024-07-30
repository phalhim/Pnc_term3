import { Product } from "./product";
import { Customer } from "./customer";
import { Feedback } from "./feedback";
export class Store{
    name:string;
    products?:Product[];
    customers?:Customer[]
    constructor(name:string){
        this.name=name;
    }
    addProduct(products:Product[]):void{
        this.products=products;
    }

    addCustomer(customers:Customer[]):void{
        this.customers=customers;
    }
    // Get Product less than given price 
    getProductLessThan(price:number):Product[]{
        let lessThanGivenPrice:Product[] = [];
        this.products?.forEach(product => {
            if(product.getPrice() < price){
                lessThanGivenPrice.push(product)
            }
        });
        return lessThanGivenPrice;
    }

    //Note: in product has arr of feedback in feedbacks has arr of comment so loop yuk comment mk compare vea mean word same ot
    getFeedbackContaining(keyword:string):Feedback[]{
        let searchFeedback:Feedback[]=[];
        this.products?.forEach(product=>{
            if(product.feedbacks!= undefined){
                product.feedbacks.forEach(feedback=>{
                    let customerComment:string = feedback.getComment().toUpperCase();
                    if(customerComment.includes(keyword.toUpperCase())){
                        searchFeedback.push(feedback)
                    }
                })
            }
        })
        return searchFeedback;
    }

    // Get Customer's comments by given customer  ("In product has feedbacks in feedback has comment and customer name ")
      getCustomerComments(customer:Customer):string[]{
        let customerComment:string[]=[];
        this.products?.forEach(product=>{
            if(product.feedbacks!= undefined){
                product.feedbacks.forEach(feedback=>{
                    if(feedback.customer?.getFirstName() == customer.firstName && feedback.customer?.getLastName() == customer.lastName){
                        customerComment.push(feedback.comment);
                    }
                })
            }
        })
        return customerComment;
    }

    
    
}