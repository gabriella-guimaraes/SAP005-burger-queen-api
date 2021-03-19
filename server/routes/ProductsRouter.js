const { Router } = require('express')
const ProductsController = require('../controller/Products')

const router = Router()

router.get("/", ProductsController.getAllProducts)
router.get("/:id", ProductsController.getProductById)
router.put("/", ProductsController.updateProduct)
router.delete("/", ProductsController.deleteProduct)
router.post("/", ProductsController.postProduct)

module.exports = router