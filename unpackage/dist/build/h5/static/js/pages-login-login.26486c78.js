(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{2773:function(t,e,n){"use strict";function o(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function i(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function a(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=o,e.getStorage=i,e.removeStorage=a},"4cd6":function(t,e,n){"use strict";var o=n("4ea4");n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("5530")),a=n("c375"),s=n("2f62"),c=n("2773"),l=n("ffb5"),d={data:function(){return{toHome:!1,togoodsDetail:!1,phone_codeStatus1:!1,LoginPWStatus:!0,pwLoginBtnStatus:!1,codeLoginBtnStatus:!1,fastTap:!0,del:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/delete2x.png",guanbi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",pwHide:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/pwHide.png",pwShow:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/pwShow.png",passLoginCodePH:"请输入账号/手机号",passLoginCodePH1:"请输入账号/手机号",passLoginPWPH:"请输入密码",passLoginPWPH1:"请输入密码",codeLoginCodePH:"请输入手机号",codeLoginCodePH1:"请输入手机号",codeLoginPWPH:"请输入验证码",codeLoginPWPH1:"请输入验证码",account:"",password:"",landing:!0,phone:"",phone_code:"",one_code:"",time_code:"获取验证码",timer:null,count:"",old_phone:"",landing_code:"",passone:"",passtwo:"",account_f:"",pone_f:"",provider:"",agreement1:"",company:"",logo:"",src:!1,fatherId:"",baiduHeadTop:0,isCMMC:"zyjd"==this.$store.state.channel,tripartiteChannel:this.$store.state.channel}},onLoad:function(t){if(console.log(this.isCMMC),this.isCMMC)this.$loginFrom.login(this);else{var e=this;uni.request({data:{module:"app",action:"login",app:"index"},url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){e.agreement1=t.data.Agreement,e.logo=t.data.logo,e.company=t.data.company}}),uni.getProvider({service:"oauth",success:function(t){e.provider=t.provider}}),t.landing_code&&(this.togoodsDetail=t.landing_code),t.fatherId&&(this.fatherId=t.fatherId),t.toHome?this.toHome=!0:this.toHome=!1,uni.getStorageSync("fatherId")&&(this.fatherId=uni.getStorageSync("fatherId")),console.log("--------this.fatherId----------"+this.fatherId)}},onShow:function(){var t=uni.getStorageSync("appLogin");console.log("onshow:appLogin:",t),t&&(uni.setStorageSync("appLogin",!1),uni.navigateBack())},methods:(0,i.default)((0,i.default)({},(0,s.mapMutations)({access_id:"SET_ACCESS_ID",user_phone:"SET_USER_PHONE"})),{},{_banck:function(){this.toHome?uni.switchTab({url:"../tabBar/my"}):uni.navigateBack({delta:1})},_register_q:function(){this.account="",this.password="",this.phone="",this.phone_code="",this.pwLoginBtnStatus=!1,this.codeLoginBtnStatus=!1,this.phone_codeStatus1=!1,clearInterval(this.timer),this.time_code="获取验证码",this.timer=null,this.count="",this.fatherId?uni.navigateTo({url:"/pages/login/register?fatherId="+this.fatherId}):uni.navigateTo({url:"/pages/login/register"})},_noNull:function(t){var e=this;function n(){1==t&&e.account&&e?(e.passLoginCodePH=e.passLoginCodePH1,e.one_code=1,e.account_f=!0,e.pwLoginBtnStatus=!0):e.pwLoginBtnStatus=!1}e.$nextTick((function(){n()}))},_empty:function(t){1==t?(this.account="",this.pwLoginBtnStatus=!1):2==t?this.password="":3==t?this.phone="":4==t?this.passone="":5==t&&(this.passtwo="")},pwStatus:function(t){(0,l.lkt_pwStatus)(t,this)},_landing:function(){var t=this;if(this.landing)if(this.account&&this.password){if(this.account&&this.password){var e={module:"app",action:"login",app:"login",phone:this.account,password:this.password,access_id:this.$store.state.access_id,clientid:uni.getStorageSync("cid")};console.log("-------this.fatherId2----------"+this.fatherId),""!=this.fatherId&&(e.pid=this.fatherId),e.store_type=2,uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){var n=e.data,o=n.message,i=n.code,a=n.access_id,s=(n.y_password,n.wx_status);200==i&&a?(t.$store.state.access_id=[],uni.showToast({title:"登录成功！",duration:1e3,icon:"none"}),t.access_id(a),uni.setStorage({key:"access_id",data:a,success:function(){}}),uni.setStorageSync("LoingByHand",!0),t.togoodsDetail?getCurrentPages().length>1?setTimeout((function(){uni.navigateBack({delta:1})}),1e3):uni.switchTab({url:"../tabBar/my",success:function(){}}):setTimeout((function(){console.log(t.fatherId),""!=t.fatherId&&void 0!=t.fatherId&&"undefined"!=t.fatherId?uni.navigateTo({url:"../../pagesA/distribution/distribution_center",success:function(){1!=s&&(t.$store.state.shouquan=!0)}}):uni.switchTab({url:"../tabBar/my",success:function(){1!=s&&(t.$store.state.shouquan=!0)}})}),1e3)):uni.showToast({title:o,duration:1e3,icon:"none"})},error:function(t){}})}}else uni.showToast({title:"账号或密码不能为空",duration:1e3,icon:"none"});else if(this.old_phone)if(this.phone_code){if(this.phone!=this.old_phone)uni.showToast({title:"手机号码输入错误！",duration:1e3,icon:"none"});else if(6!=this.phone_code.length)uni.showToast({title:"请输入完整的验证码！",duration:1e3,icon:"none"});else if(6==this.phone_code.length&&this.phone==this.old_phone){e={module:"app",action:"login",app:"register",phone:this.phone,access_id:this.$store.state.access_id,keyCode:this.phone_code,clientid:uni.getStorageSync("cid")};""!=this.fatherId&&(e.pid=this.fatherId),e.store_type=2;var n=uni.getStorageSync("url");uni.request({data:e,url:n,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){var n=e.data,o=n.code,i=n.message,a=n.access_id,s=n.y_password,l=n.wx_status;200==o&&a?(t.$store.state.access_id=[],uni.showToast({title:"登录成功！",duration:1e3,icon:"none"}),t.access_id(a),(0,c.setStorage)("access_id",a),uni.setStorageSync("user_phone",t.phone),uni.setStorageSync("LoingByHand",!0),0==s?uni.showModal({title:"提示",content:"您的账号还未设置密码，是否前往设置？",success:function(e){e.confirm?setTimeout((function(){uni.reLaunch({url:"../../pagesB/setUp/loginPassword"})}),1e3):e.cancel&&setTimeout((function(){""!=t.fatherId&&void 0!=t.fatherId?uni.navigateTo({url:"../../pagesA/distribution/distribution_center",success:function(){1!=l&&(t.$store.state.shouquan=!0)}}):uni.reLaunch({url:"../tabBar/my",success:function(){1!=l&&(t.$store.state.shouquan=!0)}})}),1e3)}}):setTimeout((function(){""!=t.fatherId&&void 0!=t.fatherId?uni.navigateTo({url:"../../pagesA/distribution/distribution_center",success:function(){1!=l&&(t.$store.state.shouquan=!0)}}):uni.reLaunch({url:"../tabBar/my",success:function(){1!=l&&(t.$store.state.shouquan=!0)}})}),1e3)):uni.showToast({title:i,icon:"none"})}})}}else uni.showToast({title:"验证码不能为空！",duration:1e3,icon:"none"});else uni.showToast({title:"请先获取验证码！",duration:1e3,icon:"none"})},_pone_f:function(){this.codeLoginCodePH="",this.pone_f=!0},_codeChangePhone:function(t){11==t.target.value.length&&11==this.phone.length&&this.phone_codeStatus1?this.codeLoginBtnStatus=!0:this.codeLoginBtnStatus=!1},_telephone:function(t,e){this.one_code=(0,a.telephone)(t),(0,l.lkt_telephone)(e,this)},_codeF:function(){this.codeLoginPWPH="",this.codeLoginBtnStatus=!0},_codeChangeCode:function(t){6==t.target.value.length&&11==this.phone.length&&this.phone_codeStatus1?this.codeLoginBtnStatus=!0:this.codeLoginBtnStatus=!1},_codeB:function(){this.codeLoginPWPH=this.codeLoginPWPH1},_phone_code:function(t){console.log("===="),(0,l.lkt_phone_code)(t,this)},_phone:function(){this.landing=!1,this.codeLoginBtnStatus=!1,this.phone_codeStatus1=!1,this.account="",this.password=""},_landing_passw:function(){this.pwLoginBtnStatus=!1,this.landing=!0,this.phone="",this.phone_code=""},_navigateTo:function(t){uni.navigateTo({url:t})}}),computed:{halfWidth:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,e=parseInt(t),n=2*e;return uni.upx2px(n)+"px"}}};e.default=d},"542e":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isCMMC?t._e():n("div",[n("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[n("div",{staticClass:"content"},[n("div",{style:{position:"relative",top:t.baiduHeadTop+"px"}},[n("div",{staticClass:"head"},[n("img",{staticClass:"head_close",attrs:{src:t.guanbi},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._banck.apply(void 0,arguments)}}}),n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._register_q()}}},[t._v("注册")])]),t.landing?n("div",{staticClass:"login"},[n("div",{staticClass:"loginType"},[t._v("密码登录"+t._s(t.tripartiteChannel))]),n("div",{staticClass:"login_inpu"},[n("v-uni-input",{attrs:{type:"text",placeholder:t.passLoginCodePH,"placeholder-style":"color:#b8b8b8"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t._noNull(1)}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.account.length&&t.account_f,expression:"account.length && account_f"}],attrs:{src:t.del},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._empty(1)}}})],1),n("div",{staticClass:"login_inpu"},[n("v-uni-input",{attrs:{type:"text",password:t.LoginPWStatus,placeholder:t.passLoginPWPH,"placeholder-style":"color:#b8b8b8"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t._noNull(1)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("img",{staticStyle:{height:"32upx",width:"32upx",right:"20upx",bottom:"24upx"},attrs:{src:t.LoginPWStatus?t.pwHide:t.pwShow},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pwStatus(1)}}})],1),t.landing?n("p",{staticClass:"login_pass"},[n("span",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._navigateTo("retrievepassword")}}},[t._v("忘记密码？")])]):t._e(),t.pwLoginBtnStatus?n("div",{staticClass:"button1",staticStyle:{"margin-top":"70upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._landing.apply(void 0,arguments)}}},[t._v("登录")]):n("div",{staticClass:"button1",staticStyle:{opacity:"0.4","margin-top":"70upx"}},[t._v("登录")]),n("div",{staticStyle:{"text-align":"center","font-size":"28upx",color:"#999999"}},[t._v("或")]),n("div",{staticClass:"button2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._phone.apply(void 0,arguments)}}},[t._v("验证码登录")])]):t._e(),t.landing?t._e():n("div",{staticClass:"login"},[n("div",{staticClass:"loginType"},[t._v("验证码登录")]),n("div",{staticClass:"login_inpu"},[n("v-uni-input",{attrs:{type:"number",placeholder:t.codeLoginCodePH,"placeholder-style":"color:#b8b8b8",maxlength:"11"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._pone_f.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._telephone(t.phone,2)},input:function(e){arguments[0]=e=t.$handleEvent(e),t._codeChangePhone.apply(void 0,arguments)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.phone.length&&t.pone_f,expression:"phone.length&&pone_f"}],attrs:{src:t.del},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._empty(3)}}})],1),n("div",{staticClass:"login_inpu",staticStyle:{"margin-bottom":"100upx"}},[n("v-uni-input",{attrs:{type:"number",placeholder:t.codeLoginPWPH,"placeholder-style":"color:#b8b8b8",maxlength:"6"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._codeF()},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._codeB()},input:function(e){arguments[0]=e=t.$handleEvent(e),t._codeChangeCode.apply(void 0,arguments)}},model:{value:t.phone_code,callback:function(e){t.phone_code=e},expression:"phone_code"}}),n("p",{staticClass:"login_p",class:{color:60>t.count&&t.count>0||0===t.count},staticStyle:{"z-index":"99",position:"absolute",right:"24upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._phone_code(1)}}},[t._v(t._s(t.time_code))])],1),t.codeLoginBtnStatus?n("div",{staticClass:"button1",staticStyle:{"margin-top":"70upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._landing.apply(void 0,arguments)}}},[t._v("登录")]):n("div",{staticClass:"button1",staticStyle:{opacity:"0.4","margin-top":"70upx"}},[t._v("登录")]),n("div",{staticStyle:{"text-align":"center","font-size":"28upx",color:"#999999"}},[t._v("或")]),n("div",{staticClass:"button2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._landing_passw.apply(void 0,arguments)}}},[t._v("密码登录")])])])]),n("div",{staticClass:"agreement",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._navigateTo("agreement")}}},[t._v("注册/登录即代表已同意"),n("span",{staticStyle:{"text-decoration":"underline"}},[t._v("《"+t._s(t.agreement1)+"》")])])])])},a=[]},"56eb":function(t,e,n){"use strict";n.r(e);var o=n("4cd6"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},bcda:function(t,e,n){"use strict";n.r(e);var o=n("542e"),i=n("56eb");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("eb77");var s,c=n("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"71943c8c",null,!1,o["a"],s);e["default"]=l.exports},c375:function(t,e,n){"use strict";function o(t,e){var n=/^\w{6,20}$/g,o=n.test(t);1==o?uni.showToast({title:"格式正确！",duration:1e3,icon:"none"}):""==t?(e.style.display="block",e.innerHTML="用户名不能为空",uni.showToast({title:"用户名不能为空",duration:1e3,icon:"none"})):(e.style.display="block",t="")}function i(t,e,n){var o=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,i=o.test(t);1==i||(""==t?uni.showToast({title:"密码不能为空！",duration:1e3,icon:"none"}):uni.showToast({title:"请输入6-16位数密码（数字和字母组合）！",duration:1e3,icon:"none"}))}function a(t,e){if(t==e&&""!=e)return 1;""==e?uni.showToast({title:"请输入确认密码！",duration:1e3,icon:"none"}):uni.showToast({title:"两次输入不一致！",duration:1e3,icon:"none"})}function s(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/,n=e.test(t);return 1==n&&11==t.length?1:""==t?2:(console.log(111111),uni.showToast({title:"请输入正确的手机号！",duration:1e3,icon:"none"}),3)}function c(t,e){var n=60;t||(e=n,t=setInterval((function(){e>0&&e<=n?e--:(clearInterval(t),t=null)}),1e3))}function l(t){t="",console.log(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.onblur=o,e.pass=i,e.confirmpass=a,e.telephone=s,e.time=c,e.empty=l},c83d:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".loginType[data-v-71943c8c]{width:100%;height:%?230?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:left;padding:0 %?30?%;font-size:%?54?%;color:#020202}.color1[data-v-71943c8c]{color:#000!important}.closeImg[data-v-71943c8c]{z-index:999}.head[data-v-71943c8c]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;color:#666;padding:0 %?30?%}\n.head_close[data-v-71943c8c]{width:%?26?%;height:%?26?%;padding:%?20?%;\n}.head_logo[data-v-71943c8c]{padding:%?176?% 0 %?32?% 0;font-size:%?32?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.background_landing[data-v-71943c8c]{background-color:#fff}.background_register[data-v-71943c8c]{background-color:#fff}.head_logimg[data-v-71943c8c]{margin-bottom:%?20?%;text-align:center}.img_landing[data-v-71943c8c]{background-color:#fff}.head_logimg img[data-v-71943c8c]{height:%?160?%;width:%?160?%}.head_logfont[data-v-71943c8c]{width:auto;padding:%?10?%;color:#fff}.landing_dorder[data-v-71943c8c]{border:%?4?% solid #000;width:%?40?%;border-radius:%?20?%;margin:%?15?% 0 0 42%}.article_head[data-v-71943c8c],\r\n\t.head_name[data-v-71943c8c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.head_name[data-v-71943c8c]{-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:0 %?50?%;width:100%;margin-top:%?80?%;font-size:%?32?%}.color_landing[data-v-71943c8c]{color:#000}.color_register[data-v-71943c8c]{color:#494848}.head_name[data-v-71943c8c]{position:relative}.head_name p[data-v-71943c8c]{margin:0 %?32?%}.login_p[data-v-71943c8c]{z-index:99;padding:%?10?%}.login_pass[data-v-71943c8c]{margin:%?30?% 0;font-size:%?24?%;color:#020202;text-align:right;padding-right:%?24?%}.switch[data-v-71943c8c]{text-align:center;font-size:%?0.3?%;color:#242424}.color[data-v-71943c8c]{color:#666!important}.login uni-input[data-v-71943c8c]::-webkit-input-placeholder{color:#9d9d9d!important}\n.button1[data-v-71943c8c]{width:90%;margin:%?20?% auto;background-color:#020202;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;border-radius:%?8?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.button2[data-v-71943c8c]{width:90%;margin:%?20?% auto;background-color:#fff;color:#000;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;border-radius:%?8?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:1px solid #020202}.button_a[data-v-71943c8c]{background-color:#fff;color:#020202;border:1px solid #020202;margin-top:%?30?%}.head_back[data-v-71943c8c]{width:%?24?%;height:%?36?%;position:absolute;top:%?30?%;left:%?30?%}.agreement[data-v-71943c8c]{\r\n\t\t/* position: absolute;\r\n\t\tbottom: 65upx; */height:%?100?%;width:100%;font-size:%?24?%;color:#bbb;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content[data-v-71943c8c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.agreement img[data-v-71943c8c]{width:%?26?%;height:%?26?%;margin-right:%?18?%}.landing_foot[data-v-71943c8c]{margin-top:%?50?%;font-size:%?24?%;color:#bbb;padding:0 %?200?%;text-align:center}",""]),t.exports=e},d172:function(t,e,n){var o=n("c83d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("5ab66e25",o,!0,{sourceMap:!1,shadowMode:!1})},eb77:function(t,e,n){"use strict";var o=n("d172"),i=n.n(o);i.a},ffb5:function(t,e,n){"use strict";function o(t,e){1==t?e.LoginPWStatus=!e.LoginPWStatus:2==t?e.regPWStatus1=!e.regPWStatus1:3==t&&(e.regPWStatus2=!e.regPWStatus2)}function i(t,e){1==t?(e.passLoginCodePH=e.passLoginCodePH1,e.account_f=!1):2==t?(console.log("我输入了验证码登录手机号"),e.codeLoginCodePH=e.codeLoginCodePH1,e.pone_f=!1):3==t&&(console.log("我输入了注册手机号"),e.phone_y=!1)}function a(t,e){if(e.fastTap)if(e.fastTap=!1,console.log(111),console.log(e),e.phone)if(1!=e.one_code||e.count)e.fastTap=!0;else{e.old_phone=e.phone;var n=60;e.time_code=n+"s后可重获",e.timer||(e.count=n,e.timer=setInterval((function(){e.count>0&&e.count<=n?(e.count--,e.time_code="".concat(e.count,"s后可重获")):(clearInterval(e.timer),e.time_code="获取验证码",e.timer=null,e.count="")}),1e3));var o={module:"app",action:"user",app:"secret_key",phone:e.phone};1==t?(o.message_type=0,o.message_type1=1):(o.message_type=0,o.message_type1=2);var i=uni.getStorageSync("url");uni.request({data:o,url:i,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(n){console.log("获取验证码 res"),console.log(n);var o={200:"发送成功",220:"短信发送频率超限！"};o[n.data.code]&&uni.showToast({title:o[n.data.code],duration:1500,icon:"none"}),1==t?(e.phone_codeStatus1=!0,6==e.phone_code.length&&11==e.phone.length&&1==e.phone_codeStatus1?e.codeLoginBtnStatus=!0:e.codeLoginBtnStatus=!1):2==t&&(e.phone_codeStatus2=!0,11==e.phone.length&&e.phone_codeStatus2&&6==e.phone_code.length&&e.passtwo.length>5&&6==e.phone_code.length&&e.passone.length==e.passtwo.length?e.regBtnStatus=!0:e.regBtnStatus=!1),e.fastTap=!0,console.log(n);var i=n.data;i.code,i.message},error:function(t){e.fastTap=!0}})}else uni.showToast({title:"请输入手机号码！",duration:1e3,icon:"none"}),e.fastTap=!0}Object.defineProperty(e,"__esModule",{value:!0}),e.lkt_pwStatus=o,e.lkt_telephone=i,e.lkt_phone_code=a}}]);