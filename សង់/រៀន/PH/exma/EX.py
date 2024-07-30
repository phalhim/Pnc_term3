# Kanha record her score in list :
score = [
  {"subject": "JavaScript", "score": 80, "teacher": "Yon"},
  {"subject": "Algorithm", "score": 40, "teacher": "Mengheang"},
  {"subject": "Software Deployment", "score": 69, "teacher": "Rady"},
]

#1 - Write program to find the subject that Kanha failed
for i in range(len(score)):
  if score[i]['score'] < 50:
    print(score[i]['subject'])

#2 - Write program to find average score of Kanha
# sum = 0
# average =1
# for i in range(len(score)):
#   sum+=score[i]['score']
# average=sum/len(score[i])
# print(average)

#3 - Write program to find teacher name who teach Algorithm
# for i in range(len(score)):
#   if score[i]['subject'] =='Algorithm':
#     print(score[i]['teacher'])