const app = require("express").Router();

const burger = require("../models/burger.js");

app.get("/api/burgers", function (req, res) {

    burger.findAll(function(results) {
        res.json(results);
    });
});

app.post("/api/burgers", function (req, res) {
    burger.createOne(req.body, function (results) {

        res.json(results);
    });
});

app.put("/api/burgers", function (req, res) {});

module.exports = app;