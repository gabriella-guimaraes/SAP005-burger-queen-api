// const jwt = require("jsonwebtoken");
// const { Bearer } = require("permit");

// const database = require("../db/models");
// const permit = new Bearer();

// module.exports = {
//     login(req, res, next){
//         const { email, password } = req.body;
//         database.User.findOne({
//             where : {
//                 email: email
//             }
//         })
//         .then((user) =>{
//             if(!user){
//                 return res.status(401).json({message: "email not found."})
//             }
//             if(!password){
//                 return res.status(401).json({message: "invalid password."})
//             }

//             let jwtPayload = { email: user.email, id: user.id };
//             let token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

//             return res.status(200).json({
//                 id: user.id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//                 restaurant: user.restaurant,
//                 token
//             });
//         })
//     },

//     auth(req, res, next){
//         const token = permit.check(req);

//         if (!token) {
//             permit.fail(res);
//             return res.status(401).json({ error: "authentication required!" });
//         }

//         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//             if(err){
//                 permit.fail(res);
//                 return res.status(401).json({message: "failed to authenticate token!"});
//             }

//             req.id = decoded.id;
//             next();
//         })
//     }
// }