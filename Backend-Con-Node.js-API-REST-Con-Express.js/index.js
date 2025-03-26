const express = require('express');
const {faker} = require('@faker-js/faker')
const app = express();
const port = 3000;




app.get('/', (req, res)=> {
    res.send("Hello World!");
})

app.get('/new-route', (req, res)=> {
    res.send("Hi, I am a new route!");
})

app.get('/products', (req, res)=> {

    const products = [];
    const limit = req.query.limit || 10;
    for (let i=0; i<limit; i++){
        products.push({
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.url()
        })
    }

    res.json(
        products
    );
})

app.get('/products/filter', (req, res)=> {
    res.send("This route should be before /products/:id")
})

app.get('/products/:id', (req, res)=> {
    const {id} = req.params;
    res.json(
        {
            id: id,
            name: `Product ${id}`,
            price: 1000 * id
        }
    )
})

app.get('/categories/:category/products/:id', (req, res)=> {

    const {category, id} = req.params;
    res.json(
        {
            category: category, 
            id: id,
            name: `Product ${id}`,
            price: 1000 * id
        }
    )
})

app.get('/users', (req, res)=>{
    const {limit, offset} = req.query;
    if (limit && offset){
        res.json({
            limit: limit,
            offset: offset
        })
    }
    else{
        res.send("No query parameters")
    }
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})