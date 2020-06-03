const { Client } = require('pg');

const client = new Client({
  host: '172.31.35.195',
  database: 'steamy',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log('connection error', err.stack);
  } else {
    console.log('database connected!');
  }
});

module.exports = client;
