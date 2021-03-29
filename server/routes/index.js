const { Router } = require('express')
const UsersRouter = require("./UsersRouter")
const ProductsRouter = require('./ProductsRouter')
// const OrdersRouter = require('./OrdersController')

const router = Router()

// aqui vai todas as rotas
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
// router.use('/orders', OrdersRouter);

module.exports = router
