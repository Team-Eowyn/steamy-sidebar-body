const db = require('./config.js');

// create games table if it doesn't exist
const createTableStr = `CREATE TABLE IF NOT EXISTS games (
  id        integer PRIMARY KEY,
  name      varchar(40),
  url       varchar(40),
  mainbody  text,
  sidebar   text,
  related   text
);`;

db.query(createTableStr, (err, res) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('games table added!');
  }
});
