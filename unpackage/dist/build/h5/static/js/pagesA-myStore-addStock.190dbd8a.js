(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-myStore-addStock"],{"1ad4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),t.exports=e},2773:function(t,e,a){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function s(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function n(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=s,e.removeStorage=n},"3d99":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-height":"100vh"}},[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),a("div",{staticClass:"header_box",style:{paddingTop:t.halfWidth}},[a("div",{staticClass:"header"},[a("span",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1()}}},[a("img",{attrs:{src:t.back}})]),a("p",[t._v(t._s(t.title))])])]),t.load?a("div",{staticClass:"load"},[a("div",[a("img",{attrs:{src:t.loadGif}}),a("p",[t._v("加载中…")])])]):a("div",{staticClass:"relative",style:{marginTop:t.halfWidth}},[a("div",{staticClass:"attrList table",style:{width:t.tableList}},[a("div",{staticClass:"attrListHead tr"},[t._l(t.attr,(function(e,i){return a("div",{key:i,staticClass:"list2 th"},[t._v(t._s(e.attrName[0]))])})),a("div",{staticClass:"list1 th"},[t._v("剩余库存")]),a("div",{staticClass:"list1 th"},[t._v("库存预警")]),a("div",{staticClass:"list1 th"},[t._v("添加库存")])],2),t._l(t.attrList,(function(e,i){return a("div",{key:i,staticClass:"attrListBody tr"},[e.length>1?a("div",{staticClass:"tr attrListTr1"},[t._l(e,(function(i,s){return a("div",{key:s,staticClass:"list2  aa td"},[a("span",{staticClass:"a1"},[t._v(t._s(e[s].value))])])})),a("div",{staticClass:"list1 td bcd",class:{redColor:e[0].stock<e[0].stockWarn}},[t._v(t._s(e[0].stock))]),a("div",{staticClass:"list1 td"},[t._v(t._s(e[0].stockWarn))]),a("div",{staticClass:"list1 td"},[a("v-uni-input",{attrs:{type:"number"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.checkNum(a,e[0],i)}},model:{value:e[0].addStockNum,callback:function(a){t.$set(e[0],"addStockNum",a)},expression:"item[0].addStockNum"}})],1)],2):a("div",{staticClass:"tr"},[a("div",{staticClass:"list2  td bb"},[a("span",{staticClass:"a2 td"},[t._v(t._s(e.value))])]),a("div",{staticClass:"list1 td asd",class:{redColor:e.stock<e.stockWarn}},[t._v(t._s(e.stock))]),a("div",{staticClass:"list1 td"},[t._v(t._s(e.stockWarn))]),a("div",{staticClass:"list1 td"},[a("v-uni-input",{attrs:{type:"number"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.checkNum(a,e,i)}},model:{value:e.addStockNum,callback:function(a){t.$set(e,"addStockNum",a)},expression:"item.addStockNum"}})],1)])])}))],2),a("div",{staticClass:"subBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._sub()}}},[t._v("保存")])])],1)},n=[]},"46ec":function(t,e,a){"use strict";a.r(e);var i=a("e8be"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"82a0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"display:flex;height:"+t.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[a("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),a("div",{staticClass:"header"},[t.flag&&!t.returnFlag?a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?a("img",{attrs:{src:t.back1}}):a("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():a("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},n=[]},"865e":function(t,e,a){"use strict";var i=a("8902"),s=a.n(i);s.a},8902:function(t,e,a){var i=a("1ad4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("774cd36e",i,!0,{sourceMap:!1,shadowMode:!1})},9653:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("5530")),n=a("2f62"),o=a("2773"),r={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,o.getStorage)("data_height")?(0,o.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,o.getStorage)("data_height")?(0,o.getStorage)("data_height"):this.$store.state.data_height,e=0,a=parseInt(t)+uni.upx2px(88);return e=a&&a>0?a:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,s.default)((0,s.default)({},(0,n.mapMutations)({status:"data_height"})),{},{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=r},b2f3:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".head[data-v-006ed862]{position:fixed;left:0;top:0;background-color:#fff;width:100%;z-index:40}.header_box[data-v-006ed862]{height:%?88?%;position:relative}.header img[data-v-006ed862]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-006ed862]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-006ed862]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-006ed862]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header span[data-v-006ed862]{height:%?88?%;width:%?60?%;display:inline-block;position:absolute}.subBtn[data-v-006ed862]{position:fixed;bottom:0;left:0;width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#000;color:#fff;font-size:%?30?%;z-index:9}.redColor[data-v-006ed862]{color:#ff1818!important}.table[data-v-006ed862]{border-right:0;border-bottom:0;width:100%;min-width:%?750?%}.tr[data-v-006ed862]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.th[data-v-006ed862],.td[data-v-006ed862]{text-align:center;width:100%;margin:0 %?10?%;min-width:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.th[data-v-006ed862]{font-weight:400}.td uni-input[data-v-006ed862]{width:%?110?%;border:1px solid #b8b8b8;text-align:center;color:#020202}.attrList[data-v-006ed862]{font-size:%?28?%;color:#666;width:100%;overflow:scroll}.attrListHead[data-v-006ed862]{list-style:none;height:%?90?%}.attrListHead li[data-v-006ed862]{float:left}.attrListBody[data-v-006ed862]{list-style:none;height:%?90?%}.attrListBody li[data-v-006ed862]{float:left}.attrListBody div[data-v-006ed862],.attrListBody span[data-v-006ed862],.attrListBody uni-input[data-v-006ed862]{color:#020202}.attrListTr1[data-v-006ed862]{height:100%;float:left}",""]),t.exports=e},cba7:function(t,e,a){"use strict";a.r(e);var i=a("9653"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},d041:function(t,e,a){"use strict";var i=a("f5b9"),s=a.n(i);s.a},d07a:function(t,e,a){"use strict";a.r(e);var i=a("3d99"),s=a("46ec");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("d041");var o,r=a("f0c5"),d=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"006ed862",null,!1,i["a"],o);e["default"]=d.exports},e8be:function(t,e,a){"use strict";var i=a("4ea4");a("a15b"),a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("fb77")),n={data:function(){return{back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",addStockNum:"",title:"库存管理",access_id:"",loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/loading.gif",load:!1,shop_id:"",p_id:"",attr:"",attrList:"",fastTap:!0}},onLoad:function(t){var e=this;e.p_id=t.p_id,e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1",(function(){e.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):e.$store.state.access_id,e.shop_id=uni.getStorageSync("shop_id")?uni.getStorageSync("shop_id"):e.$store.state.shop_id,e._axios()}))}))},methods:{changeLoginStatus:function(){var t=this;t.access_id=uni.getStorageSync("access_id"),t._axios()},_back1:function(){var t=!1;if(this.attrList[0].length>1)for(var e=0;e<this.attrList.length;e++)0!=this.attrList[e][0].addStockNum&&(t=!0);else for(var a=0;a<this.attrList.length;a++)0!=this.attrList[a].addStockNum&&(t=!0);var i=this;t?uni.showModal({title:"提示",content:"是否提交修改？",success:function(t){t.confirm?i._sub():uni.navigateBack({delta:1})}}):uni.navigateBack({delta:1})},checkNum:function(t,e,a){Number(t.target.value<0)&&Math.abs(t.target.value)>=e.stock&&(uni.showToast({title:"已超过最大可减少的库存数量",duration:1500,icon:"none"}),e.addStockNum=0)},_sub:function(){if(this.fastTap){this.fastTap=!1;var t=[];if(this.attrList[0].length>1){for(var e=0;e<this.attrList.length;e++)t.push(this.attrList[e][0].addStockNum);console.log(123)}else{for(e=0;e<this.attrList.length;e++)t.push(this.attrList[e].addStockNum);console.log(321)}t=t.join(","),console.log(t);var a=this;uni.request({url:uni.getStorageSync("url"),data:{access_id:a.access_id,shop_id:a.shop_id,module:"app",action:"mch",p_id:a.p_id,m:"up_stock",number:t},success:function(t){a.fastTap=!0,200==t.data.code?(uni.showToast({title:"修改成功",duration:1500,icon:"none"}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({title:t.data.message,duration:1500,icon:"none"}),console.log(t)},error:function(t){a.fastTap=!0}})}},_axios:function(){var t=this;uni.request({url:uni.getStorageSync("url"),data:{access_id:t.access_id,shop_id:t.shop_id,module:"app",action:"mch",p_id:t.p_id,m:"up_stock_page"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){200==e.data.code?(console.log(e),t.attr=e.data.attr,t.attrList=e.data.attrList):uni.showToast({title:e.data.message,icon:"none",duration:1500})},error:function(t){console.log("异常"),console.log(t)}})}},computed:{tableList:function(){if(0==this.attr.length){var t=750;return uni.upx2px(t)+"px"}t=2*this.tableWidth+650;return uni.upx2px(t)+"px"},halfWidth:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,e=parseInt(t),a=2*e;return uni.upx2px(a)+"px"}},components:{heads:s.default}};e.default=n},f5b9:function(t,e,a){var i=a("b2f3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("0aa0f0db",i,!0,{sourceMap:!1,shadowMode:!1})},fb77:function(t,e,a){"use strict";a.r(e);var i=a("82a0"),s=a("cba7");for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a("865e");var o,r=a("f0c5"),d=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"4b3c7e46",null,!1,i["a"],o);e["default"]=d.exports}}]);