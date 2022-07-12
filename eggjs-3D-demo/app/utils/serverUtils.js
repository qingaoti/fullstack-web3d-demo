'use strict';

const request = require('request');
const defaultConfig = require('../common/commonConfig').SERVER_CONFIG;
const rst = require('../common/baseResult');
const {BIZ_CODE} = require('../common/commonBizMessage');
const _ = require('lodash');

/**
 * 服务调用方法
 */
class ServerUtils {
  constructor(config) {
    this.config = config || defaultConfig;
  }

  /**
   *
   * @param serverName 调用的服务名称
   * @param urlPath  调用的服务path路径
   * @param buildParamsArray urlPath参数占位符顺序数组
   * @param params   body参数
   * @param method   调用方法
   * @param auth     用户token
   * @returns {Promise<>}
   */
  async send(serverName, urlPath, buildParamsArray, params, method, auth) {
    //处理url请求参数,
    const buildURI = buildUri.call(this, urlPath, buildParamsArray);
    const reqUrl = this.config[serverName] + buildURI;
    return this._httpRequestByUrlWithAuth(reqUrl, params, method, auth);
  }

  /**
   * http 请求封装
   * @param url {string}
   * @param params {Object}
   * @param method {string}
   * @param auth {string}
   * @private
   */
  _httpRequestByUrlWithAuth(url, params, method, auth) {
    if (!auth) {
      throw rst.error(BIZ_CODE.COMMON_PARAM.NO_LOGIN);
    }
    const headers = {
      'Authorization': `Bearer ${auth}`
    };
    params = params ? params : {};
    return new Promise((resolve, reject) => {
      request({
        uri: url,
        method: method,
        json: true,
        headers: headers,
        keepAlive: true,
        body: params
      }, function (err, response, body) {
        if (err) reject(err);
        if(_.has(body, 'code') && _.has(body, 'msg') && _.has(body, 'data')){
          // 返回格式得要是 通用格式
          if(body.code !== 0){
            reject(body);
          }else{
            resolve(body);
          }
        }else {
          reject(body);
        }
      });
    });
  }
}

/**
 * 拼接url参数
 * @param  uriStr  url访问的path路径
 * @param  paramsArray  参数数组
 */
function buildUri(uriStr, paramsArray) {
  if (!paramsArray || !(paramsArray instanceof Array)) {
    paramsArray = [];
  }
  for (let i = 0; i < paramsArray.length; i++) {
    uriStr = uriStr.replace(`{${i}}`, paramsArray[i]);
  }
  return uriStr;
}


module.exports = ServerUtils;
