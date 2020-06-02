require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../database/postgreSQL/controllers.js');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/mainbody', (req, res) => {
  res.redirect('/');
});

app.get('/mainbody/:id', controllers.getOneById);

app.post('/mainbody', controllers.addOne);

app.delete('/mainbody/:id', controllers.deleteOne);

app.put('/mainbody/:id', controllers.updateOne);

module.exports = app;
