/**
 * Neo OpenAPI SDK
 */
import axiosFetcher from './utils/axiosFetcher';
import { queryXObjectData } from '$xObject/queryObjectData';
import {
  getEntityTypeList,
  getEntityList,
  createXObject,
  updateXObject,
  getXObject,
  deleteXObject,
  getXObjectDesc,
  getXObjectFields,
} from '$xObject/index';

import { getCustomApiList, runCustomApi } from '$customApi/index';

// XObject 实体对象相关的方法
const xObject = {
  query: queryXObjectData,
  getEntityTypeList,
  getEntityList,
  getDesc: getXObjectDesc,
  getFileds: getXObjectFields,
  create: createXObject,
  update: updateXObject,
  get: getXObject,
  delete: deleteXObject,
};

// Custom API 自定义API相关的方法
const customApi = {
  getList: getCustomApiList,
  run: runCustomApi,
};

// 重命名 axiosFetcher
const request = axiosFetcher;

export { request, axiosFetcher, xObject, customApi };
