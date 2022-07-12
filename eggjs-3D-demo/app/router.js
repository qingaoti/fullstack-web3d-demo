'use strict';

module.exports = app => {
  const { router, controller } = app;

  /**
   * home页面， 显示socket连接情况
   */
  router.get('/', controller.home.index);

  /**
   * 服务存活接口
   */
  router.get('/healthy', controller.home.healthy);

  /**
   * 设备路由
   */
  require('./router/user');

  /**
   * 设备路由
   */
  require('./router/web3d');


};
