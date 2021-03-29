const database = require('../db/models');

class ProductsController {
    static async getAllProducts(req, res){
        try{
            const allProducts = await database.Products.findAll()
            
            if(allProducts.length > 0){
              return res.status(200).json(allProducts)
            } else {
              return res.json({
                message: "processing error"
              })
            }
          }
      
          catch(error){
            return res.status(400).json({ error: error.message });
          }
    }

    static async getProductById(req, res){
        try{
            const { productId } = req.params
            const product = await database.Products.findAll({
              where: {
                id: Number(productId)
              }
            });
      
            if(product.length > 0){
              return res.status(200).json(product)
            } else {
              return res.json({
                message: `no product with the id = ${uid} found.`
              })
            }
          }
          catch(error){
            return res.status(400).json({ error: error.message });
          }
    }

    static async deleteProduct(req, res){
        try{
            const { productId } = req.params
            const deleteProduct = await database.Products.destroy({
              where: {
                id: Number(productId)
              }
            });
            return res.status(201).json(deleteProduct)
          }
          catch(error){
            console.log(error.message)
          }
    }

    static async updateProduct(req, res){
        try{
            const updateProduct = await database.Products.update({
              name: req.body.name,
              price: req.body.price,
              flavor: req.body.flavor,
              complement: req.body.complement,
              image: req.body.image,
              sub_type: req.body.sub_type
            }, {
              where : {
                id: req.params.id
              }
            })
      
            res.status(200).json(updateProduct)
      
          }
          catch(error){
              console.log(error.message)
            res.status(400).json({
                message: "update error"
            })
          }
    }

    static async createProduct(req, res){
        try{
            const createProduct = await database.Products.create({
                name: req.body.name,
                price: req.body.price,
                flavor: req.body.flavor,
                complement: req.body.complement,
                image: req.body.image,
                sub_type: req.body.sub_type
            })
      
            res.status(201).json(createProduct)
          }
          catch(error){
            console.log(error.message)
          }
    }
}

module.exports = ProductsController
