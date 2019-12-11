const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb+srv://lzferreira:lzferreira@clusterteste-gpu6n.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

requireDir('./src/models');

app.use("/api", require('./src/routes') );

app.listen(3001);

