import { Vehicle } from "./Vehicle";

export class VehicleConvoy {
    private vehicles: Vehicle[] = [];
    constructor() {}
    addVehicle(vehicle: Vehicle) {
        this.vehicles.push(vehicle);
    }
    getMaxSpeed(): number{
        let maxSqueed = 0;
        this.vehicles.forEach(vehicles => {
            if(vehicles.getSpeed() > maxSqueed){
                maxSqueed = vehicles.getSpeed();
            }
        });
        return maxSqueed;
    }
}