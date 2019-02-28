var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'paulo.luz',
        password: 'OA1IYuuw',
        database: 'lojas'
    });
}

module.exports = function () {
    return createDBConnection;
}