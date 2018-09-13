module.exports = {
    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.allProducts().then( products => res.status(200).send(products))
    },
    createProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.createItem(item).then(res.status(200).send(item))
    }
}