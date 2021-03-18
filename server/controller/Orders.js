const getAllOrders = (req, res) => {
    console.log("olha os pedidos chegando...")
    res.send([{
        "id": 0,
        "client_name": "Rafe Adler",
        "user_id": 0,
        "Products" : [{
            "id":0,
            "name": "hámburger simples de carne",
            "flavor": "carne",
            "type": "hamburger"
        }]
    }])
}

module.exports = { getAllOrders }