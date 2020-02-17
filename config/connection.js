const mysql = require('mysql');

const connection = mysql.createConnection({
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

// if (process.env.JAWSDB_URL) {
//     const connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "burgers_db"
//     });
// };

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected to MySQL Server " + connection.threadId);
});

module.exports = connection;