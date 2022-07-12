'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home');
  }

  /**
   * 此接口只做服务存活监听使用
   */
  async healthy() {
    this.ctx.body = 'healthy';
  }
}

module.exports = HomeController;
