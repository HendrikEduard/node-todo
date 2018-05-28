const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('The server is listening on port 3000');