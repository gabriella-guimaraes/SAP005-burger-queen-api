const { Router } = require('express')
const OrderController = require('../controller/OrdersController')

const router = Router()

router.get("/", OrderController.getAllOrders)
router.get("/:productId", OrderController.getOrderById)
router.put("/:productId", OrderController.updateOrder)
router.delete("/:productId", OrderController.deleteOrder)
router.post("/", OrderController.createOrder)

module.exports = router