const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const express = require('express');

function routesApi(app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);

}

module.exports = routesApi;