let fs = require('fs');
// let text ='BIBI\nBOBO';
let text = {"name":"app","description":"hello world"};
let convert =JSON.stringify(text);
fs.writeFileSync('app.json',convert);


