const database = require('../db/models');
const UsersService = require('../services/UsersServices');

class UserController {
  static async getAllUsers(req, res){
    try{
      const allUsers = await UsersService.getUsers()
      
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
      const uid = req.params.uid
      const user = await UsersService.getUser(uid);

      return res.status(200).json(user)

      // if(user.length > 0){
      //   return res.status(200).json(user)
      // } else {
      //   return res.status(400).json({
      //     message: `no user with the id = ${uid} found.`
      //   })
      // }
    }
    catch(error){
      return res.status(400).json({ error: error.message });
    }
    
  }

  static async deleteUser(req, res){
    try{
      const uid = req.params.uid
      const deleteUser = await UsersService.destroyUser(uid);
      return res.status(201).json({message: "User deleted!"})
    }
    catch(error){
      return res.status(400).json({ error: error.message });
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
      const userData = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        restaurant: req.body.restaurant
      }
      
      if(userData.userName === "" || userData.email === "" || userData.password === "" || userData.role === "" || userData.restaurant === ""){
        return res.json({message: "userName, email, password, role or restaurant not provided."})
      } else{
        const createUser = await UsersService.newUser(userData)
        return res.status(201).json({message: "User created!"})
      }

      
    }
    catch(error){
      console.log(error.message)
    }
  }
}

module.exports = UserController
