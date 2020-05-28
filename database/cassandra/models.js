const db = require('./config.js');

const queryStr = 'INSERT INTO games (id, mainbody, name, related, sidebar, url) VALUES (?, ?, ?, ?, ?, ?)';
const params = [1, 'MarioKart', 'mariokart.com', '{"description": "this is a great game that we all love."}', '{"minidescription": "here is another description"}', '["one thing", "two things", "three things"]'];

db.execute(queryStr, params, { prepare: true }, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result.rows);
  }
});
