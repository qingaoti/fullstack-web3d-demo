'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const userRouter = app.router.namespace('/api/user');
  const {controller} = app;
  const {user} = controller;

  /**
   * 创建
   */
  userRouter.post('/create' , user.createUser);

  /**
   * 登录
   */
  userRouter.post('/login' , user.login);

  /**
   * 查询用户信息
   */
  userRouter.post('/list', user.getUserList);

};
