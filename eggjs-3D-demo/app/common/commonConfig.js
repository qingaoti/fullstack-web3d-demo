'use strict';

/**
 * json web token 配置
 */
const JWT_CONFIG = {
  // jwt私钥
  PRIVATE_KEY: 'FILAPP_2021_03_10',
  // 有效时间
  EXPIRES_IN: '24h',
};

/**
 * aes 加密配置
 */
const AES_CONFIG = {
  // 加密方式
  AES_WAY: 'aes-128-cbc',
  // 秘钥
  KEY: 'filApp_123456!@#',
  // padding
  IV: 'abcdefghijklmnop',
  // 编码方式
  ENCODE: 'base64',
  // 防抖时间间隔(毫秒值)
  SHAKE_TIME_OUT: 10000,
};

/**
 * 通用配置
 */
module.exports = {
  JWT_CONFIG,
  AES_CONFIG,
};
