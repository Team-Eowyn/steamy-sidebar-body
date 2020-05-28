const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'steamy',
});
client.connect((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('cassandra db connected!');
  }
});

module.exports = client;
