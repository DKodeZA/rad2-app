const express = require('express');
const router = express.Router();

router.get('/game-prize', (req, res) => {
    console.log('GET');
    res.send({
        game: 'Gemix',
        amount: 50,
        countdown: 25000,
        prize: 'Free Spins'
    });
});

router.post('/game-prize', (req, res) => {
    console.log('POST');
    if (req.body != null && validPostObject(req.body)) {
        res.status(201).send();
    } else {
        res.status(400).send();
    }
});

module.exports = router;

function validPostObject(body) {
    return body.amount != null && body.prize != null && body.game != null;
}