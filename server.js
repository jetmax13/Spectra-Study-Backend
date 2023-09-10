const express=require('express');
const errorHandler = require('./middleware/errorhandler');
const dotenv=require('dotenv').config();
const connectDb= require('./config/dbConnection');

const app=express();
const port=process.env.PORT;

connectDb();
app.use(express.json());

app.use('/api/users', require("./routes/userRoutes")); 
app.use(errorHandler);

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})