const mysql = require("mysql");

var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'eleme',
    port:3306,
    connnectionLimit:10
});

module.exports = pool;