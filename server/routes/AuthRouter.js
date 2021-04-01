const { Router } = require('express')
const AuthController = require('../controller/AuthController')
const router = Router()

router.post('/', AuthController.login);

module.exports = router