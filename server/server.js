const express = require('express');
const gamePrizeAPI = require('./routes.js');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/game-prize', gamePrizeAPI);

app.listen(3000, () => {
    console.log('--Server has started--');
});