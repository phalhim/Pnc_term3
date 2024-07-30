class Person {
    private name: string
    protected address: string
    constructor(name:string, address:string) {
        this.name = name
        this.address = address
    }

}
class Address extends Person {
    constructor(name:string , address:string) {
        super(name, address);
    }
    getaddress():string {
        return this.address;
    }
}
let person = new Address('phal', 'RTK');
console.log(person);
