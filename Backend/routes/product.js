import express from 'express';
import ProductController from '../controllers/products'

const router = express.Router();

router.get('/home', ProductController.home);
router.get('/productos', ProductController.getProductos);
router.post('/nuevo-producto', ProductController.newProducto);
router.delete('/producto/:_id', ProductController.deleteProducto);
router.put('/producto/:_id', ProductController.editProducto);
router.post('/test/:id', ProductController.test);

module.exports = router;