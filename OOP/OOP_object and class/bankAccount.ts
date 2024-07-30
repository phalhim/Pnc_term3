type bankAccount = {
    balance : number;
    name : string;
};

let phal : bankAccount = {balance : 500 , name : 'phal'};

function debit(account: bankAccount, valueDollars: number) {
    // complete this code to add valueDollars to the bank account
    account.balance -= valueDollars;
    return account;
};

debit(phal, 100);
console.log(phal);


function credit(account: bankAccount, valueDollars: number) {
    // complete this code to remove valueDollars from the bank account
    account.balance += valueDollars;
    return account;
}

credit(phal, 100);
console.log(phal);