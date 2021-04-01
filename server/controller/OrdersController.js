const database = require('../db/models');
const OrdersServices = require('../services/OrdersServices');

class OrdersController {
    static async getAllOrders(req, res){
        try{
            let getOrders = await OrdersServices.getOrders()
            getOrders.map(order => {
                return {
                    "orderId" : order.id,
                    "user" : order.User.userName,
                    "client_name" : order.client_name,
                    "table" : order.table,
                    "status" : order.status,
                    "createdAt": order.createdAt,
                    "updatedAt": order.updatedAt,
                    "products": order.orders.map(product => {
                        return {
                            "id" : product.id,
                            "name" : product.name,
                            "flavor" : product.flavor,
                            "complement" : product.complement,
                            "qtd" : product.qtd
                        }
                    })
                }
            })
            res.status(201).json(getOrders);
            console.log(getOrders);
        }
        catch(error){
            res.status(400).json({message: error})
            console.log(error)
        }
        
    }

    static async getOrderById(req,res){
        try{
            const order_id = req.params
            let getOrder = await OrdersServices.getOrder(order_id);
            getOrder = {
                "order_id" : getOrder.id,
                "user" : getOrder.User.userName,
                "client_name" : getOrder.client_name,
                "table" : getOrder.table,
                "status" : getOrder.status,
                "createdAt": getOrder.createdAt,
                "updatedAt": getOrder.updatedAt,
                "products": getOrder.orders.map(product => {
                    return {
                        "id" : product.id,
                        "name" : product.name,
                        "flavor" : product.flavor,
                        "complement" : product.complement,
                        "qtd" : product.qtd
                }
            })
        }
            res.status(201).json(getOrder)
        }
        catch(error){
            res.status(400).json({message: error})
            console.log(error)
        }
    }

    static async deleteOrder(req, res){
        try{
            const order_id = req.params
            let order = await OrdersServices.getOrder(order_id);

            if(order){
                await OrdersServices.destroyOrder(order_id);
                res.status(200).json({message: "order deleted."})
            } else {
                return res.status(400).json({message: "processing error. Requisition failed."})
            }
        }
        catch(error){
            res.status(400).json({message: error});
            console.log(error);
        }
        
    }

    static async updateOrder(req, res){
        try{
            const order_id = req.params
            const newStatus = req.body.newStatus
            let order = await OrdersServices.getOrder(order_id);

            if(order){
                await OrdersServices.updateOrder(order_id, newStatus);
                res.status(204).json({message: `order ${order_id} updated.`})
            } else {
                res.status(400).json({message: "processing error. Requisition failed."})
            }
        }
        catch(error){
            res.status(400).json({message: error});
            console.log(error);
        }
    }

    static async createOrder(req, res){
        try{
            const newOrder = await OrdersServices.createOrder(req.body);
            let orderProducts = req.body.products;
            orderProducts = orderProducts.map(product => {
                return {
                    "order_id" : newOrder.id,
                    "productId" : product.id,
                    "qtd" : product.qtd
                }
            })
            await OrdersServices.createOrderProducts(orderProducts);
            res.status(201).json(req.body)
        }
        catch(error){
            res.status(400).json({message: error});
            console.log(error);
        }
    }
}

module.exports = OrdersController