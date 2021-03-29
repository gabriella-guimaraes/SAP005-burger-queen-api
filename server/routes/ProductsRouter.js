const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

router.get("/", ProductsController.getAllProducts)
router.get("/:productId", ProductsController.getProductById)
router.put("/:id", ProductsController.updateProduct)
router.delete("/:productId", ProductsController.deleteProduct)
router.post("/", ProductsController.createProduct)

module.exports = router