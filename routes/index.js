const app = require("express").Router();

const burger = require("../models/burger");

app.get("/", function (req, res) {
    burger.findAll(function (results) {
        res.render("index", {hbObj: results });
    });
});

module.exports = app;