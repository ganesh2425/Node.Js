const fs = require("fs")

//fs.writeFileSync("read.txt", "Hai this is Gan how r u guys :)");

//fs.appendFileSync("read.txt", "I'm fine bro what about you");

const data = fs.readFileSync("read.txt", "UTF-8");
console.log(data);
console.log("Hello World");