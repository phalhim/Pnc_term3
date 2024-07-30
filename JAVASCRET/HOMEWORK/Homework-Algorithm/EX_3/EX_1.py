#Sum all number in string : answer (37)
numbers = "10 2 5 20"
sum = 0
result=""
for i in range (len(numbers)):
    if numbers[i]== " " or i==len(numbers)-1:  
        if i==len(numbers)-1:
            result+=numbers[i]
        sum+=int(result)
        result=''
    else:
        result+=numbers[i]
print(sum)
