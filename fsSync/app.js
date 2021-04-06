const fs = require ("fs");

const data = fs.readFileSync("data.txt", "utf-8");
console.log(data);

fs.writeFileSync("node.txt", data, "utf-8");
console.log("new file is created");