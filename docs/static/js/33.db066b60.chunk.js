(this["webpackJsonpmoderate-react-ts"]=this["webpackJsonpmoderate-react-ts"]||[]).push([[33],{1736:function(n,s,a){"use strict";a.r(s),s.default='# \u6570\u636e\u7ba1\u7406\u5668\n\n>\u76ee\u5f55\u7ed3\u6784\n\n```js\n\n\u251c\u2500\u2500 dataManager\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.js                                       // \u914d\u7f6e                 <<<--- \u91cd\u70b9\u5173\u6ce8\uff01\uff01\uff01\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js                                        // dataManager \u5165\u53e3     <<<--- \u91cd\u70b9\u5173\u6ce8\uff01\uff01\uff01\n\u2502\xa0\xa0 \u251c\u2500\u2500 netTrans                                        // netTrans \u7f51\u7edc\u901a\u4fe1\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 api                                         // api \u63a5\u53e3    \n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 baseApi.js                              // api \u57fa\u7c7b    \n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js                                // \u5165\u53e3\u6587\u4ef6\u3002\u7edf\u4e00\u7ba1\u7406\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ***.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 apiParamsChecks\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 baseApiCheck.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ***.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mock                                        // mock \u6a21\u62df\u8bf7\u6c42\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 baseMock.js                             // mock \u57fa\u7c7b        \n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js                                // \u5165\u53e3\u6587\u4ef6\u3002\u7edf\u4e00\u7ba1\u7406\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ***.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 request.js                                  // axios \u57fa\u672c\u5c01\u88c5\n\u2502\xa0\xa0 \u2514\u2500\u2500 stores                                          // stores \u4ed3\u5e93\u96c6\u5408\n\u2502\xa0\xa0     \u251c\u2500\u2500 baseStore.js                                // store \u57fa\u7c7b\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.js                                    // \u5165\u53e3\u6587\u4ef6\u3002\u7edf\u4e00\u7ba1\u7406\n\u2502\xa0\xa0     \u2514\u2500\u2500 ***.js\n\n```\n### <a href="\u6570\u636e\u7ba1\u7406\u5668/\u76f8\u5173/stores\u4ed3\u5e93.md">stores \u4ed3\u5e93</a>\n### <a href="\u6570\u636e\u7ba1\u7406\u5668/\u76f8\u5173/api\u63a5\u53e3.md">netTrans:api \u63a5\u53e3\u96c6\u5408</a>\n### <a href="\u6570\u636e\u7ba1\u7406\u5668/\u76f8\u5173/mock\u6a21\u62df.md">netTrans:mock \u6a21\u62df\u8bf7\u6c42</a>\n### <a href="\u6570\u636e\u7ba1\u7406\u5668/\u76f8\u5173/schema\u53c2\u6570\u6821\u9a8c.md">netTrans:schema \u6838\u9a8c\u53c2\u6570</a>\n## \u8bbe\u8ba1\u7406\u5ff5\n\n\u4e00\u4e2a\u9875\u9762\u9700\u8981\u4e2a\u72b6\u6001\u6570\u636e\n\u5982\u679c\u4f60\u53ea\u662f\u5728\u4f60\u7684\u9886\u57df\uff08\u7b80\u5355\u7406\u89e3\u4e3a\u672c\u8eab\u53ca\u5176`\u8f83\u4eb2\u4f20`\u5b50\u7ec4\u4ef6\uff09\u4e2d\u4f7f\u7528\u7684\u8bdd\uff0c\u90a3\u5927\u53ef\u4ee5\u4f5c\u4e3a\u7ec4\u4ef6\u7684state\u6765\u7ba1\u7406\u3002\n\n\u4f46\u5982\u679c\u8fd9\u4e2a\u6570\u636e\u9700\u8981\u88ab\u5176\u4ed6\u201d\u8f83\u8fdc\u201c\u7ec4\u4ef6\u4f7f\u7528\uff0c\u90a3\u4e48\u5c31\u8981\u5411\u8fd9\u4e2a\u6570\u636e\u7ba1\u7406\u5668\u53bb\u7533\u8bf7\uff0c\u5e76\u83b7\u5f97\u4e00\u4e2a\u7531\u4ed3\u5e93\u7ba1\u7406\u7684\u6570\u636e\uff0c\u7136\u540e\u5bf9\u5176\u8fdb\u884c\u4f7f\u7528\u3002\n\n\u9700\u8981\u7f51\u7edc\u8bf7\u6c42\u56de\u6765\u7684\u6570\u636e\uff0c\u4e5f\u5f52\u6570\u636e\u7ba1\u7406\u5668\u7ba1\uff0c\u4f60\u8fd8\u662f\u7167\u5e38\u7533\u8bf7\uff0c\u6570\u636e\u7684\u6765\u6e90\u95ee\u9898\uff0c\u7531ta\u53bb\u89e3\u51b3\uff0c\u7136\u540e\u8bf7\u6c42\u56de\u7684\u6570\u636e\u5230\u5e95\u9700\u4e0d\u9700\u8981\u6258\u7ba1\u5230\u4ed3\u5e93\uff0c\u4e5f\u6839\u636e\u81eata\u81ea\u5df1\u7684`\u539f\u5219`(\u9700\u8981\u5171\u4eab\u5c31\u6258\u7ba1)\u6765\u51b3\u5b9a,\u5982\u56fe\uff1a\n\n<p align="center">\n <img style="\n    width: 80%;\n" src="https://s1.imagehub.cc/images/2021/06/13/663FF258-A077-4124-A6CB-DA3281A1667C991d2ad8f91247c0.jpg">\n</p>\n\n\n>\u5927\u81f4\u6709\u4e24\u79cd\u60c5\u666f\u9700\u8981\u5411\u6570\u636e\u7ba1\u7406\u5668\u7533\u8bf7\u6570\u636e\uff1a\n* \u6211\u9700\u8981\u4e00\u4e2a\u80fd\u591f\u5171\u4eab\u7684\u6570\u636e\u3002\n* \u6211\u9700\u8981\u4e00\u4e2a\u540e\u53f0\u7684\u6570\u636e\u3002\n\n>\u914d\u7f6e\uff1a\n\n\u8be6\uff1a`\u6570\u636e\u7ba1\u7406\u5668/\u914d\u7f6e/`\n\n\n>\u90a3\u95ee\u9898\u7b80\u5355\u4e86\uff1a\n\n\u9875\u9762\uff0c\u7ec4\u4ef6\u7b49view\u5c42\u7684\u662f\u4e00\u4f19\u7684\u3002\n\u6570\u636e\u4ed3\u5e93\uff0c\u7f51\u7edc\u901a\u4fe1\u548cta\u7684\u5c0f\u4f19\u4f34(`schema\u6838\u9a8c\u53c2\u6570`&`mock\u6a21\u62df\u8bf7\u6c42`)\uff0c\u662f\u4e00\u4f19\u7684\u3002\n\n__\u4e00\u8a00\u853d\u4e4b__\uff1a\u6211\u60f3\u8981\u4e2a\u6570\u636e\uff0c\u6211\u81ea\u5df1\u641e\u4e0d\u4e86\uff0c`dataManager`\u4ea4\u7ed9\u4f60\u6765\u5f04\u5427\u3002\n## stores \u6570\u636e\u4ed3\u5e93\uff1a\n\n\u6570\u636e\u7ba1\u7406\u4f7f\u7528\u7684\u662f`mobx`,\u5e76\u4e14\u6269\u5c55\u4e00\u4e9b\u529f\u80fd\uff0c\u5982\uff1a\n* \u53ef\u914d\u7f6e\u63a5\u53e3\u9632\u6296\u3002\n* \u8bf7\u6c42loadding\u663e\u793a\u3002\n* \u63a5\u53e3\u8bf7\u6c42\u53c2\u6570\u6838\u9a8c\u7b49\uff08 _schema\u6838\u9a8c\uff09\u3002\n\n## netTrans \u7f51\u7edc\u901a\u4fe1\uff1a\n>\u5c01\u88c5axios\n\n\u5728\u5176\u57fa\u7840\u4e0a\u8fdb\u884c\u7b80\u5355\u4e14\u5fc5\u8981\u7684\u5c01\u88c5\uff1a\n\n* \u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u7684\u5934\u90e8\u6dfb\u52a0\u4e86`token`\u3002\n\n* \u533a\u5206\u4e0a\u4f20\u6587\u4ef6\u8fd8\u662fJson\uff0c\u5e76\u5728\u5934\u90e8\u6dfb\u52a0\u76f8\u5e94\u7684Content-Type\u3002\n\n* \u7edf\u4e00\u52a0\u4e86\u4e00\u4e9b\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u7b49\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}}]);