const database = require('../db/models');

class ProductsServices {
    static async getProducts(){
        return await database.Products.findAll()
    }

    static async getProduct(productId){
        return await database.Products.findOne({
            where: {
                id: productId
            }
        })
    }

    static async destroyProduct(productId){
        return await database.Products.destroy({
            where: {
                id: productId
            }
        })
    }

    static async newProduct(data){
        return await database.Products.create(data)
    }
}

module.exports = ProductsServices