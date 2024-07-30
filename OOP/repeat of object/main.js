var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet()); // "Hello, there"
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"
var greeter3;
greeter3 = new Greeter();
console.log(greeter3.greet()); // "Hey there!"
