# Find average of odd number
numbers = [1, 3, 4, 2, 6, 8, 9]
odd=0
average=1
for i in range(len(numbers)):
    if numbers[i] %2 !=0:
        odd+=numbers[i]
average=odd/len(numbers)  
print(average)
