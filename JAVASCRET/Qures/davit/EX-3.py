fruits = eval(input("Enter here :"))
def reverseArray(array):
      result = []
      for i in range(len(array)):
            result.append(array[-1-i])
      return result
def reverseText(arrays):
      result = []
      for i in range(len(arrays)):
            word = ""
            for j in range(len(arrays[i])):
                  word += arrays[i][len(arrays[i])-1-j]
            result.append(word)
      return result
      
print(reverseArray(reverseText(fruits)))