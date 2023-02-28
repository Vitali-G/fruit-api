require('dotenv').config(); //syntax required to use any .env environment variables
const express = require('express');
const app = express();
const fruits = require('./fruits.json')
const fs = require('fs');

const port = process.env.PORT;

app.use(express.json()); //needed to read the body of the POST request

//Home route
app.get('/', (req, res) => {
    res.send("Hello, Fruity API!!!!!")
})


// Return all fruits route
app.get('/fruits', (req, res) => {
    res.status(200).send(fruits)
})

// Fruit not found. Capitalisation.
// Return a single fruit route

app.get('/fruits/:fruit', (req, res) => {
    //res.status(200).send(fruits)
    let fruit = req.params.fruit
    fruit = fruit[0].toUpperCase() + fruit.toLowerCase().slice(1)

    let output;
    fruits.forEach(n => {
        if (n.name === fruit) {
            output = n
        }
    });
    
    if (output) {
        res.status(200).send(output)
    } else {
        res.status(404).send()
    }
    });

app.listen(port, (req, res) => {
    console.log(`App is listening on port ${port}!!!`)
});

// CHALLANGES HERE --> https://adaptable-grease-025.notion.site/Backend-challenges-be26fd0d3f994b299912f2ec563d0fcb
app.post("/fruits", (req, res) => {
    let newFruit = req.body.fruit;
    newFruit = newFruit[0].toUpperCase() + newFruit.toLowerCase().slice(1)
    let exists;
    
    //const fruit = fruits.find((find) => fruit.name == newFruit); // checking if newFruit is in fruits

    fruits.forEach(n => {
        if (n.name === newFruit) {
            exists = true;
        }
    });

    if (exists) {
        res.status(200).send("That piece of fruit is already in our list bro!")
    } else {
        fruits.push({"name": newFruit, "id": Date.now()})
        res.status(201).send("Thanks, done.")
    }

});

