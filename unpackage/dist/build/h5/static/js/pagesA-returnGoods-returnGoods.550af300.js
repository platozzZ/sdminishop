(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesA-returnGoods-returnGoods"],{"19d4":function(t,e,a){var i=a("f805");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("88643eca",i,!0,{sourceMap:!1,shadowMode:!1})},"1ad4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),t.exports=e},"1f7b":function(t,e,a){"use strict";a.r(e);var i=a("2866"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},2773:function(t,e,a){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function r(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function n(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=r,e.removeStorage=n},2866:function(t,e,a){"use strict";var i=a("4ea4");a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("fb77")),n={data:function(){return{title:"请选择售后类型",order_details_id:"",tuihuo_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/tuihuo2x.png",jiantouhei_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/jiantouhei2x.png",tuikuan_img:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/tuikuan2x.png",access_id:"",order:"",order_anking:"",rType:!1,status:"",self_lifting:"",r_status:""}},onLoad:function(t){var e=this;e.$nextTick((function(){e.$refs.lktAuthorizeComp.handleAfterAuth(e,"../../pages/login/login?landing_code=1")})),this.order_details_id=t.order_details_id,this.order_anking=t.order_anking,this.r_status=t.r_status,this.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):this.$store.state.access_id,this._axios(),this.rType=t.rType,"3"==this.r_status&&(this.rType=3)},computed:{halfWidth:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,e=parseInt(t),a=2*e;return uni.upx2px(a)+"px"}},methods:{changeLoginStatus:function(){var t=this;t.access_id=uni.getStorageSync("access_id"),t._axios()},_uni_navigateTo:function(t){uni.redirectTo({url:t})},_axios:function(){var t=this,e={module:"app",action:"order",app:"return_method",access_id:this.access_id,order_details_id:this.order_details_id};uni.request({url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},data:e,method:"POST",success:function(e){if(200==e.data.code){var a=e.data.data;t.order=a.list,t.self_lifting=a.self_lifting,t.status=a.status}else uni.showToast({title:e.data.message,duration:1500,icon:"none"})},error:function(t){}})}},components:{heads:r.default}};e.default=n},"341e":function(t,e,a){"use strict";var i=a("19d4"),r=a.n(i);r.a},"82a0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"display:flex;height:"+t.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[a("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),a("div",{staticClass:"header"},[t.flag&&!t.returnFlag?a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?a("img",{attrs:{src:t.back1}}):a("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():a("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},n=[]},"865e":function(t,e,a){"use strict";var i=a("8902"),r=a.n(i);r.a},"88da":function(t,e,a){"use strict";a.r(e);var i=a("fb33"),r=a("1f7b");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("341e");var s,o=a("f0c5"),d=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"838ead6e",null,!1,i["a"],s);e["default"]=d.exports},8902:function(t,e,a){var i=a("1ad4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("774cd36e",i,!0,{sourceMap:!1,shadowMode:!1})},9653:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("5530")),n=a("2f62"),s=a("2773"),o={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=0,a=parseInt(t)+uni.upx2px(88);return e=a&&a>0?a:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,r.default)((0,r.default)({},(0,n.mapMutations)({status:"data_height"})),{},{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=o},cba7:function(t,e,a){"use strict";a.r(e);var i=a("9653"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},f805:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".order_two[data-v-838ead6e]{border:none}ul[data-v-838ead6e]{margin-left:%?30?%}.return_pay[data-v-838ead6e],\r\n.return_right>div[data-v-838ead6e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.return_pay[data-v-838ead6e]{padding:%?30?% %?30?% %?30?% 0;border-bottom:1px solid #eee}.return_right>p[data-v-838ead6e]{font-size:%?24?%;color:#9d9d9d}.return_right>div[data-v-838ead6e]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;font-size:%?28?%;color:#020202;margin-bottom:%?18?%}.return_right>div img[data-v-838ead6e]{margin-right:%?20?%}.p_name[data-v-838ead6e]{width:100%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}\r\n\r\n/* 优化 */.yh-order-two-div[data-v-838ead6e]{margin-right:%?40?%;width:58%}.yh-line[data-v-838ead6e]{height:%?30?%;width:100%;background-color:#eee}.return_right_img[data-v-838ead6e]{width:%?35?%;height:%?35?%}",""]),t.exports=e},fb33:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),a("ul",{staticClass:"order_goods"},t._l(t.order,(function(e,i){return a("li",{key:i,staticClass:"order_two"},[a("img",{attrs:{src:e.image}}),a("div",{staticClass:"yh-order-two-div"},[a("p",{staticClass:"p_name"},[t._v(t._s(e.p_name))]),a("p",{staticClass:"color_one"},[t._v(t._s(e.size))])]),a("div",[a("p",[t._v("￥"+t._s(e.p_price))]),a("p",{staticClass:"color_two"},[t._v("x"+t._s(e.num))])])])})),0),a("div",{staticClass:"yh-line"}),a("ul",[t.status&&"0"==t.self_lifting?a("li",{staticClass:"return_pay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._uni_navigateTo("refund?refund_type=1&order_details_id="+t.order_details_id+"&rType="+t.rType)}}},[a("div",{staticClass:"return_right"},[a("div",[a("img",{staticClass:"return_right_img",attrs:{src:t.tuihuo_img}}),a("span",[t._v("退货退款")])]),a("p",[t._v("已收到货，需要退还已收到的货物")])]),a("img",{staticClass:"arrow",attrs:{src:t.jiantouhei_img}})]):t._e(),"3"!=t.r_status?a("li",{staticClass:"return_pay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._uni_navigateTo("refund?refund_type=2&order_details_id="+t.order_details_id+"&order_anking="+t.order_anking+"&rType="+t.rType)}}},[a("div",{staticClass:"return_right"},[a("div",[a("img",{staticClass:"return_right_img",attrs:{src:t.tuikuan_img}}),a("span",[t._v("仅退款")])]),a("p",[t._v("未收到货，或与客服协商同意仅退款")])]),a("img",{staticClass:"arrow",attrs:{src:t.jiantouhei_img}})]):t._e(),"3"==t.r_status?a("li",{staticClass:"return_pay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._uni_navigateTo("refund?refund_type=3&order_details_id="+t.order_details_id+"&order_anking="+t.order_anking+"&r_status="+t.r_status+"&rType="+t.rType)}}},[a("div",{staticClass:"return_right"},[a("div",[a("img",{staticClass:"return_right_img",attrs:{src:t.tuikuan_img}}),a("span",[t._v("换货")])]),a("p",[t._v("确认收货，需要更换已收到的货物")])]),a("img",{staticClass:"arrow",attrs:{src:t.jiantouhei_img}})]):t._e()])],1)},n=[]},fb77:function(t,e,a){"use strict";a.r(e);var i=a("82a0"),r=a("cba7");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("865e");var s,o=a("f0c5"),d=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"4b3c7e46",null,!1,i["a"],s);e["default"]=d.exports}}]);