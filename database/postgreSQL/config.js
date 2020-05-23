const { Client } = require('pg');

const client = new Client();

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database connected!');
  }
});
