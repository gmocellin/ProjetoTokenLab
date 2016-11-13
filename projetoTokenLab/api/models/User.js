

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type: 'string',
      required: true
    },

    username : {
      type: 'string',
      required: true,
      unique: true
    },

    password : {
      type: 'string',
      required: true
    },

    contacts: {
      collection: 'contact',
      via: 'user'
    },

  },

  // beforeCreate: function(user, cb) {
  //   bcrypt.genSalt(10, function(err, salt) {
  //     bcrypt.hash(user.password, salt, function(err, hash) {
  //       if (err) cb(err);
  //       else {
  //         user.password = hash;
  //         cb();
  //       }
  //     });
  //   });
  // }

};

