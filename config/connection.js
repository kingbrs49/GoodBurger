const mysql = require('mysql');

const connection;

if(process.env.JAWSDB_URL){
    mysql.createConnection(process.env.JAWSDB_URL)
}
else{
    mysql.createConnection({
        port: '3306',
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
}



connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected to MySQL Server " + connection.threadId);
});

module.exports = connection;