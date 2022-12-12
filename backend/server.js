const express = require('express');
const products = require('./data/products')




//app
const app = express();



//routes middleware
//app.use('/api', userRoutes);

app.get('/', (req, res)=> {
    res.send('API is running..')
})

app.get('/api/products', (req, res)=> {
    res.json(products)
})

app.get('/api/products/:id', (req, res)=> {
    const product= products.find((p)=> p._id === req.params.id)
    res.json(product)
})



const port= process.env.PORT || 8000;

app.listen (port, ()=> {
    console.log(`Server is running on port ${port}`);
})
