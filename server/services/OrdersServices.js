const database = require('../db/models');

const OrdersServices = {
    async getOrders(){
        return await database.Orders.findAll({
            include: [{
                model: database.Products,
                as: "products",
                required: false,
                attributes: ["id", "name", "flavor", "complement"],
                through: {
                    model: database.ProductsOrder,
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
    },

    async getOrder(orderId){
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
    },

    async destroyOrder(orderId){
        return await database.Orders.destroy({
            where: {
                id: orderId
            },
            cascade: true
        });
    },


    async updateOrder(orderId, newStatus){
        return await database.Orders.update({
            status: newStatus
        },
        {
            where: {
                id: orderId
            },
            cascade: true
        })
    },

    async createOrder(data){
        return await database.Orders.create(data)
    },

    async getOrderProducts(){
        return await database.ProductsOrders.findAll();
    },

    async createOrderProducts(data){
        return await database.ProductsOrders.bulkCreate(data);
    }
}

module.exports = OrdersServices