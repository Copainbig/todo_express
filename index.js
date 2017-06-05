const express = require('express');

const app = express();

let todos = [];

/*
    Set the CORS headers
 */
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
    }
    else {
        //move on
        next();
    }
});

app.get('/todos', function(req, res){
    console.log('got a GET request');
    res.end(JSON.stringify(todos));
});

app.post('/todos', function(req, res){
    console.log('got a POST request');
    todos.push(JSON.parse(req.body));
    res.end(req.body);
});

app.listen(3000);
console.log('server listening on port 3000');