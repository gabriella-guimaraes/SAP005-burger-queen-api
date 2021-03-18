const { Router } = require('express')
const OrderController = require('../controller/Orders')

const router = Router()

router.get("/", OrderController.getAllOrders)

module.exports = router