import axios from 'axios';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var regeneratorRuntime$1 = {exports: {}};

var OverloadYield = {exports: {}};

var hasRequiredOverloadYield;

function requireOverloadYield () {
	if (hasRequiredOverloadYield) return OverloadYield.exports;
	hasRequiredOverloadYield = 1;
	(function (module) {
		function _OverloadYield(e, d) {
		  this.v = e, this.k = d;
		}
		module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (OverloadYield));
	return OverloadYield.exports;
}

var regenerator$1 = {exports: {}};

var regeneratorDefine = {exports: {}};

var hasRequiredRegeneratorDefine;

function requireRegeneratorDefine () {
	if (hasRequiredRegeneratorDefine) return regeneratorDefine.exports;
	hasRequiredRegeneratorDefine = 1;
	(function (module) {
		function _regeneratorDefine(e, r, n, t) {
		  var i = Object.defineProperty;
		  try {
		    i({}, "", {});
		  } catch (e) {
		    i = 0;
		  }
		  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
		    function o(r, n) {
		      _regeneratorDefine(e, r, function (e) {
		        return this._invoke(r, n, e);
		      });
		    }
		    r ? i ? i(e, r, {
		      value: n,
		      enumerable: !t,
		      configurable: !t,
		      writable: !t
		    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
		}
		module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorDefine));
	return regeneratorDefine.exports;
}

var hasRequiredRegenerator$1;

function requireRegenerator$1 () {
	if (hasRequiredRegenerator$1) return regenerator$1.exports;
	hasRequiredRegenerator$1 = 1;
	(function (module) {
		var regeneratorDefine = requireRegeneratorDefine();
		function _regenerator() {
		  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
		  var e,
		    t,
		    r = "function" == typeof Symbol ? Symbol : {},
		    n = r.iterator || "@@iterator",
		    o = r.toStringTag || "@@toStringTag";
		  function i(r, n, o, i) {
		    var c = n && n.prototype instanceof Generator ? n : Generator,
		      u = Object.create(c.prototype);
		    return regeneratorDefine(u, "_invoke", function (r, n, o) {
		      var i,
		        c,
		        u,
		        f = 0,
		        p = o || [],
		        y = false,
		        G = {
		          p: 0,
		          n: 0,
		          v: e,
		          a: d,
		          f: d.bind(e, 4),
		          d: function d(t, r) {
		            return i = t, c = 0, u = e, G.n = r, a;
		          }
		        };
		      function d(r, n) {
		        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
		          var o,
		            i = p[t],
		            d = G.p,
		            l = i[2];
		          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
		        }
		        if (o || r > 1) return a;
		        throw y = true, n;
		      }
		      return function (o, p, l) {
		        if (f > 1) throw TypeError("Generator is already running");
		        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
		          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
		          try {
		            if (f = 2, i) {
		              if (c || (o = "next"), t = i[o]) {
		                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
		                if (!t.done) return t;
		                u = t.value, c < 2 && (c = 0);
		              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
		              i = e;
		            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
		          } catch (t) {
		            i = e, c = 1, u = t;
		          } finally {
		            f = 1;
		          }
		        }
		        return {
		          value: t,
		          done: y
		        };
		      };
		    }(r, o, i), true), u;
		  }
		  var a = {};
		  function Generator() {}
		  function GeneratorFunction() {}
		  function GeneratorFunctionPrototype() {}
		  t = Object.getPrototypeOf;
		  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
		      return this;
		    }), t),
		    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
		  function f(e) {
		    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
		  }
		  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
		    return this;
		  }), regeneratorDefine(u, "toString", function () {
		    return "[object Generator]";
		  }), (module.exports = _regenerator = function _regenerator() {
		    return {
		      w: i,
		      m: f
		    };
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regenerator$1));
	return regenerator$1.exports;
}

var regeneratorAsync = {exports: {}};

var regeneratorAsyncGen = {exports: {}};

var regeneratorAsyncIterator = {exports: {}};

var hasRequiredRegeneratorAsyncIterator;

function requireRegeneratorAsyncIterator () {
	if (hasRequiredRegeneratorAsyncIterator) return regeneratorAsyncIterator.exports;
	hasRequiredRegeneratorAsyncIterator = 1;
	(function (module) {
		var OverloadYield = requireOverloadYield();
		var regeneratorDefine = requireRegeneratorDefine();
		function AsyncIterator(t, e) {
		  function n(r, o, i, f) {
		    try {
		      var c = t[r](o),
		        u = c.value;
		      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
		        n("next", t, i, f);
		      }, function (t) {
		        n("throw", t, i, f);
		      }) : e.resolve(u).then(function (t) {
		        c.value = t, i(c);
		      }, function (t) {
		        return n("throw", t, i, f);
		      });
		    } catch (t) {
		      f(t);
		    }
		  }
		  var r;
		  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
		    return this;
		  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
		    function f() {
		      return new e(function (e, r) {
		        n(t, i, e, r);
		      });
		    }
		    return r = r ? r.then(f, f) : f();
		  }, true);
		}
		module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorAsyncIterator));
	return regeneratorAsyncIterator.exports;
}

