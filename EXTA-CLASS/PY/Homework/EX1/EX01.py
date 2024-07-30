numbers = [7, 3, 7, 5, 6, 8, 7, 5]
# - Sum only even number
# sum = 0
# for i in range(len(numbers)):
#     if numbers[i]%2 ==0:
#         sum +=numbers[i]
# print(sum)

#==============================================================
# - Find index of first 7
find = 0
result = True
for i in range(len(numbers)):
    if numbers[i] == 5 and result == True:
        find += numbers[i]
        result = False
print(find)


#====================================================================
# - Remove last 7 value from array
# res = []
# for i in range(len(numbers)):
#     if numbers[i] !=7:
#         res.append(numbers[i])
# print(res)



#====================================================================
# - Find average of even number

# average=1
# sum = 0
# cound = 0
# for i in range(len(numbers)):
#     if numbers[i]%2 == 0:
#         sum +=numbers[i]
#         cound += 1
# average=sum/cound
# print(average)