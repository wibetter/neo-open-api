import axiosFetcher from '$utils/axiosFetcher';

/**
 * 这里存放通用查询类 Open API
 */

/** 将 where 规范为 SQL 片段：字符串直接使用；数组用 and 拼接各条件 */
function normalizeWhere(where: unknown): string {
  if (where == null || where === '') {
    return '';
  }
  if (typeof where === 'string') {
    return where.trim();
  }
  if (Array.isArray(where)) {
    return where
      .map((part) => (part == null ? '' : String(part).trim()))
      .filter(Boolean)
      .join(' and ');
  }
  return '';
}

// 获取业务对象数据列表
export const queryXObjectData = async (options?: any) => {
  const apiUrl = '/rest/data/v2/query';
  const curOptions = options || {};
  const xObjectApiKey = curOptions.xObjectApiKey || '';
  const fields = Object.assign([], curOptions.fields || []);
  const page = curOptions.page || 1;
  const pageSize = curOptions.pageSize || 10;

  // 自动添加 objectId 字段
  if (!fields.includes('id')) {
    fields.push('id');
  }

  // 计算分页偏移量
  const offset = (page - 1) * pageSize;

  // 构建 SQL 查询
  let querySql = `select ${fields.join(',')} from ${xObjectApiKey}`;

  // 添加排序条件（如果有的话）
  if (curOptions.orderBy) {
    querySql += ` order by ${curOptions.orderBy}`;
  }

  /**
   * 添加过滤条件（如果有的话）
   * 支持的操作符包括：=、!=、like、not like、not in、is not null、is null、>、<、<>、>=、<=、in、between ... and ...。
   * 对于 =、like 和 in 有以下说明：
   *   “=” 作为字符串的条件时，表示精确匹配。例如，查询条件 city = '北京'，将返回 city 字段值严格等于 "北京" 的所有记录。
   *   "like" 作为字符串的条件时，需要使用"%" 通配符进行模糊匹配。例如，city like‘北京%'，将返回 city 字段值以 "北京" 开头的所有记录。
   *         目前仅支持将通配符“%” 放到已知内容之后的查询方式，例如，不支持 city like ‘% 北京'的查询方式。
   *         当 SQL 查询中包含“%”等特殊字符时，需要对 SQL 进行 URL 编码处理。
   * 支持"in"，但不包括子查询。
   * 支持的逻辑运算符包括：and、or。
   *
   * `where` 可为字符串，或字符串数组（多项默认以 and 连接，等价于手写 `a and b`）。
   */
  const whereClause = normalizeWhere(curOptions.where);
  console.log('whereClause:', whereClause);
  if (whereClause) {
    querySql += ` where ${whereClause}`;
  }

  if (curOptions.page || curOptions.pageSize) {
    // 添加分页限制
    querySql += ` limit ${offset},${pageSize}`;
  }

  try {
    const config = {
      url: apiUrl,
      method: 'GET',
      data: {
        q: querySql,
      },
    };

    const resultData = await axiosFetcher(config);

    if (resultData.code === 200) {
      const { records, totalSize } = resultData.result || {};
      return {
        status: true,
        code: resultData.code,
        msg: resultData.msg || '获取业务对象数据列表成功',
        totalSize,
        data: records || [],
      };
    }

    return {
      status: false,
      code: resultData.code,
      msg: resultData.msg || '获取业务对象数据列表失败',
      data: [],
    };
  } catch (error) {
    console.error('获取业务对象数据列表失败:', error);

    return {
      status: false,
      msg: error.msg || error.message || '获取业务对象数据列表失败',
      data: [],
    };
  }
};

export default queryXObjectData;
