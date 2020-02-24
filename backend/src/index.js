const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.get('/', (request, response) => { 
    return response.json({message: 'Olá, mané'});
}) 

mongoose.connect('mongodb+srv://Igor:igorSO10@cluster0-sythn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);