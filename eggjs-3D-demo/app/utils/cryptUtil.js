'use strict';
const crypto = require('crypto');
const {AES_CONFIG} = require('../common/commonConfig');
/**
 * 加密工具
 */
class CryptUtil {

  /**
   * AES_128_CBC 加密
   * 128位
   * return base64
   */
  static encryption(data, config = AES_CONFIG) {
    const cipherChunks = [];
    let cipher = crypto.createCipheriv('aes-128-cbc', config.KEY, config.IV);
    cipher.setAutoPadding(true);
    cipherChunks.push(cipher.update(data, 'utf8', 'base64'));
    cipherChunks.push(cipher.final('base64'));
    return cipherChunks.join('');
  }

  /**
   * 解密
   * return utf8
   */
  static decryption(data, config = AES_CONFIG) {
    const cipherChunks = [];
    let decipher = crypto.createDecipheriv('aes-128-cbc', config.KEY, config.IV);
    decipher.setAutoPadding(true);
    cipherChunks.push(decipher.update(data, 'base64', 'utf8'));
    cipherChunks.push(decipher.final('utf8'));
    return cipherChunks.join('');
  }
}
module.exports = CryptUtil;
