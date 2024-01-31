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
            const { id } = req.params;
            const { quantity, isSoldOut } = req.body;

            const [updatedCount] = await Product.update({
                quantity,
                isSoldOut
            },
                {
                    where: { pedId: id }
                }
            );

            if (updatedCount === 0) {
                res.status(404).json({ success: false, message: 'Product not found' })
            } else {
                const updatedProduct = await Product.findByPk(id);
                res.status(200).json({ success: true, updatedProduct })
            }
        } catch (err) {
            console.error('Error updating product:', err)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    }
}

export default productFunctions;