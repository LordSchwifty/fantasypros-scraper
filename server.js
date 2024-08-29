const express = require('express');
const scrapeData = require('./scraper');

const app = express();
const port = 3000;

app.get('/rankings', async (req, res) => {
    const data = await scrapeData();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
