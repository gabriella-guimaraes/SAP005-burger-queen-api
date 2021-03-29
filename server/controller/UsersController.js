const database = require('../db/models');

class UserController {
  static async getAllUsers(req, res){
    try{
      const allUsers = await database.User.findAll({
        attributes: { exclude: ['password'] }
      })
      
      if(allUsers.length > 0){
        return res.status(200).json(allUsers)
      } else {
        return res.json({
          message: "processing error"
        })
      }
    }

    catch(error){
      return res.status(400).json({ error: error.message });
    }
  }

  static async getUserById(req, res){
    try{
      const { uid } = req.params
      const user = await database.User.findAll({
        where: {
          id: Number(uid)
        }
      });

      if(user.length > 0){
        return res.status(200).json(user)
      } else {
        return res.json({
          message: `no user with the id = ${uid} found.`
        })
      }
    }
    catch(error){
      return res.status(400).json({ error: error.message });
    }
    
  }

  static async deleteUser(req, res){
    try{
      const { uid } = req.params
      const deleteUser = await database.User.destroy({
        where: {
          id: Number(uid)
        }
      });
      return res.status(201).json(deleteUser)
    }
    catch(error){
      console.log(error.message)
    }
  }

  static async updateUser(req, res){
    try{
      const updateUser = await database.User.update({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        restaurant: req.body.restaurant
      }, {
        where : {
          id: req.params.id
        }
      })

      res.status(200).json(updateUser)

    }
    catch(error){
      console.log(error.message)
    }
  }

  static async createUser(req, res){
    try{
      const createUser = await database.User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        restaurant: req.body.restaurant
      })

      res.status(201).json(createUser)
    }
    catch(error){
      console.log(error.message)
    }
  }
}

module.exports = UserController
