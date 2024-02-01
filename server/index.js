const fs = require("node:fs");
const express = require('express');

const app = express()
const port = 5000;

app.get('/GantData', (req, res) => {
    let result = []
    try {
        const fileDataStr = fs.readFileSync("./data.json", "utf-8")
        result = JSON.parse(fileDataStr)
    } catch {
        // handle error
    }
    res.json({ result })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})