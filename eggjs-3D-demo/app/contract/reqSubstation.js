module.exports = {
  pageCondition: {
    pageNum: { type: 'number', required: true, description: '第几页', example: '1' },
    pageSize: { type: 'number', required: true, description: '一页多少条', example: '10' },
  },

  loginInfo: {
    userName : {type: 'string', required: true, description: '账号', example: 'admin'},
    password : {type: 'string', required: true, description: '密码', example: 'admin123'}
  }

};
