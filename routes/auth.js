const router  = require('express').Router();
const { app } = require('apico/server');


// htt://localhost:3000/auth/register "POST"
router.post('/register', async( req, res )=>{
    res.json({"message": "Register works"});
});

app.use( '/auth', router );