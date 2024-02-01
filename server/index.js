const fs = require("node:fs");
const express = require('express');
const cors = require('cors');
const { URLSearchParams } = require("node:url");

const app = express()
const port = 5000;

app.use(cors())

app.get('/GantData', async (req, res) => {
    const queryParams = new URLSearchParams(req.query);
    console.log(queryParams)
    let result = [];
    try {
        await sleep(2000);
        if (queryParams.get('$expand') === "ExpandingAction,5") {
            result = JSON.parse(fs.readFileSync("./Task_5.json", "utf-8"))
        } else if (queryParams.get('$expand') === "ExpandingAction,9") {
            result = JSON.parse(fs.readFileSync("./Task_9.json", "utf-8"))
        } else {
            const fileDataStr = fs.readFileSync("./data.json", "utf-8")
            result = JSON.parse(fileDataStr)
        }
    } catch {
        // handle error
    }
    res.json({ result })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

function sleep(duration = 1000) {
    return new Promise(resolve => setTimeout(resolve, duration));
}