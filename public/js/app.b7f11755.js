(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-13d9fe28":"7dfbe9ac","chunk-0c66ddb2":"f2ed0ff4","chunk-b86a1dc2":"a1f5ed8a","chunk-c555890c":"e7140b59","chunk-2d0c76f1":"654a28c6","chunk-2d208849":"69794709"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-13d9fe28":1,"chunk-0c66ddb2":1,"chunk-b86a1dc2":1,"chunk-c555890c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-13d9fe28":"847d6af3","chunk-0c66ddb2":"ae925c1e","chunk-b86a1dc2":"8845eb19","chunk-c555890c":"29189e4d","chunk-2d0c76f1":"31d6cfe0","chunk-2d208849":"31d6cfe0"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],i={name:"App",components:{},data:function(){return{}}},c=i,u=n("2877"),s=Object(u["a"])(c,a,o,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h2",{staticClass:"black--text"},[t._v(" Welcome to Admin Dashboard "),n("span",{staticClass:"font-italic blue--text"},[n("v-icon",{attrs:{color:"blue",large:""}},[t._v("mdi-vuetify")]),t._v("Vuetify")],1)])])},p=[],v={name:"Home",components:{}},m=v,h=n("6544"),g=n.n(h),b=n("132d"),y=Object(u["a"])(m,f,p,!1,null,null,null),_=y.exports;g()(y,{VIcon:b["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar"),n("v-content",{staticClass:"white lighten-2 mx-2 mb-5"},[n("keep-alive",[n("router-view")],1)],1),n("Footer")],1)},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{flat:"",app:""}},[n("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[n("span",{staticClass:"font-weight-light"},[t._v("Vuetify ")]),n("span",[t._v("Dashboard")])]),n("v-spacer"),n("v-btn",{staticClass:"mr-2",attrs:{text:"",route:"",to:"/home"}},[n("v-icon",[t._v("dashboard")])],1),n("v-menu",{attrs:{"nudge-bottom":"5",transition:"slide-y-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{text:""}},r),[n("v-icon",[t._v("account_circle")])],1)]}}])},[n("v-list",{attrs:{flat:"",width:"150",nav:""}},[t._l(t.items,(function(e,r){return n("v-list-item",{key:r,attrs:{"active-class":"blue white--text",route:"",to:e.route}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),n("v-divider"),n("v-list-item",{staticClass:"mt-3",attrs:{route:"",to:"/logout"}},[n("v-list-item-title",[t._v("Log out")]),n("v-icon",{attrs:{right:""}},[t._v("exit_to_app")])],1)],2)],1)],1),n("v-navigation-drawer",{attrs:{app:"",dark:"","mini-variant":t.mini,src:"https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg"},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-title",[n("v-list-item-content",[n("h3",[t._v("HT "),n("span",[t._v("Dashboard")])])])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"px-3 mt-3 mb-3"},[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1),n("v-list-item-title",[t._v("Hello John Done")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[n("v-icon",[t._v("mdi-chevron-left")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:""}},t._l(t.links,(function(e){return n("v-list-item",{key:e.text,attrs:{router:"",to:e.route,"active-class":"blue white--text"}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1)],1)},C=[],T={data:function(){return{drawer:!0,mini:!0,links:[{icon:"dashboard",text:"Dashboard",route:"/home"},{icon:"category",text:"Category",route:"/category"},{icon:"list",text:"Product",route:"/product"},{icon:"money",text:"Variation",route:"/variation"}],items:[{title:"Profile",route:"/profile"},{title:"Setting",route:"/setting"}]}}},E=T,A=n("40dc"),O=n("5bc1"),V=n("8336"),D=n("ce7e"),R=n("adda"),S=n("8860"),j=n("da13"),P=n("8270"),L=n("5d23"),I=n("34c3"),Y=n("e449"),G=n("f774"),N=n("2fa4"),U=n("2a7f"),B=Object(u["a"])(E,x,C,!1,null,null,null),$=B.exports;g()(B,{VAppBar:A["a"],VAppBarNavIcon:O["a"],VBtn:V["a"],VDivider:D["a"],VIcon:b["a"],VImg:R["a"],VList:S["a"],VListItem:j["a"],VListItemAvatar:P["a"],VListItemContent:L["a"],VListItemIcon:I["a"],VListItemTitle:L["b"],VMenu:Y["a"],VNavigationDrawer:G["a"],VSpacer:N["a"],VToolbarTitle:U["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:"",fixed:""}},[n("v-divider"),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",{staticClass:"blue--text"},[n("v-icon",{attrs:{color:"blue"}},[t._v("mdi-vuetify")]),t._v("Vuetify")],1)])],1)},H=[],M={data:function(){return{}}},J=M,q=n("62ad"),K=n("553a"),W=Object(u["a"])(J,F,H,!1,null,null,null),z=W.exports;g()(W,{VCol:q["a"],VDivider:D["a"],VFooter:K["a"],VIcon:b["a"]});var Q={name:"App",components:{Navbar:$,Footer:z},data:function(){return{}}},X=Q,Z=n("7496"),tt=n("a75b"),et=Object(u["a"])(X,k,w,!1,null,null,null),nt=et.exports;g()(et,{VApp:Z["a"],VContent:tt["a"]}),r["a"].use(d["a"]);var rt=[{path:"/",name:"Dashboard",component:nt,children:[{path:"/home",name:"Home",component:_},{path:"/product",name:"Product",component:function(){return n.e("chunk-2d0c76f1").then(n.bind(null,"5132"))}},{path:"/category",name:"Category",component:function(){return Promise.all([n.e("chunk-13d9fe28"),n.e("chunk-0c66ddb2")]).then(n.bind(null,"397a"))}},{path:"/variation",name:"Variation",component:function(){return n.e("chunk-2d208849").then(n.bind(null,"a4aa"))}}]},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-13d9fe28"),n.e("chunk-b86a1dc2")]).then(n.bind(null,"04e9"))}},{path:"/test",name:"Test",component:function(){return Promise.all([n.e("chunk-13d9fe28"),n.e("chunk-c555890c")]).then(n.bind(null,"78c1"))}}],at=new d["a"]({mode:"history",routes:rt}),ot=at,it=n("2f62"),ct=(n("a4d3"),n("e01a"),n("4de4"),n("7db0"),n("b0c0"),n("96cf"),n("1da1")),ut=n("bc3a"),st=n.n(ut),lt=function(){return st.a.create({baseURL:"https://congngheso1.herokuapp.com",withCredentials:!1})},dt={category:[]},ft={getListCategory:function(t){return Object(ct["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,lt().get("/category").then((function(t){n("SET_LIST_CATEGORY",t.data)}));case 3:case"end":return e.stop()}}),e)})))()},updateStatus:function(t,e){return Object(ct["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.commit,!0!==e.status){n.next=6;break}return n.next=4,lt().patch("/category/".concat(e.id),[{propName:"status",value:"false"}]).then((function(){r("UPDATE_STATUS_CATEGORY",e.id)}));case 4:n.next=8;break;case 6:return n.next=8,lt().patch("/category/".concat(e.id),[{propName:"status",value:"true"}]).then((function(){r("UPDATE_STATUS_CATEGORY",e.id)}));case 8:case"end":return n.stop()}}),n)})))()},addCategory:function(t,e){return Object(ct["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.commit,"Active"!==e.status){n.next=7;break}return e.status=!0,n.next=5,lt().post("/category",e).then((function(t){0==t.data.success?(console.log("Category exites"),r("ADD_CATEGORY",t.data.success)):r("ADD_CATEGORY",t.data.category)})).catch((function(t){console.log(t)}));case 5:n.next=10;break;case 7:return e.status=!1,n.next=10,lt().post("/category",e).then((function(t){r("ADD_CATEGORY",t.data.category)})).catch((function(t){console.log(t)}));case 10:case"end":return n.stop()}}),n)})))()},deleteCategory:function(t,e){return Object(ct["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,lt().delete("/category/".concat(e)).then((function(){r("DELETE_CATEGORY",e)}));case 3:case"end":return n.stop()}}),n)})))()},doUpdateCategory:function(t,e){return Object(ct["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,a=e[0].categoryId,n.next=4,lt().patch("/category/".concat(a),e);case 4:r("UPDATE_CATEGORY",e);case 5:case"end":return n.stop()}}),n)})))()}},pt={SET_LIST_CATEGORY:function(t,e){t.category=e||[]},ADD_CATEGORY:function(t,e){e&&t.category.push(e)},UPDATE_STATUS_CATEGORY:function(t,e){var n=t.category.find((function(t){return t.id==e}));!0===n.status?n.status=!1:n.status=!0},DELETE_CATEGORY:function(t,e){var n=t.category.filter((function(t){return t.id!==e}));t.category=n},UPDATE_CATEGORY:function(t,e){var n=t.category.find((function(t){return t.id===e[0].categoryId}));n.name=e[1].value,n.description=e[2].value,n.slug=e[3].value}},vt={state:dt,actions:ft,mutations:pt};r["a"].use(it["a"]);var mt=new it["a"].Store({state:{},mutations:{},actions:{},modules:{category:vt}}),ht=(n("d1e78"),n("f309"));r["a"].use(ht["a"]);var gt=new ht["a"]({icons:{iconfont:"md"}});r["a"].config.productionTip=!1,new r["a"]({router:ot,store:mt,vuetify:gt,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.b7f11755.js.map