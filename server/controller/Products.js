let productsCollection = require('./Products.json');

const getAllProducts = (req, res) => {
    console.log("uma lista de produtos")
    res.send(productsCollection)
}

const getProductById = (req, res) => {
    let productId = productsCollection.products.filter(function(product){
        console.log(product.id, req.params.id)
        return product.id === Number(req.params.id);
    });
    res.send(productId);
}

const updateProduct = (req, res) => {
    res.send("product updated")
}

const deleteProduct = (req, res) => {
    res.send("product deleted")
}

const postProduct = (req, res) => {
    res.send("product created")
}

module.exports = { getAllProducts, getProductById, updateProduct, deleteProduct, postProduct }