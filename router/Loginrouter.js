

import express from 'express';

const Loginrouter = express.Router();

Loginrouter.get('/dashboard', (req, res, next) => {
    res.render('dashboard');
});
Loginrouter.post('/', (req, res, next) => {
    console.log(req.body);
    // res.redirect('http://localhost:3000/login/dashboard');
    const requesturl = 'http://localhost:3000/login/dashboard';
    console.log(requesturl);
    res.redirect(requesturl);
});
Loginrouter.get('/', (req, res, next) => {
    res.render('loginform');
});

export default Loginrouter;