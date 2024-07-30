require('dotenv').config();
 
const { time } = require('console');
const e = require('express');
const express = require('express');
const app = express();

const router = require('./routes/item_routes');

const port = process.env.port||3000;
app.use(express.json());

app.listen(port, (req,res) => {
    console.log(`Example app listening at http://localhost:${port}`)
})


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

const itmRouter = require("./routes/item_routes");


app.use("/api/items",itmRouter);
