const connection = require('./connection');


function generateQuestionMarks (number) {
    let array = [];

    for (let i = 0; i < number; i++ ) {
        array.push("?")
    } 

    return array.toString();
}

const orm = {
    findAll: function () {},
    createOne: function (tableName, columns, values) {
        const queryString = `INSERT INTO ${tableName} 
        (${columns.toString()}) VALUES 
        (${generateQuestionMarks(values.length)})`;

        connection.query(queryString, values, function (err, results) {
            if (err) {
                throw err;
            }
            console.log(results);
        });
    },
    updateOne: function () {}
};

orm.createOne('burgers', ['burger_name', 'devoured'], ['random test', false]);