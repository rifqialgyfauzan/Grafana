(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"5gaU":function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"h",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return x}));var r=n("Obii"),o=n("t8hP"),a=n("NXk7"),i=n("3SGO"),u=n("v2PB"),c=n("Xmxp"),s=n("BAXh");function l(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){l(a,r,o,i,u,"next",e)}function u(e){l(a,r,o,i,u,"throw",e)}i(void 0)}))}}function p(e){return function(){var t=f(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.b.getFolderByUid(e);case 2:r=t.sent,n(Object(s.b)(r)),n(Object(i.d)(Object(u.a)(r)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function d(e){return function(){var t=f(regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.b.put("/api/folders/".concat(e.uid),{title:e.title,version:e.version});case 2:o=t.sent,c.b.emit(r.AppEvents.alertSuccess,["Folder saved"]),n(Object(i.c)({path:"".concat(o.url,"/settings")}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function m(e){return function(){var t=f(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.b.deleteFolder(e,!0);case 2:n(Object(i.c)({path:"dashboards"}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function v(e){return function(){var t=f(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.b.get("/api/folders/".concat(e,"/permissions"));case 2:r=t.sent,n(Object(s.c)(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function b(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function h(e,t){return function(){var n=f(regeneratorRuntime.mark((function n(r,o){var i,u,c,s,l,f,p,d,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=o().folder,u=[],c=!0,s=!1,l=void 0,n.prev=5,f=i.permissions[Symbol.iterator]();case 7:if(c=(p=f.next()).done){n.next=17;break}if(!(d=p.value).inherited){n.next=11;break}return n.abrupt("continue",14);case 11:m=b(d),e===d&&(m.permission=t),u.push(m);case 14:c=!0,n.next=7;break;case 17:n.next=23;break;case 19:n.prev=19,n.t0=n.catch(5),s=!0,l=n.t0;case 23:n.prev=23,n.prev=24,c||null==f.return||f.return();case 26:if(n.prev=26,!s){n.next=29;break}throw l;case 29:return n.finish(26);case 30:return n.finish(23);case 31:return n.next=33,a.b.post("/api/folders/".concat(i.uid,"/permissions"),{items:u});case 33:return n.next=35,r(v(i.uid));case 35:case"end":return n.stop()}}),n,null,[[5,19,23,31],[24,,26,30]])})));return function(e,t){return n.apply(this,arguments)}}()}function g(e){return function(){var t=f(regeneratorRuntime.mark((function t(n,r){var o,i,u,c,s,l,f,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=r().folder,i=[],u=!0,c=!1,s=void 0,t.prev=5,l=o.permissions[Symbol.iterator]();case 7:if(u=(f=l.next()).done){t.next=15;break}if(!(p=f.value).inherited&&p!==e){t.next=11;break}return t.abrupt("continue",12);case 11:i.push(b(p));case 12:u=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),c=!0,s=t.t0;case 21:t.prev=21,t.prev=22,u||null==l.return||l.return();case 24:if(t.prev=24,!c){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:return t.next=31,a.b.post("/api/folders/".concat(o.uid,"/permissions"),{items:i});case 31:return t.next=33,n(v(o.uid));case 33:case"end":return t.stop()}}),t,null,[[5,17,21,29],[22,,24,28]])})));return function(e,n){return t.apply(this,arguments)}}()}function y(e){return function(){var t=f(regeneratorRuntime.mark((function t(n,r){var o,i,u,c,s,l,f,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=r().folder,i=[],u=!0,c=!1,s=void 0,t.prev=5,l=o.permissions[Symbol.iterator]();case 7:if(u=(f=l.next()).done){t.next=15;break}if(!(p=f.value).inherited){t.next=11;break}return t.abrupt("continue",12);case 11:i.push(b(p));case 12:u=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),c=!0,s=t.t0;case 21:t.prev=21,t.prev=22,u||null==l.return||l.return();case 24:if(t.prev=24,!c){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:return i.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),t.next=32,a.b.post("/api/folders/".concat(o.uid,"/permissions"),{items:i});case 32:return t.next=34,n(v(o.uid));case 34:case"end":return t.stop()}}),t,null,[[5,17,21,29],[22,,24,28]])})));return function(e,n){return t.apply(this,arguments)}}()}function x(e){return function(){var t=f(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.getBackendSrv)().post("/api/folders",{title:e});case 2:a=t.sent,c.b.emit(r.AppEvents.alertSuccess,["Folder Created","OK"]),n(Object(i.c)({path:r.locationUtil.stripBaseFromUrl(a.url)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},kzsD:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"FolderSettingsPage",(function(){return k}));var r=n("q1tI"),o=n.n(r),a=n("0cfB"),i=n("/MKj"),u=n("kDLi"),c=n("ZGyg"),s=n("Xmxp"),l=n("lzJ5"),f=n("GQ3c"),p=n("5gaU"),d=n("v2PB"),m=n("BAXh");function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=u.LegacyForms.Input,k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,y(t).call(this,e))).onTitleChange=function(e){n.props.setFolderTitle(e.target.value)},n.onSave=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),n.setState({isLoading:!0}),e.next=5,n.props.saveFolder(n.props.folder);case 5:n.setState({isLoading:!1});case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){b(a,r,o,i,u,"next",e)}function u(e){b(a,r,o,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),n.onDelete=function(e){e.stopPropagation(),e.preventDefault(),s.b.emit(f.CoreEvents.showConfirmModal,{title:"Delete",text:"Do you want to delete this folder and all its dashboards?",icon:"trash-alt",yesText:"Delete",onConfirm:function(){n.props.deleteFolder(n.props.folder.uid)}})},n.state={isLoading:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.getFolderByUid(this.props.folderUid)}},{key:"render",value:function(){var e=this.props,t=e.navModel,n=e.folder;return o.a.createElement(c.a,{navModel:t},o.a.createElement(c.a.Contents,{isLoading:this.state.isLoading},o.a.createElement("h3",{className:"page-sub-heading"},"Folder Settings"),o.a.createElement("div",{className:"section gf-form-group"},o.a.createElement("form",{name:"folderSettingsForm",onSubmit:this.onSave},o.a.createElement("div",{className:"gf-form"},o.a.createElement("label",{className:"gf-form-label width-7"},"Name"),o.a.createElement(w,{type:"text",className:"gf-form-input width-30",value:n.title,onChange:this.onTitleChange})),o.a.createElement("div",{className:"gf-form-button-row"},o.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!n.canSave||!n.hasChanged},"Save"),o.a.createElement("button",{className:"btn btn-danger",onClick:this.onDelete,disabled:!n.canSave},"Delete"))))))}}])&&h(n.prototype,r),a&&h(n,a),t}(r.PureComponent),S={getFolderByUid:p.d,saveFolder:p.g,setFolderTitle:m.d,deleteFolder:p.c};t.default=Object(a.hot)(e)(Object(i.connect)((function(e){var t=e.location.routeParams.uid;return{navModel:Object(l.a)(e.navIndex,"folder-settings-".concat(t),Object(d.b)(2)),folderUid:t,folder:e.folder}}),S)(k))}.call(this,n("3UD+")(e))},v2PB:function(e,t,n){"use strict";function r(e){return{icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards & permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:"folder-dashboards-".concat(e.uid),text:"Dashboards",url:e.url},{active:!1,icon:"lock",id:"folder-permissions-".concat(e.uid),text:"Permissions",url:"".concat(e.url,"/permissions")},{active:!1,icon:"cog",id:"folder-settings-".concat(e.uid),text:"Settings",url:"".concat(e.url,"/settings")}]}}function o(e){var t=r({id:1,uid:"loading",title:"Loading",url:"url",canSave:!1,canEdit:!1,canAdmin:!1,version:0});return t.children[e].active=!0,{main:t,node:t.children[e]}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))}}]);
//# sourceMappingURL=FolderSettingsPage.5e3a92e1d96185a124d4.js.map