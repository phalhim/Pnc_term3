# array2d= [[1, 2,3,4],
#           [3,6 ,7,8]]
# row = 0
# column = 0
# iseven = True

# for i in range(len(array2d)):
 
#     for j in range(len(array2d[i])):
#        if array2d[i][j] == 7 and array2d[i][j] !=" " and iseven:
#             row = i
#             column = j
#             iseven=False
# print('Row:', str(row) + ' and ' +'Column:', str(column))



array2d = [[20,50]]
row =array2d[0]
# column =array2d[0]
sum = 0
# avg = 1
for i in range(len(row)):
    sum += row[i]
# avg=sum/len(row)
print(sum)




# arr =[[7,0,7],[7,0,7],[7,0,7]]
# found_sevens = False

# for i in range(len(arr)):
#     contains_sevens = True
#     for num in arr[i]:
#         if num != 7:
#             contains_sevens = False
    
#     if contains_sevens:
#         found_sevens = True

# if found_sevens:
#     print("win")
# else:
#     print("lost")

#===================================================================================
# def average(scores):
#     sum = 0
#     aver = 0
#     for i in range(len(scores)):
#        sum +=scores[i]
#        aver+=1
#     total=sum/aver
#     return total

# array = eval(input('enter : '))
# print(average(array))



#=======================================================================================
# def CountChar(word, char):
    #TODO


# def countChar(word,char):
#     res =0
#     for i in range (len(word)):
#         if word[i].upper()==char.upper():
#             res+=1
#     return res

# resAll=0

# # loop Array
# words =['ASD','AWE','FGH']
# char=input("Enter Char:")
# for i in range (len(words)):
#     resAll+=countChar(words[i],char)
    
# print(resAll)
    
    
#INPUT DATA---------------------------------------------------------
# words = eval(input())

# character = input()
# number = int(input())
# score = []
# for i in range(number):
#     student = eval(input())
#     score.append(student)
# print(score)

# def average(scores):
#     sum =0
#     ave = len(scores)
#     for i in range(len(scores)):
#         sum += scores[i]
#     totalAverage = sum/ave
#     return totalAverage
# total = 0
# ave = 0
# for j in range(len(score)):
#     total+=average(score[j])
# ave=total/len(score)
# print(ave)


# result = ""
# i=0
# number = int(input())
# while (i<2):
#     if number!=72:
#         print("again")
#         number = int(input())
#     if number==72:
#         result="win"
#         i=2
#     else:
#         result="lost"
#     i+=1
# print(result)



# array2D1 = [[1,2,3],[4,5,6]]
# array2D2 = [[1,2,3],[4,9,6]]
# # res = True
# result = "equal"
# i=0
# while (result and i<len(array2D1)):
#     for j in range(len(array2D1[i])):
#         if array2D1[i][j] != array2D2[i][j]:
#             # res=False
#             result= "not equal"
#     i+=1
# print(result)


# array = [['hello'],['you']]
# for i in range(len(array)):
#    for j in range(len(array[i])):
#        if array[i][j] == 'h' or array[i][j]=='H':
#            array[i][j]='k'
# print(array[i][j])