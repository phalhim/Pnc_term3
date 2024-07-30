const express = require('express');
const routes = require('./routes.js'); 
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//run html of js
// app.use(express.static("public"))
app.use('/',routes)


const port = 3000;
app.listen(port, () => {
    console.log('Server run port:' + port);
});
