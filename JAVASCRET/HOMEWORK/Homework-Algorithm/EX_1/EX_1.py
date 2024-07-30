#- Sum only number greater than 3
numbers = [1, 3, 4, 2, 6, 8, 9]
result =0
for i in range(len(numbers)):
    if numbers[i] > 3 :
        result+=numbers[i]
print(result)

