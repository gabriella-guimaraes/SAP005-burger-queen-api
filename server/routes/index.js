const { Router } = require('express');
const UsersRouter = require("./UsersRouter");
const ProductsRouter = require('./ProductsRouter');
const OrdersRouter = require("./OrdersRouter");
const AuthRouter = require("./AuthRouter");

const router = Router()

// aqui vai todas as rotas
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);
router.use('/auth', AuthRouter);

module.exports = router
