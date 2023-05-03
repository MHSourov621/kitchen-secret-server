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

app.get('/allData/:id', (req, res) => {
   const id = req.params.id;
   const item = allServices?.find(sc => sc.id == id);
   res.send({item})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})