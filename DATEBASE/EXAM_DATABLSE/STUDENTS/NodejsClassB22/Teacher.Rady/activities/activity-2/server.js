const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT);

const STUDENTS = [ "Phally", "Sinai", "Siny", "Channary",]


// 1- Serve the /public folder to serve the FRONT-END code


// 2-  On GET /students/   : return the list of students

