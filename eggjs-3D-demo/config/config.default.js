'use strict';

module.exports = appInfo => {
  const config = {};
  config.keys = appInfo.name + '_1657417907338_233';

  // 安全设置
  (config.security = {
    csrf: {
      enable: false,
    },
  });

  config.logger = {
    dir: `./${appInfo.name}-logs`,
    level: 'WARN',
  };

  // add your middleware config here
  config.middleware = [
    'errorMiddleware',
  ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };
  config.static = {
    prefix: '/public',
    dir: [ 'app/public' ],
  };

  config.cookieMaxAge = 1000 * 3600 * 24;

  config.i18n = {
    // 默认语言，默认 "en_US"
    defaultLocale: 'zh-CN',
    // URL 参数，默认 "locale"
    queryField: 'locale',
    // Cookie 记录的 key, 默认："locale"
    cookieField: 'locale',
    // Cookie 的 domain 配置，默认为空，代表当前域名有效
    cookieDomain: '',
    // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
    cookieMaxAge: '1y',
  };

  // 跨域设置
  (config.cors = {
    origin: '*', // 访问白名单
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  });

  // egg-swagger-doc 配置信息。
  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径。
    // 接口文档的标题，描述或其它。
    apiInfo: {
      title: 'eggjs-3D-demo', // 接口文档的标题。
      description: 'demo项目', // 接口文档描述。
      version: '1.0.0', // 接口文档版本。
    },
    schemes: [ 'http', 'https' ], // 配置支持的协议。
    consumes: [ 'application/json' ], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
    produces: [ 'application/json' ], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
    securityDefinitions: { // 配置接口安全授权方式。
    },
    enableSecurity: false, // 是否启用授权，默认 false（不启用）。
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
    routerMap: true, // 是否启用自动生成路由，默认 true (启用)。
    enable: true, // 默认 true (启用)。
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/test',
      options: {
        keepAlive: 1,
        poolSize: 10,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    token: 'token-demo'
  };

  return {
    ...config,
    ...userConfig,
  };
};
