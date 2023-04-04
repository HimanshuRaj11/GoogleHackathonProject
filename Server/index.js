const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
require("./db/connection")
const authRoute = require('./Routers/Auth');
const propertyRoute = require('./Routers/property')
const uploadRoute = require("./Routers/upload")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Routers & middlewares
app.use('/auth',authRoute)
app.use('/property', propertyRoute)
app.use('/upload', uploadRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port : ${port}`));