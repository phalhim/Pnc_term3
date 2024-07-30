var Trip = /** @class */ (function () {
    function Trip(name) {
        this.date = [];
        this.busName = name;
    }
    Trip.prototype.addDate = function (date) {
        this.date.push(date);
    };
    return Trip;
}());
var Address = /** @class */ (function () {
    function Address(departurePlace, arrivalPlace) {
        this.trip = [];
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
    }
    Address.prototype.addTrip = function (trip) {
        this.trip.push(trip);
    };
    return Address;
}());
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.address = [];
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.addAddress = function (address) {
        this.address.push(address);
    };
    return Customer;
}());
var DateTime = /** @class */ (function () {
    function DateTime(date, time) {
        this.date = date;
        this.time = time;
    }
    return DateTime;
}());
var trip1 = new Trip("KAKA Bus");
var trip2 = new Trip("LYHOR Express");
var address1 = new Address("Phnom Penh, Cambodia", "Kampot, Cambodia");
var address2 = new Address("Phnom Penh, Cambodia", "Sieam Reap, Cambodia");
var address3 = new Address("No", "address");
var customer1 = new Customer("Him", "Hey");
var customer2 = new Customer("Sovanda", "Chib");
var customer3 = new Customer("Ronan", "Ogor");
var date1 = new DateTime("Monday - Sunday", "07:00 AM");
var date2 = new DateTime("Monday -Sunday", "07:00 PM");
customer1.addAddress(address3);
customer2.addAddress(address2);
customer3.addAddress(address3);
trip1.addDate(date1);
trip2.addDate(date2);
console.log(trip1, trip2, customer1, customer2, customer3);
