const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3300;
const cars = [
    {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2020
    },
    {
        id: 2,
        make: "Honda",
        model: "Accord",
        year: 2019
    },
    {
        id: 3,
        make: "Ford",
        model: "Mustang",
        year: 2021
    }
]

app.get ("/cars", (_, res) => {
    res.json({
        message: "Cars List",
        data: cars
    });
});

app.post ("/cars", (req, res) => {
    cars.push(req.body);
    res.status(201).json({
        message: "Car added successfully",
        car: cars[cars.length - 1]
    });
});

app.get("/cars/:id", (req, res) => {
    const {id} = req.params;
    const car = cars.find(c => c.id === parseInt(id));
    console.log(req.params.id);
    console.log(req.query);
    res.json({
        message: "Car Details",
        data: car
    });
});

    