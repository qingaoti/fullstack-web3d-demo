'use strict';

/**
 * 通用的业务常量
 */
module.exports = {
  /**
   * 角色
   */
  ROLES:{
    'admin': { name: '系统管理员', value: 'admin' },
    'appUser': { name: 'app用户', value: 'appUser' },
    'systemUser': { name: '系统用户', value: 'systemUser' },
  },

  /**
   * 状态枚举
   */
  STATE: {
    EFFECT: 'effect',
    INVALID: 'invalid'
  },


  /**
   * 时间格式化类型
   */
  MOMENT_TYPE : {
    NORMAL: 'YYYY-MM-DD HH:mm:ss',
    DATE_POINT_TYPE: 'YYYY.MM.DD HH:mm',
    DATE_POINT_DAY: 'YYYY.MM.DD',
    DATE_POINT_HOUR: 'YYYY.MM.DD HH'
  },

  /**
   *用户
   */
  USERS:{
    STATUS: ['normal', 'lock', 'deleted', 'unReal']
  },

  /**
   * 商品
   */
  GOODS:{
    TYPE: ['power','machine'],  // 算力，整机
    STATUS: ['online', 'offline','expire'],  //在售， 非在售 ，过期
    MODE:['全委托','半委托'],
  },

  /**
   * 订单
   */
  ORDER:{
    TYPE: ['online','offline'],  //线上订单指的app , offline 为后台生成的订单
    PAYMETHOD: ['USDT','USDT&FIL'],
    STATUS: ['pay', 'unPay' ,'lock' , 'cancel']
  },

  /**
   * 密码相关常量
   */
  PASSWORDS: {
    TYPE: ['login', 'pay'],
    LEVEL: ['low', 'medium', 'high'],
    MOD_TYPE: ['register','forget','modify'],
  },

  /**
   * 流程相关常量
   */
  PROCESS:{
    // pending 带审批  , pass 已通过 , fail 没通过
    STATUS:['pending', 'pass', 'fail'],
    //
    ID_CARD_TYPE:['身份证']
  },

  /**
   * 正则表达式
   */
  REG_EXP: {
    //ObjectId 正则
    _ID: /^[0-9a-fA-F]{24}$/,
    //11位手机号码正则
    PHONE: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    //密码
    PASSWORD: /^.{6,50}$/,
    //邀请码
    INV_CODE: /^[a-zA-Z0-9]{6}$/,
    //名称
    NAME: /^[\u4e00-\u9fa5a-zA-Z]{2,20}$/,
    //身份证
    CARD_NUM: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,


    // //小场景英文名称
    // PROGRAM_EN_NAME: /^[A-Za-z0-9]{1,30}$/,
    // //小场景介绍
    // PROGRAM_INTRO: /^[\s\S]{10,120}$/,
    // //版本介绍
    // PROGRAM_VERSION_INTRO: /^[\s\S]{1,120}$/,
    // //版本号
    // PROGRAM_VERSION: /^[1-9]\.\d\.(\d|[1-9]\d|[1-9]\d{2})$/,

  },

};
