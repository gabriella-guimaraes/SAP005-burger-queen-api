const { Router } = require('express')
const UsersController = require('../controller/Users')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)
router.get("/:uid", UsersController.getUserById)
router.delete("/", UsersController.deleteUser)
router.put("/", UsersController.updateUser)
router.post("/", UsersController.addNewUser)

module.exports = router