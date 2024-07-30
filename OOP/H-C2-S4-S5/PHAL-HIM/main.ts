class Trip{
    busName: string;
    date: DateTime[] = [];
    constructor(name: string){
        this.busName = name;
    }
    addDate(date: DateTime){
        this.date.push(date);
    }
}
class Address{
    departurePlace: string;
    arrivalPlace: string;
    trip: Trip[] =[];
    constructor(departurePlace: string, arrivalPlace: string){
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
    }
    addTrip(trip: Trip){
        this.trip.push(trip);
    }
}

class Customer{
    firstName: string;
    lastName: string;
    address: Address[] =[];
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    addAddress(address: Address){
        this.address.push(address);
    }
}

class DateTime{
    date: string;
    time: string;
    constructor(date: string, time: string){
        this.date = date;
        this.time = time;
    }
}

let trip1 = new Trip("KAKA Bus");
let trip2 = new Trip("LYHOR Express");


let address1 = new Address("Phnom Penh, Cambodia","Kampot, Cambodia");
let address2 = new Address("Phnom Penh, Cambodia", "Sieam Reap, Cambodia");
let address3 = new Address("No","address")

let customer1 = new Customer("Him", "Hey");
let customer2 = new Customer("Sovanda","Chib");
let customer3 = new Customer("Ronan","Ogor");

let date1 = new DateTime("Monday - Sunday","07:00 AM");
let date2 = new DateTime("Monday -Sunday","07:00 PM");


customer1.addAddress(address3);
customer2.addAddress(address2);
customer3.addAddress(address3);
trip1.addDate(date1)
trip2.addDate(date2)
console.log(trip1, trip2, customer1, customer2, customer3);


