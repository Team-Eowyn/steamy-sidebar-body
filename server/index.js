const express = require('express');
const bodyParser = require('body-parser');
const pgModels = require('../database/postgreSQL/models.js');
const mModels = require('../database/mongo/models.js');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get('/mainbody', (req, res) => {
  res.redirect('/');
});

app.get('/mainbody/:id', (req, res) => {
  const { params } = req;
  // res.status(200).send(params.proxyId);
  // console.log('query is : ', query);
  pgModels.getOneById(params.id, (err, data) => {
    if (err) {
      // console.log('error: ', err);
      res.status(404).send('something went wrong');
    } else {
      // console.log('returned data: ', data);
      res.status(200).json(data);
    }
  });
});

app.post('/mainbody', (req, res) => {
  const newData = req.body;
  mModels.addOne(newData, (err, data) => {
    if (err) {
      res.status(500).send('something went wrong');
    } else {
      res.status(201).send(`new game added: ${data}`);
    }
  });
});

app.delete('/mainbody/:proxyId', (req, res) => {
  const { params } = req;
  mModels.deleteOne(params.proxyId, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'something went wrong' });
    } else {
      res.status(200).send(`game at proxyId ${results} deleted from database`);
    }
  });
});

app.put('/mainbody/:proxyId', (req, res) => {
  const { params } = req;
  const { name } = req.body;
  mModels.updateOne(params.proxyId, name, (err) => {
    if (err) {
      res.status(500).send('something went wrong');
    } else {
      res.status(200).send('item updated');
    }
  });
});

module.exports = app;
