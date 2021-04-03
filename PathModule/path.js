const path = require ("path");
console.log(path.dirname("C:/Users/Ganesh/Desktop/NodeJs/PathModule/path.js"));
console.log(path.extname("C:/Users/Ganesh/Desktop/NodeJs/PathModule/path.js"));
console.log(path.basename("C:/Users/Ganesh/Desktop/NodeJs/PathModule/path.js"));

const myPath = path.parse("C:/Users/Ganesh/Desktop/NodeJs/PathModule/path.js");
console.log(myPath.name);
