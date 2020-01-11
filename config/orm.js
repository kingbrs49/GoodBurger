var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) {
                throw err;
            } else {
                cb(result);
                console.log(result);
            }
        });
    },
    insertOne: function (tableName, column, value, cb) {
        var queryString = "INSERT * INTO ??";
        connection.query(queryString, [tableName, column, value], function (err, result) {
            if (err) {
                throw err;
            } else {
                cb(result);
                console.log(result);
            }
        });
    },
    updateOne: function (tableName, colVal, boolean, colName, condition, cb) {
        var queryString = "UPDATE * FROM ??";
        connection.query(queryString, [tableName, colVal, boolean, colName, condition], function (err, result) {
            if (err) {
                throw err;
            } else {
                cb(result);
                console.log(result);
            }
        });
    }
}

module.exports = orm;