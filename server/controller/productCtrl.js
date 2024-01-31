import { Product } from '../model.js';

const productFunctions = {
    allProducts: async (req, res) => {
        try {
            console.log('hit getAllProducts!')
            const products = await Product.findAll()
            // console.log(products)
            res.status(200).send(products)
        } catch (err) {
            console.log(err)
            res.status(500).send("Oops! Couldn't get products")
        }
    },

    updateProduct: async (req, res) => {
        try {
            console.log('hit updateProduct!')
            const { id } = req.params;
            const { quantity, isSoldOut } = req.body;

            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }
            product.quantity = quantity;
            product.isSoldOut = isSoldOut;
            await product.save();

            res.status(200).json({ success: true, product })
        } catch (err) {
            console.error('Error updating product:', err)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }
}

export default productFunctions;