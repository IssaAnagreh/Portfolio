const mongoose = require('mongoose');
mongoose.connect('mongodb://isa:isa123@ds155825.mlab.com:55825/portfolio');

const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

const user = mongoose.Schema({
  firstName: String,
  midName: String,
  lastName: String,
  email: String,
  password: String,
  info: String,
  token: String,
  createdAt: Date
  //client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'client' }]
});

const User = mongoose.model('user', user);

// select all users
const selectAll = function (callback) {
  User.find({}, null, {
    skip: 0, // Starting Row
    limit: 10, // Ending Row
    sort: {
      createdAt: -1 //Sort by Date Added DESC
    }
  }, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

// search by field
const searchByField = function (field, fieldData, callback) {
  User.find({ [field]: fieldData }, function (err, item) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};

// update profile fields
const updateField = function (field, fieldData, updatingData, callback) {
  User.updateMany({ [field]: fieldData }, { $set: updatingData }, function (err, item) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, item);
    }
  })
}

// delete user profile by field
const deleteByField = function (field, fieldData, callback) {
  User.deleteOne({ [field]: fieldData }, function (err, done) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, done);
    }
  })
}

module.exports.User = User;
module.exports.selectAll = selectAll;
module.exports.searchByField = searchByField;
module.exports.updateField = updateField;
module.exports.deleteByField = deleteByField;
