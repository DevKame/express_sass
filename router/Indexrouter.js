

import express from 'express';

const Indexrouter = express.Router();

Indexrouter.get('/', (req, res, next) => {
    res.render('index');
});
Indexrouter.post('/', (req, res, next) => {
    const data = [
        {
            name: 'Eldin',
            age: 31,
        },
        {
            name: 'Flor',
            age: 39,
        },
    ];
    // console.log('#########################################');
    // console.log(req);
    console.log('#########################################');
    console.log(req.body);
    res.json(data);
});


export default Indexrouter;