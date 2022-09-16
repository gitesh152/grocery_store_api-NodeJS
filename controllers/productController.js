const Product = require('../models/product');

module.exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    if (newProduct) {
      console.log('Created new product', newProduct);
      return res.json(200, {
        message: `Created a product : ${newProduct.productName}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json(500, { message: 'Internal server error' });
  }
};

module.exports.updateProductPrice = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.query.id, {
      price: req.body.price,
    });
    if (updatedProduct) {
      console.log('Updated the product', updatedProduct.productName);
      return res.json(200, {
        message: `Updated the product : ${updatedProduct.productName}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json(500, { message: 'Internal server error' });
  }
};
