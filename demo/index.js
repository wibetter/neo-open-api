// import { xObject, customApi, request } from '../src/main';
import { xObject } from '../dist/index.esm.min.js';

/**
 * 测试 Neo OpenAPI
 * 备注：Neo OpenAPI SDK 仅支持平台端（NeoCRM）使用。
 * 
 * 【特别说明】本地请使用 linkDebug 命令调试此脚本。
 */
/*
// 查询业务对象数据列表
const result1 = await xObject.query({
  xObjectApiKey: 'account',
  fields: ['accountName', 'phone'],
});
console.log('result1:', result1);
*/

// 获取业务类型列表
/*
const result2 = await xObject.getEntityTypeList('account');
console.log('result2:', result2);
*/

// 获取对象列表
/*
const result3 = await xObject.getEntityList({
  custom: false,
  active: true,
});
console.log('result3:', result3);
*/

// 创建业务数据
/*
const result4 = await xObject.create('customContact__c', {
  data: {
    name: 'wibetter',
    phone__c: '15900000003',
    entityType: 3998003734470119
  },
});
console.log('result4:', result4);
*/

// 更新业务数据
/*
const result5 = await xObject.update('customContact__c', 4003463613111893, {
  data: {
    name: 'wibetter123',
    phone__c: '15910000003',
    entityType: 3998003734470119
  },
});
console.log('result5:', result5);
*/

// 获取业务数据
/*
const result6 = await xObject.get('customContact__c', 4003463613111893);
console.log('result6:', result6);
*/

// 删除业务数据
/*
const result7 = await xObject.delete('customContact__c', 4003463613111893);
console.log('result7:', result7);
*/

// 获取对象描述
/*
const result8 = await xObject.getDesc('customContact__c1');
console.log('result8:', result8);
*/

/*
// 查询联系人列表
const {data: contacts} = await xObject.query({
  xObjectApiKey: 'customContact__c',
  fields: ['name', 'phone__c'],
  page: 1,
  pageSize: 20,
  orderBy: 'createdAt desc'
});

console.log('contacts:', contacts);

// 创建新联系人
const {data: newContact} = await xObject.create('customContact__c', {
  data: {
    name: '王五',
    phone__c: '13700137000',
    entityType: 3998238856273477
  }
});

console.log('newContact:', newContact);

// 更新联系人
const {data: updatedContact} = await xObject.update('customContact__c', newContact.id, {
  data: {
    name: '王五（更新）'
  }
});

console.log('updatedContact:', updatedContact);

// 获取联系人详情
const {data: contactDetail} = await xObject.get('customContact__c', newContact.id);
console.log('contactDetail:', contactDetail);

// 删除联系人
const result = await xObject.delete('customContact__c', newContact.id);
console.log('result:', result);
*/

/*
// 获取自定义API列表
const {data: apiList} = await customApi.getList({
  pageNo: 1,
  pageSize: 100
});

console.log('apiList:', apiList);

// 示例1：执行自定义API（获取发货单详情）
const result1 = await customApi.run({
  apiUrl: '/rest/data/v2.0/scripts/api/test/getDeliveryOrderDetail',
  methodType: 'POST',
  data: {
    id: 1
  },
});
console.log('result1:', result1);


// 示例2：执行自定义API（一个通用的代理接口自定义API）
const result2 = await customApi.run({
  apiUrl: 'https://crm-cd.xiaoshouyi.com/rest/data/v2.0/scripts/api/proxy/forward',
  methodType: 'POST',
  data: {
    url: 'https://interface.sina.cn/sports/pc_sports_caipiao_common_list_api.d.json',
    method: 'get',
    data: {
      ename: 'nba',
    },
  },
});
console.log('result2:', result2);

// 示例3：执行第三方接口
const result3 = await request({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'get',
});
console.log('result3:', result3);

// 示例3：执行第三方接口
const result5 = await request({
  url: 'https://crm-cd.xiaoshouyi.com/rest/metadata/v3.0/ui/components/filte',
  method: 'get',
});
console.log('result5:', result5);
*/

const result6 = xObject.query({
  xObjectApiKey: "AssetItem__c",
  fields: [
      "name",
      "categoryId__c",
      "status__c",
      "serialNumber__c",
      "purchaseDate__c",
      "productIMG__c"
  ],
  pageSize: 50,
  where: [
      // "categoryId__c = 4247129080159816",
      // "status__c = 1"
      "(name like 'Mac%' or serialNumber__c like 'Mac%')"
  ]
});

console.log('result6:', result6);

