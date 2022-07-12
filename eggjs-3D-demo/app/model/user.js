'use strict';
const constant = require('../common/constant');
const _ = require('lodash');

/**
 * 短链接记录表
 */
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    //_id
    userName: {type: String, required: true},
    password: {type: String, required: true}
  }, {
    versionKey: false,
    timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}
  });


  return mongoose.model('User', userSchema,'user');
};
