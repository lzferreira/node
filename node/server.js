const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

//mongoose.connect('mongodb+srv://lzferreira:lzferreira@clusterteste-gpu6n.mongodb.net/test?retryWrites=true&w=majority', {
//    useNewUrlParser:true,
//    useUnifiedTopology:true,
//})

mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser:true });

requireDir('./src/models');

app.use("/api", require('./src/routes') );

app.listen(3001);

