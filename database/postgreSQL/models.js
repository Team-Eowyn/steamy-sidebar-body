const db = require('./config');

const getOneByName = (gameName) => {
  const queryStr = `SELECT * FROM games WHERE name = '${gameName}';`;
  db.query(queryStr, (err, res) => {
    if (err) {
      console.log('error getting record', err.stack);
    } else {
      console.log('success:', res.rows);
    }
  });
};

const getOneById = (idNum, callback) => {
  const getIdQuery = `SELECT * FROM games WHERE id = ${idNum};`;
  db.query(getIdQuery, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows[0]);
    }
  });
};

const addOne = (valuesArray) => {
  const addOneQuery = `INSERT INTO games (id, name, url, mainbody, sidebar, related) VALUES ($1, $2, $3, $4, $5, $6);`;
  const getOneValues = valuesArray;
  db.query(addOneQuery, getOneValues, (err, res) => {
    if (err) {
      console.log('error:', err.stack);
    } else {
      console.log('success:', res.rows[0]);
    }
  });
};

module.exports.getOneById = getOneById;
