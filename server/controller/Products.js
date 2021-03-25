const database = require('../db/models');
const products = require('../db/models/products');


class ProductsController {
    static async getAllProducts(req, res){
        const allProducts = await database.Products.findAll()
        return res.status(200).json(allProducts)
    }

    static async getProductById(req, res){
        const { productId } = req.params
        const product = await database.Products.findAll({
            where: {
                id: Number(productId)
            }
        });
        return res.status(200).json(product)
    }

    static async deleteProduct(req, res){
        const { productId } = req.params
        const deleteProduct = await database.Products.destroy({
            where: {
                id: Number(productId)
            }
        });
        return res.status(201).json(deleteProduct)
    }

    static async updateProduct(req, res){
        const updateProduct = await database.Products.update({name: req.body.name}, {
            where: {
                id: req.params
            }
        });
        return res.status(201).json(updateProduct)
    }

    static async createProduct(req, res){
        const {
            name,
            price,
            flavor,
            complement,
            image,
            sub_type
        } = req.body;
        const create = await database.Products.create(req.body)
        return res.status(201).json(create)
    }
}

module.exports = ProductsController
