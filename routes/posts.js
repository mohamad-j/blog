const router = require('express').Router();
const { app } = require('apico/server.js');

const mysql = require('mysql2');
/** Declare routes for Router */

// posts/all
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
    res.json({ message: 'Create post' });
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