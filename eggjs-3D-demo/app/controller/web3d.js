const Controller = require('egg').Controller;
const rst = require('../common/baseResult');

/**
 * @controller web3D服务- 需要认证的
 */
class Web3dController extends Controller {

  /**
   * @summary 拿取后台模型数据，解析后，输入到前端
   * @description 查询用户列表 ...
   * @router get /api/web3d/data
   * @request header string Authorization token - example:'Bearer token-demo'
   * @response 0 successRst 返回结果
   */
  async getDataInfo() {
    const result = await this.ctx.service.web3d.getDataInfo();
    this.ctx.body = rst.getResult(result);
  }

}

module.exports = Web3dController;
