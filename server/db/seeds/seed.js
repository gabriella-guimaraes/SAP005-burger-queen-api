require("dotenv").config();

const bcrypt = require("bcrypt");
const User = require("../models/user");

User.create({
    userName: "Admin",
    password: bcrypt.hashSync("123", 10),
    email: "admin@email.com",
    role: "admin",
    restaurant: "gg-burguer"
});

User.findAll().then((result) => {
    console.log(result);
});  