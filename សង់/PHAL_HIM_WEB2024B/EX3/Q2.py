#  Count the number of letters each fruit expect result: [6, 5, 7, 6]
fruit =["banana", "mango", "coconut", "orange"]
result =[]
for i in range(len(fruit)):
    result.append(len(fruit[i]))
print(result)