
const express = require('express');
const ProductsService = require('./../services/productService');
const router = express.Router();


const service = new ProductsService();
const validatorHandler = require('../middlewares/validatorHandler');
const {
    createProductSchema,
    updateProductSchema,
    getProductSchema
} = require('../schemas/productSchema');

router.get('/', async (req, res)=> {
    const products = await service.find();
    res.json(
        products
    );
})

router.get('/filter', (req, res)=> {
    res.send("This route should be before /products/:id")
})

router.get('/:id', 
    validatorHandler(getProductSchema, 'params')
    ,async (req, res, next)=> {
    try {
        const {id} = req.params;
        const product = await service.findOne(id);
        res.json(product)
    }
    catch (err){
        next(err)
    }
    
})


router.post('/',
    validatorHandler(createProductSchema, 'body')
    , async (req, res)=> {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({
        message: "Created",
        data: newProduct
    })
})


router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next)=> {
    try {
        const {id} = req.params;
        const body = req.body;
        const updatedProduct = await service.update(body, id)
        res.json({updatedProduct})
    }
    catch (err) {
        next(err)
    }
    
})


router.delete('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res)=> {
    const {id} = await req.params;
    service.delete(id);
    res.json({
        message: "Deleted",
        id,
    })
})


module.exports = router;