var hasRequiredRegeneratorAsyncGen;

function requireRegeneratorAsyncGen () {
	if (hasRequiredRegeneratorAsyncGen) return regeneratorAsyncGen.exports;
	hasRequiredRegeneratorAsyncGen = 1;
	(function (module) {
		var regenerator = requireRegenerator$1();
		var regeneratorAsyncIterator = requireRegeneratorAsyncIterator();
		function _regeneratorAsyncGen(r, e, t, o, n) {
		  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
		}
		module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorAsyncGen));
	return regeneratorAsyncGen.exports;
}

var hasRequiredRegeneratorAsync;

function requireRegeneratorAsync () {
	if (hasRequiredRegeneratorAsync) return regeneratorAsync.exports;
	hasRequiredRegeneratorAsync = 1;
	(function (module) {
		var regeneratorAsyncGen = requireRegeneratorAsyncGen();
		function _regeneratorAsync(n, e, r, t, o) {
		  var a = regeneratorAsyncGen(n, e, r, t, o);
		  return a.next().then(function (n) {
		    return n.done ? n.value : a.next();
		  });
		}
		module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorAsync));
	return regeneratorAsync.exports;
}

var regeneratorKeys = {exports: {}};

var hasRequiredRegeneratorKeys;

function requireRegeneratorKeys () {
	if (hasRequiredRegeneratorKeys) return regeneratorKeys.exports;
	hasRequiredRegeneratorKeys = 1;
	(function (module) {
		function _regeneratorKeys(e) {
		  var n = Object(e),
		    r = [];
		  for (var t in n) r.unshift(t);
		  return function e() {
		    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = false, e;
		    return e.done = true, e;
		  };
		}
		module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorKeys));
	return regeneratorKeys.exports;
}

var regeneratorValues = {exports: {}};

var _typeof = {exports: {}};

var hasRequired_typeof;

