var BankAcount = /** @class */ (function () {
    function BankAcount(balance, name) {
        this.balance = balance;
        this.name = name;
    }
    ;
    return BankAcount;
}());
;
var myAcount = new BankAcount(100, "phal");
var myAcount_2 = new BankAcount(1000, "Ly");
console.log(myAcount);
console.log(myAcount_2);
