module.exports = {
    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.allProducts().then( products => res.status(200).send(products))
    },
    getOneProduct: (req,res) => {
        const dbInstance = req.app.get('db')
        dbInstance.oneItem
    }
}