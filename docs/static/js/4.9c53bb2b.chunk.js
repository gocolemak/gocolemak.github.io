(this["webpackJsonpmoderate-react-ts"]=this["webpackJsonpmoderate-react-ts"]||[]).push([[4],{1673:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return K}));var i=o(98),r=o(18),n=o(136),a=o(42),d=o(47),s=o(55),c=o(54),l=o(0),p=o.n(l),u=o(1661),h=o(246),g=o(16),f=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){return Object(a.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"getInPorts",value:function(){return this.getPortsByGroup("in")}},{key:"getOutPorts",value:function(){return this.getPortsByGroup("out")}},{key:"getUsedInPorts",value:function(t){var e=this;return(t.getIncomingEdges(this)||[]).map((function(t){var o=t.getTargetPortId();return e.getPort(o)}))}},{key:"getNewInPorts",value:function(t){return Array.from({length:t},(function(){return{group:"in"}}))}},{key:"updateInPorts",value:function(t){return this}}]),o}(u.g.Rect),m=o(1678),b=o(296),y=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){var t;Object(a.a)(this,o);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).editorContent=void 0,t.init=function(){var e=t.cell;e.isNode()&&(e.attr("text/textWrap/text")&&e.attr("text/style/display","none"));document.addEventListener("mousedown",t.onMouseDown)},t.onMouseDown=function(t){},t}return Object(d.a)(o,[{key:"render",value:function(){Object(m.a)(Object(b.a)(o.prototype),"render",this).call(this);var t=this.cell,e=0,i=0,r=0,n=0;if(t.isNode()){var a=t.position(),d=t.size(),s=this.graph.localToGraph(a),c=this.graph.zoom();e=s.x,i=s.y,r=10*c,n=d.height*c}else e=this.options.x-40,i=this.options.y-20,r=10,n=40;var l=u.h.createElement("button",!1);return l.className="testSelect",l.style.position="absolute",l.style.left="".concat(e,"px"),l.style.top="".concat(i,"px"),l.style.width="".concat(r,"px"),l.style.height="".concat(n,"px"),l.style.display="flex",l.style.alignItems="center",l.style.textAlign="center",l.onclick=function(t){alert("123")},this.container.appendChild(l),this.init(),this}},{key:"getDistance",value:function(){var t=this.cell;if(t.isEdge()){var e=t.getTargetPoint(),o=t.getSourceNode().getBBox().intersectsWithLineFromCenterToPoint(e);return new u.f(this.options.x,this.options.y).distance(o)}return 0}}]),o}(u.h.ToolItem);y.config({tagName:"div",isSVGElement:!1}),u.c.registerEdgeTool("editableCell",y,!0),u.c.registerNodeTool("editableCell",y,!0);var v=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){return Object(a.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"postprocess",value:function(){var t=this;setTimeout((function(){t.zIndex=100}),0)}},{key:"handleForward",value:function(){return this.data.stepNum=Math.min(this.data.stepArr.length-1,++this.data.stepNum),this.data.stepNum==this.data.stepArr.length-1&&this.setAttrs({buttonGroupForward:{display:"none"}}),this.setAttrs({buttonGroupBack:{display:"block"}}),this.data.stepArr[this.data.stepNum]}},{key:"handleBack",value:function(){return this.data.stepNum=Math.max(0,--this.data.stepNum),0==this.data.stepNum&&this.setAttrs({buttonGroupBack:{display:"none"}}),this.setAttrs({buttonGroupForward:{display:"block"}}),this.data.stepArr[this.data.stepNum]}},{key:"showBtn",value:function(){this.setAttrs({buttonGroupForward:{display:"block"},buttonGroupBack:{display:"none"}})}},{key:"hideBtn",value:function(){this.data.stepNum=0,this.setAttrs({buttonGroupForward:{display:"none"},buttonGroupBack:{display:"none"}})}}]),o}(f);v.config({inherit:"rect",width:66,height:36,markup:[{tagName:"g",selector:"buttonGroupBack",attrs:{class:"btn back"},children:[{tagName:"rect",selector:"button",attrs:{"pointer-events":"visiblePainted"}},{tagName:"path",selector:"buttonSign",attrs:{fill:"black","pointer-events":"none"}}]},{tagName:"g",selector:"buttonGroupForward",attrs:{class:"btn forward"},children:[{tagName:"rect",selector:"button2",attrs:{"pointer-events":"visiblePainted"}},{tagName:"path",selector:"buttonSign2",attrs:{fill:"none","pointer-events":"none"}}]},{tagName:"rect",selector:"body"},{tagName:"text",selector:"label"}],attrs:{body:{refWidth:"100%",refHeight:"100%",strokeWidth:1,fill:"#ffffff",stroke:"#a0a0a0"},label:{textWrap:{ellipsis:!0,width:-10},textAnchor:"middle",textVerticalAnchor:"middle",refX:"50%",refY:"50%",fontSize:12},buttonGroupBack:{refX:"-8",refY:"50%",display:"none"},button:{fill:"#4C65DD",stroke:"none",x:-10,y:-10,height:20,width:30,rx:10,ry:10,cursor:"pointer",event:"node:collapse"},buttonSign:{fill:"none",refX:-7,refY:-5,stroke:"white",strokeWidth:1.6,display:"block",d:"M 10 0 L 4 5 L 10 10"},buttonGroupForward:{refX:"100%",refY:"50%",display:"none"},button2:{fill:"#4C65DD",stroke:"none",x:-10,y:-10,height:20,width:30,rx:10,ry:10,cursor:"pointer",event:"node:collapse"},buttonSign2:{fill:"none",refX:5,refY:-5,stroke:"#FFFFFF",strokeWidth:1.6,display:"block",d:"M 0 0 L 6 5 L 0 10"},".btn.back":{event:"node:back"},".btn.forward":{event:"node:forward"}},ports:Object(r.a)({},{groups:{out:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},in:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"in",id:"port_in_1"},{group:"out",id:"port_out_1"},{group:"top",id:"port_top_1"},{group:"bottom",id:"port_bottom_1"}]}),label:"\u5ba1\u6279"});var O=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){return Object(a.a)(this,o),e.apply(this,arguments)}return o}(f);O.config({inherit:"circle",width:56,height:56,attrs:{body:{strokeWidth:1,stroke:"#f2763b",fill:"#f1bfbf",rx:28},textWrap:{text:"lorem ipsum dolor sit amet consectetur adipiscing elit",width:-10,height:"50%",ellipsis:!0,breakWord:!0}},ports:Object(r.a)({},{groups:{out:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},in:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"in",id:"port_in_1"},{group:"out",id:"port_out_1"},{group:"top",id:"port_top_1"},{group:"bottom",id:"port_bottom_1"}]}),label:"\u521b\u5efa"});var j=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(){return Object(a.a)(this,o),e.apply(this,arguments)}return o}(f);j.config({inherit:"rect",width:75,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF",rx:20},text:{fontSize:12,color:"#262626"}},ports:Object(r.a)({},{groups:{out:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},in:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"in",id:"port_in_1"},{group:"out",id:"port_out_1"},{group:"top",id:"port_top_1"},{group:"bottom",id:"port_bottom_1"}]}),label:"\u7ed3\u675f"});var _="1",k="0",N="2",x="recall",w="field",F="scope";function A(t){return t.getProp("position")}var B=["source","target"],I=function(){function t(e){var o,i=this;Object(a.a)(this,t),this.graph=void 0,this.createNodeHandler=void 0,this.createNodeByType=function(t){var e=t.type,o=t.options;return i.graph.createNode(Object(r.a)({shape:e},o))},this.graph=e.graph,this.createNodeHandler=(o={},Object(g.a)(o,x,this.createNodeByType),Object(g.a)(o,F,this.createNodeByType),Object(g.a)(o,w,this.createNodeByType),o),this.toRegisterNode()}return Object(d.a)(t,[{key:"toRegisterNode",value:function(){u.c.registerNode("recall",v,!0),u.c.registerNode("scope",j,!0),u.c.registerNode("field",O,!0)}},{key:"addNodeByType",value:function(t){var e=t.type,o=t.options;return this.createNodeHandler[e]({type:e,options:o})}},{key:"addNet",value:function(t){for(var e=this,o=t.nodeList,i=t.startPos,a=void 0===i?{x:0,y:0}:i,d=t.offset,s=void 0===d?{x:0,y:0}:d,c=[],l=0;l<o.length;l++){var p=o[l],u=p.type,h=(p.children,this.createNodeByType({type:u,options:{id:p.id,data:p,label:p.name}}).position(a.x+s.x,a.y+s.y*(l+1)).setAttrs({label:{textAnchor:"middle",text:p.name,textWrap:{width:60,height:32,ellipsis:!0}}}));c.push(this.graph.addNode(h))}for(var g=0;g<o.length;g++){var f=o[g].connects;(void 0===f?[]:f).forEach((function(t){var o=t.source,i=t.target,a=Object(n.a)(t,B);e.graph.addEdge(Object(r.a)({source:{cell:o.id,port:o.port},target:{cell:i.id,port:i.port},attrs:{line:{stroke:"#1890ff",strokeDasharray:5,targetMarker:"classic",style:{animation:"ant-line 30s infinite linear"}}}},a))}))}return c}}]),t}();u.c.registerConnector("multi-smooth",(function(t,e,o,i){var r=i.index,n=void 0===r?0:r,a=i.total,d=void 0===a?1:a,s=i.gap,c=void 0===s?1:s,l=new u.d(t,e),p=n-(d-1)/2,h=Math.abs(p),g=l.pointAtLength(l.length()/2+2*c*Math.ceil(h)).rotate(90,l.getCenter());g.y=g.y-15,g.x=g.x+20;var f=[t,g,e],m=u.b.throughPoints(f),b=new u.e(m);return i.raw?b:b.serialize()}),!0);var S=o(1710),E=o.n(S),T=o(44),C=o(1671),D=o(1711),W=o(519),z=o(89),P=o(11),M=Object(z.j)((function(t){Object(W.a)().global.docList;return Object(l.useEffect)((function(){var t=document.getElementById("main"),e=t.scrollWidth,o=t.scrollHeight||500,i=new C.a.Graph({container:"main",width:e,height:o,fitView:!0,layout:{type:"gForce",minMovement:.01,damping:.99,linkDistance:80,nodeStrength:1500,preventOverlap:!0},modes:{default:["drag-canvas","drag-node","zoom-canvas"]}}),r=D.nodes;function n(t){var e=t.item.get("model");e.fx=t.x,e.fy=t.y}r.forEach((function(t){t.size=t.size||30,t.labelCfg={position:"right"}})),i.data({nodes:r,edges:D.edges.map((function(t,e){return t.id="edge"+e,Object.assign({},t)}))}),i.render(),i.on("node:dragstart",(function(t){i.layout(),n(t)})),i.on("node:drag",(function(t){i.get("layoutController").layoutMethods[0].execute(),n(t)})),i.on("node:dragend",(function(t){t.item.get("model").fx=null,t.item.get("model").fy=null})),"undefined"!==typeof window&&(window.onresize=function(){i&&!i.get("destroyed")&&t&&t.scrollWidth&&t.scrollHeight&&i.changeSize(t.scrollWidth,t.scrollHeight)})}),[]),Object(P.jsx)("div",{id:"main",className:t.className})})),R=o(520),L={id:Object(T.m)(),value:"",category:0,symbolSize:25,size:30},G={id:Object(T.m)(),label:"\u8def\u7531",value:"\u8def\u7531/\u6982\u89c8.md",category:0,symbolSize:20,path:"\u8def\u7531/\u6982\u89c8.md",connect:function(){return{source:this.id,target:L.id}}},H={id:Object(T.m)(),label:"\u6570\u636e\u7ba1\u7406\u5668",value:"",category:0,symbolSize:20,path:"\u6570\u636e\u7ba1\u7406\u5668/\u6982\u89c8.md",connect:function(){return{source:this.id,target:L.id}}},Y={id:Object(T.m)(),label:"\u5f00\u53d1\u89c4\u8303",value:"",category:0,symbolSize:20,path:"\u5f00\u53d1\u89c4\u8303/\u6982\u89c8.md",connect:function(){return{source:this.id,target:L.id}}},U={id:Object(T.m)(),label:"\u516c\u5171\u5e93",value:"",category:0,symbolSize:20,path:"\u516c\u5171\u5e93/\u6982\u89c8.md",connect:function(){return{source:this.id,target:L.id}}},V={id:Object(T.m)(),label:"\u56fd\u9645\u5316",value:"",category:0,symbolSize:20,path:"\u56fd\u9645\u5316/\u5f00\u53d1\u653b\u7565.md",connect:function(){return{source:this.id,target:L.id}}},X={id:Object(T.m)(),label:"cocos\u6e38\u620f\u5f15\u64ce",value:"",category:0,symbolSize:20,path:"cocos\u6e38\u620f\u5f15\u64ce/\u6982\u89c8.md",connect:function(){return{source:this.id,target:L.id}}},q={id:Object(T.m)(),label:"MD\u6587\u6863\u529f\u80fd\u96c6\u6210",value:"",category:0,symbolSize:20,path:"MD\u6587\u6863\u529f\u80fd\u96c6\u6210/\u6982\u89c8.md",connect:function(){return{source:this.id,target:L.id}}},J={nodes:[Object(r.a)({},L),Object(r.a)({},G),Object(r.a)({},H),Object(r.a)({},Y),Object(r.a)({},U),Object(r.a)({},V),Object(r.a)({},X),Object(r.a)({},q)]},Q=(Object(r.a)({},L),Object(r.a)({},G),Object(r.a)({},H),Object(r.a)({},Y),Object(r.a)({},U),Object(r.a)({},V),Object(r.a)({},X),Object(r.a)({},q),Object(r.a)({},L),Object(r.a)({},G),Object(r.a)({},H),Object(r.a)({},Y),Object(r.a)({},U),Object(r.a)({},V),Object(r.a)({},X),Object(r.a)({},q),Object(r.a)({},L),Object(r.a)({},G),Object(r.a)({},H),Object(r.a)({},Y),Object(r.a)({},U),Object(r.a)({},V),Object(r.a)({},X),Object(r.a)({},q),["itemData"]),K=function(t){Object(s.a)(o,t);var e=Object(c.a)(o);function o(t){var i;Object(a.a)(this,o),(i=e.call(this,t)).graph=void 0,i.nodeCtr=void 0,i.minimapContainer=void 0,i.magnetAvailabilityHighlighter=void 0,i.formInstance=void 0,i.nodeArr=void 0,i.nodePosArrTemp=void 0,i.isDragFlag=void 0,i.currentNodeId=void 0,i.isBefore=void 0,i.flowId=void 0,i.subNodeArr=[],i.targetRecallId=void 0,i.toRequestData=function(){return new Promise((function(t){t({})}))},i.preWork=function(){var t=document.getElementById("containerS"),e=document.createElement("div");e.id="stencil";var o=document.createElement("div");o.id="graph-containerS",t.appendChild(e),t.appendChild(o),Object(h.insertCss)("\n      #containerS {\n        display: flex;\n        height:50%;\n        border: 1px solid #dfe3e8;\n      }\n      #graph-containerS {\n        width: 100%;\n        height: 100%!important;\n      }\n      .x6-widget-stencil  {\n        background-color: #fff;\n      }\n      .x6-widget-stencil-title {\n        background-color: #fff;\n      }\n      .x6-widget-stencil-group-title {\n        background-color: #fff !important;\n      }\n      .x6-widget-transform {\n        margin: -1px 0 0 -1px;\n        padding: 0px;\n        border: 1px solid #239edd;\n      }\n      .x6-widget-transform > div {\n        border: 1px solid #239edd;\n      }\n      .x6-widget-transform > div:hover {\n        background-color: #3dafe4;\n      }\n      .x6-widget-transform-active-handle {\n        background-color: #3dafe4;\n      }\n      .x6-widget-transform-resize {\n        border-radius: 0;\n      }\n      .x6-widget-selection-inner {\n        border: 1px solid #239edd;\n      }\n      .x6-widget-selection-box {\n        opacity: 0;\n      }\n    ")},i.handleSummit=function(){history.back()},i.toRemoveStep=function(){i.subNodeArr.forEach((function(t){t.remove()}))},i.toRegisterEvent=function(){i.graph.on("node:back",(function(t){var e=t.e,o=t.node;e.stopPropagation();var r=o.handleBack();r&&i.toNextStep(r)})),i.graph.on("node:forward",(function(t){var e=t.e,o=t.node;e.stopPropagation();var r=o.handleForward();r&&i.toNextStep(r)})),i.graph.on("edge:removed",(function(t){var e=t.edge;if(t.options.ui){var o=e.getTargetCell();o instanceof f&&o.updateInPorts(i.graph)}})),i.graph.on("node:mouseenter",(function(t){t.node})),i.graph.on("node:mouseleave",(function(t){t.node})),i.graph.on("node:click",(function(t){t.e,t.x,t.y;var e=t.node,o=t.cell;t.view.highlight();var r=o.data,n=r.id,a=r.type;i.setState({currentItemId:n,isCheckNode:a==_},(function(){var t,e,o=i.state.nodeList.find((function(t){return t.id===i.state.currentItemId}));null===(t=i.formInstance)||void 0===t||null===(e=t.current)||void 0===e||e.setFieldsValue(o)}));var d=o.data;if(d.type===x)if(i.targetRecallId)i.nodeArr.find((function(t){t.data.id===i.targetRecallId&&t.hideBtn()})),i.toRemoveStep(),i.targetRecallId=null;else{i.targetRecallId=d.id,e.showBtn();var s=d.stepNum,c=d.stepArr[s];i.toNextStep(c)}})),i.graph.on("cell:mouseup",(function(t){t.view.unhighlight()})),i.graph.on("cell:mouseleave",(function(t){t.view.unhighlight()})),i.graph.on("cell:mouseover",(function(t){t.view.unhighlight()})),document.addEventListener("mousemove",(function(t){if(i.isDragFlag){var e=t.pageX,o=t.pageY,r=i.graph.pageToLocal(e,o),a=[],d={};if(!i.nodePosArrTemp.length)return;i.nodePosArrTemp.forEach((function(t){var e,o=t.itemData,s=function(t,e){var o=e.x-t.x,i=e.y-t.y;return Math.sqrt(o*o+i*i)}(Object(n.a)(t,Q),r);a.push(s),d[s]=o,null===(e=i.graph.findViewByCell(o))||void 0===e||e.unhighlight()}));var s=Math.min.apply(Math,a),c=d[s];if(r.x>A(c).x){if(s>100)return}else if(s>50)return;var l=i.graph.findViewByCell(c);null===l||void 0===l||l.highlight(),i.currentNodeId=c.data.id,i.isBefore=!0,r.x>A(c).x?i.isBefore=Math.abs(r.x-A(c).x)<c.size().width/2:i.isBefore=!0}}))},i.refContainer=function(t){},i.refMiniMapContainer=function(t){i.minimapContainer=t},i.handleFormChange=function(t){console.log("Received values of form: ",t),"auditUserEditable"in t&&(t.auditUserEditable?t.auditUserEditable=1:t.auditUserEditable=0),"formDataEditable"in t&&(t.formDataEditable?t.formDataEditable=1:t.formDataEditable=0),i.state.nodeList.find((function(e){e.id===i.state.currentItemId&&Object.assign(e,t)})),i.toRecoveryView()};var d=i.getNodeOptionByType(x),s=i.getNodeOptionByType(F);!function(t){var e=[];J.nodes.forEach((function(t){var o;e.push(null===(o=t.connect)||void 0===o?void 0:o.call(t))}))}(),s=Object(r.a)(Object(r.a)({},s),{},{connects:[{source:{id:d.id,port:"port_top_1"},target:{id:s.id,port:"port_out_1"},connector:"multi-smooth"}]});var c=i.getNodeOptionByType(F);c=Object(r.a)(Object(r.a)({},c),{},{connects:[{source:{id:s.id,port:"port_out_1"},target:{id:c.id,port:"port_out_1"},connector:"multi-smooth"}]});var l=i.getNodeOptionByType(F);l=Object(r.a)(Object(r.a)({},l),{},{connects:[{source:{id:c.id,port:"port_out_1"},target:{id:l.id,port:"port_out_1"},connector:"multi-smooth"}]});var u=i.getNodeOptionByType(F);u=Object(r.a)(Object(r.a)({},u),{},{connects:[{source:{id:l.id,port:"port_out_1"},target:{id:u.id,port:"port_out_1"},connector:"multi-smooth"}]});var g=i.getNodeOptionByType(F);g=Object(r.a)(Object(r.a)({},g),{},{connects:[{source:{id:u.id,port:"port_in_1"},target:{id:g.id,port:"port_out_1"},connector:"multi-smooth"}]});i.getNodeOptionByType(w);var m=i.getNodeOptionByType(w),b=i.getNodeOptionByType(w),y=i.getNodeOptionByType(w),v=i.getNodeOptionByType(w);d.stepNum=0,d.stepArr=[{targetId:m.id,subArr:[s]},{targetId:m.id,subArr:[s,c]},{targetId:m.id,subArr:[s,c,l]},{targetId:m.id,subArr:[s,c,l,u]}];var O=[Object(r.a)(Object(r.a)({},m),{},{connects:[{source:{id:m.id,port:"port_out_1"},target:{id:b.id,port:"port_in_1"}}],name:"\u770b\u6587\u6863"}),Object(r.a)(Object(r.a)({},b),{},{connects:[{source:{id:b.id,port:"port_out_1"},target:{id:d.id,port:"port_in_1"}}],name:"\u7b2c3\u4ef6\u4e8b"}),Object(r.a)(Object(r.a)({},d),{},{connects:[{source:{id:d.id,port:"port_out_1"},target:{id:y.id,port:"port_in_1"}}]}),Object(r.a)(Object(r.a)({},y),{},{connects:[{source:{id:y.id,port:"port_out_1"},target:{id:v.id,port:"port_in_1"}}],name:"\u7b2c4\u4ef6\u4e8b"}),Object(r.a)(Object(r.a)({},v),{},{name:"\u7b2c5\u4ef6\u4e8b"})];i.state={isRefresh:0,currentItemId:"",isCheckNode:!0,operatorList:[],nodeList:O,flowName:"",relationDataSource:[]},i.formInstance=p.a.createRef();var j=t.location.search;return i.flowId=Object(T.f)(j,"id"),i}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.props.location,this.toRequestData().then((function(){t.magnetAvailabilityHighlighter={name:"stroke",args:{attrs:{fill:"#fff",stroke:"#47C769"}}},t.preWork(),t.graph=t.createGraph(),t.nodeCtr=new I({graph:t.graph}),t.toRecoveryView(),t.toRegisterEvent(),t.setState({isRefresh:Date.now()})}))}},{key:"getNodeOptionByType",value:function(t){return t==x?{id:Object(T.m)(),type:x,name:"\u56de\u6eaf"}:t==w?{id:Object(T.m)(),type:w,offsetY:-10,name:"\u77e5\u8bc6\u70b9A",offsetForNode:{x:10,y:-10}}:t==F?{id:Object(T.m)(),type:F,offsetY:-10,name:"\u77e5\u8bc6\u70b91",auditUserId:1,auditUserEditable:0,formDataEditable:0,valid:1}:{id:Object(T.m)(),type:w,name:"\u77e5\u8bc6\u70b9",auditUserId:1,auditUserEditable:0,formDataEditable:0,valid:1}}},{key:"componentWillUnmount",value:function(){var t=document.getElementById("root"),e=document.getElementById("gameRoot");e.style.display="none",e.className="gameLogin",t.appendChild(e)}},{key:"initStenCil",value:function(){var t=this,e=new u.a.Stencil({title:"\u6d41\u7a0b\u56fe",target:this.graph,stencilGraphWidth:200,stencilGraphHeight:240,collapsable:!1,groups:[{title:"\u57fa\u7840\u6d41\u7a0b\u56fe",name:"group1",collapsable:!1}],layoutOptions:{columns:1,columnWidth:150,rowHeight:80},getDragNode:function(e){return t.isDragFlag=!0,t.nodePosArrTemp=[],t.nodeArr.forEach((function(e){var o=A(e);t.nodePosArrTemp.push(Object(r.a)(Object(r.a)({},o),{},{itemData:e}))})),e.clone({keepId:!0})},getDropNode:function(e){return t.isDragFlag=!1,t.nodePosArrTemp=[],e.clone({keepId:!0})},validateNode:function(e,o){var r=t.state.nodeList,n=Object(i.a)(r),a=r.findIndex((function(e){return t.currentNodeId===e.id}));return e.data.type!==_||(0===a?n.splice(a+1,0,t.getNodeOptionByType(e.data.type)):a===n.length-1?n.splice(a,0,t.getNodeOptionByType(e.data.type)):n.splice(t.isBefore?a:a+1,0,t.getNodeOptionByType(e.data.type)),t.setState({nodeList:n},(function(){t.toRecoveryView()}))),!1}});document.getElementById("stencil").appendChild(e.container);var o=this.nodeCtr.addNodeByType({type:_}),n=this.nodeCtr.addNodeByType({type:N}),a=this.nodeCtr.addNodeByType({type:k});e.load([a,o,n],"group1")}},{key:"getNodeCtr",value:function(){return this.nodeCtr}},{key:"createGraph",value:function(){return new u.c({panning:!0,autoResize:!0,mousewheel:{enabled:!0},grid:!0,container:document.getElementById("graph-containerS"),highlighting:{magnetAvailable:this.magnetAvailabilityHighlighter,magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#fff",stroke:"#31d0c6"}}}}})}},{key:"toRecoveryView",value:function(){var t=this;this.graph.clearCells();var e=50;this.nodeArr=[];for(var o=this.state.nodeList,i=0;i<o.length;i++){var r=o[i],n=r.type,a=r.children,d=void 0===a?[]:a,s=r.offsetForNode,c=void 0===s?{x:0,y:0}:s;d.forEach((function(o,i){var r=t.nodeCtr.addNodeByType({type:o.type,options:{id:o.id,data:o,label:o.name}}).position(e,150-120*(i+1)).setAttrs({label:{textAnchor:"middle",textWrap:{width:60,height:32,ellipsis:!0}}});t.graph.addNode(r)}));var l=this.nodeCtr.addNodeByType({type:n,options:{id:r.id,data:r,label:r.name}}).position(c.x+e+130*i,150+c.y).setAttrs({label:{textAnchor:"middle",text:r.name,textWrap:{width:60,height:32,ellipsis:!0}}});this.nodeArr.push(this.graph.addNode(l))}for(var p=0;p<o.length;p++){var u=o[p].connects;(void 0===u?[]:u).forEach((function(e){var o=e.source,i=e.target,r=i.connector;t.graph.addEdge({source:{cell:o.id,port:o.port},target:{cell:i.id,port:i.port},connector:r,attrs:{line:{stroke:"#5217b1",strokeWidth:1,targetMarker:{name:"classic",size:7}}}})}))}}},{key:"toNextStep",value:function(t){var e=t.targetId,o=t.subArr,n=t.isRetain,a=this.nodeArr.find((function(t){return t.id===e}));!n&&this.subNodeArr.forEach((function(t){t.remove()}));var d=a.position(),s=this.nodeCtr.addNet({nodeList:o,startPos:Object(r.a)(Object(r.a)({},d),{},{x:d.x-10}),offset:{x:0,y:-50}});n?(this.subNodeArr[this.subNodeArr.length-1].removeTools(),this.subNodeArr=[].concat(Object(i.a)(this.subNodeArr),Object(i.a)(s))):this.subNodeArr=s,this.subNodeArr[this.subNodeArr.length-1].addTools({name:"boundary",height:20,args:{padding:3,attrs:{fill:"#7c68fc",stroke:"#9254de",strokeWidth:1,fillOpacity:.2}}})}},{key:"render",value:function(){return Object(P.jsxs)("div",{className:E.a.app,children:[Object(P.jsxs)("div",{id:"strategy_left",className:E.a.content_left,children:[Object(P.jsx)("div",{className:E.a.content_left_top,id:"containerS",ref:this.refContainer}),Object(P.jsx)(M,{className:E.a.content_left_bottom})]}),Object(P.jsx)("div",{className:E.a["app-content-right"],children:Object(P.jsx)(R.default,Object(r.a)({},this.props))})]})}}]),o}(p.a.Component)},1710:function(t,e,o){t.exports={app:"main_app__2OQGG",content_left:"main_content_left__v3YnN",top:"main_top__1E5l6","custom-form-item":"main_custom-form-item__3mbN1","app-content":"main_app-content__1e7J-",content_left_top:"main_content_left_top__3FKNy",content_left_bottom:"main_content_left_bottom__3BcYA","app-content-right":"main_app-content-right__2L99Q","app-infoEdit":"main_app-infoEdit__3NPo1","app-minimapContainer":"main_app-minimapContainer__28PIA","dnd-wrap":"main_dnd-wrap__3HMXz","dnd-rect":"main_dnd-rect__1-SfD","dnd-circle":"main_dnd-circle__1lXLr","dnd-mid-circle":"main_dnd-mid-circle__1zLFX","x6-graph-scroller":"main_x6-graph-scroller__TmuYv",validating:"main_validating__M0gqC","lds-dual-ring":"main_lds-dual-ring__Ox7Lu"}},1711:function(t){t.exports=JSON.parse('{"nodes":[{"id":"0","value":"","category":0,"symbolSize":25,"size":30},{"id":"\u8def\u7531/\u6982\u89c8.md","label":"\u8def\u7531","value":"","category":0,"symbolSize":20,"path":"\u8def\u7531/\u6982\u89c8.md"},{"id":"\u6570\u636e\u7ba1\u7406\u5668/\u6982\u89c8.md","label":"\u6570\u636e\u7ba1\u7406\u5668","value":"","category":0,"symbolSize":20,"path":"\u6570\u636e\u7ba1\u7406\u5668/\u6982\u89c8.md"},{"id":"\u5f00\u53d1\u89c4\u8303/\u6982\u89c8.md","label":"\u5f00\u53d1\u89c4\u8303","value":"","category":0,"symbolSize":20,"path":"\u5f00\u53d1\u89c4\u8303/\u6982\u89c8.md"},{"id":"\u516c\u5171\u5e93/\u6982\u89c8.md","label":"\u516c\u5171\u5e93","value":"","category":0,"symbolSize":20,"path":"\u516c\u5171\u5e93/\u6982\u89c8.md"},{"id":"\u56fd\u9645\u5316/\u5f00\u53d1\u653b\u7565.md","label":"\u56fd\u9645\u5316","value":"","category":0,"symbolSize":20,"path":"\u56fd\u9645\u5316/\u5f00\u53d1\u653b\u7565.md"},{"id":"cocos\u6e38\u620f\u5f15\u64ce/\u6982\u89c8.md","label":"cocos\u6e38\u620f\u5f15\u64ce","value":"","category":0,"symbolSize":20,"path":"cocos\u6e38\u620f\u5f15\u64ce/\u6982\u89c8.md"},{"id":"MD\u6587\u6863\u529f\u80fd\u96c6\u6210/\u6982\u89c8.md","label":"MD\u6587\u6863\u529f\u80fd\u96c6\u6210","value":"","category":0,"symbolSize":20,"path":"MD\u6587\u6863\u529f\u80fd\u96c6\u6210/\u6982\u89c8.md"}],"edges":[{"source":"\u8def\u7531/\u6982\u89c8.md","target":"0"},{"source":"\u6570\u636e\u7ba1\u7406\u5668/\u6982\u89c8.md","target":"0"},{"source":"\u5f00\u53d1\u89c4\u8303/\u6982\u89c8.md","target":"0"},{"source":"\u516c\u5171\u5e93/\u6982\u89c8.md","target":"0"},{"source":"\u56fd\u9645\u5316/\u5f00\u53d1\u653b\u7565.md","target":"0"},{"source":"cocos\u6e38\u620f\u5f15\u64ce/\u6982\u89c8.md","target":"0"},{"source":"MD\u6587\u6863\u529f\u80fd\u96c6\u6210/\u6982\u89c8.md","target":"0"}],"categories":[{"name":""}]}')}}]);