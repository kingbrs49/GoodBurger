const connection = require('./connection');


function generateQuestionMarks (number) {
    let array = [];

    for (let i = 0; i < number; i++ ) {
        array.push("?");
    } 

    return array.toString();
}

function objToSql(obj) {
    const array = [];
    for (keys in obj) {
        // console.log(keys);
        // console.log(obj);
        array.push(`${keys}=${obj[keys]}`);
    }
    return array.toString();
}

var data = objToSql({
    burger_name: 'western bacon cheeseburger',
    devoured: true
});
//console.log('string test BITCH: ', data);

const orm = {
    findAll: function (tableName, CB) {
        
        const queryString = `SELECT * FROM ${tableName}`;

        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }
            CB(results);
        });
    },
    createOne: function (tableName, columns, values, CB) {
        const queryString = `INSERT INTO ${tableName} 
        (${columns.toString()}) VALUES 
        (${generateQuestionMarks(values.length)})`;

        connection.query(queryString, values, CB, function (err, results) {
            if (err) {
                throw err;
            }
            CB(results);
        });
    },
    updateOne: function (tableName, values, condition, CB) {
        const data = {
            burger_name: 'baconator',
            devoured: true
        };

        const queryString = `UPDATE ${tableName} 
        SET ${objToSql(values)} WHERE ${condition}`;

        connection.query(queryString, function (err, results) {
            CB(results);
            if (err) {
                throw err;
            }
        });
    }
};

orm.createOne('burgers', ['burger_name', 'devoured'], ['random test', false]);

module.exports = orm;