const express = require('express');
const app = express();
const mongoDB = require('./utils/mongo.js');
const blogsRouter = require('./controllers/blogs.js');

app.get('/', (req, res) => {
    res.send('Server is running');
 });

module.exports = app;