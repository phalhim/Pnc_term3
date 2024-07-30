fruits  = ["banana", "mango", "coconut", "orange"]
# - How many letter in each fruit : [6, 5, 7, 6]
# counttext = []
# coundNumber = 0
# for i in range(len(fruits)):
#     newFruit=fruits[i]
#     for j in range(len(newFruit)):
#         coundNumber = int(j)
#     counttext.append(coundNumber+1)
# print(counttext)



#===================================================

res =[]
for i in range(len(fruits)):
    res.append(len(fruits[i]))
print(res)