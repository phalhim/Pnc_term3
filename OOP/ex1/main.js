var BankAccount = /** @class */ (function () {
    function BankAccount(name) {
        this.balance = 0;
        this.name = name;
    }
    BankAccount.prototype.debit = function (amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
        }
    };
    return BankAccount;
}());
var ronanAccount = new BankAccount("ronan");
// ronanAccount.debit(1000);
console.log(ronanAccount.debit(1000));
