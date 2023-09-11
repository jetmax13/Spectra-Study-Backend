const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv=require('dotenv').config();
const connectDb= require('./config/dbConnection');
const cors=require("cors");
const corsOptions={
    origin:"*",
};

const app=express();
app.use(cors(corsOptions));
const port=process.env.PORT;

connectDb();
app.use(express.json());

app.use('/api/users', require("./routes/userRoutes")); 
app.use(errorHandler);

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})