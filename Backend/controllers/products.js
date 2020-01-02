/* const Product = requiere('../models/products.js'); */
import Product from '../models/product'


let controller = {
    home: (req, res) => {
        return res.status(200).send({
            message: 'Hola, soy home'
        });
    },

    getProductos: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({
                mensaje: 'No se ha podido listar los productos',
                error
            })
        }
    },

    newProducto: async (req, res) => {
        
        console.log('Respuesta: ', req.body);
        const body = req.body;
        try {
            const productoBd = await Product.create(body);
            res.status(200).json(productoBd);
            console.log('Producto Creado');

        } catch (error) {
            return res.status(500).json({
                mensaje: 'No se ha podido crear el producto',
                error
            })
        }
    },

    deleteProducto: async (req, res) => {
        const _id = req.params._id;
        try {
            const productoEliminado = await Product.findByIdAndDelete({_id});
            res.json(productoEliminado);
        } catch (error) {
            return res.status(500).json({
                mensaje: 'No se ha podido eliminar el producto',
                error
            })
        }
    },

    editProducto: async (req, res) => {
        const body = req.body;
        const _id = req.params._id;
        try {
            const productoEeditado = await Product.findByIdAndDelete({_id}, {body});
            res.json(productoEeditado);
        } catch (error) {
            return res.status(500).json({
                mensaje: 'No se ha podido editar el producto',
                error
            })
        }
    },

    test: (req, res) => {
        console.log('El id :', req.params.id);
        console.log('El cuerpo es: ', req.body);
        console.log('La query es: ', req.query.price);
        return res.status(200).send({
            message: 'Hola, soy test'
        });
    }
};

module.exports = controller;