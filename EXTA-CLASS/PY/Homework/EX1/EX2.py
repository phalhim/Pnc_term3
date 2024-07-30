numbers = [7, 3, 7, 5, 6, 8, 7]
# - Find index of first 7
find = 0
result = True
for i in range(len(numbers)):
    if numbers[i] == 7 and result == True:
        find += numbers[i]
        result = False
print(find)

