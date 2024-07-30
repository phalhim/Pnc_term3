

class Country {
    name: string;
    population: number;
    capital: string;
    currency: string;
    
    constructor(name: string, population: number, capital: string, currency: string) {
        this.name = name;
        this.population = population;
        this.capital = capital;
        this.currency = currency;
        
    }
    getInformation(){
        return "Welcome to"+ this.name + this.population +' millions people, cpital' +this.capital+'and currency'+this.currency;
    }
}
let country_1 = new Country('France', 70, 'Paris', 'Euro');
let country_2 = new Country('Cambodia', 17, 'Phnom Penh', 'Riel');
let country_3 = new Country('UK', 80, 'London', 'Pound');
let country_4 = new Country(' France ', 70, ' Paris ', ' Euro');
console.log(country_1, country_2, country_3 ,country_4.getInformation());




