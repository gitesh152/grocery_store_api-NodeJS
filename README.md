# GROCERY STORE

It's a simple API to fetch customer and it's orders detailes.
We can also add new customer, order or product.

## Authors

- [Gitesh Kumar](https://github.com/gitesh152)

## Tools & Technologies Used

- Node js
- JavaScript
- API

- **Tools**
- Postman
- vs code

## Installation And Usage

To run this project run

```bash
  git clone https://github.com/gitesh152/grocery_store_api-NodeJS.git
```

Go to directory

```bash
  cd grocery_store
```

Install all dependecies

```bash
 npm install
```

Run Project

```bash
  npm start
```

Now you can access on localhost:8000

## API ROUTES

○ To fetch Customers list  
(GET REQUEST)  
http://localhost:8000/customer/getCustomers

○ To fetch specific Customer Orders list  
(GET REQUEST)  
http://localhost:8000/customer/getCustomerOrdersById/?id='customerID'

○ To fetch customer Details with maximum Orders in an year  
(GET REQUEST)  
http://localhost:8000/customer/getCustomerWithMaxOrdersInAYear  
body in JSON:  
{  
"year":2018  
}

○ To create new Customer  
(POST REQUEST)  
http://localhost:8000/customer/createCustomer  
body in JSON:  
{  
"name":"meena",
"email":"menu@gmail.com",  
"phone": 4444456762  
}

○ To create new Product  
(POST REQUEST)  
http://localhost:8000/product/createProduct  
body in JSON:  
{  
"productName":"Zebronics Mouse",  
"productCategory": "Electronics",  
"productInfo": "Accessories for computer and machines.",  
"price": 20,  
"quantityAvailable":54  
}

○ To update Product Price  
(PUT REQUEST)  
http://localhost:8000/product/updateProductPrice?id='productID>'  
body in JSON:  
{  
"price":3999  
}

○ To create new Order  
(POST REQUEST)  
http://localhost:8000/order/createOrder?id='customerID'  
body in JSON:  
{  
"productList":["6324db6d63f04471d73c2ab3","6324dba563f04471d73c2ae0"],  
"totalPrice":98323,  
"paymentInfo":"CREDIT CARD"  
}

## Folder Structure

📦grocery_store  
┣ 📂config  
┃ ┣ 📜mongoose.js
┣ 📂controllers  
┃ ┣ 📜customerController.js
┃ ┣ 📜homeController.js
┃ ┣ 📜orderController.js
┃ ┣ 📜productController.js
┣ 📂models  
┃ ┣ 📜customer.js
┃ ┣ 📜order.js  
┃ ┣ 📜products.js
┣ 📂node_modules
┣ 📂routes  
┃ ┣ 📜customer.js
┃ ┣ 📜index.js
┃ ┣ 📜order.js
┃ ┣ 📜product.js
┣ 📜.gitignore  
┣ 📜.prettierrc
┣ 📜app.js  
┣ 📜package-lock.json  
┣ 📜package.json  
┣ 📜Procfile  
┗ 📜README.md

## Feedback

If you have any feedback, please reach out to me at gitesh152@gmail.com
