class calculate{
    number1: number;
    number2: number;
    constructor(number1: number, number2: number){
        this.number1 = number1;
        this.number2 = number2;
    }
    sumNumber(){
      return this.number1 + this.number2;
    }
    minusNumber(){
        return this.number1 - this.number2
    }
    diuide(){
        return this.number1 * this.number2
    }
    multiple(){
        return this.number1 / this.number2
    }
    
}
let sumNumber = new calculate(1,2);
console.log(sumNumber.sumNumber());

let minusNumber = new calculate(40,30);
console.log(minusNumber.minusNumber());

let diuide = new calculate(4,3);
console.log(diuide.diuide());

let multiple = new calculate(8,2);
console.log(multiple.multiple());




