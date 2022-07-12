'use strict';

module.exports = {
  // static: {
  //   enable: true,
  // },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  swaggerdoc: {
    enable: true, // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
