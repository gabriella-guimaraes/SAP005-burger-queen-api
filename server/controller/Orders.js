let ordersCollection = require('./Orders.json')

const getAllOrders = (req, res) => {
    console.log("olha os pedidos chegando...")
    res.send(ordersCollection)
}

const getOrderById = (req, res) => {
    let id = ordersCollection.orders.filter(function(order){
        return order.id === Number(req.params.id)
    })
    res.send(id)
}

const updateOrder = (req, res) => {
    res.send("order updated")
}

const deleteOrder = (req, res) => {
    res.send("order deleted")
}

const createOrder = (req, res) => {
    res.send("order created")
}

module.exports = { getAllOrders, updateOrder, deleteOrder, createOrder, getOrderById }