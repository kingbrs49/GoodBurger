var orm = require("./orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    selectOne: function (cb) {
        orm.selectOne("burgers", function (res) {
            cb(res);
        });
    },
    updateOne: function (cb) {
        orm.updateOne("burgers", function (res) {
            cb(res);
        });
    }
};
module.exports = burger;