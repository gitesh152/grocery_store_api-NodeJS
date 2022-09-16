const Customer = require('../models/customer');

//Create a new Customer
module.exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    if (newCustomer) {
      console.log('Created new customer', newCustomer);
      return res.json(200, {
        message: `Created a Customer : ${newCustomer.name}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json(500, { message: 'Internal server error' });
  }
};

//Get All Customers
module.exports.getCustomers = async (req, res) => {
  try {
    const allCustomers = await Customer.find({});
    if (allCustomers) {
      console.log('Fetched all customers', allCustomers);
      return res.json(200, {
        message: `Fetched all customers : ${allCustomers}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json(500, { message: 'Internal server error' });
  }
};

//Get Orders of Specific Customer by ID
module.exports.getCustomerOrders = async (req, res) => {
  try {
    const getCustomerOrders = await Customer.findById(req.query.id).populate({
      path: 'orders',
    });
    if (getCustomerOrders) {
      console.log(`Fetched customer's orders :`, getCustomerOrders);

      return res.json(200, {
        message: `Fetched customer's orders : ${getCustomerOrders}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json(500, { message: 'Internal server error' });
  }
};

//Get Customer with Most Orders in specific Year
module.exports.getCustomerWithMaxOrdersInAYear = async (req, res) => {
  try {
    let year = req.body.year;
    const getAllCustomers = await Customer.find({}).populate({
      path: 'orders',
    });
    let customerOrderCount = { idd: null, count: 0 };
    for (let customer of getAllCustomers) {
      counter = 0;
      for (a of customer.orders) {
        if (year == a.createdAt.getFullYear()) {
          counter += 1;
          continue;
        }
      }
      if (customerOrderCount.count < counter) {
        customerOrderCount.count = counter;
        customerOrderCount.idd = customer.id;
        counter = 0;
      }
    }
    console.log(customerOrderCount);

    const customerWithMostOrder = await Customer.findById(
      customerOrderCount.idd
    );

    if (customerWithMostOrder) {
      console.log(
        `Customer '${customerWithMostOrder.name}' did  ${customerOrderCount.count} orders in ${year}`
      );

      return res.json(200, {
        message: `Customer '${customerWithMostOrder.name}' did  ${customerOrderCount.count} orders in ${year}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json(500, { message: 'Internal server error' });
  }
};
