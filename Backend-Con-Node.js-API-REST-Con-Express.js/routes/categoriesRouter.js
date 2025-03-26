
const express = require('express');
const router = express.Router();

router.get('/:category/products/:id', (req, res)=> {
    const {category, id} = req.params;
    res.json(
        {
            category: category, 
            id: id,
            name: `Product ${id}`,
            price: 1000
        }
    )
})


module.exports = router;