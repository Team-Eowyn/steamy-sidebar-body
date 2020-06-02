const db = require('./config.js');

// const copyQueryStr = `COPY games FROM '/Volumes/MY PASSPORT/data.csv' WITH (DELIMITER '|', HEADER, FORMAT csv);`;

// db.query(copyQueryStr, (err, res) => {
//   if (err) {
//     console.log('error', err.stack);
//   } else {
//     console.log('success', res.rows);
//   }
// });

const copyQueryStr = `COPY games FROM '/Volumes/MY PASSPORT/data.csv' WITH CSV DELIMITER '|' QUOTE '+' HEADER;`;

db.query(copyQueryStr, (err, res) => {
  if (err) {
    console.log('error', err.stack);
  } else {
    console.log('success', res.rows);
  }
});
