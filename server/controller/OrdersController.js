const database = require('../db/models');

class OrdersController {
    static async getAllOrders(req, res){
        try{
            //code here
        }
        catch(error){}
        // const allOrders = await database.Orders.findAll()
        // return res.status(200).json(allOrders)
    }

    static async getOrderById(req,res){
        const { order_id } = req.params
        const order = await database.Orders.findAll({
            where: {
                id: Number(order_id)
            }
        });
        return res.status(200).json(order)
    }

    static async deleteOrder(req, res){
        const { order_id } = req.params
        const deleteOrder = await database.Orders.destroy({
            where: {
                id: Number(order_id)
            }
        });
        return res.status(201).json(deleteOrder)
    }

    // static async updateOrder(req, res){
    //     const updateOrder = await database.Orders.update({})
    // }

    static async createOrder(req, res){
        const{
            client_name,
            table,
            products
        } = req.body;
        const create = await database.Orders.create(req.body)
        return res.status(201).json(create)
    }
}

module.exports = OrdersController