(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesB-setUp-paymentPassword"],{"0169":function(t,e,a){"use strict";a.r(e);var i=a("b474"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"0413":function(t,e,a){var i=a("507a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("bb93329e",i,!0,{sourceMap:!1,shadowMode:!1})},"17ba":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),a("toload",{attrs:{load:t.load}},[a("ul",{staticClass:"setup-ul yh-setup-ul"},[a("li",[a("v-uni-input",{attrs:{type:"number",disabled:"true"},model:{value:t.user_phone,callback:function(e){t.user_phone=e},expression:"user_phone"}})],1),a("li",{staticClass:"last"},[a("v-uni-input",{staticClass:"input",class:{marginleft:t.display},attrs:{"placeholder-style":"color: #b8b8b8;",type:"number",placeholder:"请输入手机验证码"},model:{value:t.codeone,callback:function(e){t.codeone=e},expression:"codeone"}}),t.display?a("div",{staticClass:"color yh-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._verif()}}},[t._v("获取验证码")]):t._e(),t.display?t._e():a("div",{staticClass:"active yh-color"},[a("span",{ref:"time",staticClass:"yh-time"},[t._v(t._s(t.count)+"S")]),t._v("后再次获取")])],1),a("li",[a("v-uni-input",{staticClass:"input yh-input",attrs:{"placeholder-style":"color: #b8b8b8;",type:"number",size:"6",placeholder:"请输入6位数的新密码"},model:{value:t.newpassword,callback:function(e){t.newpassword=e},expression:"newpassword"}}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.newpassword.length,expression:"newpassword.length"}],attrs:{src:t.del},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._empty(1)}}})],1),a("li",{staticClass:"set_l"},[a("v-uni-input",{staticClass:"input yh-input",attrs:{"placeholder-style":"color: #b8b8b8;",type:"number",size:"6",placeholder:"请确认新密码"},model:{value:t.againpassword,callback:function(e){t.againpassword=e},expression:"againpassword"}}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.againpassword.length,expression:"againpassword.length"}],attrs:{src:t.del},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._empty(2)}}})],1),a("li",{staticClass:"yh-setupButtomWrap",attrs:{id:"setupButtomWrap"}},[a("div",{staticClass:"setup-buttom yh-setup-buttom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._sub.apply(void 0,arguments)}}},[t._v("确认")])])])])],1)},o=[]},"1a57":function(t,e,a){"use strict";a.r(e);var i=a("1ec8"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"1ad4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),t.exports=e},"1ec8":function(t,e,a){"use strict";var i=a("4ea4");a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("fb77")),o=i(a("a26b")),s=(a("2773"),{data:function(){return{del:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/delete2x.png",load:!1,title:"修改支付密码",oldpassword:"",input_oldpassword:"",newpassword:"",againpassword:"",access_id:"",codeone:"",user_phone:"",count:"",display:!0,rez:"",timer:null,fastTap:!0}},created:function(){var t=this;t.$nextTick((function(){t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../../pages/login/login?landing_code=1",(function(){t.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):t.$store.state.access_id,t.user_phone=uni.getStorageSync("user_phone")?uni.getStorageSync("user_phone"):t.$store.state.user_phone,t.load=!0}))}))},components:{Heads:n.default,toload:o.default},watch:{newpassword:function(t,e){this.$nextTick((function(){t.toString().length>6&&(this.newpassword=e)}))},againpassword:function(t,e){this.$nextTick((function(){t.toString().length>6&&(this.againpassword=e)}))}},methods:{changeLoginStatus:function(){var t=this;t.access_id=uni.getStorageSync("access_id")},_time:function(){var t=this,e=60;this.timer||(this.display=!1,this.count=e,this.timer=setInterval((function(){t.count>0&&t.count<=e?t.count--:(t.display=!0,clearInterval(t.timer),t.timer=null)}),1e3))},_verif:function(){var t=this;if(this.fastTap){this.fastTap=!1;var e={module:"app",action:"user",app:"secret_key",phone:this.user_phone,message_type:0,message_type1:5};console.log(e),uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){t.fastTap=!0;var a=e.data,i=a.code,n=a.message;if(200!=i)uni.showToast({title:n,duration:1e3,icon:"none"});else if(200==i){t._time();var o=300,s=o;console.log(o,s);var r=setInterval((function(){s>0&&s<=o?(s--,console.log(s)):(clearInterval(r),r=null,t.code="")}),1e3)}console.log(e)},error:function(e){console.log(e),t.fastTap=!0}})}},_empty:function(t){0==t?this.input_oldpassword="":1==t?this.newpassword="":2==t&&(this.againpassword="")},_newpassword:function(){var t=/^\d{6}$/;if(""!=this.newpassword){if(this.rez=t.test(this.newpassword),1==this.rez)return;this.newpassword="",uni.showToast({title:"请输入6位数字密码",duration:1e3,icon:"none"})}},_againpassword:function(){if(""!=this.againpassword){if(this.newpassword==this.againpassword)return;uni.showToast({title:"两次密码输入不一致！",duration:1e3,icon:"none"})}},_sub:function(){var t=/^\d{6}$/;""!=this.newpassword&&(this.rez=t.test(this.newpassword));var e=this;if(this.fastTap)if(this.fastTap=!1,""==this.newpassword||""==this.againpassword||6!=this.codeone.length)uni.showToast({title:"请填写正确信息！",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}});else if(this.rez)if(""!=this.againpassword&&this.newpassword!=this.againpassword)uni.showToast({title:"两次密码输入不一致！",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}});else if(6!=this.codeone.length)uni.showToast({title:"请输入正确的验证码！",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}});else if(""!=this.newpassword&&this.newpassword==this.againpassword&&6==this.codeone.length){var a={module:"app",action:"user",app:"modify_payment_password",access_id:this.access_id,x_password:this.newpassword,phoneNum:this.user_phone,keyCode:this.codeone};uni.request({data:a,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){e.fastTap=!0,console.log(t);var a=t.data,i=a.code,n=a.message;200==i?(uni.showToast({title:"修改成功！",duration:1500,icon:"none",success:function(t){e.fastTap=!0}}),setTimeout((function(){uni.navigateBack({url:"../../pagesB/setUp/setUp"})}),1500)):uni.showToast({title:n,duration:1e3,icon:"none"})},error:function(t){console.log(t),e.fastTap=!0}})}else uni.showToast({title:"请填写正确信息！",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}});else uni.showToast({title:"请输入6位数新密码",duration:1e3,icon:"none",success:function(t){e.fastTap=!0}})}}});e.default=s},2773:function(t,e,a){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function n(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function o(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=n,e.removeStorage=o},"4ca3":function(t,e,a){var i=a("ea2c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("a504d58c",i,!0,{sourceMap:!1,shadowMode:!1})},"507a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".last[data-v-04e77306]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.last i[data-v-04e77306],\r\n.color[data-v-04e77306],\r\n.active[data-v-04e77306]{margin-right:0!important;font-size:%?24?%;cursor:pointer}.setup-ul li img[data-v-04e77306]{width:%?28?%;height:%?28?%}.setup-ul li img[data-v-04e77306]{position:absolute;right:%?12?%;bottom:%?35?%;z-index:99}.setup-ul>li[data-v-04e77306],\r\n.set_l[data-v-04e77306]{padding:%?30?% %?0?%;border-bottom:1px solid #eee;margin-bottom:1px;position:relative}\r\n\r\n/* 优化 */.yh-setup-ul[data-v-04e77306]{position:relative}.yh-color[data-v-04e77306]{font-size:%?28?%}.yh-time[data-v-04e77306]{font-size:%?28?%;margin:0!important}.yh-input[data-v-04e77306]{width:90%}.yh-setupButtomWrap[data-v-04e77306]{margin-top:%?70?%}.yh-setup-buttom[data-v-04e77306]{width:%?690?%;height:%?90?%}",""]),t.exports=e},"5dca":function(t,e,a){"use strict";var i=a("0413"),n=a.n(i);n.a},"82a0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"display:flex;height:"+t.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[a("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),a("div",{staticClass:"header"},[t.flag&&!t.returnFlag?a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?a("img",{attrs:{src:t.back1}}):a("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():a("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},o=[]},"865e":function(t,e,a){"use strict";var i=a("8902"),n=a.n(i);n.a},8902:function(t,e,a){var i=a("1ad4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("774cd36e",i,!0,{sourceMap:!1,shadowMode:!1})},9653:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),o=a("2f62"),s=a("2773"),r={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=0,a=parseInt(t)+uni.upx2px(88);return e=a&&a>0?a:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)({status:"data_height"})),{},{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=r},a26b:function(t,e,a){"use strict";a.r(e);var i=a("e4d9"),n=a("0169");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("ac95");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"760eb09a",null,!1,i["a"],s);e["default"]=c.exports},ac95:function(t,e,a){"use strict";var i=a("4ca3"),n=a.n(i);n.a},b474:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/loading.gif"}},props:["load"]};e.default=i},cba7:function(t,e,a){"use strict";a.r(e);var i=a("9653"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},d029:function(t,e,a){"use strict";a.r(e);var i=a("17ba"),n=a("1a57");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("5dca");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"04e77306",null,!1,i["a"],s);e["default"]=c.exports},e4d9:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"toload"},[t.load?t._t("default"):a("v-uni-view",{staticClass:"t-h"},[a("v-uni-view",{staticClass:"loadbox"},[a("v-uni-image",{staticClass:"loadbox-img",attrs:{src:t.loadGif,mode:""}}),a("v-uni-view",{staticClass:"loadbox-text"},[t._v("加载中…")])],1)],1)],2)},o=[]},ea2c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".toload[data-v-760eb09a]{\n\t/* min-height: calc(100vh - 90rpx); */}.t-h[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:calc(100vh - %?200?%)}.loadbox[data-v-760eb09a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%;height:%?200?%;border-radius:%?10?%;background-color:rgba(0,0,0,.6);margin:0 auto}.loadbox-img[data-v-760eb09a]{width:%?40?%;height:%?40?%;margin:%?50?% 0 %?20?% 0}.loadbox-text[data-v-760eb09a]{margin-top:%?20?%;color:#fff}",""]),t.exports=e},fb77:function(t,e,a){"use strict";a.r(e);var i=a("82a0"),n=a("cba7");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("865e");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4b3c7e46",null,!1,i["a"],s);e["default"]=c.exports}}]);