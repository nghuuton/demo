(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b86a1dc2"],{"04e9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[i("v-card-title",{staticClass:"title font-weight-regular justify-space-between"},[i("span",[t._v(t._s(t.currentTitle))]),i("v-avatar",{staticClass:"subheading white--text",attrs:{color:"primary lighten-2",size:"24"},domProps:{textContent:t._s(t.step)}})],1),i("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[i("v-window-item",{attrs:{value:1}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Email",value:"john@vuetifyjs.com"}}),i("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" This is the email you will use to login to your Vuetify account ")])],1)],1),i("v-window-item",{attrs:{value:2}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Password",type:"password"}}),i("v-text-field",{attrs:{label:"Confirm Password",type:"password"}}),i("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" Please enter a password for your account ")])],1)],1),i("v-window-item",{attrs:{value:3}},[i("div",{staticClass:"pa-4 text-center"},[i("v-img",{staticClass:"mb-4",attrs:{contain:"",height:"128",src:"https://cdn.vuetifyjs.com/images/logos/v.svg"}}),i("h3",{staticClass:"title font-weight-light mb-2"},[t._v("Welcome to Vuetify")]),i("span",{staticClass:"caption grey--text"},[t._v("Thanks for signing up!")])],1)])],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{disabled:1===t.step,text:""},on:{click:function(e){t.step--}}},[t._v(" Back ")]),i("v-spacer"),i("v-btn",{attrs:{disabled:3===t.step,color:"primary",depressed:""},on:{click:function(e){t.step++}}},[t._v(" Next ")])],1)],1)],1)},s=[],r={data:function(){return{step:1}},computed:{currentTitle:function(){switch(this.step){case 1:return"Sign-up";case 2:return"Create a password";default:return"Account created"}}}},a=r,o=i("2877"),c=i("6544"),u=i.n(c),d=i("7496"),l=i("8212"),h=i("8336"),v=i("b0af"),f=i("99d9"),p=i("ce7e"),w=i("adda"),g=i("2fa4"),m=i("8654"),x=(i("99af"),i("7db0"),i("c740"),i("5530")),b=(i("13b3"),i("c3f0")),y=i("afdd"),C=i("9d26"),T=i("604c"),B=T["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:b["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(x["a"])(Object(x["a"])({},T["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(y["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(C["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),I=i("9d65"),_=i("4e82"),$=i("80d2"),V=i("58df"),j=Object(V["a"])(I["a"],Object(_["a"])("windowGroup","v-window-item","v-window")),k=j.extend().extend().extend({name:"v-window-item",directives:{Touch:b["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object($["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object($["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),A=Object(o["a"])(a,n,s,!1,null,null,null);e["default"]=A.exports;u()(A,{VApp:d["a"],VAvatar:l["a"],VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VDivider:p["a"],VImg:w["a"],VSpacer:g["a"],VTextField:m["a"],VWindow:B,VWindowItem:k})},"13b3":function(t,e,i){},"615b":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c}));var n=i("b0af"),s=i("80d2"),r=Object(s["h"])("v-card__actions"),a=Object(s["h"])("v-card__subtitle"),o=Object(s["h"])("v-card__text"),c=Object(s["h"])("v-card__title");n["a"]},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var n=i("5530"),s=(i("615b"),i("10d2")),r=i("297c"),a=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(r["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-b86a1dc2.06f567ff.js.map