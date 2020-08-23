const express = require('express');
const gamePrizeAPI = require('./routes.js');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/game-prize', gamePrizeAPI);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    })
}

app.listen(3000, () => {
    console.log('--Server has started--');
});
