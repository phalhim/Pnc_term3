#  How much his spent on drink and food?

drink = [
{"name": "cocacola", "price": 8},
{"name": "Hanuman", "price": 10},
{"name": "Water", "price": 5},
]

sumDrink =0
for i in range(len(drink)):
    sumDrink+=drink[i]['price']

foods = [
{"name": "fish", "price": 9},
{"name": "meat", "price": 12},
{"name": "chicken", "price": 7},
]

sumFoods=0
result = 0
res=0
for i in range(len(foods)):
    sumFoods+=foods[i]['price']
result=sumFoods+sumDrink

print(result)