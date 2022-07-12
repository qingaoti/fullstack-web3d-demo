const Controller = require('egg').Controller;
const rst = require('../common/baseResult');
const _ = require('lodash');
const validationUtil = require('../utils/commonValidationUtils');
const BIZ_CODE = require('../common/commonBizMessage').BIZ_CODE;

/**
 * @controller 用户服务
 */
class UserController extends Controller {

  /**
   * @summary 创建用户 示例
   * @description 创建 ...
   * @router post /api/user/create
   * @request body loginInfo 设备信息
   * @response 0 successRst 返回结果
   */
  async createUser() {
    const {userName, password} = this.ctx.request.body;
    if (_.isEmpty(userName) || _.isEmpty(password)) {
      // 用户名密码为空
      throw rst.error(400, '用户名或密码不能为空!');
    }
    const result = await this.ctx.service.user.createUser(userName, password);
    this.ctx.body = rst.getResult(result);
  }

  /**
   * @summary 查询用户列表 示例
   * @description 查询用户列表 ...
   * @router get /api/user/list
   * @request header string Authorization token - example:'Bearer xxxxx'
   * @response 0 successRst 返回结果
   */
  async getUserList() {
    const result = await this.ctx.service.user.getUserList();
    this.ctx.body = rst.getResult(result);
  }

  /**
   * @summary 登录 示例
   * @description 通过账号登录用户 ...
   * @router post /api/user/login
   * @request body loginInfo 设备信息
   * @response 0 successRst 返回结果
   */
  async login() {
    const {userName, password} = this.ctx.request.body;
    if (_.isEmpty(userName) || _.isEmpty(password)) {
      // 用户名密码为空
      throw rst.error(400, '用户名或密码不能为空!');
    }
    const result = await this.ctx.service.user.GetLogin(userName, password);
    this.ctx.body = rst.getResult(result);
  }

}

module.exports = UserController;
