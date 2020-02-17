const express = require("express");

const PORT = process.env.PORT || 3000;

const burgerController = require("./controllers/burgers_controller");

const app = express();

// For parsing JSON into req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log(`PORT IS LISTENING ON (${PORT})`);
});