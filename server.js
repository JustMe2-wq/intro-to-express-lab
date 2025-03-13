const express = require('express');
const app = express();

// Question 1://

app.get('/greet/:name', (req, res) => {
    console.log(req.params);
    res.send(`<h1> Hello there ${req.params.name} </h1>`);
})

app.get('/roll/:num', (req, res) => {
    console.log(req.params.num);
    const num = Number(req.params.num);
    if (isNaN(num)) {
        res.send ('Provide number');
    } else {
        const random = Math.floor(Math.random() * num) + 1;
        res.send(`<h1> You rolled a ${random} </h1>`);
    }
});

// Question 2://

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const index = Number(req.params.index);
    if (isNaN(index)) {
        res.send('This item is not yet in stock. Check back soon!');
    } else if (index < 0 || index >= collectibles.length) {
        res.send('This item is not yet in stock. Check back soon!');
    } else {
        res.send(collectibles[index]);
    }
});

// Question 3://

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const maxPrice = req.query.price;
    const minPrice = req.query.price;
    const type = req.query.type;
    let filteredShoes = shoes;
    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= Number(maxPrice));
    }
    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= Number(minPrice));
    }
    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
    res.send(filteredShoes);
});

// app.get('/shoes', (req, res) => {
//     const {price, type} = req.query.price;
//     let filteredShoes = shoes;
//     if (price) {
//         filteredShoes = filteredShoes.filter(shoe => shoe.price <= Number(price));
//     }
//     if (type) {
//         filteredShoes = filteredShoes.filter(shoe => shoe.type = type);
//     }
//     res.send(filteredShoes);
// });



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});