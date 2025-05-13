

import express from 'express';

const Aboutrouter = express.Router();

Aboutrouter.get('/', (req, res, next) => {
    res.render('about');
});


export default Aboutrouter;