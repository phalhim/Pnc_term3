#Find average of numbers : answer (37/4 = 9.25)
numbers = "10 2 5 20"
sum = 0
count = 0
result = ""

for i in range(len(numbers)):
    if numbers[i] == " " or i == len(numbers) - 1:
        if i == len(numbers) - 1:
            result += numbers[i]
        sum += int(result)
        count += 1
        result = ''
    else:
        result += numbers[i]

average = sum / count
print(average)