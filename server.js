const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const burgerController = require("./controllers/burgers_controller");
const htmlRoutes = require("./routes");

const app = express();

// For parsing JSON into req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(burgerController);
app.use(htmlRoutes);

app.listen(PORT, function () {
    console.log(`PORT IS LISTENING ON ${PORT}`);
});