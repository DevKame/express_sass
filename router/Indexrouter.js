

import express from 'express';

const Indexrouter = express.Router();

Indexrouter.use('/', (req, res, next) => {
    res.render('index');
});


export default Indexrouter;