function require_typeof () {
	if (hasRequired_typeof) return _typeof.exports;
	hasRequired_typeof = 1;
	(function (module) {
		function _typeof(o) {
		  "@babel/helpers - typeof";

		  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
		    return typeof o;
		  } : function (o) {
		    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
		}
		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (_typeof));
	return _typeof.exports;
}

var hasRequiredRegeneratorValues;

function requireRegeneratorValues () {
	if (hasRequiredRegeneratorValues) return regeneratorValues.exports;
	hasRequiredRegeneratorValues = 1;
	(function (module) {
		var _typeof = require_typeof()["default"];
		function _regeneratorValues(e) {
		  if (null != e) {
		    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
		      r = 0;
		    if (t) return t.call(e);
		    if ("function" == typeof e.next) return e;
		    if (!isNaN(e.length)) return {
		      next: function next() {
		        return e && r >= e.length && (e = void 0), {
		          value: e && e[r++],
		          done: !e
		        };
		      }
		    };
		  }
		  throw new TypeError(_typeof(e) + " is not iterable");
		}
		module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorValues));
	return regeneratorValues.exports;
}

var hasRequiredRegeneratorRuntime;

function requireRegeneratorRuntime () {
	if (hasRequiredRegeneratorRuntime) return regeneratorRuntime$1.exports;
	hasRequiredRegeneratorRuntime = 1;
	(function (module) {
		var OverloadYield = requireOverloadYield();
		var regenerator = requireRegenerator$1();
		var regeneratorAsync = requireRegeneratorAsync();
		var regeneratorAsyncGen = requireRegeneratorAsyncGen();
		var regeneratorAsyncIterator = requireRegeneratorAsyncIterator();
		var regeneratorKeys = requireRegeneratorKeys();
		var regeneratorValues = requireRegeneratorValues();
		function _regeneratorRuntime() {

		  var r = regenerator(),
		    e = r.m(_regeneratorRuntime),
		    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
		  function n(r) {
		    var e = "function" == typeof r && r.constructor;
		    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
		  }
		  var o = {
		    "throw": 1,
		    "return": 2,
		    "break": 3,
		    "continue": 3
		  };
		  function a(r) {
		    var e, t;
		    return function (n) {
		      e || (e = {
		        stop: function stop() {
		          return t(n.a, 2);
		        },
		        "catch": function _catch() {
		          return n.v;
		        },
		        abrupt: function abrupt(r, e) {
		          return t(n.a, o[r], e);
		        },
		        delegateYield: function delegateYield(r, o, a) {
		          return e.resultName = o, t(n.d, regeneratorValues(r), a);
		        },
		        finish: function finish(r) {
		          return t(n.f, r);
		        }
		      }, t = function t(r, _t, o) {
		        n.p = e.prev, n.n = e.next;
		        try {
		          return r(_t, o);
		        } finally {
		          e.next = n.n;
		        }
		      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
		      try {
		        return r.call(this, e);
		      } finally {
		        n.p = e.prev, n.n = e.next;
		      }
		    };
		  }
		  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
		    return {
		      wrap: function wrap(e, t, n, o) {
		        return r.w(a(e), t, n, o && o.reverse());
		      },
		      isGeneratorFunction: n,
		      mark: r.m,
		      awrap: function awrap(r, e) {
		        return new OverloadYield(r, e);
		      },
		      AsyncIterator: regeneratorAsyncIterator,
		      async: function async(r, e, t, o, u) {
		        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
		      },
		      keys: regeneratorKeys,
		      values: regeneratorValues
		    };
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorRuntime$1));
	return regeneratorRuntime$1.exports;
}

var regenerator;
var hasRequiredRegenerator;

function requireRegenerator () {
	if (hasRequiredRegenerator) return regenerator;
	hasRequiredRegenerator = 1;
	// TODO(Babel 8): Remove this file.

	var runtime = requireRegeneratorRuntime()();
	regenerator = runtime;

	// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
	return regenerator;
}

var regeneratorExports = requireRegenerator();
var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regeneratorExports);

// 白名单: 默认允许使用的平台数据接口
var whitelist = ['/rest/data/v2.0/scripts',
// 运行自定义 API
'/rest/metadata/v2.0/dx/logic/extpoints/openapi',
// 获取自定义 API 列表
'/rest/data/v2.0/xobjects',
// 实体类 open api
'/rest/data/v2/query',
// 通用查询接口
'/rest/metadata/v2.0/xobjects/filter',
// 获取实体列表
'/rest/neobi/v2.0',
// BI侧相关
'/rest/ai/v2.0/agent' // AI侧相关
];
var isAllowDataApi = function isAllowDataApi(api) {
  // 判断是否在浏览器环境中
  if (typeof window === 'undefined') {
    // 非浏览器环境，直接返回白名单检查结果
    return whitelist.includes(api);
  }
  var apiOrigin;
  var apiPath;
  try {
    // 判断 API 是否为完整 URL
    if (api.startsWith('http://') || api.startsWith('https://')) {
      // 完整 URL，解析出 origin 和 pathname
      var urlObj = new URL(api);
      apiOrigin = urlObj.origin;
      apiPath = urlObj.pathname;
    } else {
      // 相对路径，使用当前页面的 origin
      apiOrigin = window.location.origin;
      apiPath = api.split('?')[0]; // 移除查询参数，只保留路径部分
    }
    // 获取当前页面域名
    var currentOrigin = window.location.origin;
    // 如果接口根地址不是当前页面域名，直接返回 true（允许使用第三方接口）
    if (apiOrigin !== currentOrigin) {
      return true;
    }
    // 如果是当前页面域名，判断接口路径是否在白名单中
    var isInWhitelist = whitelist.some(function (allowedPath) {
      // 支持精确匹配和前缀匹配（如果白名单路径是前缀）
      return apiPath === allowedPath || apiPath.startsWith(allowedPath + '/');
    });
    if (!isInWhitelist) {
      // 不在白名单中，提示并返回 false
      console.warn("\u4E0D\u5141\u8BB8\u4F7F\u7528\u5F53\u524D\u63A5\u53E3: " + apiPath + "\u3002");
      return false;
    }
    return true;
  } catch (error) {
    // URL 解析失败，降级为简单的白名单检查
    console.warn('API 地址解析失败，使用简单白名单检查:', error);
    return whitelist.includes(api);
  }
};

// 创建基于 axios 的 fetcher 函数
var axiosFetcher = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(options) {
    var config, response, _t;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          config = _extends({}, options, {
            method: (options === null || options === void 0 ? void 0 : options.method) || 'GET',
            data: (options === null || options === void 0 ? void 0 : options.data) || {},
            headers: _extends({
              'xsy-inner-source': 'neo-open-api',
              'Content-Type': 'application/json'
            }, options === null || options === void 0 ? void 0 : options.headers),
            timeout: (options === null || options === void 0 ? void 0 : options.timeout) || 30000
          });
          if (isAllowDataApi(config.url)) {
            _context.next = 1;
            break;
          }
          throw new Error('不允许使用的平台数据接口: ' + config.url);
        case 1:
          if ((config === null || config === void 0 ? void 0 : config.method) === 'GET') {
            config.params = (options === null || options === void 0 ? void 0 : options.data) || {};
          }
          _context.next = 2;
          return axios(config);
        case 2:
          response = _context.sent;
          return _context.abrupt("return", (response === null || response === void 0 ? void 0 : response.data) || {});
        case 3:
          _context.prev = 3;
          _t = _context["catch"](0);
          if (_t.response) {
            // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
            console.error('接口请求报错 / 接口服务异常：', _t.message);
          } else if (_t.request) {
            // 请求已经成功发起，但没有收到响应
            console.error('接口请求报错 / 接口未正常响应：', _t.message);
          } else {
            console.error('接口请求报错:', _t, '，请求参数:', options);
          }
          throw _t;
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 3]]);
  }));
  return function axiosFetcher(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 这里存放通用查询类 Open API
 */
/** 将 where 规范为 SQL 片段：字符串直接使用；数组用 and 拼接各条件 */
function normalizeWhere(where) {
  if (where == null || where === '') {
    return '';
  }
  if (typeof where === 'string') {
    return where.trim();
  }
  if (Array.isArray(where)) {
    return where.map(function (part) {
      return part == null ? '' : String(part).trim();
    }).filter(Boolean).join(' and ');
  }
  return '';
}
// 获取业务对象数据列表
var queryXObjectData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(options) {
    var apiUrl, curOptions, xObjectApiKey, fields, page, pageSize, offset, querySql, whereClause, config, resultData, _ref2, records, totalSize, _t;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiUrl = '/rest/data/v2/query';
          curOptions = options || {};
          xObjectApiKey = curOptions.xObjectApiKey || '';
          fields = Object.assign([], curOptions.fields || []);
          page = curOptions.page || 1;
          pageSize = curOptions.pageSize || 10; // 自动添加 objectId 字段
          if (!fields.includes('id')) {
            fields.push('id');
          }
          // 计算分页偏移量
          offset = (page - 1) * pageSize; // 构建 SQL 查询
          querySql = "select " + fields.join(',') + " from " + xObjectApiKey;
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
          whereClause = normalizeWhere(curOptions.where);
          if (whereClause) {
            querySql += " where " + whereClause;
          }
          // 添加排序条件（如果有的话）
          if (curOptions.orderBy) {
            querySql += " order by " + curOptions.orderBy;
          }
          if (curOptions.page || curOptions.pageSize) {
            // 添加分页限制
            querySql += " limit " + offset + "," + pageSize;
          }
          _context.prev = 1;
          config = {
            url: apiUrl,
            method: 'GET',
            data: {
              q: querySql
            }
          };
          _context.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context.sent;
          if (!(resultData.code === 200)) {
            _context.next = 3;
            break;
          }
          _ref2 = resultData.result || {}, records = _ref2.records, totalSize = _ref2.totalSize;
          return _context.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '获取业务对象数据列表成功',
            totalSize: totalSize,
            data: records || []
          });
        case 3:
          return _context.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '获取业务对象数据列表失败',
            data: []
          });
        case 4:
          _context.prev = 4;
          _t = _context["catch"](1);
          console.error('获取业务对象数据列表失败:', _t);
          return _context.abrupt("return", {
            status: false,
            msg: _t.msg || _t.message || '获取业务对象数据列表失败',
            data: []
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 4]]);
  }));
  return function queryXObjectData(_x) {
    return _ref.apply(this, arguments);
  };
}();

