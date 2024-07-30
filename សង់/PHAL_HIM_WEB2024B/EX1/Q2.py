#  Find average income of Mr. Vanda in week one.
moneysOfWeekOne = [10, 15, 9, 20, 5, 30, 12]
sum= 0
average=1
for i in range(len(moneysOfWeekOne)):
    sum+=moneysOfWeekOne[i]
average =sum/len(moneysOfWeekOne)
print(average)
