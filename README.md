## Neo OpenAPI SDK 使用文档
Neo OpenAPI SDK 仅支持平台端（NeoCRM）使用，脱离平台需 使用 OAuth安全认证，详细见 [API的使用方法](https://doc.xiaoshouyi.com/?sso-domain=login-cd.xiaoshouyi.com#/proMan/workplaceDetailApi?url=%2F%2Fconcepts%2Fapi_apiUtilizationMethod.html&id=1404&dir=output_1757040838809&time=1759063137723)。
当前主要在 Neo 自定义组件中使用，如何开发 Neo 自定义组件请见 [neo-cmp-cli 使用文档](https://www.npmjs.com/package/neo-cmp-cli)。

## 安装

```
npm install --save neo-open-api
```

## 使用 Neo OpenAPI SDK 提供的请求方法

### 业务对象相关接口

#### 1. 查询业务对象数据列表
使用通用查询接口获取业务对象数据，支持分页和排序。

```typescript
import { xObject } from 'neo-open-api';

// 基本查询（无 where）
const result = await xObject.query({
  xObjectApiKey: 'xxObject', // 业务对象 API Key
  fields: ['name', 'phone', 'email'], // 查询字段
  page: 1, // 页码（可选）
  pageSize: 10, // 每页数量（可选）
  orderBy: 'id asc' // 排序条件（可选，仅支持 id）
});

// where 为字符串：与通用查询 SQL 语法一致，直接拼接到 `select ... from ...` 之后
const byString = await xObject.query({
  xObjectApiKey: 'xxObject',
  fields: ['name', 'city'],
  where: "city = '北京' and name like '张%'",
  page: 1,
  pageSize: 20
});

// where 为字符串数组：多项会用 ` and ` 连接，便于按条件拼装、复用片段
const byArray = await xObject.query({
  xObjectApiKey: 'xxObject',
  fields: ['name', 'status'],
  where: ["status = '生效'", "name like '李%'"],
  page: 1,
  pageSize: 20
});
// 上述数组写法等价于 where: "status = '生效' and name like '李%'"
```

**参数说明：**
- `xObjectApiKey`: 业务对象的 API Key
- `fields`: 需要查询的字段数组，会自动添加 'id' 字段
- `where`（可选）: 过滤条件。
  - **字符串**：完整 `WHERE` 子句内容（不含关键字 `where`），语法与平台通用查询一致（详见下文「查询条件与 SQL 说明」）。
  - **字符串数组**：每个元素为一段条件表达式；默认会用 ` and ` 按顺序拼接。空串、`null`、`undefined` 会被忽略。若需 `or` 或复杂嵌套，请使用字符串形式在一条表达式里写出，例如 `(a = 1 or b = 2) and c = 3`。
- `page`: 页码，默认为 1
- `pageSize`: 每页数量，默认为 10
- `orderBy`: 排序条件，仅支持对 `id` 字段排序，例如 `id asc` 或 `id desc`。

**查询条件与 SQL 说明（与 `/rest/data/v2/query` 通用查询一致）：**

xObject.query 会将 `fields`、`xObjectApiKey`、`where`、`orderBy` 与分页参数拼装为 SQL，通过请求参数 `q` 提交。下列限制与说明适用于该查询能力。

**查询条件中不支持的字段类型**

多选、文本域、地理位置、图片、引用。

**select 子句**
- 根据 fields 配置生成；
- 不支持使用 `*` 查询全部列，须显式列出字段。通过 `fields` 数组指定列，并会自动加入 `id`（若未传入），生成的 `select` 不含 `*`。

**from 子句**
- 根据 xObjectApiKey 配置生成；
- 目前支持查询：**所有自定义对象**，以及**本章文档所涉及的标准对象**的数据。

**where 子句**
- 根据 where 配置生成；
- 各对象的字段信息可通过该对象的 **description** 接口获取。
- **不支持**对「包含多个值的字段」做取值条件查询，这类字段**只能**使用 `is null` 或 `is not null`。
- **支持的操作符**：`=`、`!=`、`like`、`not like`、`not in`、`is not null`、`is null`、`>`、`<`、`<>`、`>=`、`<=`、`in`、`between ... and ...`。
- **对 `=`、`like`、`in` 的补充说明**：
  - **`=`**（字符串条件）表示**精确匹配**。例如 `city = '北京'` 仅返回 `city` 严格等于「北京」的记录。
  - **`like`**（字符串条件）须使用 `%` 做模糊匹配，例如 `city like '北京%'` 表示以「北京」**开头**。当前**仅支持**把通配符 `%` 放在**已知内容之后**（如 `'北京%'`），**不支持**类似 `city like '%北京'` 的写法。
  - 当 SQL 中含 `%` 等特殊字符时，须对 SQL 做 **URL 编码**。SDK 使用 GET，将拼装后的 SQL 作为查询参数 `q` 发出（axios 会对 `params` 序列化；若自行拼接完整 URL，请确保编码正确）。
  - **支持 `in`**，但**不支持**子查询形式的 `in (...)`。
- **逻辑运算符**：`and`、`or`。

**order by 子句**
- 根据 orderBy 配置生成；
- 支持 `desc`（降序）与 `asc`（升序）；**当前仅支持对 `id` 字段排序**。可在获取列表数据后自行实现其他字段排序。

**limit 子句**
- 根据 page 和 pageSize 配置生成。

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number, // 返回码
  msg: string, // 一般用于返回错误信息
  totalSize: number, // 总个数
  data: any[] // 查询结果数据
}
```

#### 2. 获取业务类型列表
获取指定业务对象的业务类型列表。

```typescript
import { xObject } from 'neo-open-api';

const result = await xObject.getEntityTypeList('xObjectApiKey', {
  // 其他请求选项
});
```

**参数说明：**
- `xObjectApiKey`: 业务对象的 API Key
- `options`: 可选的请求配置

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number, // 返回码
  msg: string, // 一般用于返回错误信息
  totalSize: number, // 总个数
  data: any[] // 查询结果数据
}
```

#### 3. 获取实体列表
获取系统中的对象列表，支持标准对象和自定义对象。

```typescript
import { xObject } from 'neo-open-api';

// 获取所有对象列表
const {data: standardObjects} = await xObject.getEntityList({
  active: true   // 仅获取有权限的对象
});

// 获取标准对象列表
const {data: standardObjects} = await xObject.getEntityList({
  custom: false, // 获取标准对象
  active: true   // 仅获取有权限的对象
});

// 获取自定义对象列表
const {data: customObjects} = await xObject.getEntityList({
  custom: true,  // 获取自定义对象
  active: true   // 仅获取有权限的对象
});
```

**参数说明：**
- `custom`: 是否获取自定义对象，false 为标准对象，true 为自定义对象，不传则获取所有实体对象
- `active`: 是否仅获取有权限的对象，默认为 true

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number, // 返回码
  msg: string, // 一般用于返回错误信息
  totalSize: number, // 总个数
  data: any[] // 查询结果数据
}
```

#### 4. 创建业务数据
创建新的业务数据记录。

```typescript
import { xObject } from 'neo-open-api';

