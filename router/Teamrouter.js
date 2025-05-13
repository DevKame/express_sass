

import express from 'express';

const Teamrouter = express.Router();

Teamrouter.get('/', (req, res, next) => {
    res.render('team');
});


export default Teamrouter;