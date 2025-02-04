const database = require('../db/models');
const OrdersServices = require('../services/OrdersServices');

class OrdersController {
    static async getAllOrders(req, res){
        try{
            const getOrders = await OrdersServices.getOrders()
            const orderList = getOrders.map((order) => {
                return {
                    "orderId" : order.id,
                    "user" : order.User.userName,
                    "clientName" : order.clientName,
                    "table" : order.table,
                    "status" : order.status,
                    "createdAt": order.createdAt,
                    "updatedAt": order.updatedAt,
                    "products": order.products.map((product) => {
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
            res.status(201).json(orderList);
            console.log(orderList);
        }
        catch(error){
            res.status(400).json({message: error})
            console.log(error)
        }
        
    }

    static async getOrderById(req,res){
        try{
            const orderId = req.params;
            let getOrder = await OrdersServices.getOrder(orderId);
            getOrder = {
                "orderId" : getOrder.id,
                "user" : getOrder.User.userName,
                "clientName" : getOrder.clientName,
                "table" : getOrder.table,
                "status" : getOrder.status,
                "createdAt": getOrder.createdAt,
                "updatedAt": getOrder.updatedAt,
                "products": getOrder.products.map(product => {
                    return {
                        "id" : product.id,
                        "name" : product.name,
                        "flavor" : product.flavor,
                        "complement" : product.complement,
                        "qtd" : product.qtd
                }
            })
        }
            res.status(200).json(getOrder)
        }
        catch(error){
            res.status(400).json({message: error})
            console.log(error)
        }
    }

    static async deleteOrder(req, res){
        try{
            const orderId = req.params
            let order = await OrdersServices.getOrder(orderId);

            if(order){
                await OrdersServices.destroyOrder(orderId);
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
            const orderId = req.params
            const newStatus = req.body.newStatus
            let order = await OrdersServices.getOrder(orderId);

            if(order){
                await OrdersServices.updateOrder(orderId, newStatus);
                res.status(204).json({message: `order ${orderId} updated.`})
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
                    "orderId" : newOrder.id,
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