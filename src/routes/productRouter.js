const express = require('express')
const { verifyToken, verifyAdmin } = require('../utils/verify')
const productRouter = express.Router()
const productController = require('../app/controllers/productController')

productRouter.get('/all', verifyToken, verifyAdmin, productController.getAllProduct)
productRouter.get('/:id', productController.getProduct)
productRouter.delete('/:id', verifyToken, verifyAdmin, productController.deleteProduct)
productRouter.post('/', verifyToken, verifyAdmin, productController.createProduct)
productRouter.put('/:id', verifyToken, verifyAdmin, productController.updateProduct)
productRouter.get('/', productController.getSomeProduct)
productRouter.get('/category/:categoryname', productController.getProductByCategory)


module.exports = productRouter