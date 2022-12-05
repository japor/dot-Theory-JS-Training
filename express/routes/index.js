const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    
    const name = req.cookies.username;
    if (!name) {
        res.redirect('/hello')
    }
    res.render('index', {heading: "Homepage", body: "Homepage gaming", name});
});

router.get('/hello',(req, res)=>{
    if (req.cookies.username) {
        res.redirect('/')
    }
    res.render('hello');
});

router.post('/hello',(req, res)=>{
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.post('/ggwp',(req, res)=>{
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;
