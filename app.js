const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { mongoUrl } = require('./config');
const bodyParser = require('body-parser');

//routes
const authorsRoutes = require('./api/routes/authors');
const booksRoutes = require('./api/routes/books');
const bodyParser = require('body-parser');
const config = require('./config/init');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(config.cors);

app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

module.exports = app;