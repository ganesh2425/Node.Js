const fs = require ("fs");

fs.readFile("emp.json", "utf-8", (err, data)=>{
    let emp =JSON.parse(data);
    console.log(emp);
});