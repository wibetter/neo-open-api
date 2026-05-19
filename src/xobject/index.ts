import axiosFetcher from '$utils/axiosFetcher';

// 获取业务类型列表
export const getEntityTypeList = async (
  xObjectApiKey: string,
  options?: any,
) => {
  const curOptions = options || {};
  const apiUrl = `/rest/data/v2.0/xobjects/${xObjectApiKey}/busiType`;
  try {
    const config = {
      ...curOptions,
      url: apiUrl,
      method: 'GET',
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === 200 || resultData.code === '200') {
      const { records, totalSize } = resultData.data || {};
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '获取业务类型列表成功',
        totalSize,
        data: records || [],
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '获取业务类型列表失败',
      data: [],
    };
  } catch (error) {
    console.error('获取业务类型列表失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '获取业务类型列表失败',
      data: [],
    };
  }
};

// 获取对象列表
export const getEntityList = async (options?: any) => {
  const curOptions = options || {};
  const active = curOptions.active ?? true; // 仅获取有权限的对象
  const custom = curOptions.custom; // 默认获取标准对象列表
  let apiUrl = `/rest/metadata/v2.0/xobjects/filter?active=${active}`;
  if (custom !== undefined) {
    apiUrl = `/rest/metadata/v2.0/xobjects/filter?custom=${custom}&active=${active}`;
  }
  try {
    const config = {
      ...curOptions,
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
      const { records, totalSize } = resultData.data || {};
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '获取实体列表成功',
        totalSize,
        data: records || [],
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '获取实体列表失败',
      data: [],
    };
  } catch (error) {
    console.error('获取实体列表失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '获取实体列表失败',
      data: [],
    };
  }
};

// 创建业务数据
export const createXObject = async (xObjectApiKey: string, options: any) => {
  const curOptions = options || {};
  const apiUrl = `/rest/data/v2.0/xobjects/${xObjectApiKey}`;
  const formData = curOptions.data || {};
  try {
    const config = {
      ...options,
      url: apiUrl,
      method: curOptions.method || 'POST',
      data: {
        data: formData,
      },
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === '200' || resultData.code === 200) {
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '创建业务数据成功',
        data: resultData.data || {},
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '创建业务数据失败',
      data: {},
    };
  } catch (error) {
    console.error('创建业务数据失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '创建业务数据失败',
      data: {},
    };
  }
};

// 更新业务数据
export const updateXObject = async (
  xObjectApiKey: string,
  objectId: string,
  options: any,
) => {
  const curOptions = options || {};
  const apiUrl = `/rest/data/v2.0/xobjects/${xObjectApiKey}/${objectId}`;
  const formData = curOptions.data || {};
  try {
    const config = {
      ...curOptions,
      url: apiUrl,
      method: curOptions.method || 'PATCH',
      data: {
        data: formData,
      },
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === '200' || resultData.code === 200) {
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '更新业务数据成功',
        data: resultData.data || {},
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '更新业务数据失败',
      data: {},
    };
  } catch (error) {
    console.error('更新业务数据失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '更新业务数据失败',
      data: {},
    };
  }
};

interface XObjectApiKey {
  xObjectApiKey?: string;
  objectId?: string;
  xObjectId?: string;
  options?: any;
}

// 获取业务对象详情数据
export const getXObject = async (
  xObjectApiKey: string | XObjectApiKey,
  objectId?: string,
  options?: any,
) => {
  let curXObjectApiKey = xObjectApiKey;
  let curObjectId = objectId;
  let curOptions = options || {};
  if (typeof xObjectApiKey === 'object' && xObjectApiKey.xObjectApiKey) {
    curOptions = xObjectApiKey.options || {};
    curObjectId = xObjectApiKey.objectId || xObjectApiKey.xObjectId;
    curXObjectApiKey = xObjectApiKey.xObjectApiKey;
  }
  const apiUrl = `/rest/data/v2.0/xobjects/${curXObjectApiKey}/${curObjectId}`;
  try {
    const config = {
      ...curOptions,
      url: apiUrl,
      method: curOptions.method || 'GET',
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === '200' || resultData.code === 200) {
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '获取业务对象详情数据成功',
        data: resultData.data || {},
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '获取业务对象详情数据失败',
      data: {},
    };
  } catch (error) {
    console.error('获取业务对象详情数据失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '获取业务对象详情数据失败',
      data: {},
    };
  }
};

// 删除业务数据
export const deleteXObject = async (
  xObjectApiKey: string,
  objectId: string,
  options?: any,
) => {
  const curOptions = options || {};
  const apiUrl = `/rest/data/v2.0/xobjects/${xObjectApiKey}/${objectId}`;
  try {
    const config = {
      ...curOptions,
      url: apiUrl,
      method: curOptions.method || 'DELETE',
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === '200' || resultData.code === 200) {
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '删除业务数据成功',
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '删除业务数据失败',
    };
  } catch (error) {
    console.error('删除业务数据失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '删除业务数据失败',
    };
  }
};

// 获取业务对象描述
export const getXObjectDesc = async (xObjectApiKey: string, options?: any) => {
  const curOptions = options || {};
  const apiUrl = `/rest/data/v2.0/xobjects/${xObjectApiKey}/description`;
  try {
    const config = {
      ...options,
      url: apiUrl,
      method: curOptions.method || 'GET',
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === '200' || resultData.code === 200) {
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '获取业务对象描述数据成功',
        data: resultData.data || {},
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '获取业务对象描述数据失败',
      data: {},
    };
  } catch (error) {
    console.error('获取业务对象描述数据失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '获取业务对象描述数据失败',
      data: {},
    };
  }
};

// 获取业务对象字段列表
export const getXObjectFields = async (
  xObjectApiKey: string,
  options?: any,
) => {
  const curOptions = options || {};
  const apiUrl = `/rest/data/v2.0/xobjects/${xObjectApiKey}/description`;
  try {
    const config = {
      ...options,
      url: apiUrl,
      method: curOptions.method || 'GET',
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === '200' || resultData.code === 200) {
      // 获取字段列表
      const fields = resultData.data?.fields || [];

      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '获取实体字段列表成功',
        data: fields,
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '获取实体字段列表失败',
      data: [],
    };
  } catch (error) {
    console.error('获取实体字段列表失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '获取实体字段列表失败',
      data: [],
    };
  }
};
