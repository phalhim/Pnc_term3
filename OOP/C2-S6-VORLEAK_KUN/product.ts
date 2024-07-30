import { Feedback } from "./feedback";
export class Product{
    name:string;
    price:number;
    feedbacks?:Feedback[];
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    addFeedback(feedbacks:Feedback[]):void{
        this.feedbacks=feedbacks;
    }
    getPrice():number{
        return this.price;
    }

}