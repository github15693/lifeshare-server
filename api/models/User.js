/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    id : {type: 'integer', primaryKey : true, autoIncrement: true},

    first_name : { type: 'string' },

    last_name : { type: 'string' },

    age : { type: 'integer' },

    email : { type: 'email', required:true, unique:true},

    reg_id : { type: 'string' },

    last_login : { type: 'datetime' },

    device_id : { type: 'string' },

    created_at : { type: 'datetime', defaultsTo: function (){ return new Date(); } },

    updated_at : { type: 'datetime', defaultsTo: function (){ return new Date(); } },

    is_active : { type: 'boolean', defaultsTo: function (){ return true; } },

    phone_number : { type: 'string' }
  }
};

