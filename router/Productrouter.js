

import express from 'express';

const Productrouter = express.Router();

Productrouter.get('/', (req, res, next) => {
    res.render('products');
});


export default Productrouter;