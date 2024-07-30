numbers = [7, 3, 7, 5, 6, 8, 7]
#- Remove last 7 value from array
res = []
for i in range(len(numbers)):
    if numbers[i] !=7:
        res.append(numbers[i])
print(res)
