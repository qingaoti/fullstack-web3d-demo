'use strict';
const _ = require('lodash');
const Service = require('egg').Service;
const rst = require('../common/baseResult');

/**
 * 用户服务类
 */
class UserService extends Service {

  /**
   * 创建用户
   * @returns {Promise<*>}
   * @param userName
   * @param password
   */
  async createUser(userName,password) {
    const User = this.ctx.model.User;

    const existUser = await User.findOne({'userName': userName});
    if (!_.isEmpty(existUser)) throw rst.error(403, '用户已存在');

    const user = await new User({
      userName,password
    }).save();
    return {
      ...user._doc,
      token: this.config.token
    };
  }

  /**
   * 查询用户数据
   * @returns {Promise<{msg: string, code: number, data: Object}|{msg: string, code: number, data: Object}|*>}
   */
  async getUserList() {
    return await this.ctx.model.User.find({}).lean();
  }

  async GetLogin(userName, password) {
    // 拿数据库用户，如果不存在返回
    const userInfo = await this.ctx.model.User.findOne({
      userName
    }).lean();
    if (_.isEmpty(userInfo)) throw rst.error(401, '用户不存在');
    if (userInfo.password !== password) throw rst.error(401, '用户的账号或者密码错误');

    // 用户信息+ token
    userInfo.token = this.config.token;
    return userInfo;
  }

}


module.exports = UserService;
