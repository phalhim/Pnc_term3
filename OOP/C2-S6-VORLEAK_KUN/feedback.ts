import { Customer } from "./customer";
export class Feedback{
    comment:string;
    evalution:number;
    customer?:Customer;
    constructor(comment:string,evalution:number){
        this.comment=comment;
        this.evalution=evalution;
    }
    addCustomerfeedback(customer:Customer){
        this.customer=customer;
    }
    getComment(){
        return this.comment;
    }

}