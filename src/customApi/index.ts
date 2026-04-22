import axiosFetcher from '$utils/axiosFetcher';

// 获取自定义API列表
export const getCustomApiList = async (options?: any) => {
  const curOptions = options || {};
  const pageNo = curOptions.pageNo || 1;
  const pageSize = curOptions.pageSize || 1000;
  const apiUrl = `/rest/metadata/v2.0/dx/logic/extpoints/openapi?pageNo=${pageNo}&pageSize=${pageSize}`;
  try {
    const config = {
      url: apiUrl,
      method: 'GET',
    };

    const resultData = await axiosFetcher(config);

    if (
      resultData.code === '0' ||
      resultData.code === 0 ||
      resultData.code === '200' ||
      resultData.code === 200
    ) {
      const { items, count } = resultData.data || {};
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '获取自定义API列表成功',
        totalSize: count,
        data: items || [],
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '获取自定义API列表失败',
      data: [],
    };
  } catch (error) {
    console.error('获取自定义API列表失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '获取自定义API列表失败',
      data: [],
    };
  }
};

/**
 * 执行指定自定义API
 *
 * @param options 请求参数
 * @param options.apiUrl 自定义API地址
 * @param options.methodType 请求方法
 * @param options.data 请求数据
 *
 * @returns 执行结果
 */
export const runCustomApi = async (options: any) => {
  const curOptions = options || {};
  const apiUrl = curOptions.apiUrl || '';
  const method = curOptions.methodType || curOptions.method || 'POST';
  const formData = curOptions.data || {};
  try {
    const config = {
      ...options,
      url: apiUrl,
      method,
      data: formData,
    };

    const resultData = await axiosFetcher(config);

    // 响应体为 JSON 数组时，与 { code, data } 等对象形态统一为 { status, data }
    if (Array.isArray(resultData)) {
      return {
        status: true,
        data: resultData,
      };
    }

    return {
      status: true,
      ...resultData,
    };
  } catch (error) {
    console.error('执行自定义API失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '执行自定义API失败',
      data: {},
    };
  }
};
