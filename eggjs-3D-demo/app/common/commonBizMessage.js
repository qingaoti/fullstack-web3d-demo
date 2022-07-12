'use strict';
/**
 * 异常国际化
 */
const BIZ_MSG = {
  zh_CN: {
    // 登录服务相关
    1001: '无权限，请联系管理员',

    3000: '用户未登录',
    3002: '参数错误',
    3003: '错误的token',
    3004: 'token 失效，请重新登录',
    3005: '提交参数含有XSS攻击脚本',
    3006: '凭据失效，请重试',
    // 3200~3300 细化部分，通用的参数错误
    3200: '必填参数错误',
    3201: '非必填参数错误',
    3202: '入参类型错误',
    3203: '入数长度错误',
    3204: '入参不合法',
    3205: '上传错误',
    3206: '缺少必填参数',
    3207: 'cos服务端错误,请检查网络或配置',

    // 登录
    4000: '用戶名不符合规范',
    4001: '用户名密码不能为空',
    4002: '用户名或密码错误',
    4003: '当前账号已被安全锁定15分钟，请联系管理员或等待解锁后重试',

    // 用户
    4100: '用户不存在',
    4101: '用户id不能为空',

    4500: '渠道id为空',

    3601: '审核记录不存在',
    3602: '提交审核错误、请重试',

    //-------------小场景 4300-4499-------------//
    4300: '该流程状态不存在驳回信息',
    4301: '该小场景无审核记录信息',
    4302: '该小场景无已上线的版本',
    4303: '下架小场景失败',
    4304: '该小场景无下线审核中版本',
    4305: '该小场景无下架审核记录',
    4306: '该小场景下架已被审核无法撤回',
    4307: '小场景下架撤回失败',
    4308: '小场景不存在',
    4309: '发布/更新小场景失败',
    4310: '该小场景有处于下线流程中的版本,无法发布/更新版本',
    4311: '选择时间不能小于当前时间',
    4312: '场景版本信息不存在',
    4320: '场景名称或英文名称不能重复',
    4321: '域名格式不正确，请重新确认',
    4322: '小场景数量已到上限',
    4333: '删除小场景失败',
    4334: '该名称与已有小场景名称重复，请重新提交一个新的名称',
    4335: '该英文名与已有小场景英文名重复，请重新提交一个新的英文名',

    4601: '审核记录不存在',
    4602: '提交审核错误',
    4603: '提交更新审核错误',
    4604: '提交上架审核错误',
    4605: '提交下架审核错误',
    4606: '审核状态已改变，请确认',
    4607: '小场景参数设置值不合法',

    //---------- DEV 4700-4799-------------//
    4700: '上传头像图片失败',
    4701: '上传功能图片失败',
    4702: '上传小场景失败',
    4703: '下线时间不能超过当前时间',
    4704: '该名称与已有小场景名称重复，请重新提交一个新的名称',
    4705: '该英文名与已有小场景英文名重复，请重新提交一个新的英文名',
    4706: '当前版本号不能低于历史版本号',
    4707: '上传文件类型错误',
    4708: '上传头像图片尺寸不合规',
    4709: '上传功能图片尺寸不合规',

    //----------- 服务错误  ----------------//
    5000: '服务出现未知问题，请重新尝试',
  },
  en_US: {}
};

/**
 * 方法调用错误码
 */