const result = await xObject.create('xObjectApiKey', {
  data: {
    name: '张三',
    phone: '13800138000',
    email: 'zhangsan@example.com'
  }
});
```

**参数说明：**
- `xObjectApiKey`: 业务对象的 API Key
- `options.data`: 要创建的数据对象


**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number, // 返回码
  msg: string, // 一般用于返回错误信息
  totalSize: number, // 总个数
  data: Object // 创建的业务数据
}
```

#### 5. 更新业务数据
更新指定的业务数据记录。

```typescript
import { xObject } from 'neo-open-api';

const result = await xObject.update('xObjectApiKey', 'xObjectId', {
  data: {
    name: '李四',
    phone: '13900139000'
  }
});
```

**参数说明：**
- `xObjectApiKey`: 业务对象的 API Key
- `xObjectId`: 要更新的记录 ID
- `options.data`: 要更新的数据对象

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number, // 返回码
  msg: string, // 一般用于返回错误信息
  data: Object // 更新的业务数据
}
```

#### 6. 获取业务数据详情信息 
获取指定业务数据记录的详细信息。

```typescript
import { xObject } from 'neo-open-api';

// 使用方式一
const result = await xObject.get({
  xObjectApiKey: 'xxKey', // 业务对象的 API Key
  xObjectId: 'xxId',
  option: {
    // 其他请求选项
  }
});

// 使用方式二
const result = await xObject.get('xObjectApiKey', 'xObjectId', {
  // 其他请求选项
});
```

**参数说明：**
- `xObjectApiKey`: 业务对象的 API Key
- `xObjectId`: 要获取的业务数据 ID
- `options`: 可选的请求配置

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number, // 返回码
  msg: string, // 一般用于返回错误信息
  data: Object // 获取的业务数据
}
```

#### 7. 删除业务数据
删除指定的业务数据记录。

```typescript
import { xObject } from 'neo-open-api';

const result = await xObject.delete('xObjectApiKey', 'xObjectId');
```

