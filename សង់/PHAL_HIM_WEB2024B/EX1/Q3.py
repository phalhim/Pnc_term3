# Find the lowest income of Mr. Vanda in week one
moneysOfWeekOne = [10, 15, 9, 20, 5, 30, 12]
result =moneysOfWeekOne
for i in range(len(result)):
    if result[i]<moneysOfWeekOne:
        result+=moneysOfWeekOne
print(result)