const BIZ_CODE = {
  // 通用参数错误
  COMMON_PARAM: {
    // 用户未登录
    NO_LOGIN: 3000,
    PARAMETER_ERROR: 3002,
    // token错误
    ERR_TOKEN: 3003,
    // token失效
    INVALID_TOKEN: 3004,
    // 参数不含有代码注入的成分
    XSS_ERROR: 3005,
    // 凭据失效，请重新提交
    INVALID_TICKET: 3006,

    //-----------  3200~3300 通用的参数错误 ------------//
    REQUIRED_PARAMETER_ERROR: 3200, //必填参数错误
    UN_REQUIRED_PARAMETER_ERROR: 3201, //非必填参数错误
    TYPE_ERROR: 3202, //入参类型错误
    LENGTH_ERROR: 3203, //入数长度错误
    VIOLATION_ERROR: 3204, //入参不合法
    UPLOAD_ERROR: 3205, //上传错误
    REQUIRED_PARAMETER_MISSING: 3206, //缺少必填参数
    UPLOAD_COS_ERROR: 3207, //上传cos,服务端错误,请检查网络或配置
  },
  // 权限类错误
  AUTH_CODE: {
    // 接口无权限
    NO_INTERFACE_AUTH: 1001,

  },
  // 服务内部错误
  SERVER_CODE: {
    // 服务不可用
    UNAVAILABLE_SERVER: 5000
  },
  // 业务错误
  BUSINESS_CODE: {
    // 渠道服务 4200-4299
    // 小场景服务 4300-4499
    PROGRAM: {
      //该流程状态不存在驳回信息
      PROGRAM_FLOW_STATE_ERROR: 4300,
      //该小场景无审核记录信息
      NONE_REVIEW_INFO_ERROR: 4301,
      //该小场景无已上线的版本
      NONE_ONLINE_VERSION: 4302,
      //下架小场景失败
      OFF_PROGRAM_FAILED: 4303,
      //该小场景无下线审核中版本
      NONE_OFF_REVIEWING_VERSION: 4304,
      //该小场景无下架审核记录
      NONE_OFF_REVIEW_INFO: 4305,
      //该小场景下架已被审核无法撤回
      OFFLINE_PROGRAM_HAS_REVIEWED_WITHDRAW_FAILED: 4306,
      //小场景下架撤回失败
      WITHDRAW_FAILED: 4307,
      //小场景不存在
      PROGRAM_NOT_EXIST: 4308,
      //发布/更新小场景失败
      PUBLISH_PROGRAM_FAILED: 4309,
      //该小场景有处于下线流程中的版本,无法发布/更新版本
      HAS_OFFLINE_PROGRAM_CAN_NOT_PUBLISH: 4310,
      // 选择时间不能小于当前时间
      EXPIRED_TIME_OVER_CURRENT_TIME: 4311,
      //场景版本信息不存在
      NOT_EXIST_VERSION_INFO: 4312,
      //场景名称或英文名称不能重复
      PROGRAM_NAME_REPEAT: 4320,
      //域名不合法
      DOMAIN_NAME_ERROR: 4321,
      //小场景数量已到上限
      PROGRAM_MAXIMUM_ERROR: 4322,
      //删除小场景失败
      PROGRAM_DELETE_ERROR: 4333,
      // 场景名称不能重复
      PROGRAM_CN_NAME_REPEAT: 4334,
      // 场景英文不能重复
      PROGRAM_EN_NAME_REPEAT: 4335
    },
    // SAAS 4500-4599
    SAAS: {
      CHANNEL_ID_IS_EMPTY: 4500,
    },
    // 登录服务 4000-4099
    LOGIN_SERVER: {
      // 用戶名不符合规范
      INVALID_USER_NAME: 4000,
      // 用户名密码不能为空
      USER_NAME_PWD_EMPTY: 4001,
      // 密码错误
      INVALID_PASSWORD: 4002,
      // 密码错误
      LOCKED_ACCOUNT: 4003,
    },
    // 用户服务 4100-4199
    USER_SERVER: {
      // 用户不存在
      USER_NOT_EXISTS: 4100,
      // ID不能为空
      USER_ID_EMPTY: 4101,
    },
    // MGT 4600-4699
    MGT: {
      REVIEW_INFO_NOT_EXIST: 4601,//审核记录不存在
      REVIEW_SUBMIT_ERROR: 4602, //提交审核错误
      UPDATE_REVIEW_SUBMIT_ERROR: 4603, //提交更新审核错误
      ADD_REVIEW_SUBMIT_ERROR: 4604, //提交上架审核错误
      OFF_REVIEW_SUBMIT_ERROR: 4605, //提交下架审核错误
      OFF_REVIEW_SUBMIT_ERROR_REVIEW_INFO_NOT_EXIST: 4606, //提交下架审核错误 该审核记录状态已改变、请重新
      PROGRAM_CONFIG_PARAM_INVALID: 4607  //小场景参数设置值不合法
    },
    // DEV 4700-4799
    DEV: {
      // 上传头像图片失败,
      ICON_IMG_ERROR: 4700,
      // 上传功能图片失败
      FUN_IMG_ERROR: 4701,
      // 上传小场景失败
      PROGRAM_ERROR: 4702,
      //下线时间不能超过当前时间
      OFF_LINE_TIME_OVER_CURRENT_TIME: 4703,
      //小场景名称不能重复
      PROGRAM_NAME_REPEAT: 4704,
      //小场景英文名称不能重复
      PROGRAM_EN_NAME_REPEAT: 4705,
      //版本号不能大于线上版本号
      PROGRAM_VERSION_OVER_ONLINE_VERSION: 4706,
      //上传文件类型错误
      UPLOAD_TYPE_ERROR: 4707,
      //上传头像图片尺寸不合规
      ICON_SIZE_ERROR :4708,
      //上传功能图片尺寸不合规
      FUN_SIZE_ERROR :4709
    }
  },
};
module.exports = {BIZ_MSG, BIZ_CODE};
