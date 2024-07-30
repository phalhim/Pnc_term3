// class UserAccount{
//     name: string;
//     balance: number;
//     constructor(name: string, balance: number){
//         this.name = name;
//         this.balance = balance;
//     }
//     deposit(amount: number){
//         this.balance += amount;
//     }
//     getBalance(): number{
//         return this.balance;
//     }
//     getName(): string{
//         return this.name;
//     }
//     setName(name: string):void{
//         this.name = name;
//     }
// }
// let names = new UserAccount('phal', 80);
// names.deposit(10)
// names.getName()
// names.setName('him')
// console.log(names);
// class DoorWithLock{
//     private doorld: string;
//     private secretKey: string;
//     constructor(doorld: string, secretKey: string){
//         this.doorld = doorld;
//         this.secretKey = secretKey;
//     }
//     public canOpan(Key:string):boolean{
//         return Key === this.secretKey;
//     }
// }
// let doorld = new DoorWithLock('phal','him')
// console.log(doorld.canOpan('true'));
var Bob = /** @class */ (function () {
    function Bob() {
        this.name = 'test';
    }
    Bob.prototype.getName = function () {
        return this.name;
    };
    return Bob;
}());
var bob = new Bob();
var bobName = bob.getName();
bobName = 'ronan';
console.log(bob.getName());
