(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-search-search"],{"0546":function(t,e,a){"use strict";a.r(e);var i=a("10af"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"0f6e":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("v-uni-view",{staticClass:"p-search-contaienr p-flex p-align-center p-justify-between"},[a("v-uni-view",{staticClass:"p-search-form"},[a("v-uni-image",{attrs:{src:t.serchimg,alt:""}}),a("v-uni-input",{attrs:{type:"text",placeholder:t.placeholder1,id:"input","placeholder-style":t.placeStyle,name:"sourch"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t._placeholder()},focus:function(e){arguments[0]=e=t.$handleEvent(e),t._placeholder1()}},model:{value:t.searchtxt,callback:function(e){t.searchtxt="string"===typeof e?e.trim():e},expression:"searchtxt"}})],1),a("v-uni-view",{staticClass:"p-search-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._search.apply(void 0,arguments)}}},[t._v("搜索")])],1),a("div",{staticClass:"topTabBar"},[a("div",{staticClass:"tab-pane"},[a("div",{class:{active:!t.topTabBar},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.topTabBar=0}}},[t._v("商品")]),t.topTabBar?t._e():a("v-uni-view",{staticClass:"xian_d"})],1),a("div",{staticClass:"tab-pane"},[a("div",{class:{active:!!t.topTabBar},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.topTabBar=1}}},[t._v("店铺")])])]),a("div",{staticClass:"search"},[t.cancel?a("div",[t.is_open?a("div",{staticClass:"search-hot"},[a("div",{staticClass:"hot"},[a("span",[t._v("热门搜索")]),t.openHotWord?a("img",{staticClass:"hot_img",attrs:{src:t.show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hotsearchStatu()}}}):a("img",{staticClass:"hot_img",attrs:{src:t.hide},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hotsearchStatu()}}})]),t.openHotWord?a("ul",{staticClass:"search-ul hotSearch1"},t._l(t.host,(function(e,i){return a("li",{key:i,on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.hotsearch(e)}}},[t._v(t._s(e))])})),0):t._e()]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.storag,expression:"storag"}],staticClass:"search-hot"},[a("div",{staticClass:"hot"},[a("span",[t._v("历史搜索")]),a("img",{staticClass:"hot_img1",attrs:{src:t.readimg},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearhis()}}})]),a("ul",{ref:"record",staticClass:"search-ul"},t._l(t.storag,(function(e,i){return a("li",{key:i,on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t._record(e)}}},[t._v(t._s(e))])})),0)])]):t._e(),t.cancel?t._e():a("ul",{staticClass:"keyword home_search"},t._l(t.prompt,(function(e,i){return a("li",{key:i,on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t._record(e)}}},[a("p",[t._v(t._s(e))])])})),0)])],1)},o=[]},"10af":function(t,e,a){"use strict";var i=a("4ea4");a("c975"),a("a434"),a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),o=i(a("fb77")),r=a("2f62"),s=(a("2773"),{data:function(){return{title:"搜索商品",openHotText:"关闭热门搜索",openHotWord:!0,back_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",serchimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/searchh.png",show:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/show.png",hide:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/hide.png",readimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/deletes2x.png",cancel:!1,placeholder:"请输入商品名称",placeholder1:"",host:"",searchtxt:"",storag:"",prompt:"",searchgoods:"",success:"",topTabBar:0,is_open:!1,placeStyle:"color:#999999;font-size: 26upx"}},onShow:function(){this.storag=uni.getStorageSync("history"),this.openHotWord=uni.getStorageSync("hotStatu"),this.placeholder1=this.placeholder,this.openHotWord?this.openHotText="关闭热门搜索":this.openHotText="开启热门搜索",this._axios(),this.cancel=!0},components:{heads:o.default},methods:(0,n.default)({_placeholder:function(){this.placeholder1=this.placeholder},_placeholder1:function(){this.placeholder1=""},hotsearchStatu:function(){this.openHotWord?this.openHotWord=!1:this.openHotWord=!0;var t=this.openHotWord;uni.setStorage({key:"hotStatu",data:t})},_axios:function(){var t=this,e={module:"app",action:"search",app:"hot_search",type:this.topTabBar};uni.request({data:e,url:uni.getStorageSync("url"),success:function(e){200==e.data.code?(t.host=e.data.data,1==e.data.is_open?t.is_open=!0:t.is_open=!1):uni.showToast({title:e.data.message,duration:1500,icon:"none"})},error:function(t){console.log(t)}})},_search:function(){var t=this.storag;if(""!=this.searchtxt){var e=this;if(t.length>0)if(t.length>4)if(e.in_array(e.searchtxt,t)){var a=t.indexOf(e.searchtxt);t.splice(a,1),t.unshift(e.searchtxt)}else t.unshift(e.searchtxt),t.pop();else if(e.in_array(e.searchtxt,t)){a=t.indexOf(e.searchtxt);t.splice(a,1),t.unshift(e.searchtxt)}else t.unshift(e.searchtxt);else t=[],t.unshift(e.searchtxt);uni.setStorageSync("history",t),e.type(1),e.cancel=!1,uni.navigateTo({url:"searchResult?searchtxt="+e.searchtxt+"&topTabBar="+e.topTabBar}),e.searchtxt=""}else uni.showToast({title:"请输入搜索的名称",duration:1500,icon:"none"})},in_array:function(t,e){for(var a=0;a<e.length;a++){var i=e[a].toString();if(i==t)return!0}return!1},clearhis:function(){var t=this;uni.removeStorage({key:"history",success:function(){t.storag="",uni.showToast({title:"记录清除成功",duration:1500,icon:"none"})}})},hotsearch:function(t){this.searchtxt=t,this._search()},_record:function(t){this.searchtxt=t,this._search()}},(0,r.mapMutations)({type:"SET_TYPE"})),watch:{topTabBar:function(t){this.title=t?"搜索店铺":"搜索商品"},searchtxt:function(t,e){this.cancel=""==t;var a=this,i={module:"app",action:"search",app:"input_search",type:a.topTabBar};i.keyword=this.searchtxt,""!==this.searchtxt&&uni.request({data:i,url:uni.getStorageSync("url"),success:function(t){var e=t.data;0!=e.data.length?(a.prompt=e.data,console.log(a.prompt+"11111")):a.prompt=!1},error:function(t){console.log(t)}})}}});e.default=s},"118c":function(t,e,a){"use strict";a.r(e);var i=a("0f6e"),n=a("0546");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("c25c");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"50a8baea",null,!1,i["a"],r);e["default"]=c.exports},"1ad4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),t.exports=e},2773:function(t,e,a){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function n(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function o(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=n,e.removeStorage=o},"4f06b":function(t,e,a){var i=a("931a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("9bdc2854",i,!0,{sourceMap:!1,shadowMode:!1})},"82a0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"display:flex;height:"+t.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[a("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),a("div",{staticClass:"header"},[t.flag&&!t.returnFlag?a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?a("img",{attrs:{src:t.back1}}):a("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():a("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},o=[]},"865e":function(t,e,a){"use strict";var i=a("8902"),n=a.n(i);n.a},8902:function(t,e,a){var i=a("1ad4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("774cd36e",i,!0,{sourceMap:!1,shadowMode:!1})},"931a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-view[data-v-50a8baea],\nuni-scroll-view[data-v-50a8baea],\nuni-swiper[data-v-50a8baea],\nuni-button[data-v-50a8baea],\nuni-input[data-v-50a8baea],\nuni-textarea[data-v-50a8baea],\nuni-label[data-v-50a8baea],\nuni-navigator[data-v-50a8baea],\nuni-image[data-v-50a8baea]{box-sizing:border-box}.p-flex[data-v-50a8baea]{display:-webkit-box;display:-webkit-flex;display:flex}.p-flex-sub[data-v-50a8baea]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.p-flex-direction[data-v-50a8baea]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.p-flex-wrap[data-v-50a8baea]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.p-align-start[data-v-50a8baea]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.p-align-end[data-v-50a8baea]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.p-align-center[data-v-50a8baea]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.p-align-stretch[data-v-50a8baea]{-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.p-self-start[data-v-50a8baea]{-webkit-align-self:flex-start;align-self:flex-start}.p-self-center[data-v-50a8baea]{-webkit-align-self:flex-center;align-self:flex-center}.p-self-end[data-v-50a8baea]{-webkit-align-self:flex-end;align-self:flex-end}.p-self-stretch[data-v-50a8baea]{-webkit-align-self:stretch;align-self:stretch}.p-align-stretch[data-v-50a8baea]{-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.p-justify-start[data-v-50a8baea]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.p-justify-end[data-v-50a8baea]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.p-justify-center[data-v-50a8baea]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.p-justify-between[data-v-50a8baea]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.p-justify-around[data-v-50a8baea]{-webkit-justify-content:space-around;justify-content:space-around}.p-text-black[data-v-50a8baea]{color:#333}.p-text-cut[data-v-50a8baea]{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.p-response[data-v-50a8baea]{width:100%}.home_input[data-v-50a8baea]{width:%?608?%}.home_input uni-input[data-v-50a8baea]{font-size:%?26?%!important}.search_btn[data-v-50a8baea]{font-size:%?28?%}.hot_img[data-v-50a8baea]{width:%?34?%;height:%?26?%}.hot_img1[data-v-50a8baea]{width:%?32?%;height:%?32?%}.hotSearch1 li[data-v-50a8baea]{overflow:hidden;text-overflow:ellipsis;background-color:#fff!important;border:1px solid #eee}.home-home img[data-v-50a8baea]{width:%?24?%;height:%?36?%;vertical-align:middle;padding:%?20?%}.home-mesage[data-v-50a8baea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.home-mesage span[data-v-50a8baea]{font-size:%?30?%;color:#000}\n/*   点击搜索框跳转的初始模块样式        */.search[data-v-50a8baea]{color:#020202;height:100%}.hot[data-v-50a8baea]{padding:%?20?% %?30?%;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.hot p[data-v-50a8baea]{float:right;font-size:%?24?%}.search ul[data-v-50a8baea]{margin:%?0?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap}.search ul li[data-v-50a8baea]{background-color:#eee;border-radius:%?45?%;font-size:%?26?%;text-align:center;margin:%?10?% %?20?% %?10?% 0;padding:%?10?% %?30?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#666}.search-li[data-v-50a8baea]{background-color:#eee;border-radius:%?45?%;font-size:%?26?%;text-align:center;margin:0 %?30?% %?10?% 0;padding:%?10?% %?20?%}\n/*  搜索页商品展示模块样式    */.margin-top[data-v-50a8baea]{margin-top:%?10?%}.home-hot > p[data-v-50a8baea]{text-align:center}.keyword li[data-v-50a8baea]{width:%?150?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.home_search[data-v-50a8baea]{margin:0 %?30?%!important}.home_search li[data-v-50a8baea]{background-color:initial!important;width:100%!important;text-align:left!important;border-bottom:%?1?% solid #efefef!important;border-radius:0!important;padding:%?30?% 0!important;margin:0!important}.home_search li p[data-v-50a8baea]{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:%?20?%}.topTabBar[data-v-50a8baea]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #eee;border-top:1px solid #eee;font-size:%?28?%;background-color:#fff;color:#999;padding:0 %?120?%}.topTabBar .tab-pane[data-v-50a8baea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-bottom:%?8?%;box-sizing:inherit!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;line-height:%?88?%}.topTabBar .tab-pane div[data-v-50a8baea]{font-size:%?30?%;color:#999;width:%?150?%;text-align:center}.active[data-v-50a8baea]{font-weight:700;color:#020202!important}.xian_d[data-v-50a8baea]{height:%?4?%;width:%?150?%;background:#020202}.home_navigation[data-v-50a8baea]{border-bottom:none}.p-search-contaienr[data-v-50a8baea]{padding:%?8?% %?30?%;font-size:%?28?%}.p-search-form[data-v-50a8baea]{background-color:#f4f4f4;line-height:%?64?%;height:%?64?%;font-size:%?26?%;color:#333;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?30?% 0 0;border-radius:%?10?%}.p-search-form uni-image[data-v-50a8baea]{width:%?30?%;height:%?30?%;margin:0 %?10?%}.p-search-form uni-input[data-v-50a8baea]{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=e},9653:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),o=a("2f62"),r=a("2773"),s={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,e=0,a=parseInt(t)+uni.upx2px(88);return e=a&&a>0?a:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)({status:"data_height"})),{},{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=s},c25c:function(t,e,a){"use strict";var i=a("4f06b"),n=a.n(i);n.a},cba7:function(t,e,a){"use strict";a.r(e);var i=a("9653"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},fb77:function(t,e,a){"use strict";a.r(e);var i=a("82a0"),n=a("cba7");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("865e");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4b3c7e46",null,!1,i["a"],r);e["default"]=c.exports}}]);