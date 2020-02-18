const app = require("express").Router();

app.get("/", function (req, res) {
    res.render("index");
})

module.exports = app;