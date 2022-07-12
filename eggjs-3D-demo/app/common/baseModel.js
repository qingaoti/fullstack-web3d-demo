'use strict';

/**
 * 基础模型类信息
 */
class BaseModel {
  /**
   * 格式化分页参数
   * @param pageSize
   * @param pageCount
   * @param defaultPageSize
   * @returns {{limit: (number|*), skip: number}}
   */
  static formatPagingParams(pageSize, pageCount, defaultPageSize){
    try {
      var _limit = pageSize ? parseInt(pageSize) : defaultPageSize;
      var _skip = (pageCount === undefined || _limit === undefined) ? 0 : Math.max(0, (parseInt(pageCount) - 1)) * _limit;
      return {
        limit: _limit,
        skip: _skip
      };
    } catch (err) {
      throw new Error(403, 'pageSize或pageCount参数不正确');
    }
  };

  /**
   * 清空为null的参数
   * @param obj 对象
   * @returns {*}
   */
  static removePropertyOfNull(obj){
    Object.keys(obj).forEach(item=>{
      if(!obj[item])  delete obj[item];
    });
    return obj;
  }

}

module.exports = BaseModel;
