
const express = require('express');
const ProductsService = require('./../services/productService');
const router = express.Router();


const service = new ProductsService();


router.get('/', async (req, res)=> {
    const products = await service.find();
    res.json(
        products
    );
})

router.get('/filter', (req, res)=> {
    res.send("This route should be before /products/:id")
})

router.get('/:id', async (req, res)=> {
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product)
})


router.post('/', async (req, res)=> {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
        message: "Created",
        data: newProduct
    })
})


router.patch('/:id', async (req, res)=> {
    try {
        const {id} = req.params;
        const body = req.body;
        const updatedProduct = await service.update(body, id)
        res.json({
            message: "Update",
            data: updatedProduct,
            id,
    })
    }
    catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
    
})


router.delete('/:id', async (req, res)=> {
    const {id} = await req.params;
    service.delete(id);
    res.json({
        message: "Deleted",
        id,
    })
})


module.exports = router;