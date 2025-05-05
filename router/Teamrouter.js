

import express from 'express';

const Teamrouter = express.Router();

Teamrouter.use('/', (req, res, next) => {
    res.render('team');
});


export default Teamrouter;