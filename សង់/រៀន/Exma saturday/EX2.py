# arrray2D = [['Hello'],['world']]
# sum=0
# for i in range(len(arrray2D)):
#     for j in range(len(arrray2D[i])):
#         sum += len(arrray2D[i][j])
# print(sum)



# arrray2D = [['Hello'],['world']]
# arrray2D.reverse()
# print(arrray2D)


arrray2D = [['Hello'],['world']]
res =[]
for i in range(len(arrray2D)):
    for x in range(len(arrray2D[i])):
        result =''
        for j in range(len(arrray2D[i][x])):
            result+=arrray2D[i][x][-(j+1)]
        res.append(result)
print(res)