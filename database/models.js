const mongoose = require('mongoose');
const config = require('./config.js');

// SCHEMAS
const gameSchema = new mongoose.Schema({
  proxyId: Number,
  name: { type: String, unique: true },
  url: String,
  mainbody: {
    description: String,
    images: Array,
    maturecontent: Array,
    sysrequirement: {
      os: Array,
      processor: String,
      memory: String,
      graphics: String,
    },
  },
  sidebar: {
    description: Object,
    vrsupport: Object,
    languages: Object,
    achievements: Array,
    metacritic: Number,
    minidescription: {
      genre: Array,
      developer: String,
      publisher: String,
      franchise: String,
      releasedate: String,
    },
  },
  relatedContent: [
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
  ],
});

const Game = mongoose.model('Game', gameSchema);

// METHODS
const getOne = (query, callback) => {
  Game.find({ proxyId: query }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
      // console.log(res);
      console.log('getOne success');
    }
  });
};

const addOne = (gameData, callback) => {
  const newGame = new Game(gameData);
  newGame.save((err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const updateOne = (query, newName, callback) => {
  Game.updateOne({ proxyId: query }, { name: newName }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const deleteOne = (query, callback) => {
  Game.deleteOne({ proxyId: query }, (err) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, query);
    }
  });
};

module.exports.updateOne = updateOne;
module.exports.deleteOne = deleteOne;
module.exports.getOne = getOne;
module.exports.addOne = addOne;
module.exports.Game = Game;