**参数说明：**
- `xObjectApiKey`: 业务对象的 API Key
- `xObjectId`: 要删除的业务数据 ID

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number, // 返回码
  msg: string, // 一般用于返回错误信息
}
```

#### 8. 获取业务对象描述
获取业务对象的描述信息。

```typescript
import { xObject } from 'neo-open-api';

const result = await xObject.getDesc('xObjectApiKey');
```

**参数说明：**
- `xObjectApiKey`: 业务对象的 API Key

### 自定义API相关接口

#### 1. 获取自定义API列表
获取系统中的自定义API列表，支持分页查询。

```typescript
import { customApi } from 'neo-open-api';

// 基本用法
const result = await customApi.getList({
  pageNo: 1,    // 页码（可选）
  pageSize: 1000 // 每页数量（可选）
});
```

**参数说明：**
- `pageNo`: 页码，默认为 1
- `pageSize`: 每页数量，默认为 1000

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number | string, // 返回码
  msg: string, // 一般用于返回错误信息
  totalSize: number, // 总个数
  data: any[] // 自定义API列表数据
}
```

#### 2. 执行自定义API
执行指定的自定义API接口。

```typescript
import { customApi } from 'neo-open-api';

// 基本用法
const result = await customApi.run({
  apiUrl: '/rest/custom/api/endpoint', // 自定义API地址
  methodType: 'POST', // 请求方法，如 'GET', 'POST', 'PUT', 'DELETE' 等（可选，默认为 'POST'）
  data: { // 请求数据
    key1: 'value1',
    key2: 'value2'
  }
});
```

**参数说明：**
- `apiUrl`: 自定义API的完整地址（必填）
- `methodType` 或 `method`: 请求方法，默认为 'POST'
- `data`: 请求数据对象，会被包装在 `data` 字段中发送

**返回结果：**
```typescript
{
  status: boolean, // 返回 true 表示执行成功
  code: number | string, // 返回码
  msg: string, // 一般用于返回错误信息
  data: any // API返回的数据
}
```

**使用示例：**
```typescript
import { customApi } from 'neo-open-api';

// 执行自定义API
const result = await customApi.run({
  apiUrl: '/rest/custom/api/processData',
  methodType: 'POST',
  data: {
    param1: 'value1',
    param2: 'value2'
  }
});

// 获取当前添加的自定义API列表
const {data: apiList} = await customApi.getList({
  pageNo: 1,
  pageSize: 100
});
```

### 基础请求工具
如果以上方法不够用，可使用 request 方法自行实现特殊业务逻辑的数据请求。

#### request
基于 axios 封装的通用请求工具，支持 GET、POST、PATCH、DELETE 等请求方法。

```typescript
import { request } from 'neo-open-api';

// 基本用法
const result = await request({
  url: '/api/endpoint',
  method: 'GET',
  data: { key: 'value' },
  headers: { 'Custom-Header': 'value' },
  timeout: 30000
});
```

**参数说明：**
- `url`: 请求地址
- `method`: 请求方法，默认为 'GET'
- `data`: 请求数据，GET 请求会转为 params
- `headers`: 请求头，默认包含 'Content-Type': 'application/json'
- `timeout`: 超时时间，默认 30000ms

##### request 内置拦截器，仅允许使用以下五类数据接口
- 自定义 API：/rest/data/v2.0/scripts
- 获取自定义 API 列表：/rest/metadata/v2.0/dx/logic/extpoints/openapi
- 实体类 open api：/rest/data/v2.0/xobjects
- 实体列表接口：/rest/metadata/v2.0/xobjects/filter
- 通用查询接口：/rest/data/v2/query
- BI侧相关接口: /rest/neobi/v2.0
- AI侧相关接口: /rest/ai/v2.0/agent

### 业务对象相关接口使用示例

```typescript
import { xObject } from 'neo-open-api';

// 查询联系人列表
const {data: contacts} = await xObject.query({
  xObjectApiKey: 'Contact',
  fields: ['name', 'phone', 'email'],
  page: 1,
  pageSize: 20,
  orderBy: 'id desc'
});

// 创建新联系人
const {data: newContact} = await xObject.create('Contact', {
  data: {
    name: '王五',
    phone: '13700137000',
    email: 'wangwu@example.com'
  }
});

// 更新联系人
const {data: updatedContact} = await xObject.update('Contact', newContact.id, {
  data: {
    name: '王五（更新）'
  }
});

// 获取联系人详情
const {data: contactDetail} = await xObject.get('Contact', newContact.id);

// 删除联系人
await xObject.delete('Contact', newContact.id);
```

