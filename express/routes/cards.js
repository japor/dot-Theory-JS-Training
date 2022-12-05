const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { cards } = data;

// Random cards challenge.
router.get('/',(req, res)=>{
    const id = Math.floor(Math.random() * cards.length);
    res.redirect(`/cards/${id}/?side=question`);
});

router.get('/:id',(req, res)=>{
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    const { hint } = cards[id];

    const data = { text, hint, side };

    // Flip card challenge.
    if (side === 'answer') {
        data.url = `/cards/${id}/?side=question`;
        data.link_text = 'question';
    } else {
        data.url = `/cards/${id}/?side=answer`;
         data.link_text = 'answer';
    }
    data.name = req.cookies.username;
    res.render('card', data);
});


module.exports = router;
