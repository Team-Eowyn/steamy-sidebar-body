const db = require('./config.js');

const queryStr = 'INSERT INTO games VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
const values = [10000005, 'sleek black desk', 'sleekdesk.com', '{"description": "a sentence about a desk", "images": ["a", "desk"], "maturecontent": {"description": "some more info"}, "sysrequirement": {"os": ["some", "info"], "processor": "something else", "memory": "info about mem", "graphics": "something else"}}', 'some information about the sidebar', 'some information about rleatedContent'];
db.query(queryStr, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
  }
});
