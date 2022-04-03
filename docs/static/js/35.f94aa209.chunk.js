(this["webpackJsonpmoderate-react-ts"]=this["webpackJsonpmoderate-react-ts"]||[]).push([[35],{1738:function(n,o,i){"use strict";i.r(o),o.default='# mock \u6a21\u62df\u8bf7\u6c42\uff1a\n\n\u5f00\u53d1\u73af\u5883\u5bf9\u63a5\u53e3\u8fdb\u884c\u8fdb\u884c\u6a21\u62df\u5e94\u7b54\uff0c\u80fd\u591f\u5728\u540e\u53f0\u670d\u52a1\u6587\u6863\u51fa\u6765\u4f46\u8fd8\u672a\u5f00\u53d1\u5b8c\u7684\u60c5\u51b5\u4e0b\uff0c\u5f88\u597d\u7684\u63a8\u8fdb\u4e86\u524d\u7aef\u7684\u5f00\u53d1\u5de5\u4f5c\u3002\u540c\u65f6\u662f\u53ef\u914d\u7f6e\uff0c\u53ef\u63d2\u62d4\u7684\uff0c\u5e76\u4e14\u6253\u5305\u7684\u65f6\u5019\u4f1a\u53bb\u6389\u7684\uff0c\u5e76\u4e14\u9488\u5bf9\u9875\u9762\u8fdb\u884c\u5212\u5206 __\u72ec\u7acb\u6587\u4ef6__\u3002\n\n## \u914d\u7f6e\n\u5728`/mock/`\u4e0b\u521b\u5efa\u72ec\u7acb\u6a21\u5757\uff0c\u5176\u5c01\u88c5\u4e86\u57fa\u7c7b\uff0c\u4f46\u662f\u65e0\u9700\u5173\u6ce8\uff0c\u4ec5\u914d\u7f6e\u5373\u53ef\uff0c\u6817\ud83c\udf30\uff1a\n\n```js\nimport BaseMock from \'./baseMock\'\nimport menuRemoteConfig from "ROUTES/menuRemoteConfig.json";\n\nlet config = {\n    getMenuApi: {\n        code: "200",\n        data: menuRemoteConfig\n    },\n    loginApi: {\n        code: "200",\n        data: {\n            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDM0M3poIiwiaXNzIjoidXNlckdVSS0xMjM0NTY3OCFAIyQlXiYqIiwiZXhwIjoxNjEwNTI3ODg3LCJ1c2VySWQiOiIxMDM0M3poIiwiaWF0IjoxNjEwNDQxNDg3LCJqdGkiOiIxNjEwNDQxNDg3MTA5MTAzNDMifQ.ENyqU7WGRdqPoqrkUW1sEff4fBTJShJL7ot7TFmRObc",\n            userId: "007"\n        }\n    },\n    logoutApi: {\n        code: "200",\n        data: {}\n    },\n    getCode: {\n        code: "200",\n        data: "aaaa"\n    },\n}\n\nexport default function mock(api) {\n    new BaseMock({ config, apiConfig: api.getUrlConfig() })\n}\n```\n\n## \u6ce8\u518c\n\n> \u6ce8\u518c\u5728\u6587\u4ef6:`/mock/index.js`\u4e2d\u7edf\u4e00\u7ba1\u7406\uff0c\u6817\ud83c\udf30\uff1a\n\n```js\n...\nimport lightHomeMock from "./lightHomeMock" // \u5f15\u5165mock\n...\n\nimport {\n    ...\n    lightHomeApi,                           //\u5f15\u5165api\n    ...\n} from \'API/\'\n\n...\nlightHomeMock(lightHomeApi);                //\u7136\u540emock\u8fd9\u4e2aapi\uff0c\u81ea\u7136\u76f4\u63a5\u3002\n...\n\n```\n'}}]);