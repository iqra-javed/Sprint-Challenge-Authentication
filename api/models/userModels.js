const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = new Schema({
  // create your user schema here.
  // username: required, unique and lowercase
  // password: required
  username: {
    type: String,
    unique: true,
    required: true, 
    lowercase: true,
  },
  password: {
    type: String, 
    required: true, 
  }
});

UserSchema.pre('save', function(next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user
    return bcrypt.hash(this.password, SALT_ROUNDS)
    .hash(this.password, 11)
      .then( hash => {
        this.password = hash
        next()
      })
      .catch( err => {
        next(err)
      })
  })


UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  return bcrypt.compare(plainTextPW, this.password, function (error, isValid) {
        if (error) {
          return callBack(error);
        }
        callBack(null, isValid)
      })
};

module.exports = mongoose.model('User', UserSchema);
