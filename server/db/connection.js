const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db;
