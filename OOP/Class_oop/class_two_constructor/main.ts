class BankAccount {
    balance: number;
    name: string;
    constructor( balance: number, name: string) {
        this.balance = balance;
        this.name = name;
    };
};
let myAcount = new BankAccount(100, "phal");
let myAcount_2 = new BankAccount(1000, "Ly")
console.log(myAcount);
console.log(myAcount_2);

