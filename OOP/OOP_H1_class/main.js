var Country = /** @class */ (function () {
    function Country(name, population, capital, currency) {
        this.name = name;
        this.population = population;
        this.capital = capital;
        this.currency = currency;
    }
    Country.prototype.getInformation = function () {
        return "Welcome to" + this.name + this.population + ' millions people, cpital' + this.capital + 'and currency' + this.currency;
    };
    return Country;
}());
var country_1 = new Country('France', 70, 'Paris', 'Euro');
var country_2 = new Country('Cambodia', 17, 'Phnom Penh', 'Riel');
var country_3 = new Country('UK', 80, 'London', 'Pound');
var country_4 = new Country(' France ', 70, ' Paris ', ' Euro');
console.log(country_1, country_2, country_3, country_4.getInformation());
