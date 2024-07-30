#  Find remaining money after his spent on drink

drink = [
{"name": "cocacola", "price": 8},
{"name": "Hanuman", "price": 10},
{"name": "Water", "price": 5},
]

sum =0
result =0
for i in range(len(drink)):
    sum+=drink[i]['price']
result=100-sum
print(result)