const database = require('../db/models');

class OrdersServices {
    static async getOrders(){
        return await database.Orders.findAll({
            include: [{
                model: database.Products,
                as: "products",
                required: false,
                attributes: ["id", "name", "flavor", "complement"],
                through: {
                    model: database.ProductsOrders,
                    as: "productsOrdersQtd",
                    attributes: ["qtd"]
                }
            },
            {
                model: database.User,
                required: false,
                attributes: ["userName", "id"]
            }]
        });
    }

    static async getOrder(orderId){
        return await database.Orders.findOne({
            where: {
                id: orderId
            },
            include: [{
                model: database.Products,
                as: "products", 
                required: false,
                attributes: ["id", "name", "flavor", "complement"],
                through: {
                    model: database.ProductsOrders,
                    as: "productsOrdersQtd",
                    attributes: ["qtd"]
                }
            },
        {
            model: database.User,
            required: false,
            attributes: ["userName", "id"]  
        }]
        })
    }

    static async destroyOrder(orderId){
        return await database.Orders.destroy({
            where: {
                id: orderId
            },
            cascade: true
        });
    }


    static async updateOrder(order_id, newStatus){
        return await database.Orders.update({
            status: newStatus
        },
        {
            where: {
                id: orderId
            },
            cascade: true
        })
    }

    static async createOrder(data){
        return await database.Orders.create(data)
    }

    static async getOrderProducts(){
        return await database.ProductsOrders.findAll();
    }

    static async createOrderProducts(data){
        return await database.ProductsOrders.bulkCreate(data);
    }
}

module.exports = OrdersServices