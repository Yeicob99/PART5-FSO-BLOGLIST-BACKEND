const config = require('./utils/config.js');
const app = require('./app.js');
const blogsRouter = require('./controllers/blogs.js');
const { mongoose } = require('./utils/mongo.js');
const express = require('express');

const PORT = config.PORT;

// Middleware
app.use(express.json());

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
}); 


mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
