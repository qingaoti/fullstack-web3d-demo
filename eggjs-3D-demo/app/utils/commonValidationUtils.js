'use strict';

const _ = require('lodash');
const FILE_TYPE = require('../common/constant').FILE_TYPE;

/**
 * 公共校验类
 */
class CommonValidationUtils {

  static verifyQueryCondition(queryCondition, sortArray) {
    const {sortCondition, pageCondition} = queryCondition;
    // 校验sortCondition
    if(!_.isEmpty(sortCondition) &&
      Object.keys(sortCondition).some(key => !_.includes(sortArray,key))) return true;

    return this._validPageCondition(pageCondition);
  }

  /**
	 * 校驗頁碼
	 */
  static _validPageCondition(pageCondition) {
    // 校验页码
    return (_.isEmpty(pageCondition) ||
			Object.keys(pageCondition).some(key => !_.isNumber(pageCondition[key])));
  }

  /**
	 * 校验枚举是否合法
	 * @param targetEnum Array
	 * @param value
	 */
  static isInEnum(targetEnum, value) {
    const valueArray = _.map(targetEnum);
    if (this.isArray(value)) {
      return !_.includes(valueArray, value);
    } else {
      return value.some(item => !valueArray.includes(item));
    }
  }

  /**
	 * 效验域名正确性的
	 * 长度最多20
	 * @param realmName Array 域名的数组
	 * @returns {boolean}
	 */
  static validFQDN(realmName) {
    if (!_.isArray(realmName) || realmName.length > 20) {
      return false;
    }
    return !realmName.some(item => !validator.isFQDN(item));
  }

  /**
	 * 校验png
	 */
  static validPng(buff) {
    const fileType = `${buff[0].toString(16)}${buff[1].toString(16)}${buff[2].toString(16)}${buff[3].toString(16)}`;
    return fileType.toLocaleUpperCase() === FILE_TYPE.PNG;
  }

  /**
	 * 校验jpg 或者png
	 */
  static validPngOrJpg(buff) {
    const fileType = `${buff[0].toString(16)}${buff[1].toString(16)}${buff[2].toString(16)}${buff[3].toString(16)}`;
    return fileType.toLocaleUpperCase() === FILE_TYPE.PNG || fileType.toLocaleUpperCase() === FILE_TYPE.JPG;
  }

  /**
	 * 校验zip
	 */
  static validZip(buff) {
    const fileType = `${buff[0].toString(16)}${buff[1].toString(16)}${buff[2].toString(16)}${buff[3].toString(16)}`;
    return fileType.toLocaleUpperCase() === FILE_TYPE.ZIP;
  }

  // ----------------------------------工具类的方法------------------------------------//


  //生成验证码
  static generateVerificationCode(num) {
    let codeSource = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let codeText = '';
    for (let i = 0; i < num; i++) {
      let random = Number((Math.random() * (codeSource.length - 1)).toFixed(0));
      codeText += codeSource[random];
    }
    return codeText;
  }

  //生成随机数字+字母码
  static generateWordCode(num) {
    let codeSource = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let codeText = '';
    for (let i = 0; i < num; i++) {
      let random = Number((Math.random() * (codeSource.length - 1)).toFixed(0));
      codeText += codeSource[random];
    }
    return codeText;
  }

}

module.exports = CommonValidationUtils;
