const fs = require('fs');
let dataJson = fs.readFileSync('data.json');
let datas = JSON.parse(dataJson);

for(let data of datas) {
    result = data.name + " : " + data.job
    console.log(result);
}