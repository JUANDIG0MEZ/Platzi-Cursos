
const express = require('express');
const router = express.Router();


router.get('/users', (req, res)=>{
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


module.exports = router;