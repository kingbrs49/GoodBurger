const orm = require("../config/orm.js");

const burger = {
    findAll: function () {},
    createOne: function () {

        const columns = ["burger_name", "devoured"];
        const values = ["", false]
        
        orm.createOne("burgers", columns, values);
    },
    updateOne: function () {}
};
module.exports = burger;