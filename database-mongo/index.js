const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')

let db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', () => console.log('mongoose connected successfully!'));

const user = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {timestamps: true});

const User = mongoose.model('user', user);



const getAll = (cb) => {
  User.find({}).exec((err, users) => {
    if(err) {
      return console.log('mongo getAll error: ', err);
    } else {
      cb(null, users);
    }
  });
};

const getLast = (cb) => {
  User.findOne({}, { array_field: { $slice: -1 }}).exec((err, user) => { // need latest entry but gives oldest entry
    if(err) {
      return console.log('mongo getLast error: ', err);
    } else {
      cb(null, user);
    }
  });
};

const add = (name, cb) => {
  console.log('mongo: ', name)
  User.create(name, (err, user) => {
    if(err) {
      return console.log('mongo add error: ', err);
    } else {
      cb(null, user);
    }
  });
};


module.exports = {
  add,
  getAll,
  getLast
};