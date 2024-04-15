const router = require('express').Router();
const { app } = require('apico/server.js');

const mysql = require('mysql2');
/** Declare routes for Router */

// posts/all
// localhost:3000
// localhost:3000/posts/all
router.get('/all', function(req, res){
    
    let pool = mysql.createPool({
        host:'localhost',
        user: 'root',
        password: 'root123456',
        database: 'blog'
    });

    pool.query(" select * from post " , function(error, results, fields){
        res.json({ message: 'All Posts', data: results });
        pool.end();
    });
});

// posts/create
router.post('/create', function(req, res){
    let sql = ` insert into post( author_id, title, slug, created_at )
                values( 6, 'test titel', 'Slug awqrtqqe', NOW() ) `;

    let pool = mysql.createPool({
        host:'localhost',
        user: 'root',
        password: 'root123456',
        database: 'blog'
    });


    pool.query( sql, function( error, result ){
        pool.end();

        res.json({mesage: "Done",err: error, the_result: result });

    });
});

// posts/update
router.put('/update', function(req, res){
    res.json({ message: 'Update post' });
});

// posts/delete
router.delete('/delete', function(req, res){
    res.json({ message: 'Delete post' });
});

// posts/:id
// post/12
//post/1232
//post/name
router.get('/:id', function(req, res){
    res.json({ message: 'Get post by id', params: req.params.id });
});

app.use( '/posts', router );