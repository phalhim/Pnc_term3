# arrray2D = [['Hello'],['woed']]
# for i in range(len(arrray2D)):
#     print(arrray2D[i])


#__________________________________________________
# arrray2D = [['Hello'],['woed']]
# for i in range(len(arrray2D)):
#     for j in range(len(arrray2D[i])):
#         print(arrray2D[i][j])



#_______________________________________________________
# arrray2D = [['Hello'],['woed']]
# sum = 0
# for i in range(len(arrray2D)):
#     sum +=1
# print(sum)



#________________________________________________________
# arrray2D = [['Hello'],['woed']]
# res = []
# for i in range(len(arrray2D)):
#     arrray = arrray2D[i]
#     sum = 0
#     for j in range(len(arrray)):
#         word = arrray[j]
#         for k in range(len(word)):
#             sum+=1
#     res.append(sum)
# print(res)



#_________________________________________________________________
arrray2D = [['Hello'],['woed']]
res = []
for i in range(len(arrray2D)):
    arrray = arrray2D[i]
    sum = 0
    for j in range(len(arrray)):
        word = arrray[j]
        for k in range(len(word)):
            sum += int(word[k])
    res.append(sum)
print(res)