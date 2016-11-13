
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
      required: true
    },

    mail : {
      type: 'string',
      required: true
    },

    address : {
      type: 'string',
      required: true
    },

    phone : {
      type: 'string',
      required: true
    }
  },
};