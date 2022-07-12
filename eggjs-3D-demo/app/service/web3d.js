'use strict';
const _ = require('lodash');
const Service = require('egg').Service;
const {promises: {readFile, writeFile}} = require('fs');

/**
 * web3d服务类
 */
class Web3dService extends Service {

  /**
   * 查询用户数据
   * @returns {Promise<{msg: string, code: number, data: Object}|{msg: string, code: number, data: Object}|*>}
   */
  async getDataInfo() {
    let json;
    let dataInfo;

    try {
      json = await readFile('./data/SubVersion.json', 'utf8');
      dataInfo = JSON.parse(json);
    } catch (e) {
      this.app.logger.error(`读取本地data模型未成功，原因：${JSON.stringify(e)}`);
    }

    return dataInfo;
  }



}


module.exports = Web3dService;
