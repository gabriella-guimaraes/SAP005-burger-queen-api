require("dotenv").config();

const bcrypt = require("bcrypt");
const database = require("../models");

database.User.create({
    userName: "Admin",
    password: bcrypt.hashSync("123", 10),
    email: "admin@email.com",
    role: "admin",
    restaurant: "gg-burguer"
});

database.User.findAll().then((result) => {
    console.log(result);
});  