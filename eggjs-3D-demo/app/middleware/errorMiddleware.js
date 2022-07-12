'use strict';
/**
 * 错误中间件
 * 业务异常均在此拦截
 * 腾讯后期可在此增加业务处理逻辑
 * @param options
 * @param app
 */
module.exports = (options, app) => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      // 记录到日志
      if (error.code) {
        ctx.logger.warn('warn ：', error);
        // 记录当前参数 和 用户
        ctx.logger.warn('参数 ：', {
          token: ctx.token,
          user: ctx.user,
          body: ctx.body,
        });

        ctx.body = {
          code: error.code,
          msg: error.msg || error.message || ctx.gettext(error.code),
          data: null,
        };
      } else {
        // 系统错误等丢给egg 错误处理
        ctx.logger.error('error ：', error);
        ctx.logger.warn('参数 ：', {
          token: ctx.token,
          user: ctx.user,
          body: ctx.body,
        });
        ctx.body = {
          msg: error.message || error.stack,
          code: -1,
          data: null,
        };
      }
    }
  };
};

