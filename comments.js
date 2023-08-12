//create a web server
const express = require('express');
const app = express();

//importing the comments.json file
const comments = require('./comments.json');

//create a route
app.get('/comments', function(req, res) {
    res.json(comments);
});

//create a route
app.get('/comments/:id', function(req, res) {
    const comment = comments.find(function(comment) {
        return comment.id === Number(req.params.id);
    });
    res.json(comment);
});

//create a route
app.post('/comments', function(req, res) {
    const comment = {
        id: comments.length + 1,
        body: req.body.body,
        postId: 1
    };
    comments.push(comment);
    res.json(comment);
});

//create a route
app.put('/comments/:id', function(req, res) {
    const comment = comments.find(function(comment) {
        return comment.id === Number(req.params.id);
    });
    comment.body = req.body.body;
    res.json(comment);
});

//create a route
app.delete('/comments/:id', function(req, res) {
    const commentIndex = comments.findIndex(function(comment) {
        return comment.id === Number(req.params.id);
    });
    comments.splice(commentIndex, 1);
    res.sendStatus(204);
});

//listen to the port
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

