const db = require('./config');

exports.getOneById = (request, response) => {
  const { params } = request;
  const getIdQuery = `SELECT * FROM games WHERE id = ${params.id}`;
  db.query(getIdQuery, (err, res) => {
    if (err) {
      response.status(400).send('something went wrong');
    } else {
      const returnObj = {};
      returnObj.id = res.rows[0].id;
      returnObj.name = res.rows[0].name;
      returnObj.url = res.rows[0].url;
      returnObj.mainbody = JSON.parse(res.rows[0].mainbody);
      returnObj.sidebar = JSON.parse(res.rows[0].sidebar);
      returnObj.relatedContent = JSON.parse(res.rows[0].related);
      response.status(200).send([returnObj]);
    }
  });
};

exports.addOne = (request, response) => {
  const inputData = request.body;
  const { id } = inputData;
  const { name } = inputData;
  const { url } = inputData;
  const mainbody = JSON.stringify(inputData.mainbody);
  const sidebar = JSON.stringify(inputData.sidebar);
  const related = JSON.stringify(inputData.relatedContent);

  const addOneQuery = 'INSERT INTO games (id, name, url, mainbody, sidebar, related) VALUES ($1, $2, $3, $4, $5, $6);';

  const getOneValues = [id, name, url, mainbody, sidebar, related];

  db.query(addOneQuery, getOneValues, (err, res) => {
    if (err) {
      response.status(400).send('something went wrong');
    } else {
      response.status(201).json({
        id, name, url, mainbody, sidebar, related,
      });
    }
  });
};

exports.deleteOne = (request, response) => {
  const { params } = request;
  const deleteQuery = `DELETE FROM games WHERE id = ${params.id} RETURNING *;`;
  db.query(deleteQuery, (err, res) => {
    if (err) {
      response.status(400).send('something went wrong');
    } else {
      response.status(200).json(res.rows[0]);
    }
  });
};

exports.updateOne = (request, response) => {
  const { params } = request;
  const { name } = request.body;
  const updateQuery = `UPDATE games SET name = '${name}' WHERE id = ${params.id} RETURNING name;`;
  db.query(updateQuery, (err, res) => {
    if (err) {
      response.status(400).send('something went wrong');
    } else {
      response.status(200).json(res.rows[0]);
    }
  });
};
