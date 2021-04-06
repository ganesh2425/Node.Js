/*const bioData = {
    name : "Samantha",
    age : 22,
    channel : "sam technical",
};
//for JSON data
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//for Object data
const objData = JSON.parse(jsonData);
console.log(objData);*/

const fs = require("fs");
const bioData ={
    name : "Nokia",
    price : 20000,
    model : "Nokia 43 inch 4k Television",
};
const jsonData = JSON.stringify(bioData);
//fs.writeFile("json1.json", jsonData, (err)=>{
//    console.log("done");
//});
fs.readFile("json1.json", "utf-8", (err, data)=>{
    const orgData = JSON.parse(data)
    console.log(orgData);
});