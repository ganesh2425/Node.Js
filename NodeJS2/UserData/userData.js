const bcrypt = require("bcryptjs");
let userDetails = {
    name: "Samantha",
    password: "sam@1234",
    pin: 242526,
};
let salt = bcrypt.genSaltSync(5);
newPassword = bcrypt.hashSync(userDetails.password, salt);
console.log(newPassword);

userDetails = {...userDetails, password: newPassword};
console.log(userDetails);

if(bcrypt.compareSync("sam@1234", userDetails.password)) {
    console.log("password match")
}else{
    console.log("password doesn't match");
}