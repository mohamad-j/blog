const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'root123456',
    database: 'blog'
});

pool.query(" select * from user; " , function( error, result, fields ){

    // Do you application actions
    console.log(' result ', result );
    
    // Close the connection
    pool.end();
});

