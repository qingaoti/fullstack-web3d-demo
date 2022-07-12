'use strict';
const tokenMiddleware = require('../middleware/tokenMiddleware');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const web3dRouter = app.router.namespace('/api/web3d');
  const {controller} = app;
  const {web3d} = controller;

  /**
   *
   */
  web3dRouter.get('/data' ,tokenMiddleware(app.config,app), web3d.getDataInfo);


};
