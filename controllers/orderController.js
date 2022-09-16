const Order = require('../models/order');
const Customer = require('../models/customer');

module.exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    if (newOrder) {
      const updatedCus = await Customer.findByIdAndUpdate(req.query.id, {
        $push: { orders: newOrder._id },
      });
      console.log('Created new order', newOrder);
      return res.json(200, {
        message: `Created new order : ${newOrder}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json(500, { message: 'Internal server error' });
  }
};
