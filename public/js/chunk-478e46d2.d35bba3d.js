(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-478e46d2"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),r=(a("4b85"),a("2b0e")),s=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(a,n){return a[t+Object(o["C"])(n)]=e(),a}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:m}})),g={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=b[t];if(null!=a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var x=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:m}},v),render:function(t,e){var a=e.props,i=e.data,r=e.children,o="";for(var c in a)o+=String(a[c]);var l=x.get(o);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var n=a[t],i=y(e,t,n);i&&l.push(i)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),x.set(o,l)}(),t(a.tag,Object(s["a"])(i,{staticClass:"row",class:l}),r)}})},1681:function(t,e,a){},"23a7":function(t,e,a){"use strict";a("99af"),a("a623"),a("4160"),a("caad"),a("d81d"),a("13d5"),a("fb6a"),a("a434"),a("b0c0"),a("a9e3"),a("159b");var n=a("2909"),i=a("5530"),r=a("53ca"),s=(a("5803"),a("2677")),o=a("cc20"),c=a("80d2"),l=a("d9bd");e["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(c["D"])(t).every((function(t){return null!=t&&"object"===Object(r["a"])(t)}))}}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var a=e.size,n=void 0===a?0:a;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(c["t"])(e,1024===this.base))},internalArrayValue:function(){return Object(c["D"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var a=e.name,n=void 0===a?"":a,i=e.size,r=void 0===i?0:i,s=t.truncateText(n);return t.showSize?"".concat(s," (").concat(Object(c["t"])(r,1024===t.base),")"):s})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(l["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(c["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,a){return t.$createElement(o["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(a,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:a,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=s["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(i["a"])(Object(i["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(n["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,a){"use strict";var n=a("8654");e["a"]=n["a"]},5132:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"subheading"},[t._v("Product")]),a("v-snackbar",{attrs:{timeout:t.action?1e5:3e3,top:"",right:"",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v(t._s(t.text))]),t.action?a("v-btn",{attrs:{text:""},on:{click:function(e){return t.doDelete(t.action)}}},[t._v("Yes")]):t._e(),(t.action?t.textBtn="No":t.textBtn="Close")?a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v(t._s(t.textBtn))]):t._e()],1),a("NavbarProduct",{on:{Notify:t.notifi}}),a("v-container",{staticClass:"my-5"},[a("DatatableProduct",{attrs:{items:t.products},on:{Notify:t.notifi}})],1)],1)},i=[],r=a("5530"),s=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"my-5"},[a("v-layout",{staticClass:"lighten-2",attrs:{row:"",wrap:"","align-center":"","justify-space-around":"",flat:""}},[a("span",{staticClass:"mr-3 "},[a("v-icon",[t._v("dashboard")]),t._v(" Toolbar")],1),a("v-flex",{attrs:{md2:""}},[a("v-btn",{attrs:{color:"success",small:""},on:{click:function(e){return e.stopPropagation(),t.loadDialog(e)}}},[a("v-icon",[t._v("add")]),t._v(" Add New")],1),a("v-dialog",{attrs:{"max-width":"700px",persistent:"",transition:"fab-transition","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("h2",[t._v("Add a New Product")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-2",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.doAddProduct(e)}}},[a("v-text-field",{attrs:{outlined:"",label:"Name",rules:t.nameRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-textarea",{attrs:{outlined:"",label:"Description",rules:t.descriptionRules},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-text-field",{attrs:{outlined:"",label:"Quantity",rules:t.numberRules},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),a("v-select",{attrs:{outlined:"",items:t.categoryItems,rules:[function(t){return!!t||"Category is required"}],label:"Category","retain-focus":!1},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}}),a("v-switch",{attrs:{label:"Status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}}),t._l(t.imageUrl,(function(e,n){return a("v-card",{key:n,staticClass:"d-inline-block mx-auto mr-2 mb-3",attrs:{color:"grey lighten-3"}},[a("v-btn",{attrs:{text:"",small:""},on:{click:function(a){return t.deleteImage(e)}}},[a("v-icon",{attrs:{small:"",color:"red"}},[t._v("delete")])],1),a("v-container",[a("v-row",{attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{attrs:{height:"200",width:"200",src:e}})],1)],1)],1)],1)})),a("v-file-input",{attrs:{outlined:"",label:"Image",accept:"image/*",color:"deep-purple accent-4",placeholder:"Pick an image","prepend-icon":"mdi-camera",counter:"",small:"",multiple:"",rules:t.imageRules,"show-size":1e3},on:{change:t.onPickFile},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.index,i=e.text;return[n<4?a("v-chip",{attrs:{color:"deep-purple accent-4",dark:"",label:"",small:""}},[t._v(" "+t._s(i)+" ")]):4===n?a("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.image.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),a("v-layout",[a("v-flex",{attrs:{md12:"",xs12:"",right:""}},[a("v-btn",{attrs:{color:"success",type:"submit",loading:t.loading}},[t._v("Add")]),a("v-btn",{staticClass:"ml-2",attrs:{color:"error"},on:{click:function(e){return e.preventDefault(),t.close()}}},[t._v("Done")])],1)],1)],2)],1)],1)],1)],1),a("v-flex",{attrs:{md2:""}},[a("v-btn",{attrs:{color:"info",small:""}},[a("v-icon",[t._v("vertical_align_top")]),t._v(" Export Exel")],1)],1)],1)],1)},c=[],l=(a("a4d3"),a("e01a"),a("4160"),a("a434"),a("b0c0"),a("159b"),a("b85c")),u=(a("96cf"),a("1da1")),d={data:function(){return{name:"",description:"",quantity:"",image:[],categoryId:"",status:!1,dialog:!1,categoryItems:[],imageUrl:[],loading:!1,numberRules:[function(t){return!isNaN(parseFloat(t))&&t>=0&&t<=999||"Number has to be between 0 and 999"},function(t){return!!t||"Quantity is required"},function(t){return t&&t.length<=10||"Quantity must be less than 10 characters"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=25||"Name must be less than 10 characters"}],descriptionRules:[function(t){return!!t||"Description is required"},function(t){return t&&t.length<=100||"Description must be less than 10 characters"}],imageRules:[function(t){return t&&t.length>0||"File is required"}]}},mounted:function(){this.getListCategory()},computed:Object(r["a"])(Object(r["a"])({},Object(s["d"])("product",["products"])),Object(s["c"])("category",["getCategory"])),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["b"])("product",["addProduct"])),Object(s["b"])("category",["getListCategory"])),{},{onPickFile:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.image,n=t.imageUrl,a.length>0?a.forEach((function(t){var e=new FileReader;e.readAsDataURL(t),e.addEventListener("load",(function(){n.push(e.result)}))})):t.imageUrl=[];case 3:case"end":return e.stop()}}),e)})))()},loadDialog:function(){this.dialog=!0,this.status=!1,this.categoryItems=this.getCategory},close:function(){this.dialog=!1,this.$refs.form.reset()},doAddProduct:function(){var t=this;if(this.$refs.form.validate()){var e=new FormData,a=this.image;if(a.length>0){var n,i=Object(l["a"])(a);try{for(i.s();!(n=i.n()).done;){var r=n.value;e.append("image",r)}}catch(s){i.e(s)}finally{i.f()}}e.append("name",this.name),e.append("description",this.description),e.append("quantity",this.quantity),e.append("status",this.status),e.append("categoryId",this.categoryId),this.addProduct(e).then((function(e){var a={color:"success",text:e};t.$emit("Notify",a),t.loading=!0,t.$refs.form.reset(),t.dialog=!1})).catch((function(e){var a={color:"error",text:e};t.$emit("Notify",a)}))}this.loading=!1},deleteImage:function(t){var e,a="",n=Object(l["a"])(this.imageUrl);try{for(n.s();!(e=n.n()).done;){var i=e.value;i===t&&(a=i)}}catch(r){n.e(r)}finally{n.f()}this.image.splice(a,1),this.imageUrl.splice(a,1)}})},h=d,f=a("2877"),p=a("6544"),m=a.n(p),v=a("8336"),g=a("b0af"),b=a("99d9"),y=a("cc20"),x=a("62ad"),w=a("a523"),k=a("169a"),C=a("23a7"),j=a("0e8f"),V=a("4bd4"),_=a("132d"),S=a("adda"),I=a("a722"),O=a("0fd9"),N=a("b974"),D=a("b73d"),P=a("8654"),$=a("a844"),R=Object(f["a"])(h,o,c,!1,null,null,null),U=R.exports;m()(R,{VBtn:v["a"],VCard:g["a"],VCardText:b["b"],VCardTitle:b["c"],VChip:y["a"],VCol:x["a"],VContainer:w["a"],VDialog:k["a"],VFileInput:C["a"],VFlex:j["a"],VForm:V["a"],VIcon:_["a"],VImg:S["a"],VLayout:I["a"],VRow:O["a"],VSelect:N["a"],VSwitch:D["a"],VTextField:P["a"],VTextarea:$["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("nav",[a("v-navigation-drawer",{attrs:{right:"",app:"",width:"330"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",{staticClass:" mb-2 mt-2 ml-2"},[a("v-list-item-title",[a("h3",{staticClass:"font-weight-regular"},[t._v("UPDATE ITEM")])]),a("v-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v("clear")])],1),a("v-divider"),a("v-list-item",[a("v-card-text",[t.image.length<=0?a("v-container",{staticClass:"fill-height",attrs:{fluid:"","justify-center":""}},t._l(t.imageUrl,(function(e,n){return a("v-card",{key:n,attrs:{outlined:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"auto"}},[t.imageUrl?a("v-img",{attrs:{height:"150",width:"400",src:"https://congngheso1.herokuapp.com"+e.slice(6)}}):t._e()],1)],1)],1)],1)})),1):a("v-container",{staticClass:"fill-height",attrs:{fluid:"","justify-center":""}},t._l(t.imageUrl,(function(t,e){return a("v-card",{key:e,attrs:{outlined:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{attrs:{height:"150",width:"400",src:t}})],1)],1)],1)],1)})),1),a("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>0,expression:"imageUrl.length > 0"}],staticClass:"mb-1"},[a("v-row",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-btn",{staticClass:"white--text",attrs:{color:"purple",text:""}},[t._v("Upload Image")])],1),a("v-flex",{attrs:{xs6:"",md6:""}},[a("v-btn",{staticClass:"red--text",attrs:{text:""},on:{click:t.removeImage}},[t._v("Remove Image")])],1)],1)],1),a("v-form",{ref:"form",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.doUpdateProduct(e)}}},[a("v-text-field",{attrs:{outlined:"",label:"Name",rules:t.nameRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-textarea",{attrs:{outlined:"",label:"Description",rules:t.descriptionRules,rows:"4"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-text-field",{attrs:{outlined:"",label:"Quantity",rules:t.numberRules},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),a("v-select",{attrs:{outlined:"",items:t.categoryItems,rules:[function(t){return!!t||"Category is required"}],label:"Category","retain-focus":!1},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}}),a("v-file-input",{directives:[{name:"show",rawName:"v-show",value:0===t.imageUrl.length,expression:"imageUrl.length === 0"}],attrs:{outlined:"",label:"Image",accept:"image/*",color:"deep-purple accent-4",placeholder:"Pick an image","prepend-icon":"mdi-camera",counter:"",small:"",multiple:"",rules:t.imageRules,"show-size":1e3},on:{change:t.onPickFile},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.index,i=e.text;return[n<4?a("v-chip",{attrs:{color:"deep-purple accent-4",dark:"",label:"",small:""}},[t._v(" "+t._s(i)+" ")]):4===n?a("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.image.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),a("v-footer",[a("v-flex",{attrs:{md12:"",xs12:"",right:""}},[a("v-btn",{attrs:{color:"info",type:"submit",loading:t.loading}},[t._v("SAVE")]),a("v-btn",{staticClass:"ml-2",attrs:{outlined:"",color:"error"},on:{click:function(e){e.preventDefault(),t.drawer=!t.drawer}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)],1),a("v-layout",{attrs:{wrap:"",row:""}},[a("v-flex",{attrs:{xs12:"",md10:"","offset-md1":""}},[a("v-card",[a("v-card-title",[t._v(" Product List "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"item.imagePath",fn:function(t){var e=t.item;return[a("img",{directives:[{name:"show",rawName:"v-show",value:e.imagePath,expression:"item.imagePath"}],attrs:{src:"https://congngheso1.herokuapp.com"+e.imagePath[0].slice(6),width:"150px"}})]}},{key:"item.status",fn:function(e){var n=e.item;return[1==n.status?a("v-chip",{attrs:{color:"info",small:""},on:{click:function(e){return t.doUpdateStatus(n)}}},[t._v("Active")]):a("v-chip",{attrs:{color:"red",small:""},on:{click:function(e){return t.doUpdateStatus(n)}}},[t._v("Unactive")])]}},{key:"item.id",fn:function(e){var n=e.item;return[a("v-flex",{attrs:{xs12:"","mb-2":""}},[a("v-btn",{staticClass:"red mr-1",attrs:{small:""},on:{click:function(e){return t.doDelete(n.id)}}},[a("v-icon",{attrs:{small:""}},[t._v("delete")]),t._v("Delete ")],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"primary mr-1",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.update(n)}}},[a("v-icon",{attrs:{small:""}},[t._v("system_update_alt")]),t._v("Update ")],1)],1)]}}])})],1)],1)],1)],1)},T=[],q={data:function(){return{drawer:!1,search:"",headers:[{text:"NAME",align:"start",sortable:!0,value:"name"},{text:"IMAGE",value:"imagePath",sortable:!1},{text:"DESCRIPTION",value:"description",sortable:!1},{text:"QUANTITY",value:"quantity"},{text:"STATUS",value:"status",sortable:!1},{text:"ACTION",value:"id",sortable:!1}],id:"",name:"",description:"",quantity:"",image:[],categoryId:"",status:!1,dialog:!1,categoryItems:[],imageUrl:[],loading:!1,numberRules:[function(t){return!isNaN(parseFloat(t))&&t>=0&&t<=999||"Number has to be between 0 and 999"},function(t){return!!t||"Quantity is required"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=25||"Name must be less than 10 characters"}],descriptionRules:[function(t){return!!t||"Description is required"},function(t){return t&&t.length<=100||"Description must be less than 10 characters"}],imageRules:[function(t){return t&&t.length>0||"File is required"}]}},props:["items"],mounted:function(){this.getListCategory()},computed:Object(r["a"])(Object(r["a"])({},Object(s["c"])("category",["getCategory"])),Object(s["d"])("product",["products"])),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["b"])("category",["getListCategory"])),Object(s["b"])("product",["updateStatus","updateProduct"])),{},{doUpdateStatus:function(t){this.updateStatus(t);var e={color:"success",text:"".concat(t.name," Update Status Suceess")};this.$emit("Notify",e)},doDelete:function(t){var e={color:"error",text:"Are you sure ?",id:t};this.$emit("Notify",e)},update:function(t){this.id=t.id,this.drawer=!0,this.image=[],this.categoryItems=this.getCategory,this.imageUrl=t.imagePath,this.name=t.name,this.description=t.description,this.quantity=t.quantity,this.categoryId=t.category},onPickFile:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.image,n=t.imageUrl,a.length>0?a.forEach((function(t){var e=new FileReader;e.readAsDataURL(t),e.addEventListener("load",(function(){n.push(e.result)}))})):t.imageUrl=[];case 3:case"end":return e.stop()}}),e)})))()},removeImage:function(){this.imageUrl=[],this.image=[]},doUpdateProduct:function(){var t=this,e=new FormData,a={id:this.id,name:this.name,description:this.description,quantity:this.quantity,category:this.categoryId},n=this.image;if(n.length>0){var i,r=Object(l["a"])(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;e.append("image",s)}}catch(u){r.e(u)}finally{r.f()}}for(var o in a)e.append(o,a[o]);var c={color:"",text:""};this.updateProduct(e).then((function(e){c.color="success",c.text=e,t.$emit("Notify",c),t.drawer=!1})).catch((function(e){c.color="error",c.text=e,t.$emit("Notify",c)}))}})},z=q,A=a("8fea"),E=a("ce7e"),L=a("553a"),B=a("da13"),H=a("5d23"),M=a("f774"),G=a("2fa4"),Q=Object(f["a"])(z,F,T,!1,null,null,null),J=Q.exports;m()(Q,{VBtn:v["a"],VCard:g["a"],VCardText:b["b"],VCardTitle:b["c"],VChip:y["a"],VCol:x["a"],VContainer:w["a"],VDataTable:A["a"],VDivider:E["a"],VFileInput:C["a"],VFlex:j["a"],VFooter:L["a"],VForm:V["a"],VIcon:_["a"],VImg:S["a"],VLayout:I["a"],VListItem:B["a"],VListItemTitle:H["b"],VNavigationDrawer:M["a"],VRow:O["a"],VSelect:N["a"],VSpacer:G["a"],VTextField:P["a"],VTextarea:$["a"]});var K={data:function(){return{snackbar:!1,color:"",text:"",action:"",textBtn:""}},components:{NavbarProduct:U,DatatableProduct:J},created:function(){this.getProducts()},computed:Object(r["a"])({},Object(s["d"])("product",["products"])),methods:Object(r["a"])(Object(r["a"])({},Object(s["b"])("product",["getProducts","deleteProduct"])),{},{notifi:function(t){this.snackbar=!0,this.text=t.text,this.color=t.color,this.action=t.id},doDelete:function(t){this.deleteProduct(t),this.snackbar=!1}})},Y=K,W=a("2db4"),X=Object(f["a"])(Y,n,i,!1,null,null,null);e["default"]=X.exports;m()(X,{VBtn:v["a"],VContainer:w["a"],VSnackbar:W["a"]})},5803:function(t,e,a){},a844:function(t,e,a){"use strict";a("a9e3");var n=a("5530"),i=(a("1681"),a("8654")),r=a("58df"),s=Object(r["a"])(i["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-478e46d2.d35bba3d.js.map