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
        array.push(`${keys}=${obj[keys]}`);
    }
    return array.toString();
}

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

        const queryString = `UPDATE ${tableName} SET ${objToSql(values)} WHERE ${condition}`;

        connection.query(queryString, function (err, results) {
            
        })
    }
};

orm.createOne('burgers', ['burger_name', 'devoured'], ['random test', false]);