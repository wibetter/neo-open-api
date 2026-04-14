// 白名单: 默认允许使用的平台数据接口
const whitelist = [
  '/rest/data/v2.0/scripts', // 运行自定义 API
  '/rest/metadata/v2.0/dx/logic/extpoints/openapi', // 获取自定义 API 列表
  '/rest/data/v2.0/xobjects', // 实体类 open api
  '/rest/data/v2/query', // 通用查询接口
  '/rest/metadata/v2.0/xobjects/filter', // 获取实体列表
  '/rest/neobi/v2.0', // BI侧相关
  '/rest/ai/v2.0/agent', // AI侧相关
];

export const isAllowDataApi = (api: string) => {
  // 判断是否在浏览器环境中
  if (typeof window === 'undefined') {
    // 非浏览器环境，直接返回白名单检查结果
    return whitelist.includes(api);
  }

  let apiOrigin: string;
  let apiPath: string;

  try {
    // 判断 API 是否为完整 URL
    if (api.startsWith('http://') || api.startsWith('https://')) {
      // 完整 URL，解析出 origin 和 pathname
      const urlObj = new URL(api);
      apiOrigin = urlObj.origin;
      apiPath = urlObj.pathname;
    } else {
      // 相对路径，使用当前页面的 origin
      apiOrigin = window.location.origin;
      apiPath = api.split('?')[0]; // 移除查询参数，只保留路径部分
    }

    // 获取当前页面域名
    const currentOrigin = window.location.origin;

    // 如果接口根地址不是当前页面域名，直接返回 true（允许使用第三方接口）
    if (apiOrigin !== currentOrigin) {
      return true;
    }

    // 如果是当前页面域名，判断接口路径是否在白名单中
    const isInWhitelist = whitelist.some((allowedPath) => {
      // 支持精确匹配和前缀匹配（如果白名单路径是前缀）
      return apiPath === allowedPath || apiPath.startsWith(allowedPath + '/');
    });

    if (!isInWhitelist) {
      // 不在白名单中，提示并返回 false
      console.warn(`不允许使用当前接口: ${apiPath}。`);
      return false;
    }

    return true;
  } catch (error) {
    // URL 解析失败，降级为简单的白名单检查
    console.warn('API 地址解析失败，使用简单白名单检查:', error);
    return whitelist.includes(api);
  }
};

export default whitelist;
