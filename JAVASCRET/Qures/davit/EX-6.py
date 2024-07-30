#_________________1_______________
# number = [1,2,4,5,6,8]
# res = 0
# for i in range(len(number)):
#     if number[i] ==6:
#         res=i
#         print(res)


#________________2_______________
# number =[[1,2,3],
#          [2,3,4],
#          [3,7,8]]
# result =0
# row = []
# column = []
# for i in range(len(number)):
#    for j in range(len(number[i])):
#        if number[i][j] == 7 or number[j][i]==7:
#            result==number[i][j]
#            print(result)
      
      
      
      
#____________3__________


# words = input().upper()
# char1 = input().upper()
# char2 = input().upper()

# def Character(words, char1, char2): 
#     for word in words:
#         if word == char1:
#             for word in words:
#                 if word == char2:
#                     return "Valid"
        
#     return "Not Valid"

# print(Character(words,char1,char2))



text ="ab"

for i in range(len(text)):
    res =0
    if text[i] == "ab":
        
        print("GOOD")
    else:
        res+=1
        print("BAD")

