// aqui vai o código que acessa o banco de dados
// let usersCollection = require('./Users.json');
// const users = require('../db/models/user');
const database = require('../db/models');


class UserController {
  static async getAllUsers(req, res){
    const allUsers = await database.User.findAll()
    return res.status(200).json(allUsers)
  }

  static async getUserById(req, res){
    const { uid } = req.params
    const user = await database.User.findAll({
      where: {
        id: Number(uid)
      }
    });
    return res.status(200).json(user)
  }

  static async deleteUser(req, res){
    const { uid } = req.params
    const deleteUser = await database.User.destroy({
      where: {
        id: Number(uid)
      }
    });
    return res.status(201).json(deleteUser)
  }

  static async updateUser(req, res){
    const updateUser = await database.User.update({userName: req.body.userName}, {
      where: {
        id: req.params
      }
    })
    return res.status(201).json(updateUser)
  }

  static async createUser(req, res){
    const {
      userName,
      email,
      password,
      role,
      restaurant
    } = req.body;
    const create = await database.User.create(req.body)
    return res.status(201).json(create)
  }
}

module.exports = UserController
