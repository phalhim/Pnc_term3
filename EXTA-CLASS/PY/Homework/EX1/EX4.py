numbers = [7, 3, 7, 5, 6, 8, 7]
# - Find average of even number
average=1
sum = 0
cound = 0
for i in range(len(numbers)):
    if numbers[i]%2 == 0:
        sum +=numbers[i]
        cound += 1
average=sum/cound
print(average)