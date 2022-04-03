(this["webpackJsonpmoderate-react-ts"]=this["webpackJsonpmoderate-react-ts"]||[]).push([[16],{1719:function(n,t,e){"use strict";e.r(t),t.default='\u8d77\u521d\u6211\u662f\u901a\u8fc7Umi\u4e86\u89e3\u7684Redux\uff0c\u5f53\u65f6Dva\u5c31\u662f\u57fa\u4e8eRedux\u7684\uff0c\u7528\u8d77\u6765\u8bf4\u4e0d\u4e0a\u4e0d\u597d\uff0c\u5c31\u662f\u6709\u70b9\u70e6\uff0c\u70e6ta\u7684\u58a8\u8ff9\uff0c\u8d39\u52b2\u3002\u540e\u6765\u5f53\u6211\u7528\u4e0a\u4e86Mobx\uff0c\u54c7\u5076\uff0cta\u7684\u7b80\u5355\uff0c\u968f\u6027\u8ba9\u6211\u7740\u8ff7\uff0c\u4e0d\u518d\u62d8\u8c28\uff0c\u5c31\u8fd9\u6837\u6211\u9009\u62e9\u4e86Mobx\uff0c\u4f46\u5f53\u7528\u7740\u7528\u7740\uff0c\u603b\u5728\u4e0d\u7ecf\u610f\u95f4\u53bb\u6000\u5ff5Redux\uff0c\u6e10\u6e10\u5730\u7406\u89e3\u4e86ta\uff0c\u6211\u624d\u660e\u767d\u7ea6\u675f\u4e0d\u662f\u8fc7\u5206\u7684\u8981\u6c42\uff0c\u800c\u6211\u73b0\u5728\u53ea\u60f3\u4ece\u6df7\u4e71\u4e2d\u9003\u8d70\uff0c\u5982\u4eca\u6211\u9047\u5230\u4e86Natur\uff0c\u624d\u4f1a\u8d8a\u53d1\u5730\u89c9\u5f97\u5408\u9002\u3002\n\n# \u72b6\u6001\u7ba1\u7406\u5e93\u7684\u7ba1\u4e2d\u7aa5\n\u5f00\u53d1\u4e2d\u5927\u578b\u9879\u76ee\uff0c\u5f80\u5f80\u4f1a\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u5f53\u4e0b\u6bd4\u8f83\u4e3b\u6d41\u7684\u5c31\u662fRedux\u548cMobx\uff0c\u4e8c\u8005\u6211\u89c9\u5f97\u6700\u5927\u7684\u533a\u522b\u662f\u7406\u5ff5\uff0c\u5373\u72b6\u6001\u6570\u636e\u662f\u4e0d\u662f\u4e0d\u53ef\u53d8\u503c\uff0c\u4f17\u6240\u5468\u77e5\uff0cReact\u548cRedux\u4e00\u81f4\u9075\u5faa\u4e86\u4e0d\u53ef\u53d8\u503c\uff0cNatur\u4e5f\u662f\u5982\u6b64\u3002\n\n# \u5f00\u95e8\u89c1\u5c71\n\u5148\u8bf4\u4e00\u4e0b\u6211\u7684\u89c2\u70b9\uff0c\u6211\u662f\u7ed3\u5408\u4e24\u65b9\u9762\u8fdb\u884c\u5224\u65ad\u7684\uff0c\u4e00\u4e2a\u662f\u77ed\u671f\u770b\u4e0a\u624b\uff0c\u53e6\u4e00\u4e2a\u662f\u957f\u8fdc\u770b\u7ef4\u62a4\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a\n\n**\u4e0a\u624b\u96be\u5ea6**\uff1aRedux>**Natur**>Mobx\n\n**\u7ef4\u62a4\u96be\u5ea6**\uff1aMobx>**Natur**>Redux\n\n\u5bf9\u4e8e\u6211\u8fd9\u79cd\u7ecf\u5e38\u5f00\u53d1\u4e0d\u5927\u4e0d\u5c0f\uff0c\u4e2d\u62e8\u6e9c\u9879\u76ee\u7684\u5f00\u53d1\u8005\u6765\u8bb2\uff0c**Natur\u66f4\u9002\u5408**\u3002\n\n\u90a3\u4e48\u63a5\u4e0b\u5c31\u4ece\u8fd9**\u4e24\u65b9\u9762**\u7b80\u5355\u5730**\u5206\u6790\u4e00\u4e0bNatur**\u3002\n\n# Natur\u7684\u4e0a\u624b\u5206\u6790\n\u5148\u8d34\u4e0b\u5b8c\u6574\u4ee3\u7801\uff1a\n```js\n\timport { createStore, createInject } from "natur"; \n\timport { ... } from \'natur/dist/middlewares\'; // \u5f15\u5165\u5185\u7f6e\u4e2d\u95f4\u4ef6\n\t/*-------------\u88c5\u5907-start-------------*/\n\t//\u521b\u5efa\u72b6\u6001\u6a21\u5757-Module\uff08\u72b6\u6001\u5207\u7247\uff09\n\tconst testModule = {\n\t \t// \u72b6\u6001\u6570\u636e\n\t\t state: {\n\t\t\ttestValue: 0,\n\t\t },\n\t\t // \u8ba1\u7b97\u5c5e\u6027\n\t\t maps: {...},\n\t\t // \u4fee\u6539\u72b6\u6001\u7684\u52a8\u4f5c\n\t\t actions: {...},\n\t};\n\t//\u521b\u5efa\u4ed3\u5e93-Store\n\texport const naturStore = createStore(\n\t\t// \u72b6\u6001\u6a21\u5757\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u201c\u72b6\u6001\u5207\u7247\u201d\n\t\t{ testModule },\n\t\t//\u61d2\u52a0\u8f7d\u6a21\u5757\n\t\t{},\n\t\t//\u914d\u7f6e\n\t\t{\n\t\t //\u4e2d\u95f4\u4ef6\uff0c\u76f4\u63a5\u6309\u7167\u5b98\u7f51\u63a8\u8350\u7684\u6765\n\t\t middlewares: [...],\n\t\t}\n\t);\n\t/*-------------\u88c5\u5907-over-------------*/\n\t/*-------------\u63d0\u4f9b\u6ce8\u5165-start-------------*/\n\t//\u5bf9\u5916\u63d0\u4f9b\u6ce8\u5165\u5176\u6570\u636e\u7684\u80fd\u529b\n\texport const injectNaturStore = createInject({ storeGetter: () => naturStore });\n\t/*-------------\u63d0\u4f9b\u6ce8\u5165-over-------------*/\n```\n*\u5728\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\u5e93\u4e4b\u524d\uff0c\u6211\u4eec\u5f97\u5148\u77e5\u9053\u600e\u4e48\u521b\u5efa\u51fa\u6765\uff0c\u624d\u80fd\u8c08\u9875\u9762\u7ec4\u4ef6\u600e\u4e48\u88c5\u5907\u4f7f\u7528\u3002*\n## \u521b\u5efa\u72b6\u6001\u4ed3\u5e93-Store\n\u4ee3\u7801\u5982\u4e0b\n```js\n/*-------------\u88c5\u5907-start-------------*/\n\t//\u521b\u5efa\u72b6\u6001\u6a21\u5757-Module\uff08\u72b6\u6001\u5207\u7247\uff09\n\tconst testModule = {\n\t \t// \u72b6\u6001\u6570\u636e\n\t\t state: {\n\t\t\ttestValue: 0,\n\t\t },\n\t\t // \u8ba1\u7b97\u5c5e\u6027\n\t\t maps: {...},\n\t\t // \u4fee\u6539\u72b6\u6001\u7684\u52a8\u4f5c\n\t\t actions: {...},\n\t};\n\t//\u521b\u5efa\u4ed3\u5e93-Store\n\texport const naturStore = createStore(\n\t\t// \u72b6\u6001\u6a21\u5757\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u201c\u72b6\u6001\u5207\u7247\u201d\n\t\t{ testModule },\n\t\t//\u61d2\u52a0\u8f7d\u6a21\u5757\n\t\t{},\n\t\t//\u914d\u7f6e\n\t\t{\n\t\t //\u4e2d\u95f4\u4ef6\uff0c\u76f4\u63a5\u6309\u7167\u5b98\u7f51\u63a8\u8350\u7684\u6765\n\t\t middlewares: [...],\n\t\t}\n\t);\n\t/*-------------\u88c5\u5907-over-------------*/\n```\n\n\u901a\u8fc7\u4ee3\u7801\u6211\u4eec\u770b\u51fa\uff0c\u521b\u5efa\u4ed3\u5e93\u7684api\u662f`createStore`,\u53c2\u6570\u6709\u4e09\u4e2a\uff1a\n1. **\u72b6\u6001\u6a21\u5757**\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u201c\u72b6\u6001\u5207\u7247\u201d\uff0c**\u672c\u6587\u91cd\u70b9\u4ecb\u7ecd**\n2. **\u61d2\u52a0\u8f7d\u72b6\u6001\u6a21\u5757**\n3. **\u914d\u7f6e**\uff0cNatur\u63d0\u4f9b\u4e86\u8bf8\u591a\u914d\u7f6e\u9879\uff0c\u800c\u9488\u5bf9\u4e0a\u624b\u6765\u8bb2\uff0c\u4e3b\u8981\u4fbf\u662f**\u201c\u4e2d\u95f4\u4ef6\u201d**\n\n### \u914d\u7f6e-\u4e2d\u95f4\u4ef6\n\u8fd9\u90e8\u5206\u76f4\u63a5\u7528\u5b98\u65b9\u63a8\u8350\u7684\u65b9\u6848\u5c31\u5b8c\u4e86\uff0c\u672c\u6587\u4e0d\u505a\u6df1\u6316\u8d58\u8ff0\uff0c\u4ee3\u7801\u5982\u4e0b\u3002\n```js\n{\n    middlewares: [\n      thunkMiddleware, // action\u652f\u6301\u8fd4\u56de\u51fd\u6570\uff0c\u5e76\u83b7\u53d6\u6700\u65b0\u6570\u636e\n      promiseMiddleware, // action\u652f\u6301\u5f02\u6b65\u64cd\u4f5c\n      fillObjectRestDataMiddleware, // \u589e\u91cf\u66f4\u65b0/\u8986\u76d6\u66f4\u65b0\n      shallowEqualMiddleware, // \u65b0\u65e7state\u6d45\u5c42\u5bf9\u6bd4\u4f18\u5316\n      filterUndefinedMiddleware, // \u8fc7\u6ee4\u65e0\u8fd4\u56de\u503c\u7684action\n      devTool, // \u5f00\u53d1\u5de5\u5177\n    ],\n  }\n```\n**\u672c\u6587\u6240\u6709\u7684\u5bf9Natur\u7684\u4ecb\u7ecd\uff0c\u90fd\u662f\u57fa\u4e8e\u8be5\u5b98\u65b9\u4e2d\u95f4\u4ef6\u914d\u7f6e\u8fdb\u884c\u7684\u3002**\n\n### \u61d2\u52a0\u8f7d\u72b6\u6001\u6a21\u5757\n\u5f02\u6b65\u7684\u5b9e\u73b0\u5c31\u662f\u5728\u540c\u6b65\u6a21\u5757\u57fa\u7840\u4e0a\u4f7f\u7528\u4e86import\u7684\u52a8\u6001\u5f15\u5165\uff0c\u4f2a\u4ee3\u7801\u5982\u4e0b\uff1a\n```js\nconst module1 = () => import(\'\u540c\u6b65\u72b6\u6001\u6a21\u5757\');\n```\n\n### \u72b6\u6001\u6a21\u5757-Module\nModule\u5c31\u662f\u4e00\u4e2a\u7531state\uff0cmaps\uff0cactions\u7ec4\u6210\u7684\u5bf9\u8c61\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a\n```js\n\t//\u521b\u5efa\u72b6\u6001\u6a21\u5757-Module\uff08\u72b6\u6001\u5207\u7247\uff09\n\tconst testModule = {\n\t \t// \u72b6\u6001\u6570\u636e\n\t\t state: {\n\t\t\ttestValue: 0,\n\t\t },\n\t\t // \u8ba1\u7b97\u5c5e\u6027\n\t\t maps: {...},\n\t\t // \u4fee\u6539\u72b6\u6001\u7684\u52a8\u4f5c\n\t\t actions: {...},\n\t};\n```\n\n#### state\n\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684\u5bf9\u8c61\u3002\n```js\n    state: {\n            number: 1,\n            value: 2\n    },\n```\n####  maps\n\u8ba1\u7b97\u5c5e\u6027\u3002\n```js\n    maps: {\n            // \u6570\u7ec4\u524d\u9762\u7684\u5143\u7d20\uff0c\u90fd\u662f\u5728\u58f0\u660e\u6b64map\u5bf9state\u7684\u4f9d\u8d56\u9879\uff0c\u6700\u540e\u4e00\u4e2a\u51fd\u6570\u53ef\u4ee5\u83b7\u53d6\u524d\u9762\u58f0\u660e\u7684\u4f9d\u8d56\uff0c\u4f60\u53ef\u4ee5\u5728\u91cc\u9762\u5b9e\u73b0\u4f60\u60f3\u8981\u7684\u4e1c\u897f\n            sum1: [\'number\', \'value\', (number, value) => number + value],\n            // \u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u7684\u65b9\u5f0f\u58f0\u660e\u4f9d\u8d56\u9879\uff0c\u8fd9\u5bf9\u4e8e\u590d\u6742\u7c7b\u578b\u7684state\u5f88\u6709\u7528\n            sum2: [state => state.number, s => s.value, (number, value) => number + value],\n            // \u4e5f\u53ef\u4ee5\u662f\u4e2a\u51fd\u6570\uff0c\u76f4\u63a5\u4f9d\u8d56\u6574\u4e2astate\uff0c\u7f3a\u70b9\u662f\u53ea\u8981state\u66f4\u65b0\u5c31\u4f1a\u91cd\u65b0\u6267\u884c\u51fd\u6570\uff0c\u6ca1\u6709\u7f13\u5b58\n            sum3: ({number, value}) => number + value,\n            // \u4e5f\u53ef\u4ee5\u662f\u4e2a\u51fd\u6570\uff0c\u6ca1\u6709\u4f9d\u8d56\uff0c\u53ea\u6267\u884c\u4e00\u6b21\n            isTrue: () => true,\n    }\n```\n#### actions\n\u4fee\u6539\u72b6\u6001\u7684\u9014\u5f84\uff0c\u65e0\u8bba\u540c\u6b65\u6216\u8005\u5f02\u6b65\u5747\u5728\u5728\u6b64\u9009\u9879\u4e0b\u8fdb\u884c\u914d\u7f6e\uff0caction\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4ee3\u7801\u5982\u4e0b\u3002\n\n```js\n\u540c\u6b65\uff1a\n    actions: {\n            ...\n            // \u8fd9\u91cc\u662f\u5f02\u6b65\u66f4\u65b0state\u4e2d\u7684name\u6570\u636e\n            testAsyncAction: (value: number) => {\n                    return { value: value };\n            }\n            ...\n    }\n```\n\n```js\n\u5f02\u6b65-\u8fd4\u56depromise\uff1a\n    actions: {\n            ...\n            // \u8fd9\u91cc\u662f\u5f02\u6b65\u66f4\u65b0state\u4e2d\u7684name\u6570\u636e\n            testAsyncAction: (value: number) => {\n                    return Promise.resolve({ value })\n            }\n            ...\n    }\n```\n\n```js\n\u5f02\u6b65-\u8fd4\u56de\u51fd\u6570\uff1a\n    actions: {\n            ...\n            // \u8fd9\u91cc\u662f\u5f02\u6b65\u66f4\u65b0state\u4e2d\u7684name\u6570\u636e\n            testAsyncAction: (myParams) =>{\n                     return ({\n                            setState\n                     }) => {\n                             setTimeout(() => {\n                                    setState(Date.now())\n                             }, 5000);\n                     }\n            }\n            ...\n    }\n```\n\n\n## \u9875\u9762\u7ec4\u4ef6\u4e0a\u7684\u4f7f\u7528\n### \u521b\u5efa\u6ce8\u5165\u5668\n```js\n    ...\n    export const injectNaturStore = createInject({ storeGetter: () => naturStore });\n    ...\n```\n\u4f7f\u7528\u521b\u5efa\u597d\u7684\u4ed3\u5e93\u6765\u5236\u4f5c\u4e00\u4e2a\u6ce8\u5165\u5668Hoc\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5411\u7ec4\u4ef6\u7684Props\u4e2d\u6ce8\u5165\u72b6\u6001\u6a21\u5757\u3002\n\n### \u4f7f\u7528\u6ce8\u5165\u5668\n```js\n    ...\n    //\u5f15\u5165\u5e76\u4f7f\u7528\u6ce8\u5165\u5668\n    import { injectNaturStore } from "@DATA_MANAGER/index";\n    let injecter = injectNaturStore(["testModule"]);\n    type PropsT = {\n            [prop: string]: any;\n    } & typeof injecter.type;\n    //\u9875\u9762\u7ec4\u4ef6\n    class TestViewUI extends React.Component<PropsT>{\n            ...\n    }\n    injecter(TestViewUI)\n```\n\n### \u4f7f\u7528\u72b6\u6001Module\u6570\u636e\n```js\n    this.props.lightHomeStoreN?.state?.testValue\n```\n\n### \u4fee\u6539\u72b6\u6001Module\u6570\u636e\n```js\n\u540c\u6b65\u548c\u5f02\u6b65\u4e00\u81f4\n    this.props.lightHomeStoreN.actions.testAsyncAction("\u6d4b\u8bd5\u5f02\u6b65\u54cd\u5e94\uff01");\n    this.props.lightHomeStoreN.actions.testSyncAction("\u6d4b\u8bd5\u540c\u6b65\u54cd\u5e94\uff01");\n```\n\n### \u8bbe\u7f6e\u9875\u9762\u54cd\u5e94\u72b6\u6001Module\u66f4\u65b0\u7684\u7c92\u5ea6\n#### \u76d1\u542cModule\u7684\u6240\u6709\n\u6ce8\u5165\u7684\u6a21\u5757\u4e00\u53d8\u5316\uff0c\u5c31\u66f4\u65b0\u9875\u9762\u7ec4\u4ef6\uff0c\u5373\u89e6\u53d1render\u3002\n```js\n    injectNaturStore(["testModule"])\n    \u6216\n    injectNaturStore("testModule")\n```\n\n#### \u76d1\u542cModule\u7684\u90e8\u5206\n\u6ce8\u5165\u7684\u6a21\u5757\u4e00\u53d8\u5316\uff0c\u5c31\u66f4\u65b0\u9875\u9762\u7ec4\u4ef6\uff0c\u5373\u89e6\u53d1render\u3002\n```js\n    let complexInjector = inject(\n      [\'testModule\',{state: [s => s.xxx], maps: [\'xxx\']}],\n      [\'other\', {state: [s => s.xxx], maps: [\'xxx\']}]\n    );\n    \u6216\n    complexInjector = inject(\'app\', \'other\')\n      .watch(\'app\', {})\n      .watch(\'other\', {state: [s => s.xxx], maps: [\'xxx\']})\n\n```\n\u4f18\u5316\u603b\u662f\u5728\u9700\u8981\u7684\u65f6\u5019\u505a\uff0c\u800cNatur\u63d0\u4f9b\u4e86\u4e00\u5b9a\u7684\u4f18\u5316\u9014\u5f84\u3002\n\n\n## \u5bf9\u6bd4\n### Natur\u76f4\u63a5\u5c31\u6709\u4e86\u6a21\u5757\uff0c\u5f88\u6696\u5fc3\n\u76f4\u63a5\u5c31\u5206\u6210\u4e86\u6a21\u5757\uff0c\u8fd9\u4e5f\u662f\u6211\u559c\u6b22Mobx\u7684\u539f\u56e0\u4e4b\u4e00\uff0c\u53cd\u89c2Redux\n```js\n    const testReducer = (state = { testValue:0 }, action = {}) => {\n       const { type, payload } = action;\n       switch (type) {\n             case "action_1":\n                     return Object.assign({}, state, {\n                     testValue: state.testValue+1\n                     });\n             case "action_2":\n                     return Object.assign({}, state, {\n                     testValue: state.testValue-1\n                     });\n             case "action_3":\n                     return Object.assign({}, state, {\n                     testValue: payload\n                     });\n             default: return state;\n       }\n    };\n```\n\u76f8\u6bd4Redux\u8fd9\u4e00\u5927\u5757\u7684Reducer\uff0c\u80fd\u76f4\u63a5\u5c31\u5206\u6a21\u5757\u662f\u771f\u7684\u597d\uff0cRedux\u4e5f\u53ef\u4ee5\u81ea\u884c\u5730\u8fdb\u884c\u62c6\u5206\u4ece\u800c\u8fbe\u5230\u5206\u6a21\u5757\uff0c\u5c31\u50cfDva\u90a3\u6837\u62c6\u5206\uff0c\u7136\u540e\u7528nameSpace\u8fdb\u884c\u6807\u6ce8\uff0c\u4f46\u201d\u672c\u8eab\u5c31\u6709\u201c\u548c\u201d\u52a8\u624b\u81ea\u52a9\u201c\uff0c\u8fd9\u4e0d\u4e00\u6837\u554a\uff0c\u600e\u4e48\u5f62\u5bb9\u5462\u3002\u3002\u3002\n\n> \u5c31\u597d\u6bd4\u8bf4\u5408\u79df\uff0c\u4f60\u89c9\u5f97\u7528\u9694\u65ad\u505a\u6210\u7684\u63d2\u95f4\u548c\u4e00\u4e2a\u539f\u672c\u5c31\u72ec\u7acb\u7684\u623f\u95f4\u80fd\u4e00\u6837\u5417\uff1f\n\n\u6211\u89c9\u5f97\u201d\u672c\u8eab\u5c31\u6709\u201c\u7684\u4f53\u9a8c\u597d\u3002\n\n### \u9875\u9762\u4f7f\u7528\u4e0a\u6765\u770b\uff0cNatur\u5c31\u5f88\u539f\u59cb\uff0c\u4f46\u67d0\u79cd\u610f\u4e49\u4e0a\u8bb2\u53cd\u800c\u66f4\u597d\n#### \u4e0ereact\u7ed3\u5408\u65b9\u5f0f\n\u5bf9\u4e8eRedux\u548cMobx\u5728\u9875\u9762\u4e0a\u7684\u4f7f\u7528\u7c7b\u4f3c\uff0c\u90fd\u662f\u501f\u52a9\u5176\u4ed6\u201d\u7ed3\u5408\u52a9\u624b\u201c\uff0c\u5982reudx-react\u548cmobx-react\n\n*\u95ee\u9898\uff1a*\n1. Mobx\u548cRedux\u90fd\u9700\u8981\u201c\u7ed3\u5408\u52a9\u624b\u201d\uff0c\u4f46\u4e3a\u4ec0\u4e48Natur\u4e0d\u7528\u5462\uff1f\n2. \u8bdd\u8bf4\u8fd9\u4e2a\u201d\u7ed3\u5408\u52a9\u624b\u201c\u88ab\u5355\u72ec\u8bbe\u7acb\u7684\u610f\u4e49\u662f\u4ec0\u4e48\uff1f\n\n\n\u6211\u8ba4\u4e3aMobx\u548cRedux\u5e94\u8be5\u662f\u8003\u8651\u5230\u4e0d\u5355\u5bf9React\u4e00\u65b9\u8fdb\u884c\u7ed3\u5408\uff0c\u6240\u4ee5\u5c06\u201c\u7ed3\u5408\u201d\u8fd9\u5757\u62bd\u51fa\u6765\uff0c\u5206\u522b\u9488\u5bf9\u4e0d\u540c\u65b9\u6765\u8fdb\u884c\u5236\u4f5c\u201d\u7ed3\u5408\u52a9\u624b\u201c\u3002\n\n\u8fd9\u4e48\u60f3\u7684\u8bdd\uff0c\u90a3\u4e48Natur\u4e0d\u7528\uff0c\u4f30\u8ba1\u662f\u56e0\u4e3a\u53ea\u9488\u5bf9React\u4e00\u65b9\u8fdb\u884c\u7ed3\u5408\u3002\u8fd9\u5bf9React\u4f7f\u7528\u8005\u6765\u8bf4\u5e94\u8be5\u8bf4\u53cd\u800c\u7b80\u5355\u4e86\u3002\u3002\u3002\n\n#### \u5728\u9875\u9762\u4e0a\u4f7f\u7528Natur\u4ed3\u5e93\u7684\u65b9\u5f0f\n\u76f4\u63a5\u901a\u8fc7\u94fe\u5f0f\u8c03\u7528\u7684\u65b9\u5f0f\uff0c\u8fd9\u5c31\u8ddfMobx\u6709\u70b9\u795e\u4f3c\u4e86\uff0cem~ ~ ~\uff0c\u5f88\u539f\u59cb\uff0c\u5f88\u76f4\u63a5\uff0c\u597d\u5904\u5f88\u5b9e\u9645\uff0c\u5982\u679c\u662f\u7528Ts\u5f00\u53d1\uff0c\u5c31\u4f1a\u6709\u8054\u60f3\u63d0\u793a\uff0c\uff0c\u6bd4\u5982\uff1a\n<p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fd3193b26fe43009d81d6ed64890364~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n\n\u8fd9\u5176\u5b9e\u5f88\u68d2\uff0c\u53cd\u89c2Redux\uff1a\n```js\n    dispatch({\n            type: \'settings/changeSetting\',\n            payload: config,\n    })\n```\n\u4f60\u53ef\u4ee5\u8bf4Redux\u7684dispatch\u5f88\u9ad8\u7ea7\uff0c\u7b80\u6d01\uff0c\u4f46\u4e0d\u53ef\u5426\u8ba4\uff0c\u591a\u5c11\u6709\u70b9\u201c\u8ff7\u201d\u3002\n\ndispatch\u4f20\u5165\u7684type\uff0c\u9700\u8981\u51c6\u786e\u62fc\u5199\u65e0\u8bef\uff0c\u8fd8\u6ca1\u6709\u63d0\u793a\uff0c\u6211\u60f3\u77e5\u9053\u76ee\u7684\u5730\u5728\u54ea\uff0c\u6211\u8fd8\u5f97\u67e5\u627e\uff0c\u751a\u81f3\u5168\u5c40\u641c\u7d22\u3002\u3002\u3002\u3002\u96be\u53d7\n\n\u76f8\u6bd4\u4e00\u770b\uff0c\u539f\u59cb\u7684\u65b9\u5f0f\u66f4\u7b80\u5355\uff0c\u601d\u8def\u8fd8\u6e05\u6670\uff0c\u5173\u952e\u8fd8\u6709\u63d0\u793a\uff0c\u7701\u7684\u6211\u8d39\u52b2\u8bb0\u4f4f\u201d\u90ae\u5bc4\u5730\u5740\u201c\u4e86\u3002\n\n#### \u8ddfMobx\u6bd4\u4e0a\u624b\u96be\u5ea6\uff0c\u7701\u7701\u5427\n\u8fd9\u8fd8\u7528\u6bd4\u4e48\uff0cMobx\u6709\u90a3\u4e48\u591a\u4e8b\uff1f\u968f\u6027\u7684\u4e0d\u8981\u4e0d\u8981\u7684\uff0cMobx\u5efa\u8bae\u5e94\u8be5\u6c38\u8fdc\u53ea\u5bf9**\u4fee\u6539**\u72b6\u6001\u7684\u51fd\u6570\u4f7f\u7528\u52a8\u4f5c\uff0c\u800c\u4f60\u4e0d\u52a0\u90fd\u884c\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u72b6\u6001\u60f3\u6539\u5c31\u6539\uff0c\u65e0\u62d8\u65e0\u675f\uff0c\u4e5f\u8bb8\u4f60\u4e0d\u660e\u767d\u5b83\u5230\u5e95\u600e\u4e48\u53ef\u89c2\u5bdf\u7684\uff0c\u8c03\u8bd5\u65f6\u770b\u53ef\u89c2\u5bdf\u5bf9\u8c61\u8fd8\u5bb9\u6613\u9189\uff0c\u4f46\u8fd9\u90fd\u4e0d\u7b97\u4e8b\uff0c\u5f00\u5fc3\u6700\u5927\u561b\u3002\n\n### \u6211\u7684\u89c2\u70b9\n\u57fa\u4e8e\u4ee5\u4e0a\u4e3b\u89c2\u7684\u5206\u6790\uff0c\u6211\u5f97\u51fa\u4e86\u6211\u7684\u89c2\u70b9\u3002\n\n**\u4e0a\u624b\u96be\u5ea6**\uff1aRedux>**natur**>Mobx\n\n# Natur\u7684\u7ef4\u62a4\u5206\u6790\n\u7ef4\u62a4\u5206\u6790\u6709\u522b\u4e8e\u4e0a\u624b\u5206\u6790\uff0c\u540e\u8005\u4e3b\u8981\u4ece\u57fa\u7840\u7ec6\u8282\u51fa\u53d1\uff0c\u5faa\u5e8f\u6e10\u8fdb\u7684\u7684\u5c55\u5f00\uff0c\u76f4\u5230\u5b8c\u6574\u5b9e\u73b0\u529f\u80fd\uff0c\u7b56\u7565\u5c31\u662f\u4ece\u4e0b\u5230\u4e0a\uff0c\u7ef4\u62a4\u5206\u6790\u6211\u89c9\u5f97\u5c31\u5f97\u53cd\u7740\u6765\u4e86\uff0c\u7528\u4ece\u4e0a\u5230\u4e0b\u7684\u7b56\u7565\uff0c\u4ece\u5177\u4f53\u7684\u5b9e\u9645\u95ee\u9898\u89e6\u53d1\uff0c\u987a\u7406\u6210\u7ae0\u5730\u63a8\u5bfc\uff0c\u76f4\u5230\u6e05\u6670\u5f97\u51fa\u5b9e\u73b0\u65b9\u6848\u3002\n\n##  \u9879\u76ee\u6210\u957f\u7684\u70e6\u607c\n\n### \u4e00\u4e2a\u9875\u9762\u4e00\u4e2a\u72b6\u6001Module\u591f\u4e86\n\u4ece\u6211\u8fd9\u4e2a\u5982\u6b64\u666e\u901a\u7684\u5f00\u53d1\u8005\u89c6\u89d2\u6765\u8bb2\uff0c\u6211\u7684\u9879\u76ee\u80af\u5b9a\u662f\u8981\u7528\u72b6\u6001\u7ba1\u7406\u5e93\u7684\uff0c\u6211\u662f\u6309\u7167\u9875\u9762\u6765\u5212\u5206\u72b6\u6001Module\u7684\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u9875\u9762\u5bf9\u5e94\u4e00\u4e2aModule\uff0c\u5f00\u59cb\u8fd8\u597d\uff0c\u5b8c\u6210\u4e00\u4e9b\u4e1a\u52a1\u529f\u80fd\u540e\uff0c\u4f53\u91cf\u4e0d\u5927\u3002\n<p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/313e032a92a343a3ad81f49d102c9e87~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n\n\u968f\u7740\u9879\u76ee\u4e0d\u65ad\u5730\u5f00\u53d1\uff0c\u6bcf\u4e2a\u9875\u9762\u7684\u72b6\u6001Module\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\n<p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2af7863fe06c4d749d9c8312bb1d6e94~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n\n\u5404\u6709\u751a\u8005\uff0c\u72b6\u6001Model\u95f4\u8fd8\u6709\u4e00\u4e9b\u5f80\u6765\uff0c\u90a3\u5173\u7cfb\u53eb\u4e00\u4e2a\u9519\u7efc\u590d\u6742\u554a\u3002\n\n### \u4e00\u4e2a\u4e0d\u591f\u4e86\u8be5\u600e\u4e48\u529e\n\u672c\u6765\u4e00\u4e2a\u9875\u9762\uff0c\u5b50\u7ec4\u4ef6\u8fd8\u90fd\u5c0f\uff0c\u901a\u8fc7\u7236\u7ec4\u4ef6\u83b7\u5f97\u72b6\u6001module\u6570\u636e\u5355\u5411\u5730\u5f80\u4e0b\u4f20\uff0c\u8fd9\u65e5\u5b50\u8fd8\u7b97\u80fd\u8fc7\uff0c\u4f46\u662f\u5f53\u5b50\u7ec4\u4ef6\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u53c8\u6709\u4e86\u81ea\u5df1\u7684\u5b50\u7ec4\u4ef6\uff0c\u90a3\u4e48\u5355\u5411\u5c31\u53d8\u5f97\u8d39\u52b2\u4e86\uff08\u600e\u4e48\u6709\u79cd\u719f\u6089\u4e4b\u611f\uff09,\u90a3\u4e48\u5b50\u7ec4\u4ef6\u5c31\u60f3\u8131\u79bb\u5355\u5411\uff0c\u76f4\u63a5\u5730\u53bb\u8bbf\u95ee\u8fd9\u4e2a\u9875\u9762\u72b6\u6001module\uff0c\u884c\u4e0d\u884c\uff1f\n\n### \u5b50\u7ec4\u4ef6\u60f3\u8d8a\u77e9\uff0c\u4e0d\u884c\uff0c\u6ca1\u5230\u65f6\u5019\n\u5b50\u7ec4\u4ef6\u8df3\u8fc7\u7236\u7ec4\u4ef6\u76f4\u63a5\u62ff\u6570\u636e\uff0c\u8fd9\u4e0d\u5408\u89c4\u77e9\uff0c\u4e0d\u662f\u7edd\u5bf9\u4e0d\u884c\uff0c\u800c\u662f\u6ca1\u5230\u65f6\u5019\uff0c\u5982\u679c\u5b50\u7ec4\u4ef6\u90fd\u53bb\u62ff\u9875\u9762\u72b6\u6001\u6570\u636e\uff0c\u505a\u4e86\u672c\u8be5\u7236\u7ec4\u4ef6\u505a\u7684\u4e8b\u60c5\uff0c\u90a3\u4e48\u5c31\u662f\u4fc3\u8fdb\u5206\u88c2\uff0c\u7ec4\u6210\u9875\u9762\u7684\u7236\u7ec4\u4ef6\u548c\u5b50\u7ec4\u4ef6\u5e94\u8be5\u66f4\u597d\u5730\u7ed3\u5408\u56e2\u7ed3\uff0c\u800c\u4e0d\u662f\u8c8c\u5408\u795e\u79bb\uff0c\u6240\u4ee5\u8fd9\u79cd\u884c\u4e3a\u4e0d\u53ef\u53d6\uff0c\u90a3\u4e48\u95ee\u9898\u8fd8\u5f97\u89e3\u51b3\uff0c\u90a3\u5c31\u5f97\u4ece\u8fd9\u72b6\u6001module\u5165\u624b\u4e86\u3002\n\n### \u5316\u6574\u4e3a\u96f6\uff0c\u6709\u70b9\u4e71\u554a\n\u4f60\u60f3\u8981\u628a\u201c\u6574\u4e2a\u201d\u9875\u9762\u72b6\u6001module\uff0c\u62c6\u5206\u7ed9\u9875\u9762\u4e2d\u5404\u4e2a\u591f\u683c\u7684\u5b50\u7ec4\u4ef6\uff0c\u5982\n<p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1251226eb40f463b81e75ae06fe3814d~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n\n\u60f3\u7684\u662f\u633a\u597d\uff0c\u9996\u5148\u8fd9\u4e9b\u62c6\u5206\u540e\u7684\u72b6\u6001module\u5bf9\u5e94\u7684\u5b50\u7ec4\u4ef6\u53ef\u662f\u5f88\u76f8\u5173\u7684\uff0c\u90a3\u5c31\u80af\u5b9a\u514d\u4e0d\u4e86\u5f7c\u6b64\u7684\u901a\u4fe1\uff0c\u5173\u7cfb\u90a3\u53ef\u5c31\u8001\u94c1\u4e86\uff0c\u5982\n<p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62b5adabdb9042d4ba7a50d1a0cf0bc1~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n\n### \u603b\u5f97\u6709module\u5148\u7ad9\u51fa\u6765\n\u90a3\u4e48\u5173\u7cfb\u8fd9\u4e48\u590d\u6742\uff0c\u90a3\u5c31\u7edf\u4e00\u7684\u8ba9\u7626\u8eab\u6210\u529f\u7684\u9875\u9762\u7ec4\u4ef6module\u7ba1\u5427\uff0c\u6bd5\u7adf\u5730\u4f4d\u8fd8\u5728\uff0c\u4e3a\u4e86\u7ef4\u62a4\u72b6\u6001\u6a21\u5757\u95f4\u7684\u79e9\u5e8f\uff0c\u4e3b\u8981\u505a\u7684\u5c31\u662f**\u8de8\u6a21\u5757\u7684\u901a\u4fe1\u4ee5\u53ca\u4e1a\u52a1\u5904\u7406**\u8fd9\u65b9\u9762\n<p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e168abe834b94144bb956e9c7d0b4f45~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n\n\u4f46\u662f\u6e10\u6e10\u7684\u9875\u9762\u7ec4\u4ef6module\u53c8\u80d6\u4e86\uff0c\u8fd9\u628a\u4e0d\u5355\u662f\u80d6\uff0c\u8fd8\u6709\u70b9\u4e0d\u5b88\u201c\u672c\u5206\u201d\u4e86\uff0c\u8fd9\u53ef\u4e0d\u884c\u554a\u3002\n\n###  \u5929\u964d\u731b\u7537\uff0cnatur-service\u5f88\u77e5\u6027\n\u6709\u4e9bcoder\u5b9e\u73b0\u4e86\u9879\u76ee\u57fa\u672c\u529f\u80fd\u540e\uff0c\u4f1a\u5bf9\u54c1\u8d28\u4ea7\u751f\u8ffd\u6c42\uff0c\u4e0d\u5e0c\u671b\u518d\u5fcd\u53d7\u6df7\u4e71\uff0c\u5e0c\u671b\u4e00\u5207\u770b\u8d77\u6765\u4e95\u4e95\u6709\u6761\uff0c\u4f46\u662f\u5f80\u5f80\u6321\u4f4f\u811a\u672c\u7684\u603b\u662f\u6321\u4f4f\u811a\u672c\uff0c\u8fd9\u9897\u8fdb\u6b65\u7684\u5fc3\u5c31\u8fd9\u6837\u5014\u5f3a\u7684\u5b58\u5728\uff0c\u8fdb\u9000\u4e24\u96be\uff0c\u800cnatur-service\u77e5\u9053\u600e\u4e48\u505a\u53ef\u4ee5\u7ec4\u7ec7\u597d\u4ee3\u7801\uff0c\u4ece\u6df7\u4e71\u4e2d\u89e3\u8131\uff0c\u6709\u4e86ta\uff0c\u5c40\u9762\u5c31\u53d8\u6210\u8fd9\u6837\u4e86\uff0c\u5982\uff1a\n<p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/292125412c4e4447b2d3cd384aff6165~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n \n \u751a\u81f3\u8fd8\u53ef\u4ee5\u8fd9\u6837\n <p align="center">\n <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85296983ffcc43d2a7db2de6f029d04f~tplv-k3u1fbpfcp-zoom-1.image">\n</p>\n\n\u5b8c\u5168\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6839\u636e\u81ea\u5df1\u5bf9\u4e1a\u52a1\u7684\u7406\u89e3\u518d\u5206\u5806\u3002\n\n## natur-service\u7684\u5f00\u53d1\u4f7f\u7528\n### \u5b89\u88c5 natur-service\n```shell\n    yarn add natur-service\n```\n\n\n### \u521b\u5efa\u4e00\u4e2anatur-service\u5b9e\u4f8b\n\u5148\u5199\u4e00\u4e2astore\u5f53\u6d4b\u8bd5\u4f8b\u5b50\n`testStore.ts`\n```js\nimport { createStore } from \'natur\';\n\nconst count = {\n  state: 1,\n  actions: {\n    inc: (state) => state + 1,\n    dec: (state) => state - 1,\n  }\n}\n\nconst modules = {\n  count,\n  count1: count,\n};\n\nconst lazyModules = {};\n\nexport const store = createStore(modules, lazyModules);\nexport type M = typeof modules;\nexport type LM = typeof lazyModules;\n```\n\n\u7136\u540e\u5728\u540c\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e2a`service.ts`\n\n```js\nimport {store, M, LM} from "./testStore.ts";\nimport NaturService from "natur-service";\n\nclass CountService extends NaturService<M, LM> {\n  constructor() {\n    super(store);\n    ...\n  }\n}\n\n// \u5b9e\u4f8b\u5316\uff0c\u5f00\u59cb\u76d1\u542c\nconst countService = new CountService();\n```\n\n### \u6a21\u5757\u95f4\u7684\u901a\u4fe1\n```js\nimport {store, M, LM} from "store";\nimport NaturService from "natur-service";\n\nclass CountService extends NaturService<M, LM> {\n  constructor() {\n    super(store);\n    // \u6267\u884ccount\u6a21\u5757\u7684inc\u65b9\u6cd5\n    this.dispatch(\'count\', \'inc\', 0).then(() => {\n      // \u5982\u679ccount\u662f\u4e00\u4e2a\u8fd8\u672a\u52a0\u8f7d\u7684\u6a21\u5757\uff0c\u90a3\u4e48\u7b49\u5230count\u52a0\u8f7d\u5b8c\u6210\u540e\u624d\u4f1a\u89e6\u53d1\u8fd9\u4e2aaction\n      // \u5982\u679c\u5728\u672a\u52a0\u8f7d\u5b8c\u6210\u671f\u95f4\uff0c\u91cd\u590d\u591a\u6b21\u7684\u8c03\u7528\u540c\u4e00\u4e2aaction\uff0c\u90a3\u4e48\u65e7\u7684dispatch\u4f1a\u629b\u51fa\u4e00\u4e2a\u56fa\u5b9a\u7684Promise\u9519\u8bef\uff0c\u4ee5\u6e05\u9664\u7f13\u5b58\uff0c\u9632\u6b62\u7206\u6808\n      console.log(\'dispatch\u5b8c\u6210\');\n    })\n  }\n}\n\n// \u5b9e\u4f8b\u5316\uff0c\u6267\u884c\u63a8\u9001\nconst countService = new CountService();\n```\n\n### \u76d1\u542c\u6a21\u5757\u7684\u66f4\u65b0\u3001\u4ee5\u53ca\u66f4\u65b0\u7684\u8be6\u60c5\u4fe1\u606f\n\n```js\nimport {store, M, LM} from "store";\nimport NaturService from "natur-service";\n\nclass CountService extends NaturService<M, LM> {\n  constructor() {\n    super(store);\n    // \u89c2\u5bdfcount\u6a21\u5757\uff0c ModuleEvent\u8bf7\u770b\u6587\u6863\n    this.watch("count", (me: ModuleEvent) => {\n      // \u8fd9\u662f\u66f4\u65b0\u8be6\u60c5\n      console.log(me);\n      // \u8fd9\u662f\u4f60\u8981\u6267\u884c\u7684\u4e1a\u52a1\u903b\u8f91\n      console.log(\'count module has changed.\');\n    });\n  }\n}\n\n// \u5b9e\u4f8b\u5316\uff0c\u5f00\u59cb\u76d1\u542c\nconst countService = new CountService();\n```\n\n**ModuleEvent**\n\n| \u5c5e\u6027\u540d\u79f0        | \u8bf4\u660e          | \u7c7b\u578b          |\n| --------   | :------------  | :----------: |\n| state        | \u6a21\u5757\u6700\u65b0\u7684state      |   any | undefined   |\n| type        | \u89e6\u53d1\u6a21\u5757\u66f4\u65b0\u7684\u7c7b\u578b\uff0c\'init\' \u662f\u6a21\u5757\u521d\u59cb\u5316\u89e6\u53d1\uff0c\'update\' \u662f\u6a21\u5757\u7684state\u66f4\u65b0\u65f6\u89e6\u53d1\uff0c\'remove\'\u662f\u6a21\u5757\u5378\u8f7d\u65f6\u89e6\u53d1     |   \'init\' | \'update\' | \'remove\'    |\n| actionName | \u89e6\u53d1\u6a21\u5757\u66f4\u65b0\u7684action\u540d\u79f0\uff0c\u53ea\u6709\u5728 type\u4e3a\'update\'\u65f6\u624d\u4f1a\u5b58\u5728     |   string | undefined    |\n| oldModule | \u65e7\u6a21\u5757\u7684\u6570\u636e\uff0c\u5f53type\u4e3a\'init\'\u65f6\u4e3aundefined     |   InjectStoreModule | undefined    |\n| newModule | \u65b0\u6a21\u5757\u7684\u6570\u636e\uff0c\u5f53type\u4e3a\'remove\'\u662f\u4e3aundefined    |  InjectStoreModule | undefined    |\n\n## \u5bf9\u6bd4\n### \u6240\u6709\u7684\u72b6\u6001\u90fd\u653e\u5728\u4ed3\u5e93\u91cc\u884c\u4e0d\u884c\n\n\u65e0\u8bba\u662f\u4f7f\u7528Dva\uff08Redux\uff09\u8fd8\u662fMobx\uff0c\u90fd\u88ab\u8fd9\u4e2a\u95ee\u9898\u56f0\u6270\u8fc7\u5f88\u4e45\uff0c\u7ecf\u8fc7\u7ea0\u7ed3\u6211\u9009\u62e9\u4e86\u4e00\u4e2a\u6298\u4e2d\u65b9\u6848\uff1a\n> \u6211\u5148\u5199\u6210\u7ec4\u4ef6\u72b6\u6001\uff0c\u7136\u540e\u6839\u636e\u9700\u8981\u518d\u8bb2\u8fd9\u4e2a\u7ec4\u4ef6\u72b6\u6001\u6539\u6210\u4ed3\u5e93\u72b6\u6001\u3002\n\n\u4e0d\u5168\u653e\u5728\u4ed3\u5e93\u91cc\u6709\u51e0\u70b9\u987e\u8651\uff1a\n1. \u90fd\u653e\u8fdb\u53bb\uff0c\u6211\u5c31\u5206\u4e0d\u6e05\u54ea\u4e9b\u72b6\u6001\u662f\u5168\u5c40\uff0c\u54ea\u4e9b\u662f\u5c40\u90e8\u4e86\uff08\u53ef\u80fd\u6ca1\u5565\u592a\u5927\u5fc5\u8981\uff09\u3002\n2. \u90fd\u653e\u8fdb\u53bb\uff0c\u90a3\u4e48\u591a\u7684\u72b6\u6001\u5168\u6df7\u5728\u4e00\u8d77\uff0c\u90a3\u8fd9\u4e2amodule\u5c31\u4f1a\u5f88\u81c3\u80bf\u3002\n3. \u62c6\u5206\u6a21\u5757\u7684\u8bdd\uff0c\u8de8\u6a21\u5757\u901a\u4fe1\uff0c\u4e92\u76f8\u76d1\u542c\u5f7c\u6b64\u7684\u4e1a\u52a1\uff0c\u4f1a\u4e0d\u4f1a\u53d8\u5f97\u5f88\u6df7\u4e71\u554a\u3002\n\n### \u6709\u4e86natur-service\uff0c\u95ee\u9898\u5c31\u7b80\u5355\u4e86\n#### Redux\u8de8\u6a21\u5757\u901a\u4fe1\u5c31\u6709\u70b9\u62c9\u4e86\n\nRedux\u4e5f\u8bb8\u4e13\u6ce8\u7684\u662f\u5168\u5c40\u72b6\u6001\u7ba1\u7406\uff0c\u8fde\u62c6\u5206\u6a21\u5757\u90fd\u5f97\u81ea\u5df1\u52a8\u624b\uff0cDva\u5c31\u5f88\u597d\u5730\u5b8c\u5584\u4e86Redux\uff0c\u4f46\u4ecd\u4f1a\u6709\u4e00\u4e2a\u5c34\u5c2c\u7684\u95ee\u9898\uff0c\u4eba\u561b\u5bb9\u6613\u61d2\uff0c\u4f60\u4f1a\u53d1\u73b0\u5199\u6765\u5199\u53bb\uff0c\u4e00\u4e2a`model`\u7684`effect`\u4e00\u5806\uff0c\u4f46\u662f`reducer`\u5c31\u4e00\u4e2a\uff0c\u6bd5\u7adf\u8fd9\u4e48\u591a`effect`\u90fd\u7528\u4e00\u4e2a`reducer`\u770b\u8d77\u6765\u4e5f\u6ca1\u5565\u4e0d\u884c\u7684\u3002\n\n\u4f46\u8fd9\u4e48\u505a\uff0c\u8de8\u6a21\u5757\u901a\u4fe1\u89e6\u53d1\u7684`reducer`\u4e0d\u5c31\u90fd\u7528\u8fd9\u4e00\u4e2a\u4e86\u4e48\uff0c\u90a3\u8fd8\u548b\u5206\u6e05\u662f\u54ea\u4e2aaction\u89e6\u53d1\u7684\u554a\u3002\n\n#### \u8de8\u6a21\u5757\u901a\u4fe1\u5bb9\u6613\u4e86\uff0c\u6a21\u5757\u62c6\u5206\u4e5f\u5c31\u597d\u7ba1\u4e86\n\u6709\u4e86natur-service\uff0c\u5728\u62c6\u5206module\u8fd9\u5757\u5c31\u597d\u4e86\u4e0d\u5c11\uff0c\u8ba9\u8de8\u6a21\u5757\u901a\u4fe1\u53d8\u5f97\u4e95\u4e95\u6709\u6761\uff0c\u540c\u65f6\u4e5f\u6ca1\u6709\u8ba9\u6a21\u5757\u95f4\u6709\u8026\u5408\u5173\u7cfb\uff0c\n\u76f8\u6bd4Dva\u4f60\u5f97\u7528`put`\u6765\u89e6\u53d1\u6307\u5b9a\u6a21\u5757\u7684`effect`\u6216\u8005`reducer`\u3002\n```js\n    *testEffect(_, { call, put, select }) {\n            ...\n            yield put({\n                    type: \'\u5176\u4ed6\u6a21\u5757/effect\u6216\u8005reducer\',\n                    payload: data,\n            });\n            ...\n    }\n```\nMobx\u5c31\u66f4\u8fc7\uff0c\u76f4\u63a5\u5f97\u5f15\u5165\u8fd9\u4e2a\u6a21\u5757\uff0c\u4ece\u800c\u6267\u884c\u76f8\u5e94\u7684`action`\u3002\n```js\n\t@action\n\tfetchLightDelete = (params:any) => {\n            ...\n            otherModule.testAction()\n            ...\n\t}\n```\nnatur\u6839\u672c\u5c31\u4e0d\u7528\u5728\u6a21\u5757\u91cc\u5199\u8fd9\u4e2a\u5199\u8fd9\u4e9b\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7acb\u4e00\u4e2aflag\u72b6\u6001\u53d8\u91cf\u548c\u89e6\u53d1\u5b83\u6539\u53d8\u7684action\u5c31\u884c\u3002\n```js\n    class CountService extends NaturService<M, LM> {\n        constructor() {\n            this.watch("flagAction", (me: ModuleEvent) => {\n                    this.dispatch(\'count\', \'inc\', 0).then(() => {});\n            }\n        }\n    }\n```\n\u867d\u7136\u52a0\u4e86\u4e00\u4e2a\u65e0\u5173\u7d27\u8981\u7684flagState\u6765\u89e6\u53d1natur-service\u7684\u76d1\u542c\u7684\u65b9\u5f0f\u6709\u4e9b\u201c\u505a\u4f5c\u201d\uff0c\u4f46\u8fd9\u53ef\u4ee5\u8ba9natur-servic\u7cbe\u7ec6\u638c\u63a7\u8de8\u6a21\u5757\u901a\u4fe1\u3002\n\n#### \u4e00\u4e9b\u591a\u4e2a\u4ed3\u5e93\u6574\u5408\u8c03\u5ea6\u7684\u4e1a\u52a1\u5c31\u4e0d\u7528\u6df7\u5728UI\u5c42\u4e86\u3002 \n\n\u6709\u79cd\u4e1a\u52a1\u573a\u666f\uff0c\u975e\u5e38\u9002\u5408natur-service\u53d1\u6325\uff0c\u6bd4\u5982A\u9875\u9762\u6709\u4e86\u4e2a\u4ed3\u5e93\u64cd\u4f5c\uff0c\u9996\u9875\u548c\u7528\u6237\u9875\u9762\u4f1a\u6709\u8fde\u5e26\u7684\u4e00\u4e9b\u4ed3\u5e93\u72b6\u6001\u7684\u64cd\u4f5c\uff0c\u4e00\u822c\u6211\u662f\u8981\u5728UI\u5c42\u641e\u7684\uff0c\u4e5f\u5c31\u662f\u5728\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u7684`componentDidmount`\u8fd9\u79cd\u51fd\u6570\u91cc\u8fdb\u884c\u4e1a\u52a1\u6574\u5408\u3002\n\n\u4f46\u662f\u9009\u54ea\u4e2a\u9875\u9762\u91cc\u5199\u5462\uff1f\u770b\u4f3c\u5e94\u8be5\u8c01\u5f15\u8d77\u7684\u8c01\u5199\uff0c\u4f46\u4e00\u7ec6\u60f3\uff0c\u8fd9\u4e0d\u8026\u5408\u4e86\uff0c\u4e3a\u5565\u5176\u4ed6\u9875\u9762\u7684\u4e1a\u52a1\u8981\u5728\u767b\u5f55\u9875\u9762\u5199\u5462\uff1f\u8fd9\u4e48\u4e00\u60f3\u786e\u5b9e\u4e0d\u662f\u5f88\u597d\uff0c\u800c\u6709\u4e86natur-service\uff0c\u76f4\u63a5\u4ea4\u7ed9\u5b83\u5c31\u5b8c\u4e86\uff0c\u7701\u7684\u7ea0\u7ed3\u5728\u54ea\u5199\uff0c\u5199\u6765\u5199\u53bb\u8fd8\u5bb9\u6613\u4e71\u3002\n\n### \u548cMobx\u8f83\u91cf\u4e00\u4e0b\u7ef4\u62a4\u6027\u3002\u3002\u3002\n\u6211\u89c9\u5f97\u4e0d\u7528\u6bd4\u4e86\uff0cMobx\u7684\u53ef\u53d8\u503c\u8fd9\u4e00\u70b9\uff0c\u5982\u679c\u4e0d\u52a0\u4e00\u5957\u4e25\u683c\u7684\u89c4\u8303\u548c\u4e00\u4e9b\u5fc5\u8981\u624b\u6bb5\uff08\u505a\u4e2a\u7edf\u4e00\u4fee\u6539\u5165\u53e3\u51fd\u6570\u5565\u7684\uff09\uff0c\u4f60\u5c31\u5f88\u96be\u7ba1\u7406\u597dMobx\uff0c\u592a\u81ea\u7531\uff0c\u7231\u8fc7\u706b\u3002\n\n\n### \u6211\u7684\u89c2\u70b9\n\u57fa\u4e8e\u4ee5\u4e0a\u4e3b\u89c2\u7684\u5206\u6790\uff0c\u6211\u5f97\u51fa\u4e86\u6211\u7684\u89c2\u70b9\u3002\n\n**\u7ef4\u62a4\u96be\u5ea6**\uff1aMobx>**Natur**>Redux\n\n\u6bd4\u8f83\u4e0b\u6765\uff0c\u771f\u7684\u6211\u5fc3\u91cc\u8d8a\u53d1\u7684\u89c9\u5f97**Natur**\u66f4\u597d\u7ef4\u62a4\uff0c\u4e0d\u8fc7Redux\u6bd5\u7adf\u5927\u724c\u5b50\uff0c\u4f30\u8ba1\u5e94\u8be5\u66f4\u597d\u5427\u3002\u3002\u3002\n\n\n\n# \u603b\u7ed3\n\u901a\u8fc7\u77ed\u671f\u770b\u4e0a\u624b\u548c\u957f\u8fdc\u770b\u7ef4\u62a4\uff0c\u6211\u6bd4\u8f83\u4e0b\u6765\uff0cNatur\u5f88\u9002\u5408\u6211\uff0c\u80fd\u591f\u5f88\u597d\u7684\u6ee1\u8db3\u6211\u7ec4\u7ec7\u4ee3\u7801\u7684\u9700\u6c42\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5e38\u5e38\u5f00\u53d1\u4e2d\u62e8\u6e9c\u9879\u76ee\u7684\u6211\u6765\u8bf4\uff0c\u6b63\u6b63\u597d\u597d\u3002\n\n\n# \u9898\u5916\u8bdd\n\u4f5c\u4e3a\u4e00\u4e2a\u666e\u666e\u901a\u901a\u524d\u7aefcoder\uff0c\u6bcf\u5f53\u770b\u5230\u4e00\u4e2a\u56fd\u5185\u5f00\u53d1\u8005\u7684\u5e93\uff0c\u5c24\u5176\u662f\u6ca1\u6709\u5149\u73af\u7684\uff0c\u6211\u4f1a\u683c\u5916\u7684\u5173\u6ce8\u548c\u5c0a\u91cd\uff0c\u5e76\u62ff\u51fa\u8db3\u591f\u7684\u70ed\u60c5\u53bb\u5b66\u4e60\u548c\u5206\u4eab\uff0c\u6211\u8ba4\u4e3a\u597d\u7684\u5e93\u5c31\u597d\u50cf\u4e00\u4e2a\u53d1\u5149\u4f53\uff0c\u80fd\u7528\u6765\u53d6\u6696\u83b7\u53d6\u529b\u91cf\uff0c\u540c\u65f6\u66f4\u5e94\u8be5\u5c06\u5149\u6298\u5c04\u51fa\u53bb\uff0c\u800c\u4e0d\u662f\u53bb\u906e\u63a9\uff0c\u8fd9\u662f\u53ef\u803b\u7684\uff0c\u4e5f\u662f\u5f92\u52b3\u7684\uff0c\u7136\u800c\u4e00\u4e2a\u4f18\u79c0\u7684\u5149\u6e90\u662f\u4e0d\u60e7\u6015\u63a9\u76d6\u7684\uff0c\u4e5f\u662f\u76d6\u4e0d\u706d\u7684\uff0c\u56e0\u4e3a\u53ea\u6709\u81ea\u5df1\u80fd\u8ba9\u81ea\u5df1\u53d1\u5149\u3002\n'}}]);