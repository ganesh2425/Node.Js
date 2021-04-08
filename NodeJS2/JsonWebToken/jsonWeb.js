const jwt = require("jsonwebtoken");

//how to create jwt token
let user = {
    id: 36414454,
    name: "Samantha",
    email: "sam@gmail.com",
};
let payload = {
    id: user.id,
    name: user.name,
};
let secretKey = "vdkgvvvsd";
let token = jwt.sign(payload, secretKey, {expiresIn: 60 * 60});
console.log(token);

//how to verify token
jwt.verify(token, secretKey, (err, decoded)=>{
    console.log(decoded);
});
