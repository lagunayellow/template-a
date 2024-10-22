const express = require('express');
const controllers = express.Router();

controllers.post('/product/order', async (req, res) => {
    console.log(req.body);
    // waiting until the 
    let refinedData = {
        name: "something awesome product!",
        price: 200,
        
    }
    res.status(200).send(refinedData);
})

module.exports = controllers; // all the name must be matched