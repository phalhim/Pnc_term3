# Remove fruit name that contain letter “o” from list expect result: [“banana”]
fruit =["banana", "mango", "coconut", "orange"]
result =[]
res=0
for i in range(len(fruit)):
    results=False
    for j in range(len(fruit[i])):
        if fruit[i][j] !='o' and result==True:
           res+=1
           results=False
        else:
            results=True
result.append(results)
print(result)