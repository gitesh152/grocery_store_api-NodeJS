const express = require('express'); //Express Instance
const app = express(); //Create App using Express
const PORT = 8000; //Using env PORT or PORT 8000
const db = require('./config/mongoose'); //Using Custom Mongoose Configuration
const bodyParser = require('body-parser'); //Using body-parser

app.use(bodyParser.json());

app.use('/', require('./routes/index')); //Using Touter Middleware

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server started listening on port ${PORT}`);
});
