

import express from 'express';

const Aboutrouter = express.Router();

Aboutrouter.use('/', (req, res, next) => {
    res.render('about');
});


export default Aboutrouter;