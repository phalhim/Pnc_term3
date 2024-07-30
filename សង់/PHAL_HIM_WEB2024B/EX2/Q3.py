#  After married, how much his money remaining include with guest pay back? 
drink = [
{"name": "cocacola", "price": 8},
{"name": "Hanuman", "price": 10},
{"name": "Water", "price": 5},
]

sumOfDrink =0
for i in range(len(drink)):
    sumOfDrink+=drink[i]['price']

foods = [
{"name": "fish", "price": 9},
{"name": "meat", "price": 12},
{"name": "chicken", "price": 7},
]

sumOfFoods=0
for i in range(len(foods)):
    sumOfFoods+=foods[i]['price']


guests = [
{"name": "rady", "pay": 20},
{"name": "sokhom", "pay": 10},
{"name": "yon", "pay": 25},
{"name": "mengheang", "pay": 5},
{"name": "dara", "pay": 15},
]

sumOfGuests=0
result =0
for i in range(len(guests)):
    sumOfGuests+=guests[i]['pay']
result=100+sumOfGuests-sumOfDrink-sumOfFoods
print(result)