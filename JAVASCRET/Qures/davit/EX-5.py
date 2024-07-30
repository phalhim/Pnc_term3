listSubject = eval(input("Enter here:"))
listTeachers = eval(input("Enter here:"))
result = ""
countOfSubjectAlgorithm = 0
for teacher in listTeachers:
      for subject in listSubject:
            if subject["subject"] == "algorithm" :
                  if teacher["teacher-id"] == subject["teacher-id"]:
                        result += teacher["last-name"] + " "+ teacher["first-name"] + "\n"
                        countOfSubjectAlgorithm += 1                       
if countOfSubjectAlgorithm < 1 :
      result = "No teacher in algorithm subject"
print(result)     