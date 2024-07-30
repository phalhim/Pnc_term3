import { Vehicle } from "./Vehicle";
export class TucTuc extends Vehicle{
    private numberCustomers:number;
    constructor(plateID:string,weight:number,numberCustomers:number){
        super(plateID,weight);
        this.numberCustomers=numberCustomers;
    }
    getSpeed(): number {
        let speed=130;
        if(this.numberCustomers>0){
            speed-=5
        }
        return speed;
    }
}