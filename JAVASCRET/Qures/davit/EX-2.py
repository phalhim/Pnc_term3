words = eval(input("Enter word here :"))
newWords = []
for i in range(len(words)):
      for j in range(len(words[i])-1):
            if words[i][j].upper() == "E" and words[i][j+1].upper() == "E" :
                  newWords.append(words[i])
print(newWords)