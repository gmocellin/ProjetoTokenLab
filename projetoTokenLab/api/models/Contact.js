
/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */



module.exports = {

  attributes: {

    user: {
      model: 'user',
      required: true,
      notNull: true
    },

    name : {
      type: 'string',
      required: true
    },

    birthday : {
      type: 'date',
      required: false
    },

    mail : {
      type: 'string',
      required: false
    },

    address : {
      type: 'string',
      required: false
    },

    phone : {
      type: 'string',
      required: false
    }
  },
};