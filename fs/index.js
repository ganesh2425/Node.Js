const fs = require('fs')

//creating a new file
//fs.writeFileSync("read.text", "This is Bangalore");

//fs.writeFileSync("read.text","Hello World Gd Morning, This is Bangalore");

//fs.appendFileSync("read.text", "I'm fine What about you!!!!")

//const buf_data = fs.readFileSync("read.text");

//org_data = buf_data.toString();

//console.log(org_data);

//to rename the file

fs.renameSync("read.text", "readwrite.text");