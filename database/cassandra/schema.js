const db = require('./config.js');

db.execute('CREATE TABLE games (id int PRIMARY KEY, name text, url text, mainbody text, sidebar text, related text)', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('table added!');
  }
});