// 获取业务类型列表
var getEntityTypeList = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(xObjectApiKey, options) {
    var curOptions, apiUrl, config, resultData, _ref2, records, totalSize, _t;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          curOptions = options || {};
          apiUrl = "/rest/data/v2.0/xobjects/" + xObjectApiKey + "/busiType";
          _context.prev = 1;
          config = _extends({}, curOptions, {
            url: apiUrl,
            method: 'GET'
          });
          _context.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context.sent;
          if (!(resultData.code === 200 || resultData.code === '200')) {
            _context.next = 3;
            break;
          }
          _ref2 = resultData.data || {}, records = _ref2.records, totalSize = _ref2.totalSize;
          return _context.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '获取业务类型列表成功',
            totalSize: totalSize,
            data: records || []
          });
        case 3:
          return _context.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '获取业务类型列表失败',
            data: []
          });
        case 4:
          _context.prev = 4;
          _t = _context["catch"](1);
          console.error('获取业务类型列表失败:', _t);
          return _context.abrupt("return", {
            status: false,
            msg: _t.msg || _t.message || '获取业务类型列表失败',
            data: []
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 4]]);
  }));
  return function getEntityTypeList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// 获取对象列表
var getEntityList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(options) {
    var _curOptions$active;
    var curOptions, active, custom, apiUrl, config, resultData, _ref4, records, totalSize, _t2;
    return _regeneratorRuntime.wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          curOptions = options || {};
          active = (_curOptions$active = curOptions.active) !== null && _curOptions$active !== void 0 ? _curOptions$active : true; // 仅获取有权限的对象
          custom = curOptions.custom; // 默认获取标准对象列表
          apiUrl = "/rest/metadata/v2.0/xobjects/filter?active=" + active;
          if (custom !== undefined) {
            apiUrl = "/rest/metadata/v2.0/xobjects/filter?custom=" + custom + "&active=" + active;
          }
          _context2.prev = 1;
          config = _extends({}, curOptions, {
            url: apiUrl,
            method: 'GET'
          });
          _context2.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context2.sent;
          if (!(resultData.code === '0' || resultData.code === 0 || resultData.code === '200' || resultData.code === 200)) {
            _context2.next = 3;
            break;
          }
          _ref4 = resultData.data || {}, records = _ref4.records, totalSize = _ref4.totalSize;
          return _context2.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '获取对象列表成功',
            totalSize: totalSize,
            data: records || []
          });
        case 3:
          return _context2.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '获取对象列表失败',
            data: []
          });
        case 4:
          _context2.prev = 4;
          _t2 = _context2["catch"](1);
          console.error('获取对象列表失败:', _t2);
          return _context2.abrupt("return", {
            status: false,
            msg: _t2.msg || _t2.message || '获取对象列表失败',
            data: []
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 4]]);
  }));
  return function getEntityList(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
// 创建业务数据
var createXObject = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3(xObjectApiKey, options) {
    var curOptions, apiUrl, formData, config, resultData, _t3;
    return _regeneratorRuntime.wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          curOptions = options || {};
          apiUrl = "/rest/data/v2.0/xobjects/" + xObjectApiKey;
          formData = curOptions.data || {};
          _context3.prev = 1;
          config = _extends({}, options, {
            url: apiUrl,
            method: curOptions.method || 'POST',
            data: {
              data: formData
            }
          });
          _context3.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context3.sent;
          if (!(resultData.code === '200' || resultData.code === 200)) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '创建业务数据成功',
            data: resultData.data || {}
          });
        case 3:
          return _context3.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '创建业务数据失败',
            data: {}
          });
        case 4:
          _context3.prev = 4;
          _t3 = _context3["catch"](1);
          console.error('创建业务数据失败:', _t3);
          return _context3.abrupt("return", {
            status: false,
            msg: _t3.msg || _t3.message || '创建业务数据失败',
            data: {}
          });
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return function createXObject(_x4, _x5) {
    return _ref5.apply(this, arguments);
  };
}();
// 更新业务数据
var updateXObject = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4(xObjectApiKey, objectId, options) {
    var curOptions, apiUrl, formData, config, resultData, _t4;
    return _regeneratorRuntime.wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          curOptions = options || {};
          apiUrl = "/rest/data/v2.0/xobjects/" + xObjectApiKey + "/" + objectId;
          formData = curOptions.data || {};
          _context4.prev = 1;
          config = _extends({}, curOptions, {
            url: apiUrl,
            method: curOptions.method || 'PATCH',
            data: {
              data: formData
            }
          });
          _context4.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context4.sent;
          if (!(resultData.code === '200' || resultData.code === 200)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '更新业务数据成功',
            data: resultData.data || {}
          });
        case 3:
          return _context4.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '更新业务数据失败',
            data: {}
          });
        case 4:
          _context4.prev = 4;
          _t4 = _context4["catch"](1);
          console.error('更新业务数据失败:', _t4);
          return _context4.abrupt("return", {
            status: false,
            msg: _t4.msg || _t4.message || '更新业务数据失败',
            data: {}
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 4]]);
  }));
  return function updateXObject(_x6, _x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
// 获取业务数据详情信息
var getXObject = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee5(xObjectApiKey, objectId, options) {
    var curXObjectApiKey, curObjectId, curOptions, apiUrl, config, resultData, _t5;
    return _regeneratorRuntime.wrap(function (_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          curXObjectApiKey = xObjectApiKey;
          curObjectId = objectId;
          curOptions = options || {};
          if (typeof xObjectApiKey === 'object' && xObjectApiKey.xObjectApiKey) {
            curOptions = xObjectApiKey.options || {};
            curObjectId = xObjectApiKey.objectId;
            curXObjectApiKey = xObjectApiKey.xObjectApiKey;
          }
          apiUrl = "/rest/data/v2.0/xobjects/" + curXObjectApiKey + "/" + curObjectId;
          _context5.prev = 1;
          config = _extends({}, curOptions, {
            url: apiUrl,
            method: curOptions.method || 'GET'
          });
          _context5.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context5.sent;
          if (!(resultData.code === '200' || resultData.code === 200)) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '获取业务数据成功',
            data: resultData.data || {}
          });
        case 3:
          return _context5.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '获取业务数据失败',
            data: {}
          });
        case 4:
          _context5.prev = 4;
          _t5 = _context5["catch"](1);
          console.error('获取业务数据失败:', _t5);
          return _context5.abrupt("return", {
            status: false,
            msg: _t5.msg || _t5.message || '获取业务数据失败',
            data: {}
          });
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 4]]);
  }));
  return function getXObject(_x9, _x0, _x1) {
    return _ref7.apply(this, arguments);
  };
}();
// 删除业务数据
var deleteXObject = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee6(xObjectApiKey, objectId, options) {
    var curOptions, apiUrl, config, resultData, _t6;
    return _regeneratorRuntime.wrap(function (_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          curOptions = options || {};
          apiUrl = "/rest/data/v2.0/xobjects/" + xObjectApiKey + "/" + objectId;
          _context6.prev = 1;
          config = _extends({}, curOptions, {
            url: apiUrl,
            method: curOptions.method || 'DELETE'
          });
          _context6.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context6.sent;
          if (!(resultData.code === '200' || resultData.code === 200)) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '删除业务数据成功'
          });
        case 3:
          return _context6.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '删除业务数据失败'
          });
        case 4:
          _context6.prev = 4;
          _t6 = _context6["catch"](1);
          console.error('删除业务数据失败:', _t6);
          return _context6.abrupt("return", {
            status: false,
            msg: _t6.msg || _t6.message || '删除业务数据失败'
          });
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 4]]);
  }));
  return function deleteXObject(_x10, _x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();
// 获取业务对象描述
var getXObjectDesc = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee7(xObjectApiKey, options) {
    var curOptions, apiUrl, config, resultData, _t7;
    return _regeneratorRuntime.wrap(function (_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          curOptions = options || {};
          apiUrl = "/rest/data/v2.0/xobjects/" + xObjectApiKey + "/description";
          _context7.prev = 1;
          config = _extends({}, options, {
            url: apiUrl,
            method: curOptions.method || 'GET'
          });
          _context7.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context7.sent;
          if (!(resultData.code === '200' || resultData.code === 200)) {
            _context7.next = 3;
            break;
          }
          return _context7.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '获取业务对象描述数据成功',
            data: resultData.data || {}
          });
        case 3:
          return _context7.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '获取业务对象描述数据失败',
            data: {}
          });
        case 4:
          _context7.prev = 4;
          _t7 = _context7["catch"](1);
          console.error('获取业务对象描述数据失败:', _t7);
          return _context7.abrupt("return", {
            status: false,
            msg: _t7.msg || _t7.message || '获取业务对象描述数据失败',
            data: {}
          });
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 4]]);
  }));
  return function getXObjectDesc(_x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}();

