const { app } = require('apico/server.js');
const mysql = require('mysql2');


app.use(function( req, res, next){
    

    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'blog',
        password: 'root123456'
      });
    
      let sql = `SELECT * FROM post`;
     // 2 sec 
      pool.query(sql, function(err, posts, fields) {
        if(err) throw err;
        console.log(' posts ',posts);
        res.locals.all_posts = posts;

        next();

      });

     

    

});
