const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    productList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentInfo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Order Model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
