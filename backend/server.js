import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()


//Databaseconnected
connectDB()

//app
const app = express();


app.get('/', (req, res)=> {
    res.send('API is running....')
})


//routes middleware
app.use('/api/products', productRoutes);


const port= process.env.PORT || 8000;

app.listen (port, ()=> {
    console.log(`Server is running on port ${port}`);
})
