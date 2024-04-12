const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'root123456',
    database: 'blog'
});

pool.query(" select * from user; " , function(error, results, fields){

    // Do you application actions
    console.log(' results ', results );
    
    // Close the connection
    pool.end();
});

