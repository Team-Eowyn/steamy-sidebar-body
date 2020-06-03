const { Client } = require('pg');

const client = new Client({
  host: 'ec2-18-224-183-114.us-east-2.compute.amazonaws.com',
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
