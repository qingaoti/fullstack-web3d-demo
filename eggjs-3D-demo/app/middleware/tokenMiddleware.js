'use strict';

const lodash = require('lodash');
const TokenUtil = require('../utils/tokenUtil');
const res = require('../common/baseResult');

/**
 * token中间件   简单的例子， 只是验证存在不
 */
module.exports = (options, app) => {
  return async function tokenValid(ctx, next) {
    // 从请求头或cookies中获取token
    const token = TokenUtil.getTokenByReq(ctx);
    if (lodash.isEmpty(token) || !lodash.isEqual(token,app.config.token)) {
      ctx.status = 401;
      throw res.errorMsg({
        code: 401,
        message: '认证失败'
      });
    }
    await next();
  };
};

