import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getToken } from '@/utils/token';

const pendingMap = new Map();

export const handleChangeRequestHeader = (config: AxiosRequestConfig<any>) => {
  //   config['xxxx'] = 'xxx';
  return config;
};

export const handleConfigureAuth = (config: AxiosRequestConfig<any>) => {
  // config.headers['token'] = localStorage.getItem('token') || '';

  if (config.headers) config.headers.token = getToken() || '';
  return config;
};

// 网络错误
export const handleNetworkError = (errStatus?: number): void => {
  const networkErrMap: any = {
    '400': '错误的请求', // token 失效
    '401': '未授权，请重新登录',
    '403': '拒绝访问',
    '404': '请求错误，未找到该资源',
    '405': '请求方法未允许',
    '408': '请求超时',
    '500': '服务器端出错',
    '501': '网络未实现',
    '502': '网络错误',
    '503': '服务不可用',
    '504': '网络超时',
    '505': 'http版本不支持该请求',
  };
  if (errStatus) {
    ElMessage.error(networkErrMap[errStatus] ?? `其他连接错误 --${errStatus}`);
    return;
  }
  ElMessage.error('无法连接到服务器！');
};

// 自身错误
export const handleAuthError = (errno: string): boolean => {
  const authErrMap: any = {
    '10031': '登录失效，需要重新登录', // token 失效
    '10032': '您太久没登录，请重新登录~', // token 过期
    '10033': '账户未绑定角色，请联系管理员绑定角色',
    '10034': '该用户未注册，请联系管理员注册用户',
    '10035': 'code 无法获取对应第三方平台用户',
    '10036': '该账户未关联员工，请联系管理员做关联',
    '10037': '账号已无效',
    '10038': '账号未找到',
  };

  if (authErrMap.hasOwnProperty(errno)) {
    ElMessage.error(authErrMap[errno]);
    // 授权错误，登出账户
    // logout();
    return false;
  }
  return true;
};

// 常规错误
export const handleGeneralError = (errno: string, errmsg: string): boolean => {
  if (errno !== '0' && errmsg !== undefined) {
    ElMessage.error(errmsg);
    return false;
  }
  return true;
};

// 生成每个请求唯一的键
const getPendingKey = (config: AxiosRequestConfig<any>) => {
  let { url, method, params, data } = config;
  if (typeof data === 'string') data = JSON.parse(data); // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
};

// 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
export const addPending = (config: AxiosRequestConfig<any>) => {
  const pendingKey = getPendingKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel);
      }
    });
};

// 删除重复的请求
export const removePending = (config: AxiosRequestConfig<any>) => {
  const pendingKey = getPendingKey(config);
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey);
    cancelToken(pendingKey);
    pendingMap.delete(pendingKey);
  }
};
