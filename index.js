const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors());

const allServices = require("./data.json");
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/allData', (req, res) => {
    res.send(allServices)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})