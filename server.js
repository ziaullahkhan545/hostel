// importing assets
const express = require('express');
const cors = require('cors');
const connection = require('./src/database/database');
const bodyParser = require('body-parser');
const adminLoginRouter = require('./src/routers/login');

// declaring port number
const PORT = process.env.PORT || 5000;

// express app
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

// admin login api end point
// api end point api/admin/login
// the api recieve input data is username/email and password and return response
// username = admin, and password = admin
app.use(adminLoginRouter);

// mongoDB connection
connection();

// node/express connection
app.listen( PORT,() => console.log(`Server is running at port ${PORT}`));
