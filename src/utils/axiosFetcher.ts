import axios from 'axios'; // https://www.axios-http.cn/docs/intro
import { isAllowDataApi } from './whitelist';

// 创建基于 axios 的 fetcher 函数
const axiosFetcher = async (options: any) => {
  try {
    const config = {
      ...options,
      method: options?.method || 'GET',
      data: options?.data || {},
      headers: {
        'xsy-inner-source': 'neo-open-api',
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      timeout: options?.timeout || 30000,
    };

    if (!isAllowDataApi(config.url)) {
      throw new Error('不允许使用的平台数据接口: ' + config.url);
    }

    if (config?.method === 'GET') {
      config.params = options?.data || {};
    }

    const response = await axios(config);
    const body = response?.data;
    // 保留 []、0、false 等合法 JSON 体；与 || {} 不同，空数组应原样返回（直接返回列表的接口）
    if (body === undefined || body === null) {
      return {};
    }
    return body;
  } catch (error) {
    if (error.response) {
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      console.error('接口请求报错 / 接口服务异常：', error.message);
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      console.error('接口请求报错 / 接口未正常响应：', error.message);
    } else {
      console.error('接口请求报错:', error, '，请求参数:', options);
    }
    throw error;
  }
};

export default axiosFetcher;
