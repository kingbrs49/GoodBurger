var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
