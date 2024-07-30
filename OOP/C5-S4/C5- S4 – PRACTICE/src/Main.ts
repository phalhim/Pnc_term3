import { BatMobile } from "./BatMobile";
import { Vehicle } from "./Vehicle";
import { MiniVan } from "./MiniVan";
import { TucTuc } from "./TucTuc";
import { VehicleConvoy } from "./VehicleConvoy";


//batMobile================================================================
let batMobile = new BatMobile("1TG-6789", 500, false);
// console.log(batMobile.getsqueed());

//MiniVan================================================================
let miniVan = new MiniVan('1TG-6789', 10, 0, 130)
// console.log(miniVan.getSqueed());


//Tuctuc================================================================
let tuctuc = new TucTuc('1TG-6789', 100, 130);
// console.log(tuctuc.getSqueed());

//VehicleConvoy================================================================
let vehicleConvoy = new VehicleConvoy()
vehicleConvoy.addVehicle(miniVan);
vehicleConvoy.addVehicle(tuctuc);
vehicleConvoy.addVehicle(batMobile)
console.log(vehicleConvoy.getMaxSpeed());
