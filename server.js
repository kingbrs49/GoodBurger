var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var routes = require('./controllers/burgers_controller.js')

var PORT = process.env.PORT || 3000;

var app = express();

// var router = express.Router();

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
