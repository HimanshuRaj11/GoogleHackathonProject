const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
require("./db/connection")
const authRoute = require('./Routers/Auth');
const propertyRoute = require('./Routers/property')
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // for getting al data includig applicatons data i.e cookie ,localstorage ,sessionStorage ,etc
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/images'))

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/', (req, res)=>{
  res.send(req.cookies.RealEstate)
})
// Routers & middlewares
app.use('/auth',authRoute)
app.use('/property', propertyRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port : ${port}`));