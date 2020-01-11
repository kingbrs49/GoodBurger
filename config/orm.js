var connection = require("./connection.js");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectOne: function () {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function () {
        var queryString = "UPDATE * FROM ??";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;