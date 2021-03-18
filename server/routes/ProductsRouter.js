const { Router } = require('express')
const ProductsController = require('../controller/Products')

const router = Router()

router.get("/", ProductsController.getAllProducts)

module.exports = router