// 获取自定义API列表
var getCustomApiList = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(options) {
    var curOptions, pageNo, pageSize, apiUrl, config, resultData, _ref2, items, count, _t;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          curOptions = options || {};
          pageNo = curOptions.pageNo || 1;
          pageSize = curOptions.pageSize || 1000;
          apiUrl = "/rest/metadata/v2.0/dx/logic/extpoints/openapi?pageNo=" + pageNo + "&pageSize=" + pageSize;
          _context.prev = 1;
          config = {
            url: apiUrl,
            method: 'GET'
          };
          _context.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context.sent;
          if (!(resultData.code === '0' || resultData.code === 0 || resultData.code === '200' || resultData.code === 200)) {
            _context.next = 3;
            break;
          }
          _ref2 = resultData.data || {}, items = _ref2.items, count = _ref2.count;
          return _context.abrupt("return", {
            status: true,
            code: resultData.code,
            msg: resultData.msg || '获取自定义API列表成功',
            totalSize: count,
            data: items || []
          });
        case 3:
          return _context.abrupt("return", {
            status: false,
            code: resultData.code,
            msg: resultData.msg || '获取自定义API列表失败',
            data: []
          });
        case 4:
          _context.prev = 4;
          _t = _context["catch"](1);
          console.error('获取自定义API列表失败:', _t);
          return _context.abrupt("return", {
            status: false,
            msg: _t.msg || _t.message || '获取自定义API列表失败',
            data: []
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 4]]);
  }));
  return function getCustomApiList(_x) {
    return _ref.apply(this, arguments);
  };
}();
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
var runCustomApi = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(options) {
    var curOptions, apiUrl, method, formData, config, resultData, _t2;
    return _regeneratorRuntime.wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          curOptions = options || {};
          apiUrl = curOptions.apiUrl || '';
          method = curOptions.methodType || curOptions.method || 'POST';
          formData = curOptions.data || {};
          _context2.prev = 1;
          config = _extends({}, options, {
            url: apiUrl,
            method: method,
            data: formData
          });
          _context2.next = 2;
          return axiosFetcher(config);
        case 2:
          resultData = _context2.sent;
          return _context2.abrupt("return", _extends({
            status: true
          }, resultData));
        case 3:
          _context2.prev = 3;
          _t2 = _context2["catch"](1);
          console.error('执行自定义API失败:', _t2);
          return _context2.abrupt("return", {
            status: false,
            msg: _t2.msg || _t2.message || '执行自定义API失败',
            data: {}
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return function runCustomApi(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Neo OpenAPI SDK
 */
// XObject 实体对象相关的方法
var xObject = {
  query: queryXObjectData,
  getEntityTypeList: getEntityTypeList,
  getEntityList: getEntityList,
  getDesc: getXObjectDesc,
  create: createXObject,
  update: updateXObject,
  get: getXObject,
  "delete": deleteXObject
};
// Custom API 自定义API相关的方法
var customApi = {
  getList: getCustomApiList,
  run: runCustomApi
};
// 重命名 axiosFetcher
var request = axiosFetcher;

export { axiosFetcher, customApi, request, xObject };
