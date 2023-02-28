//import express
const express = require('express');
const port = 3024;

//create server
const app = express();

//create our routing
app.get('/', (req, res) => {
    res.send("Hello worllld");
});

app.get('/chicken', (req, res) => {
    res.status.apply(200).send("Hello chicken")//adding status code
});

app.get('/chicken/:id', (req, res) => {
    console.log(req.params.id); //params is the parameter passed into this path (THE ID)
    const {id} = req.params; //destructuring assignment - accesing array elements in a cleaner way
    res.send(id);
});

//start server listening
app.listen(port, () => {
    console.log(`Hey Hey this app is listenining to ${port}`)
})
