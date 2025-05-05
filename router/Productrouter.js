

import express from 'express';

const Productrouter = express.Router();

Productrouter.use('/', (req, res, next) => {
    res.render('products');
});


export default Productrouter;