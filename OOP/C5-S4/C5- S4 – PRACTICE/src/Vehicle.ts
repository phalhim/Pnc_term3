export abstract class Vehicle{
    constructor(private plateID: string,private weight: number){
        this.plateID = plateID;
        this.weight = weight;
    }
    abstract getSpeed():number;
}