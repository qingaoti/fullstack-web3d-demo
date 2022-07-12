'use strict';

/**
 * 基础返回信息
 */
class BaseResult {
  /**
   * 初始数据
   * @param data {Object}返回数据
   */
  static getResult(data) {
    return {
      // 响应编码
      code: 1,
      // 响应信息
      msg: 'success',
      // 返回数据
      data: data ? data : {}
    };
  }

  /**
   * 成功返回
   * @param data {Object}返回数据
   * @returns {any}
   */
  static getSuccessResult(data) {
    return Object.assign(this.getResult(), data);
  }

  /**
   * 分页结果
   * @param data {Object}返回数据
   * @param page {Object}返回数据
   * @returns {any}
   */
  static getPagedResult(data, page) {
    return Object.assign(this.getResult(), {data: data}, page);
  }

  /**
   * 业务异常
   * @param code {string}
   */
  static error(code) {
    const error = new Error();
    error.code = code;
    return error;
  }

  /**
   * 泛用模式，暂时不用国际化
   * @param code 403
   * @param message ‘什么什么错误’
   * @returns {Error}
   */
  static error(code,message) {
    const error = new Error();
    error.code = code;
    error.message = message;
    return error;
  }

  /**
   * 中间件异常
   * @param code {string}
   * @param message {string}
   */
  static errorMsg({code, message}) {
    const error = new Error();
    error.code = code;
    error.message = message;
    return error;
  }

}

module.exports = BaseResult;
