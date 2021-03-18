const getAllProducts = (req, res) => {
    console.log("uma lista de produtos")
    res.send([{
        "id":0,
        "name": "hámburger simples de carne",
        "flavor": "carne",
        "type": "hamburger"
    }])
}

module.exports = {getAllProducts}