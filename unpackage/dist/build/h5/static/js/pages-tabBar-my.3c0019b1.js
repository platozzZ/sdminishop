(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-my"],{"0b96":function(n,t,e){var i=e("8648");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("68ef9e3a",i,!0,{sourceMap:!1,shadowMode:!1})},2773:function(n,t,e){"use strict";function i(n,t){uni.setStorage({key:n,data:t,success:function(){console.log("setSuccess")}})}function a(n){var t;return uni.getStorage({key:n,success:function(n){t=n.data,console.log("getSuccess")}}),t}function o(n){uni.removeStorage({key:n,success:function(n){console.log("removeSuccess")}})}Object.defineProperty(t,"__esModule",{value:!0}),t.setStorage=i,t.getStorage=a,t.removeStorage=o},"3f39":function(n,t,e){"use strict";e.r(t);var i=e("b431"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},"4d14":function(n,t,e){"use strict";e.r(t);var i=e("5357"),a=e("3f39");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("aca0");var s,d=e("f0c5"),r=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"0bd71f38",null,!1,i["a"],s);t["default"]=r.exports},5357:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"order_ii",staticStyle:{"background-color":"#F8F8F8"}},[e("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(t){arguments[0]=t=n.$handleEvent(t),n.changeLoginStatus.apply(void 0,arguments)}}}),"普通会员"==n.grade?e("div",{staticClass:"head"},[e("div",{staticClass:"head_core"},[e("div",{staticClass:"core_two"},[e("div",{staticClass:"head_imgDiv"},[n.access_id1?e("img",{staticClass:"img",attrs:{"lazy-load":"true",src:n.logo1}}):e("img",{staticClass:"img",attrs:{"lazy-load":"true",src:n.unLogin}})]),n.access_id1?e("div",{staticClass:"user-msg",staticStyle:{"flex-direction":"row"}},[e("div",[e("span",{staticClass:"span"},[n._v(n._s(n.user.user_name))])]),e("span",{staticClass:"vip-text1"},[e("img",{staticClass:"img1",attrs:{src:n.my_leve}}),n._v("普通会员")])]):e("span",[n._v("Hi~等你很久了")])]),n.access_id1?n._e():e("div",{staticClass:"loginBtn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo("../login/login?landing_code=1")}}},[n._v("登录/注册")]),n.access_id1&&n.have_grade?e("div",{staticClass:"changeInfo",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.toVip(1)}}},[e("div",{staticClass:"tag vip-join vip-core"},[n._v("加入会员"),e("v-uni-image",{staticStyle:{width:"8upx","margin-left":"10upx"},attrs:{src:n.vip_arrow,mode:"widthFix"}})],1)]):n._e()])]):e("div",{staticClass:"head panpel",style:"background-image:url("+n.imgurl_my+");background-size: 100% 100%;"},[e("div",{staticClass:"head_core"},[e("div",{staticClass:"core_two"},[e("div",{staticStyle:{margin:"0 30upx","border-radius":"50%",width:"120upx",height:"120upx"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../my/myInfo")}}},[n.access_id1?e("img",{staticStyle:{width:"120upx",height:"120upx",margin:"0"},attrs:{"lazy-load":"true",src:n.logo1}}):e("img",{staticStyle:{width:"120upx",height:"120upx",margin:"0"},attrs:{"lazy-load":"true",src:n.unLogin}})]),n.access_id1?e("div",{staticClass:"user-msg",staticStyle:{"justify-content":"center"}},[e("div",[e("span",{staticClass:"span",style:"color:"+n.font_color},[n._v(n._s(n.user.user_name))]),e("div",{staticClass:"level-tag tag vip-text"},[e("img",{staticClass:"img",attrs:{src:n.imgurl_s}}),e("span",{style:"color:"+n.font_color},[n._v(n._s(n.grade))])])]),e("div",{staticClass:"user-msg-div"},[e("span",{staticClass:"ren-ree-time",style:"color:"+n.date_color},[n._v(n._s(n.grade_end)+" 到期")]),e("div",{staticClass:"xf_button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.toVip(2)}}},[e("span",{staticClass:"ren-ree"},[n._v("立即续费")])])])]):e("span",[n._v("Hi~等你很久了")])]),n.access_id1?e("div",{staticClass:"changeInfo",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo("../../pagesA/vipClub/vipClub")}}},[e("span",{staticClass:"tag vip-join vip-core"},[n._v("会员中心"),e("v-uni-image",{staticStyle:{width:"8upx","margin-left":"10upx"},attrs:{src:n.vip_arrow,mode:"widthFix"}})],1)]):e("div",{staticClass:"loginBtn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo("../login/login?landing_code=1")}}},[n._v("登录/注册")])])]),e("v-uni-view",{staticClass:"p-order"},[e("v-uni-view",{staticClass:"p-flex p-align-center p-justify-between p-order-t"},[e("v-uni-view",[n._v("我的订单")]),e("v-uni-view",{staticClass:"p-flex p-align-center p-justify-end",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._order(0)}}},[e("v-uni-text",{},[n._v("查看全部")]),e("v-uni-image",{attrs:{src:n.jiantou}})],1)],1),e("v-uni-view",{staticClass:"p-flex p-align-center p-justify-between p-order-b"},[e("v-uni-view",{staticClass:" p-item p-flex p-flex-direction p-align-center p-justify-center",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._order(1)}}},[e("v-uni-view",{staticClass:"p-flex p-flex-direction p-align-center p-justify-between p-item-t"},[e("v-uni-image",{attrs:{src:n.qianbao}}),n.access_id1&&n.dfk_num?e("v-uni-view",{staticClass:"p-item-tags p-flex p-align-center p-justify-center"},[e("v-uni-text",[n._v(n._s(n.dfk_num))])],1):n._e()],1),e("v-uni-view",[n._v("待付款")])],1),e("v-uni-view",{staticClass:" p-item p-flex p-flex-direction p-align-center p-justify-center",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._order(2)}}},[e("v-uni-view",{staticClass:" p-flex p-flex-direction p-align-center p-justify-between p-item-t"},[e("v-uni-image",{attrs:{src:n.zu}}),n.access_id1&&n.dfh_num?e("v-uni-view",{staticClass:"p-item-tags p-flex p-align-center p-justify-center"},[e("v-uni-text",[n._v(n._s(n.dfh_num))])],1):n._e()],1),e("v-uni-view",[n._v("待发货")])],1),e("v-uni-view",{staticClass:" p-item p-flex p-flex-direction p-align-center p-justify-center",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._order(3)}}},[e("v-uni-view",{staticClass:" p-flex p-flex-direction p-align-center p-justify-between p-item-t"},[e("v-uni-image",{attrs:{src:n.dizhi}}),n.access_id1&&n.dsh_num?e("v-uni-view",{staticClass:"p-item-tags p-flex p-align-center p-justify-center"},[e("v-uni-text",[n._v(n._s(n.dsh_num))])],1):n._e()],1),e("v-uni-view",[n._v("待收货")])],1),e("v-uni-view",{staticClass:" p-item p-flex p-flex-direction p-align-center p-justify-center",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._order(4)}}},[e("v-uni-view",{staticClass:" p-flex p-flex-direction p-align-center p-justify-between p-item-t"},[e("v-uni-image",{attrs:{src:n.messageImg}}),n.access_id1&&n.dpj_num?e("v-uni-view",{staticClass:"p-item-tags p-flex p-align-center p-justify-center"},[e("v-uni-text",[n._v(n._s(n.dpj_num))])],1):n._e()],1),e("v-uni-view",[n._v("待评价")])],1),e("v-uni-view",{staticClass:" p-item p-flex p-flex-direction p-align-center p-justify-center",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesA/afterSale/afterSale")}}},[e("v-uni-view",{staticClass:" p-flex p-flex-direction p-align-center p-justify-between p-item-t",staticStyle:{width:"80upx",margin:"0 auto"}},[e("v-uni-image",{attrs:{src:n.yueImg}}),n.access_id1&&n.th_num?e("v-uni-view",{staticClass:"p-item-tags p-flex p-align-center p-justify-center"},[e("v-uni-text",[n._v(n._s(n.th_num))])],1):n._e()],1),e("v-uni-view",[n._v("退款/售后")])],1)],1)],1),e("div",{staticClass:"my_data3"},[1==n.coupon||"1"==n.coupon?e("div",{staticClass:"data3",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesB/coupon/mycoupon")}}},[e("img",{attrs:{src:n.yhqBg,alt:""}}),e("div",{staticClass:"data3_in"},[e("div",[n.access_id1?e("p",{staticClass:"dataNum"},[n._v(n._s(n.user.coupon_num))]):e("p",{staticClass:"dataNum"},[n._v("0")]),e("p",[n._v("优惠券")])])])]):n._e(),e("div",{staticClass:"data3",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../my/myScore")}}},[e("img",{attrs:{src:n.jfBg,alt:""}}),e("div",{staticClass:"data3_in"},[e("div",[n.access_id1?e("p",{staticClass:"dataNum"},[n._v(n._s(n.user.score))]):e("p",{staticClass:"dataNum"},[n._v("0")]),e("p",[n._v("积分")])])])])]),e("ul",{staticClass:"list_ul"},[1==n.PT?e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesA/group/groupOrder")}}},[e("div",[e("img",{attrs:{src:n.myGroup}}),e("p",[n._v("我的拼团")])])]):n._e(),1==n.mch?e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesA/myStore/myStore")}}},[e("div",[e("img",{attrs:{src:n.mddp}}),e("p",[n._v("我的店铺")])])]):n._e(),1==n.KJ?e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesA/bargain/bargain")}}},[e("div",[e("img",{attrs:{src:n.mdkj}}),e("p",[n._v("我的砍价")])])]):n._e(),1==n.MS?e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesB/seckill/seckill_my")}}},[e("div",[e("img",{attrs:{src:n.mdkj}}),e("p",[n._v("我的秒杀")])])]):n._e(),e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../collection/collection")}}},[e("div",[e("img",{attrs:{src:n.wdsc}}),e("p",[n._v("我的收藏")])])]),1==n.JP?e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesA/bidding/bidding_my")}}},[e("div",[e("img",{attrs:{src:n.wdjp}}),e("p",[n._v("我的竞拍")])])]):n._e(),1==n.FX?e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesA/distribution/distribution_center")}}},[e("div",[e("img",{attrs:{src:n.wdfx}}),e("p",[n._v("代理中心")])])]):n._e(),e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../address/receivingAddress?state_manage=2")}}},[e("div",[e("img",{attrs:{src:n.shdz}}),e("p",[n._v("收货地址")])])]),e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../message/systemMesage")}}},[e("div",[e("img",{attrs:{src:n.xx}}),e("p",[n._v("消息")])])]),1==n.JF?e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../../pagesB/integral/integral")}}},[e("div",[e("img",{attrs:{src:n.integral_hui}}),e("p",[n._v("积分商城")])])]):n._e(),e("li",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n._navigateTo1("../message/service")}}},[e("div",[e("img",{attrs:{src:n.mdkf}}),e("p",[n._v("客服")])])])]),e("div",{staticStyle:{"background-color":"#fff",height:"1px"}}),n.vip_modal_flag?e("div",{staticClass:"vip_modal",on:{touchmove:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t)}}},[e("div",{staticClass:"vip_modal_data",style:n.bg_vip},[n._m(0),e("div",{staticClass:"vip_act"},[e("span",{staticClass:"span"},[n._v(n._s(n.rate))]),e("p",[n._v("全场"+n._s(n.rate)+"折")]),e("p",{staticClass:"pr_10"},[n._v("专属活动")]),e("p",[n._v("快速发货")])]),e("p",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.vip_renew.apply(void 0,arguments)}}},[n._v("立即续费")]),e("div",{staticClass:"vip_radio",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.check_vip_radio.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:n.vip_check?n.vip_check_img1:n.vip_check_img2}}),e("span",[n._v("勾选不再显示")])],1),e("v-uni-image",{staticClass:"vip_modal_close",attrs:{src:n.close_img},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.vip_modal_close.apply(void 0,arguments)}}})],1)]):n._e()],1)},o=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vip_expire"},[e("p",[n._v("您的会员即将到期")]),e("p",[n._v("马上续费")])])}]},8648:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* @import url("/static/css/tabBar/my.css"); */.flex[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.changeInfo[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?60?%;margin-right:%?50?%}.changeInfo div[data-v-0bd71f38]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.bq[data-v-0bd71f38]{text-align:center;font-size:%?24?%;padding:%?20?% 0;color:#bbb;background-color:#f8f8f8;width:100%}.my_data3[data-v-0bd71f38]{background-color:#fff;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;padding:%?30?%}.data3[data-v-0bd71f38]{width:%?220?%;height:%?140?%;position:relative}.data3 div[data-v-0bd71f38]{position:relative;z-index:2}.data3_in[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;text-align:center;color:#666;font-size:%?24?%}.data3 img[data-v-0bd71f38]{position:absolute;z-index:1;width:100%;height:100%}.dataNum[data-v-0bd71f38]{color:#333;font-size:%?32?%;font-weight:600;margin-bottom:%?10?%}.loginBtn[data-v-0bd71f38]{background:-webkit-linear-gradient(#ff7272,#f44);background:linear-gradient(#ff7272,#f44);color:#fff;font-size:%?28?%;border-top-left-radius:%?32?%;border-bottom-left-radius:%?32?%;height:%?64?%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.maskContent[data-v-0bd71f38]{width:90%;margin:0 auto;background-color:#fff;border-radius:%?10?%;padding:%?40?% 0}.maskTitle[data-v-0bd71f38]{text-align:center;font-size:%?40?%;font-weight:700;margin-bottom:%?20?%}.maskMain[data-v-0bd71f38]{border-bottom:%?4?% solid #eee;font-size:%?32?%;padding-bottom:%?20?%;text-align:center}\n/* .maskFoot{display: flex;align-items: center;justify-content: flex-start;margin-top: 20upx;margin-left: 20upx;} */\n/* .maskBtn{display: flex;align-items: center;justify-content: space-between;margin-top: 20upx;} */\n/* .mask { display: inline-flex;} */.maskBtn[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?20?%}.maskBtn uni-button[data-v-0bd71f38]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;margin-top:%?40?%;margin-right:%?10?%}\n/* .maskBtn div{border-radius: 10upx;padding: 10upx 20upx;color:#000000;}\n\t.maskMain div{width: 120upx;height: 120upx;border-radius: 50%;background-color: #eee;display: flex;align-items: center;justify-content: center;margin-right: 20upx;}\n\t.maskMain img{width: 80upx;height: 80upx;}\n\t.maskText{font-size: 32upx;} */.dot[data-v-0bd71f38]{width:%?10?%;height:%?10?%;background-color:#09bb07;border-radius:50%;display:inline-block;margin-right:%?10?%}.data_h_h[data-v-0bd71f38]{background-color:#fff!important}.head[data-v-0bd71f38]{color:#fff;padding-top:%?50?%;position:relative;padding-bottom:%?50?%;background-color:#fff}.head>p[data-v-0bd71f38]{text-align:center;font-size:%?40?%;padding:%?30?% 0 %?72?% 0}.head_core[data-v-0bd71f38],.balance[data-v-0bd71f38],.order_one[data-v-0bd71f38],.order_two[data-v-0bd71f38],.list_ul li[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head_core[data-v-0bd71f38]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.core_noe[data-v-0bd71f38]{font-size:%?24?%;color:#9d9d9d;text-align:center}.core_noe img[data-v-0bd71f38]{width:%?42?%;height:%?40?%;margin-bottom:%?26?%}.core_two[data-v-0bd71f38]{font-size:%?30?%;text-align:center;color:#020202;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.core_two img[data-v-0bd71f38]{border-radius:50%;margin-bottom:%?10?%}.balance[data-v-0bd71f38]{width:%?690?%;height:%?140?%;background-color:#be9e5f;margin:0 auto;position:absolute;bottom:%?-60?%;left:4%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;font-size:%?32?%;border-radius:%?20?%}.balance_two[data-v-0bd71f38]{width:%?140?%;height:%?42?%;line-height:%?40?%;background-color:#242424;border-radius:%?22?%;text-align:center;font-size:%?24?%;color:#e5d1ad}.order[data-v-0bd71f38]{padding:0 %?30?%;font-size:%?26?%;color:#9d9d9d;background-color:#fff;margin-bottom:%?20?%}.order_one[data-v-0bd71f38]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order_one img[data-v-0bd71f38]{margin-left:%?12?%}.order_one img[data-v-0bd71f38]{width:%?16?%;height:%?28?%;vertical-align:sub}.order_one p[data-v-0bd71f38]{font-size:%?28?%;color:#020202}.order_two[data-v-0bd71f38]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;text-align:center;color:#666}.order_b[data-v-0bd71f38]{width:%?32?%;height:%?32?%;border-radius:50%;position:absolute;font-size:12px;top:%?-25?%;right:%?1?%;background-color:red;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order_plus[data-v-0bd71f38]{width:%?32?%;height:%?32?%;border-radius:50%;position:absolute;font-size:12px;top:%?-10?%;right:%?-13?%;background-color:red;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order_two img[data-v-0bd71f38]{width:%?44?%;height:%?40?%;margin-bottom:%?15?%;margin-right:0}.list_ul[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff}.list_ul li[data-v-0bd71f38]{font-size:%?28?%;color:#020202;border-bottom:1px solid #eee;width:33%;height:%?200?%;border-right:1px solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.list_ul li>div img[data-v-0bd71f38]{width:%?48?%;height:%?48?%;margin-bottom:%?20?%}.arrow[data-v-0bd71f38]{padding-right:%?36?%}.position_quan[data-v-0bd71f38]{position:relative}.button_kefu[data-v-0bd71f38]{background:transparent;padding:0;margin:0;border-radius:0;width:%?230?%;height:%?200?%;position:absolute;top:%?0?%;left:%?0?%}.button_kefu[data-v-0bd71f38]::after{border:none}.user-msg[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;text-align:left}.user-msg>div[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user-msg>div .span[data-v-0bd71f38]{font-size:%?30?%;color:#020202;font-weight:700;line-height:%?24?%}.user-msg-div[data-v-0bd71f38]{margin-top:%?15?%}.tag[data-v-0bd71f38]{font-size:%?24?%;vertical-align:middle;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:%?0?% %?16?%;height:%?48?%;font-family:Helvetica Neue,Helvetica,sans-serif;white-space:nowrap}.panpel[data-v-0bd71f38]{background-repeat:no-repeat;background-size:100%}.vip-flag[data-v-0bd71f38]{font-size:%?20?%;width:%?90?%;height:%?30?%;border-radius:%?6?%;margin-top:%?10?%;color:#666}.vip-flag[data-v-0bd71f38]::after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:%?1?% solid currentColor;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:inherit;z-index:1;pointer-events:none}.vip-join[data-v-0bd71f38]{background:-webkit-linear-gradient(left,#d1b686,#f6e8ce);background:linear-gradient(90deg,#d1b686,#f6e8ce);border-radius:%?5000?%;color:#242424;font-size:%?22?%;box-shadow:0 %?4?% %?4?% rgba(0,0,0,.2)}.level-tag[data-v-0bd71f38]{font-size:%?20?%;font-weight:500;height:%?30?%;border-radius:%?5?%;margin-left:%?19?%;padding:%?6?% %?8?%}.ren-ree[data-v-0bd71f38]{font-size:%?22?%;font-weight:500;line-height:%?22?%}.ren-ree-time[data-v-0bd71f38]{font-size:%?22?%;font-weight:500;line-height:%?22?%;margin-right:%?19?%}.vip-text[data-v-0bd71f38]{height:auto;padding:%?6?% %?20?%;text-align:center;border-radius:%?8?%;letter-spacing:.08rem}.vip-text .img[data-v-0bd71f38]{margin:0;width:%?21?%;height:%?17?%;margin-right:%?9?%}.vip-text1[data-v-0bd71f38]{padding:%?6?% %?12?%;text-align:center;background:#eee;border-radius:%?5?%;border:0;box-sizing:border-box;margin-left:%?20?%;font-size:%?20?%;color:#999}.vip-text1 .img1[data-v-0bd71f38]{margin:0;width:%?18?%;height:%?15?%;margin-right:%?7?%}.vip-core[data-v-0bd71f38]{padding:5px 10px;height:auto;max-height:%?52?%}.vip_modal[data-v-0bd71f38]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:999999}.vip_modal_data[data-v-0bd71f38]{position:absolute;top:50%;margin-top:%?-369?%;left:%?8?%;width:%?663?%;height:%?738?%;background-position:50%;background-size:100%;background-repeat:no-repeat;padding:%?142?% %?34?% 0 %?100?%}.vip_modal_close[data-v-0bd71f38]{position:absolute;bottom:%?-110?%;left:%?343?%;width:%?50?%;height:%?50?%}.vip_expire[data-v-0bd71f38]{text-align:center;font-size:%?36?%;background:-webkit-linear-gradient(63deg,#8e5b40,#7a482e);background:linear-gradient(27deg,#8e5b40,#7a482e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:%?55?%;margin-bottom:%?136?%}.vip_expire p[data-v-0bd71f38],.vip_act p[data-v-0bd71f38]{font-weight:700}.vip_act[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%;color:#86593d;line-height:%?36?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?56?%}.vip_modal_data>p[data-v-0bd71f38]{text-align:center;font-size:%?30?%;color:#93644a;font-weight:700;margin-top:%?154?%}.vip_radio[data-v-0bd71f38]{margin:0 auto;height:%?40?%;width:%?200?%;font-size:%?22?%;color:#e8e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?50?%}.vip_radio uni-image[data-v-0bd71f38]{width:%?20?%;height:%?20?%;margin-right:%?8?%}.xf_button[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:%?5?%;border:1px solid #e8ca96;color:#e8ca96;padding:%?10?% 0;width:%?120?%}.head_imgDiv[data-v-0bd71f38]{margin:0 %?30?%;border-radius:50%;width:%?120?%;height:%?120?%}.head_imgDiv .img[data-v-0bd71f38]{width:%?120?%;height:%?120?%;margin:0}.center[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order_one .span[data-v-0bd71f38]{color:#666;font-size:%?24?%}.order_one .img[data-v-0bd71f38]{height:%?24?%;width:%?14?%}.order_two .img[data-v-0bd71f38]{width:%?48?%;height:%?44?%}.relative[data-v-0bd71f38]{position:relative}.bq_img[data-v-0bd71f38]{width:%?28?%;height:%?28?%;margin-right:%?10?%;position:relative;top:%?10?%}.vip_act .span[data-v-0bd71f38]{position:absolute;top:%?324?%;left:%?186?%;font-size:%?32?%;color:hsla(0,0%,100%,.6)}.pr_10[data-v-0bd71f38]{padding-right:%?10?%!important}uni-view[data-v-0bd71f38],\nuni-scroll-view[data-v-0bd71f38],\nuni-swiper[data-v-0bd71f38],\nuni-button[data-v-0bd71f38],\nuni-input[data-v-0bd71f38],\nuni-textarea[data-v-0bd71f38],\nuni-label[data-v-0bd71f38],\nuni-navigator[data-v-0bd71f38],\nuni-image[data-v-0bd71f38]{box-sizing:border-box}.p-flex[data-v-0bd71f38]{display:-webkit-box;display:-webkit-flex;display:flex}.p-flex-sub[data-v-0bd71f38]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.p-flex-direction[data-v-0bd71f38]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.p-flex-wrap[data-v-0bd71f38]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.p-align-start[data-v-0bd71f38]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.p-align-end[data-v-0bd71f38]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.p-align-center[data-v-0bd71f38]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.p-align-stretch[data-v-0bd71f38]{-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.p-self-start[data-v-0bd71f38]{-webkit-align-self:flex-start;align-self:flex-start}.p-self-center[data-v-0bd71f38]{-webkit-align-self:flex-center;align-self:flex-center}.p-self-end[data-v-0bd71f38]{-webkit-align-self:flex-end;align-self:flex-end}.p-self-stretch[data-v-0bd71f38]{-webkit-align-self:stretch;align-self:stretch}.p-align-stretch[data-v-0bd71f38]{-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.p-justify-start[data-v-0bd71f38]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.p-justify-end[data-v-0bd71f38]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.p-justify-center[data-v-0bd71f38]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.p-justify-between[data-v-0bd71f38]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.p-justify-around[data-v-0bd71f38]{-webkit-justify-content:space-around;justify-content:space-around}.p-text-black[data-v-0bd71f38]{color:#333}.p-text-cut[data-v-0bd71f38]{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.p-response[data-v-0bd71f38]{width:100%}.my_data3 .data3[data-v-0bd71f38]{width:auto;-webkit-box-flex:1;-webkit-flex:1;flex:1}.my_data3 .data3+.data3[data-v-0bd71f38]{margin-left:15px}.order_ii[data-v-0bd71f38]{height:100%}.p-order[data-v-0bd71f38]{background-color:#fff}.p-order[data-v-0bd71f38],.p-order-b[data-v-0bd71f38],.p-order-t[data-v-0bd71f38]{width:100%}.p-order-t[data-v-0bd71f38]{font-size:14px;color:#020202;padding:10px 15px;line-height:20px}.p-order-t uni-text[data-v-0bd71f38]{color:#666;font-size:12px}.p-order-t uni-image[data-v-0bd71f38]{width:7px;height:12px;margin-left:5px}.p-order-b[data-v-0bd71f38]{padding:%?30?%}.p-item[data-v-0bd71f38]{color:#666;font-size:%?26?%}.p-item-t[data-v-0bd71f38]{position:relative}.p-item-t uni-image[data-v-0bd71f38]{width:%?44?%;height:%?40?%;margin-bottom:%?15?%}.p-item-tags[data-v-0bd71f38]{width:%?32?%;height:%?32?%;border-radius:50%;position:absolute;font-size:%?22?%;top:%?-25?%;right:%?1?%;background-color:red;color:#fff}',""]),n.exports=t},aca0:function(n,t,e){"use strict";var i=e("0b96"),a=e.n(i);a.a},b431:function(n,t,e){"use strict";var i=e("4ea4");e("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("5530")),o=e("2773"),s=e("2f62"),d={data:function(){return{baiyin_bg:"",huangjin_bg:"",heijin_bg:"",log:"",yhqBg:uni.getStorageSync("endurl")+"images/icon/yhqBg.png",qbBg:uni.getStorageSync("endurl")+"images/icon/qbBg.png",jfBg:uni.getStorageSync("endurl")+"images/icon/jfBg.png",sz:uni.getStorageSync("endurl")+"images/icon1/sz.png",shdz:uni.getStorageSync("endurl")+"images/icon1/shdz.png",gywm:uni.getStorageSync("endurl")+"images/icon1/gywm.png",wdsc:uni.getStorageSync("endurl")+"images/icon1/wdsc.png",vip_check_img1:uni.getStorageSync("endurl")+"images/icon/vip_checked.png",vip_check_img2:uni.getStorageSync("endurl")+"images/icon/vip_nocheck.png",bg_vip:"background-image: url("+uni.getStorageSync("endurl")+"images/icon/vip_modal.png)",close_img:uni.getStorageSync("endurl")+"images/icon/vip_close.png",shouquan2:!1,unLogin:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/unLogin.png",xx:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xx.png",myGroup:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/myGroup.png",change:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/change.png",storeLogo:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/storeLogo.png",vip_arrow:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/arrow.png",yhq:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/yhq.png",love:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/love2x.png",messageImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/dpj.png",jiantou:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jiantou2x.png",qianbao:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/dfk.png",zu:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/dfh.png",dizhi:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/dsh.png",yueImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/tksh.png",tanhao:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/tanhao292x.png",logo:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/logo789.png",mddp:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/mddp.png",mdkj:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/kan3x.png",mdkf:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/mdkf.png",wdjp:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jp_my.png",wdfx:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/fx_centerIcon.png",integral_hui:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/jf.png",my_leve:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/my_leve.png",logo1:"",bottom:4,access_id:"",user:"",th_num:"",dfk_num:"",dfh_num:"",dsh_num:"",dpj_num:"",logoUrl:"",company:"",access_id1:!1,isClick:!1,openid:"",session_key:"",shouquanButton:!0,grade:"",grade_end:"",imgurl_my:"",imgurl_s:"",font_color:"",date_color:"",have_grade:"",vip_modal_flag:!1,vip_check:!1,rate:"",JP:0,FX:0,JF:0,MS:0,KJ:0,PT:0,QB:0,coupon:0,sign:0,mch:0,setShow:"zyjd"!=this.$store.state.channel,customBar:this.CustomBar}},onLoad:function(n){this.$store.state.frompage="my"},onShow:function(){console.log("onshow");var n=this;console.log(this.CustomBar),console.log(this.customBar),this.access_id=this.$store.state.access_id?this.$store.state.access_id:uni.getStorageSync("access_id"),n.LaiKeTuiCommon.getUrlFirst(n._axios),this.isClick=!1},onHide:function(){console.log("my-onhide")},onTabItemTap:function(n){this.LaiKeTuiCommon.closeMPAuthWin(this)},onUnload:function(){uni.removeStorageSync("isfx")},computed:{halfWidth:function(){var n=(0,o.getStorage)("data_height")?(0,o.getStorage)("data_height"):this.$store.state.data_height,t=parseInt(n);return t+"px"},pBottom:function(){var n;return n=120,uni.upx2px(n)+"px"}},methods:(0,a.default)({check_vip_radio:function(){this.vip_check=!this.vip_check},vip_modal_close:function(){if(setTimeout((function(){uni.showTabBar()}),10),this.vip_modal_flag=!this.vip_modal_flag,this.vip_modal_flag?uni.hideTabBar():uni.showTabBar(),this.vip_check){var n={module:"app",action:"recharge",app:"close",access_id:this.access_id};uni.request({data:n,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(n){}})}},vip_renew:function(){if(this.vip_check){var n={module:"app",action:"recharge",app:"close",access_id:this.access_id};uni.request({data:n,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(n){}})}this.toVip(2)},changeLoginStatus:function(){var n=this;n.access_id=n.$store.state.access_id,n._axios()},_logo:function(){var n=this,t={module:"app",action:"index",app:"index",access_id:this.access_id};uni.request({data:t,url:uni.getStorageSync("url"),xhrFields:{withCredentials:!0},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){console.log(t);var e=t.data.data.logo;n.log=e}})},_navigateTo:function(n){"zyjd"!=this.$store.state.channel?uni.navigateTo({url:n}):this.$loginFrom.login(this)},_cancelSq:function(){this.shouquanButton=!0},_navigateTo1:function(n){var t=this;0==this.isClick&&(this.isClick=!0,t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../login/login?landing_code=1",(function(){uni.navigateTo({url:n})})),setTimeout((function(){t.isClick=!1}),2e3))},_order:function(n){var t=this;t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../login/login?landing_code=1",(function(){t.status(n),uni.navigateTo({url:"../order/myOrder"})}))},_axios:function(){var n=this,t={access_id:n.access_id?n.access_id:this.$store.state.access_id,module:"app",action:"user",app:"index"};uni.request({data:t,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){if(console.log("!@!@!@!@!@!@!"),console.log(t),n.coupon=t.data.plugin.coupon,n.sign=t.data.plugin.sign,n.mch=t.data.plugin.mch,404==t.data.code)n.access_id1=!1,n.grade="普通会员",n.JP=t.data.plugin.JP,n.FX=t.data.plugin.FX,n.JF=t.data.plugin.JF,n.MS=t.data.plugin.MS,n.KJ=t.data.plugin.KJ,n.PT=t.data.plugin.PT;else if(200==t.data.code){var e=t.data,i=e.data,a=i.user,o=i.dfh_num,s=i.logo,d=i.company,r=i.dfk_num,c=i.dpj_num,l=i.dsh_num,g=i.th,p=i.grade,f=i.grade_end,u=i.imgurl_my,b=i.imgurl_s,v=i.font_color,m=i.date_color,_=i.have_grade,h=i.remind,w=i.rate,x=e.plugin;n.user=a,n.th_num=g,n.dfk_num=r,n.dfh_num=o,n.dsh_num=l,n.dpj_num=c,n.logoUrl=s,n.company=d,n.logo1=a.headimgurl,n.$store.state.user_phone=a.mobile,uni.setStorage({key:"user_phone",data:a.mobile}),n.access_id1=!0,n.grade=p,n.grade_end=f,n.imgurl_my=u,n.imgurl_s=b,n.font_color=v,n.date_color=m,n.have_grade=_,n.rate=w,n.vip_modal_flag=!!h,n.vip_modal_flag?uni.hideTabBar():uni.showTabBar(),n.JP=x.JP,n.FX=x.FX,n.JF=x.JF,n.MS=x.MS,n.KJ=x.KJ,n.PT=x.PT}},error:function(n){console.log(n)}})},toVip:function(n){uni.setStorageSync("edit_flag",n),uni.setStorageSync("edit_grade",this.grade),this._navigateTo("../../pagesA/vip/vip")}},(0,s.mapMutations)({status:"SET_STATUS"}))};t.default=d}}]);