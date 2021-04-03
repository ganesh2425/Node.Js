const fs = require ("fs")

//fs.writeFile("read.txt", "Hello today is Awesome day :)",
//(err)=>{
//console.log("file is created");
//console.log(err);
//});

//fs.appendFile("read.txt", "Good Morning to all guys:",
//(err)=>{
//    console.log("file added");
//});

fs.readFile("read.txt", "UTF-8", (err, data)=>{
    console.log(data);
})