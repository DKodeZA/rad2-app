const express = require('express');
const gamePrizeAPI = require('./routes.js');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', gamePrizeAPI);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("dist/rad2-app"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "dist", "rad2-app", "index.html"));
    })
}

app.listen(process.env.PORT || 5000, () => {
    console.log('--Server has started--');
});
