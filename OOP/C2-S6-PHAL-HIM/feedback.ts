import { Customer } from "./customer";
export class Feedback{
    comment:string;
    evaluation:number;
    constructor(comment:string, evaluation:number){
        this.comment = comment;
        this.evaluation = evaluation;
    }
    getComment():string{
        return this.comment;
    }
    getEvaluation():number{
        return this.evaluation;
    }
}
