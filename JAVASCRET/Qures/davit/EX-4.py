listStudent = eval(input("Enter here:"))
studentFailed = {}
count = 0
studentName = []
for student in listStudent:
      if student["subject"] == "Algorithm" :
            if student['score'] <= 50 :
                  count += 1
                  studentName.append(student['name'])
studentFailed["number"] = count
studentFailed["students"] = studentName

print(studentFailed)