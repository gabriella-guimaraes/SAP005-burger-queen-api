const { Router } = require('express')
const UsersController = require('../controller/Users')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)

module.exports = router