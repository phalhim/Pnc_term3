# Ex1 - String array
# Text = "How are you?"
# #1 - Display word by word from text
#   How
#   are
#   you?

# Text = "How are you?"
# res = ''
# for i in range(len(Text)):
#     if Text[i] != " ":
#         res += Text[i]
#     else:
#         print(res)
#         res = ''
# print(res)



# #2 - Create new array from text seperate by space
# ["How","are","you?"]
#===========1=====================================================================
# Text = "How are you?"
# res =[]
# res.append(Text)
# print(res)
#============2=====================================================================
# Text = "How are you?"
# res =Text.split()
# print(res)

# ---------------------------------------------------
# Ex2 - String array

# arr = ["banana","Banana","Apple","coconut", "mango", "coconut"]

# #1 - How many banana in list
# sum =0
# for i in range(len(arr)):
#     if arr[i]=='banana' or arr[i]=='Banana':
#         sum+=1
# print(sum)


# #2 - How many letter "o" in list
# sum=0
# for i in range(len(arr)):
#     for j in range(len(arr[i])):
#         if arr[i][j]=='o' and arr[i][j]:
#             sum +=1
# print(sum)



# #3 - Replace banana by Jackfruit
# res =[]
# for i in range(len(arr)):
#     if arr[i] =='banana'or arr[i]=='Banana':
#         arr[i]='Jackfruit'
#     res.append(arr[i])
# print(res)



# #4 - Create new list with unique fruit
# ["banana","Apple","coconut", "mango"]
# newArr = list(set(arr))
# print(newArr)


# #5 - Create new list store only letter "A" and "C" from list
arr = ["banana","Banana","Apple","coconut", "mango", "coconut"]
newArr=[]
for i in range(len(arr)):
    result =''
    for j in range(len(arr[i])):
        if arr[i][j]=='A' and arr[i][j] =='C':
            result+=1
    newArr.append(arr[i][j])
print(newArr)        
    
# -------------------------------------------------------------
# Ex3 - String array
# arr = ["banana","apple","mango", "Coconut"]
# #1 - How many letter of each value
#   [6,5,5,7]
# result =[]
# for i in range(len(arr)):
#     result.append(len(arr[i]))
# print(result)



# #2 - How many "A" letter of each value
#   [3,1,1, 0]


# arr = ["banana","apple","mango", "Coconut"]
# newArr =[]
# for i in range(len(arr)):
#     result=0
#     for j in range(len(arr[i])):
#         if arr[i][j]=='A' or arr[i][j]=='a':
#             result+=1
#     newArr.append(result)
# print(newArr)


# #3 - Move banana to last index
# arr = ["banana","apple","mango", "Coconut"]
# newArr=[]
# for i in range(len(arr)):
#     if arr[i]!='banana':
#         newArr.append(arr[i])
# print(newArr)


# #4 - Reverse each value in list
#   ['ananab','elppa'...]
# arr = ["banana","apple","mango", "Coconut"]
# newArr=[]
# for i in range(len(arr)):
#     result=''
#     for j in range(len(arr[i])):
#         result+=arr[i][-(j+1)]
#     newArr.append(result)
# print(newArr)