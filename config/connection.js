//Required dependency
var mysql = require('mysql');

//Connecting to mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P2gk9jhx!',
    database: 'burgers_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " +connection.threadId);
});

//Export to ORM
module.exports = connection;