(this["webpackJsonpmoderate-react-ts"]=this["webpackJsonpmoderate-react-ts"]||[]).push([[7],{1676:function(e,t,a){"use strict";a.r(t);var n,i=a(42),l=a(47),c=a(63),o=a(55),h=a(54),r=a(0),s=(a(1705),a(525)),d=a(80),g=a(29),p=a(330),u=a(151),f=a(1704),b=a(771),m=a(72),j=a(245),S=a(11),O=function(){var e=this;this.selectedRows=[],this.state={pageSize:m.f,searchLightName:"",pageIndex:1,columns:[],searchItemArr:[],btnInTableConfig:[]},this.refreshConfig=function(){var t=e.props.intlData;e.setState({columns:[{title:t.light_Id,dataIndex:"id",key:"id"},{title:t.light_lightName,dataIndex:"lightName",key:"lightName",render:function(e,a){var n=a.id;return Object(S.jsx)(u.c,{to:Object(j.d)("lightDetail",{search:"?title=".concat(t.light_lightEetailTitle,"&id=").concat(n)}),children:e})}},{title:t.light_comment,dataIndex:"comment",key:"comment"},{title:t.light_action,key:"action",render:function(a,n){var i=a.id;return Object(S.jsxs)("span",{children:[Object(S.jsx)(u.c,{to:Object(j.d)("lightEdit",{search:"?title=".concat(t.light_lightEditTitle,"&id=").concat(i)}),children:Object(S.jsx)(f.a,{style:{fontSize:15,color:"#1890FF",marginLeft:10,marginRight:10}})}),Object(S.jsx)(b.a,{style:{fontSize:15,color:"#1890FF",marginLeft:10,marginRight:10},onClick:function(){e.handlDelete([i])}})]})}}],searchItemArr:[{dataIndex:"searchLightName",formConfig:{formLayout:{labelCol:{span:6},wrapperCol:{span:18},labelAlign:"left"},inputConfig:{placeholder:t.placeholder_input,size:"large"},label:Object(S.jsx)("span",{style:{lineHeight:"38px"},children:t.light_searchParam}),rules:[{max:30,message:t.light_heavy_lightName_1},{pattern:/^[0-9a-zA-z_-]+$/,message:t.light_placeholder_lightName}]}}],btnInTableConfig:[{label:t.light_add,icon:"plus",handleClick:e.handleTableAddBtnClick,type:"primary"},{label:t.light_delete,icon:"delete",handleClick:e.handleTableDeleteBtnClick}]})}},x=Object(d.d)(n=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).selectedRows=void 0,n.refreshConfig=void 0,n.handleTableSelect=function(e){var t=e.selectedRows;n.selectedRows=t.map((function(e){return e.lightId}))},n.handleRefreshPage=function(e){},n.handlDelete=function(e){},n.handleSearch=function(e){},n.handleTableAddBtnClick=function(){var e=n.props,t=e.history,a=e.intlData;t.push(Object(j.d)("lightAdd",{search:"?title=".concat(a.light_addTitle)}))},n.handleTableDeleteBtnClick=function(){n.handlDelete(n.selectedRows)},O.call(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.refreshConfig()}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){var e=this,t=this.props.intlData;this.state.intlData!==t&&this.setState({intlData:t},(function(){e.refreshConfig()}))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.form,t.lightHomeStore),n=a.lightArr,i=a.pageSum,l=void 0===i?5:i,c=t.intlData,o=this.state,h=o.searchItemArr,r=o.columns,d=o.pageIndex,p=o.btnInTableConfig,u=o.pageSize,f=void 0===u?0:u;return Object(S.jsxs)("div",{children:[Object(S.jsx)(s.f,{children:Object(S.jsx)(s.d,{dataSource:h,handleSearch:this.handleSearch})}),Object(S.jsx)(s.f,{title:c.light_listTitle,children:Object(S.jsx)(s.e,{btnInTableConfig:p,handleTableSelect:this.handleTableSelect,pagination:{pageSizeOptions:["5","10","15"],current:d,total:l*f,pageSize:f,showSizeChanger:!0,showQuickJumper:!0,onShowSizeChange:function(t,a){e.setState({pageIndex:1,pageSize:a},(function(){e.handleRefreshPage({pageIndex:1,pageSize:a})}))},onChange:function(t,a){e.setState({pageIndex:t}),e.handleRefreshPage({pageIndex:t,pageSize:a})}},data:Object(g.p)(n)||[],columns:r})})]})}}]),a}(r.Component))||n;t.default=Object(d.c)("lightHomeStore","global")(Object(p.a)("light")(x))},1705:function(e,t,a){}}]);