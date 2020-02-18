const orm = require("../config/orm.js");

const burger = {
    findAll: function (CB) {
        orm.findAll("burgers", function (resultsData) {
            CB(resultsData);
        });
    },
    createOne: function (createData, CB) {

        const columns = ["burger_name", "devoured"];
        const values = [createData.burger_name, createData.devoured]
        
        orm.createOne("burgers", columns, values, function () {
            CB(resultsData);
        });
    },
    updateOne: function (updateData, CB) {
        const condition = `id = ${updateData.id}`;
        delete updateData.id;

        console.log("burgers updated data: ", updateData);

        orm.updateOne("burgers", updateData, condition, function (resultsData) {
            CB(resultsData);
        });
    }
};

module.exports = burger;