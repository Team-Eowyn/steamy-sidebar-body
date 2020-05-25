const db = require('./config.js');

const simpleQuery = `INSERT INTO games (id, name, url, mainbody, sidebar, related) VALUES ($1, $2, $3, $4, $5, $6)`;

const simpleValues = ['2', 'MarioKart', 'mariokart.com', JSON.stringify({ description: 'this is a really wonderful description' }), JSON.stringify({ vrsupport: 'it has lots of cool stuff' }), JSON.stringify(['English', 'French'])];

const copyQueryStr = `COPY games FROM '/Users/ingridcarlson/Documents/HRR45/SDC/sidebar-body-related/database/hundredData.csv' WITH (DELIMITER '|', HEADER, FORMAT csv);`;

db.query(copyQueryStr, (err, res) => {
  if (err) {
    console.log('error', err.stack);
  } else {
    console.log('success', res.rows);
  }
});
