import axios from 'axios';

// 创建axios实例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 创建一个不包含请求拦截器的axios实例，用于获取token
const tokenApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Token管理
let tokenData = null;
const tokenExpireThreshold = 60; // 提前60秒刷新token

// 获取token的函数
async function getToken() {
  // 如果token存在且未过期（提前60秒），则直接返回
  if (tokenData && tokenData.token && tokenData.expireAt > Date.now()) {
    console.log('使用缓存的token');
    return tokenData.token;
  }

  try {
    console.log('开始获取新token');
    const currentUrl = window.location.origin;
    console.log('当前地址',currentUrl);
    const ENVIRONMENT_CONFIG = {
      // 开发/测试环境
      'DEV': {
        clientId: '1990351981460893698',
        clientSecret: 'nwq5zjvmngitmjfkny00n2q3lwfmotmtnjvizmjhn2y3ymfl'
      },
      // UAT/预生产环境
      'UAT': {
        clientId: '2003304454784081922',
        clientSecret: 'yty3zdnjmdmtmgy4ys00mjkxlwe5zjetmtu5yzkzmdfmztgy'
      },
      // 生产环境
      'PROD': {
        clientId: '2015962951125102594',
        clientSecret: 'mthmy2e5ntetzdgzoc00zjzmlwe1mjqtotu2mja5ytniyzc2'
      }
    };

// 域名到环境类型的映射
    const URL_TO_ENV_MAP = {
      'http://10.189.88.111:8000': 'UAT',
      'https://qmsu.xcmg.com': 'UAT',
      'http://10.180.12.49': 'PROD',
      'https://qms.xcmg.com': 'PROD'
    };
    const currentEnv = URL_TO_ENV_MAP[currentUrl] || 'DEV';
    const config = ENVIRONMENT_CONFIG[currentEnv];
    const apiUrl = `/api-system/system/token/genToken?clientId=${config.clientId}&clientSecret=${config.clientSecret}`;
    console.log(`当前环境: ${currentEnv}, URL: ${currentUrl}`);
    const response = await tokenApi.get(apiUrl);
    console.log('token获取成功:', response.data);
    if (response.data.success) {
      const expireAt = Date.now() + (response.data.data.expire * 1000) - (tokenExpireThreshold * 1000);
      tokenData = {
        token: response.data.data.token,
        expireAt: expireAt
      };
      console.log('token已缓存，过期时间:', new Date(expireAt));
      return tokenData.token;
    } else {
      throw new Error('获取token失败: ' + response.data.message);
    }
  } catch (error) {
    console.error('获取token错误:', error.response?.data || error.message);
    throw error;
  }
}

// 请求拦截器
api.interceptors.request.use(
  async config => {
    console.log('API请求开始:', {
      method: config.method.toUpperCase(),
      url: config.baseURL + config.url,
      data: config.data || '无请求体',
      params: config.params || '无查询参数'
    });
    
    // 动态获取token
    const token = await getToken();
    
    // 在发送请求之前添加必要的请求头
    config.headers.token = token;
    config.headers.appid = '1963845164295827458';
    config.headers.userid = '1';
    
    console.log('API请求头:', config.headers);
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.error('API请求配置错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  response => {
    console.log('API响应成功:', {
      url: response.config.baseURL + response.config.url,
      status: response.status,
      data: response.data
    });
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    console.error('API响应错误:', {
      url: error.config?.baseURL + error.config?.url,
      response: error.response?.data,
      status: error.response?.status,
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default api;