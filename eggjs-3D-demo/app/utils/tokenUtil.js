/* eslint-disable no-dupe-class-members */

const lodash = require('lodash');
const {JWT_CONFIG, AES_CONFIG} = require('../common/commonConfig');
const CryptUtil = require('./cryptUtil.js');

/**
 * token工具类
 */
class TokenUtil {
  /**
   * 获取token
   * @param  ctx
   */
  static getTokenByReq(ctx) {
    let tpAuth = ctx.request.get("Authorization");
    if(tpAuth){
      let tpAuArr = tpAuth.split(" ");
      let tpAuH = tpAuArr[0];
      let tpAuT = tpAuArr[1];
      return tpAuT;
    }
    if (ctx.request.header.authorization && ctx.request.header.authorization.indexOf('Bearer ') >= 0) {
      return ctx.request.header.authorization.replace('Bearer ', '');
    }
    if (ctx.cookies.get('token')) {
      return ctx.cookies.get('token');
    }
    if (ctx.request.header.cookie) {
      return this.cookieParser(ctx.request.header.cookie).token;
    }
    return null;
  }

  /**
   * cookie轉換
   */
  static cookieParser(str) {
    const res = {};
    str.split(';').forEach(item => {
      if(item.indexOf('=') > 0) {
        res[item.split('=')[0].trim()] = item.split('=')[1];
      }
    });
    return res;
  }

  /**
   * 根據token獲取用戶
   */
  static async getUserFromToken(ctx) {
    const token = this.getTokenByReq(ctx);
    let userInfo = await ctx.app.redis.get(token);
    userInfo = JSON.parse(userInfo);
    return userInfo;
  }

  /**
   * 防止重复提交 交换凭证
   */
  static checkShake(param){
    if(lodash.isEmpty(param.shake)) {
      return false;
    }
    if(!lodash.isString(param.shake)) {
      return false;
    }
    try {
      const shake = CryptUtil.decryption(param.shake);
      if(Math.abs(Date.now() - parseInt(shake, 10)) < AES_CONFIG.SHAKE_TIME_OUT) {
        return true;
      }
      console.log(param.shake, shake, Date.now());
    } catch(e) {
      console.warn(e);
      return false;
    }
    return false;
  }
}
module.exports = TokenUtil;
