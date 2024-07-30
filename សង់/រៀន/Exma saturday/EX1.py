score = [
  {"subject": "Algorithm", "score": 80, "teacher": "Yon"},
  {"subject": "JavaScript", "score": 40, "teacher": "Mengheang"},
  {"subject": "Software Deployment", "score": 69, "teacher": "Rady"},
]

for i in range(len(score)):
    if score[i]['score'] <50:
        print(score[i]['subject'])
        


sum =0
average =1
for i in range(len(score)):
    sum += score[i]['score']
average =sum/len(score[i])
print(average)



res =''
for i in range(len(score)):
    if score[i]['subject'] == 'Algorithm':
        res=score[i]['teacher'] 
        print(res)