(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pay-orderDetailsr~pagesB-integral-integral_order~pagesB-seckill-seckillDetailsr"],{"06c5":function(e,a,t){"use strict";t("a630"),t("fb6a"),t("d3b7"),t("25f0"),t("3ca3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var o=i(t("6b75"));function i(e){return e&&e.__esModule?e:{default:e}}function n(e,a){if(e){if("string"===typeof e)return(0,o.default)(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,o.default)(e,a):void 0}}},"08fb":function(e,a,t){var o=t("754f");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=t("4f06").default;i("04dbbf7e",o,!0,{sourceMap:!1,shadowMode:!1})},1572:function(e,a,t){"use strict";t.r(a);var o=t("1b52"),i=t("5fd1");for(var n in i)"default"!==n&&function(e){t.d(a,e,(function(){return i[e]}))}(n);t("a0c5");var r,s=t("f0c5"),d=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"f2707d74",null,!1,o["a"],r);a["default"]=d.exports},"18f6":function(e,a,t){"use strict";t.r(a);var o=t("493e"),i=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(a,e,(function(){return o[e]}))}(n);a["default"]=i.a},"1ad4":function(e,a,t){var o=t("24fb");a=o(!1),a.push([e.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),e.exports=a},"1b52":function(e,a,t){"use strict";var o;t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return o}));var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.show?t("v-uni-view",{staticClass:"payModel"},[t("v-uni-view",{staticClass:"payModel-msg",on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=e.$handleEvent(a)},click:function(a){arguments[0]=a=e.$handleEvent(a),e.cancel.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"payModel-card",on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=e.$handleEvent(a)}}},[t("v-uni-view",{staticClass:"payModel-card-head"},[t("v-uni-text",[e._v("输入支付密码")]),t("v-uni-image",{attrs:{src:e.qiandaoguanbiimg},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.cancel.apply(void 0,arguments)}}})],1),t("v-uni-view",{staticClass:"payModel-card-body"},[t("v-uni-view",{}),t("v-uni-view",{staticClass:"code"},[e._l(e.password,(function(a,o){return[t("v-uni-view",{key:o,staticClass:"code-item"},[e._v(e._s(a.text))])]}))],2),t("v-uni-view",{staticClass:"forget"},[t("v-uni-text",{on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.forgetPW.apply(void 0,arguments)}}},[e._v("忘记密码")])],1)],1),t("v-uni-view",{staticClass:"payModel-card-keyboard"},[t("v-uni-view",{staticClass:"keyboard"},[e._l(e.numlist,(function(a,o){return[t("v-uni-view",a>0?{key:o,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.enterPassword(a)}}}:{key:o,staticClass:"box0",class:{box1:""===a},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.enterPassword(a)}}},[e._v(e._s(a))])]})),t("v-uni-view",{staticStyle:{background:"#EAE9E8"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.deletePassword.apply(void 0,arguments)}}},[e._v("删除")])],2)],1)],1)],1):e._e()},n=[]},2773:function(e,a,t){"use strict";function o(e,a){uni.setStorage({key:e,data:a,success:function(){console.log("setSuccess")}})}function i(e){var a;return uni.getStorage({key:e,success:function(e){a=e.data,console.log("getSuccess")}}),a}function n(e){uni.removeStorage({key:e,success:function(e){console.log("removeSuccess")}})}Object.defineProperty(a,"__esModule",{value:!0}),a.setStorage=o,a.getStorage=i,a.removeStorage=n},"2ff3":function(e,a,t){"use strict";t("c975"),t("13d5"),t("4d63"),t("ac1f"),t("25f0"),t("466d"),t("5319"),t("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,i=/^<\/([-A-Za-z0-9_]+)[^>]*>/,n=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,r=f("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=f("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),d=f("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),l=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),c=f("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=f("script,style");function p(e,a){var t,p,f,g=[],_=e;g.last=function(){return this[this.length-1]};while(e){if(p=!0,g.last()&&u[g.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+g.last()+"[^>]*>"),(function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),a.chars&&a.chars(t),""})),y("",g.last());else if(0==e.indexOf("\x3c!--")?(t=e.indexOf("--\x3e"),t>=0&&(a.comment&&a.comment(e.substring(4,t)),e=e.substring(t+3),p=!1)):0==e.indexOf("</")?(f=e.match(i),f&&(e=e.substring(f[0].length),f[0].replace(i,y),p=!1)):0==e.indexOf("<")&&(f=e.match(o),f&&(e=e.substring(f[0].length),f[0].replace(o,b),p=!1)),p){t=e.indexOf("<");var m=t<0?e:e.substring(0,t);e=t<0?"":e.substring(t),a.chars&&a.chars(m)}if(e==_)throw"Parse Error: "+e;_=e}function b(e,t,o,i){if(t=t.toLowerCase(),s[t])while(g.last()&&d[g.last()])y("",g.last());if(l[t]&&g.last()==t&&y("",t),i=r[t]||!!i,i||g.push(t),a.start){var u=[];o.replace(n,(function(e,a){var t=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:c[a]?a:"";u.push({name:a,value:t,escaped:t.replace(/(^|[^\\])"/g,'$1\\"')})})),a.start&&a.start(t,u,i)}}function y(e,t){if(t){for(o=g.length-1;o>=0;o--)if(g[o]==t)break}else var o=0;if(o>=0){for(var i=g.length-1;i>=o;i--)a.end&&a.end(g[i]);g.length=o}}y()}function f(e){for(var a={},t=e.split(","),o=0;o<t.length;o++)a[t[o]]=!0;return a}function g(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function _(e){return e.reduce((function(e,a){var t=a.value,o=a.name;return e[o]?e[o]=e[o]+" "+t:e[o]=t,e}),{})}function m(e){e=g(e);var a=[],t={node:"root",children:[]};return p(e,{start:function(e,o,i){var n={name:e};if(0!==o.length&&(n.attrs=_(o)),i){var r=a[0]||t;r.children||(r.children=[]),r.children.push(n)}else a.unshift(n)},end:function(e){var o=a.shift();if(o.name!==e&&console.error("invalid state: mismatch end tag"),0===a.length)t.children.push(o);else{var i=a[0];i.children||(i.children=[]),i.children.push(o)}},chars:function(e){var o={type:"text",text:e};if(0===a.length)t.children.push(o);else{var i=a[0];i.children||(i.children=[]),i.children.push(o)}},comment:function(e){var t={node:"comment",text:e},o=a[0];o.children||(o.children=[]),o.children.push(t)}}),t.children}var b=m;a.default=b},"3b27":function(e,a,t){"use strict";t.r(a);var o=t("e597"),i=t("18f6");for(var n in i)"default"!==n&&function(e){t.d(a,e,(function(){return i[e]}))}(n);t("d78f");var r,s=t("f0c5"),d=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"a3abba48",null,!1,o["a"],r);a["default"]=d.exports},"493e":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o={props:["content","display"],data:function(){return{mask_value:""}},created:function(){console.log(this.display)},methods:{_click:function(e){this.mask_value=e,this.$emit("mask_value",this.mask_value)}}};a.default=o},"4ff1":function(e,a,t){var o=t("24fb");a=o(!1),a.push([e.i,'@charset "UTF-8";\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.payModel[data-v-f2707d74]{position:fixed;top:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;min-height:100vh;z-index:9999}.payModel-msg[data-v-f2707d74]{width:100%;min-height:100vh;z-index:100001;background-color:rgba(0,0,0,.5);position:absolute}.payModel-card[data-v-f2707d74]{width:100%;height:%?745?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;z-index:100002}.payModel-card-head[data-v-f2707d74]{height:%?86?%;border-bottom:%?2?% solid #ddd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?0?% %?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;color:#020202;font-size:%?34?%;font-weight:700}.payModel-card-head uni-image[data-v-f2707d74]{width:%?30?%;height:%?30?%;margin-right:%?20?%}.payModel-card-head uni-text[data-v-f2707d74]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.payModel-card-body[data-v-f2707d74]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.payModel-card-body .code[data-v-f2707d74]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?60?%}.payModel-card-body .code-item[data-v-f2707d74]{width:%?80?%;height:%?80?%;border:%?2?% solid #ddd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.payModel-card-body .forget[data-v-f2707d74]{text-align:end;margin:%?0?% %?30?%;margin-top:%?20?%;color:#0080ff}.payModel-card-keyboard[data-v-f2707d74]{height:%?360?%}.payModel-card-keyboard .keyboard[data-v-f2707d74]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?360?%;-webkit-flex-flow:wrap;flex-flow:wrap;background:#eae9e8}.payModel-card-keyboard .keyboard uni-view[data-v-f2707d74]{background:#fff;font-size:%?40?%;font-weight:700;color:#020202;border:%?2?% solid #ddd;margin-left:-1px;margin-top:-1px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?86?%;width:%?248?%}.payModel-card-keyboard .box0[data-v-f2707d74]{grid-column-start:2}.box1[data-v-f2707d74]{background:#eae9e8!important}',""]),e.exports=a},"5fd1":function(e,a,t){"use strict";t.r(a);var o=t("cc1a"),i=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(a,e,(function(){return o[e]}))}(n);a["default"]=i.a},"6b75":function(e,a,t){"use strict";function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,o=new Array(a);t<a;t++)o[t]=e[t];return o}Object.defineProperty(a,"__esModule",{value:!0}),a.default=o},"70e1":function(e,a,t){"use strict";t.r(a);var o=t("7b60"),i=t("cafa");for(var n in i)"default"!==n&&function(e){t.d(a,e,(function(){return i[e]}))}(n);var r,s=t("f0c5"),d=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);a["default"]=d.exports},"754f":function(e,a,t){var o=t("24fb");a=o(!1),a.push([e.i,".mask[data-v-a3abba48]{height:100vh;width:100%;background-color:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mask_content[data-v-a3abba48]{width:%?550?%;height:%?250?%;background-color:#fff;text-align:center;font-size:%?30?%;border-radius:%?23?%;position:relative}.mask_content >div[data-v-a3abba48]{border-top:1px solid #eee;width:100%;font-size:%?34?%;color:#005edf;height:%?94?%;position:absolute;bottom:0;left:0}.cancel[data-v-a3abba48]{border-right:1px solid #eee;color:#999}.cancel[data-v-a3abba48],.confirm[data-v-a3abba48]{width:50%;float:left;height:100%;line-height:%?98?%;font-size:%?34?%}.confirm[data-v-a3abba48]{color:#020202}.mask_content>p[data-v-a3abba48]{font-size:%?30?%;color:#333;line-height:%?160?%}",""]),e.exports=a},"7b60":function(e,a,t){"use strict";var o;t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return o}));var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{width:"100%","max-width":"100%"}},[t("v-uni-rich-text",{staticStyle:{"font-size":"14px",width:"100%","max-width":"100%"},attrs:{nodes:e.nodes}})],1)},n=[]},"82a0":function(e,a,t){"use strict";var o;t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return o}));var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{style:"display:flex;height:"+e.BoxHeight},[t("div",{staticClass:"head",class:{head_w:"1"==e.ishead_w,border:1==e.border}},[t("div",{class:{white:!e.navWhite},style:{height:e.halfWidth}}),t("div",{staticClass:"header"},[e.flag&&!e.returnFlag?t("div",{on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e._back1.apply(void 0,arguments)}}},["1"==e.ishead_w?t("img",{attrs:{src:e.back1}}):t("img",{attrs:{src:e.back}})]):e._e(),e.flag||e.returnFlag?e._e():t("img",{staticClass:"header_img",attrs:{src:e.bback},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e._back1.apply(void 0,arguments)}}}),t("p",{class:{title_w:"1"==e.ishead_w}},[e._v(e._s(e.title))])])])])},n=[]},"865e":function(e,a,t){"use strict";var o=t("8902"),i=t.n(o);i.a},8902:function(e,a,t){var o=t("1ad4");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=t("4f06").default;i("774cd36e",o,!0,{sourceMap:!1,shadowMode:!1})},9653:function(e,a,t){"use strict";var o=t("4ea4");t("a9e3"),t("e25e"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(t("5530")),n=t("2f62"),r=t("2773"),s={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var e=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,a=parseInt(e);return a+"px"},BoxHeight:function(){var e=(0,r.getStorage)("data_height")?(0,r.getStorage)("data_height"):this.$store.state.data_height,a=0,t=parseInt(e)+uni.upx2px(88);return a=t&&t>0?t:uni.upx2px(88),a+"px"}},onLoad:function(e){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,i.default)((0,i.default)({},(0,n.mapMutations)({status:"data_height"})),{},{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};a.default=s},a0c5:function(e,a,t){"use strict";var o=t("ea9e"),i=t.n(o);i.a},b85c:function(e,a,t){"use strict";t("a4d3"),t("e01a"),t("d28b"),t("d3b7"),t("3ca3"),t("ddb0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var o=i(t("06c5"));function i(e){return e&&e.__esModule?e:{default:e}}function n(e,a){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=(0,o.default)(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,d=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){d=!0,r=e},f:function(){try{s||null==t["return"]||t["return"]()}finally{if(d)throw r}}}}},cafa:function(e,a,t){"use strict";t.r(a);var o=t("f7c9"),i=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(a,e,(function(){return o[e]}))}(n);a["default"]=i.a},cba7:function(e,a,t){"use strict";t.r(a);var o=t("9653"),i=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(a,e,(function(){return o[e]}))}(n);a["default"]=i.a},cbdc:function(e,a,t){"use strict";function o(e){var a=e;if("jp"==a.pay_name){var t=parseFloat(a.jp_zong-a.value).toFixed(2);console.log("me.needpay=================5"),console.log(a.needpay),t>0?(a.needpay=t,console.log("me.needpay=================6"),console.log(a.needpay)):(a.needpay=0,console.log("me.needpay=================7"),console.log(a.needpay))}else if(a.bargain){var o=parseFloat(a.products_total+a.freight-a.value).toFixed(2);o>0?(a.needpay=o,console.log("me.needpay=================8"),console.log(a.needpay)):(a.needpay=0,console.log("me.needpay=================9"),console.log(a.needpay))}else{console.log(a.coupon_name);var i=parseFloat((a.products_total-a.coupon_name-a.reduce_money)*a.discount*a.grade_rate+a.freight-a.value).toFixed(2);i>0?(a.needpay=i,console.log("me.needpay=================10"),console.log(a.needpay)):(a.needpay=0,console.log("me.needpay=================11"),console.log(a.needpay))}}function i(e){var a=e;if(a.useWallte)a.wxPayStatue?a.pay_wx():(uni.showToast({title:"请选择支付方式！",duration:1e3,icon:"none"}),a.firstFlag=!0);else if(a.wxPayStatue||a.aliPayStatue||a.baidupayStatue){if(console.log("jcex3==============="),"jp"==a.pay_name){var t={module:"app",action:"order",app:"payment",access_id:a.access_id,address_id:a.address_id,type:"JP",auction_id:a.bind_id,coupon_id:a.coupon_id};a.cpId&&(t.product=a.cpId,t.cart_id="")}else if("MS"==a.otype){var o=JSON.parse(a.cpId)[3];t={module:"app",action:"order",app:"payment",type:"MS",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,coupon_id:a.coupon_id,activity_id:a.activity_id,time_id:a.time_id,sec_id:o.sec_id};a.cpId&&(t.product=a.cpId,t.cart_id="")}else if(a.bargain){t={module:"app",action:"order",app:"payment",type:"KJ",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,bargain_id:a.bargain_id,bargain_order_no:a.order_no};a.cpId&&(t.product=a.cpId,t.cart_id="")}else{t={module:"app",action:"order",app:"payment",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,coupon_id:a.coupon_id};a.cpId&&(t.product=a.cpId,t.cart_id="")}a.wxPayStatue||a.aliPayStatue||a.baidupayStatue,a.afhalen_translateX>5&&(""==a.shop_address_id?(uni.showToast({title:"请选择门店！",duration:1e3,icon:"none"}),a.firstFlag=!0):t.shop_address_id=a.shop_address_id),uni.request({data:t,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log(e);var t=e.data,o=t.status,i=t.data;a.order_list=JSON.stringify(i),0!=o?1==o&&(a.sNo=e.data.data.sNo,a.price1=e.data.data.total,a.order_id=e.data.data.order_id,a.wxPayStatue?a.pay_wx("wx"):a.aliPayStatue?a.pay_wx("ali"):a.baidupayStatue&&a.pay_wx("baidu_pay")):uni.showToast({title:e.data.err,duration:1500,icon:"none"})},error:function(e){uni.hideLoading(),a.firstFlag=!0,uni.showToast({title:"创建订单失败,请稍后再试!",duration:1500,icon:"none"}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)}})}else uni.showToast({title:"请选择支付方式！",duration:1e3,icon:"none"}),a.firstFlag=!0}function n(e,a){console.log("======laikeChooseWay======"),uni.getProvider({service:"payment",success:function(e){console.log(e)}});var t=e;if("wxPay"==a)t.wxPayStatue?t.wxPayStatue=!1:(t.useWallte=!1,t.wxPayStatue=!0,t.aliPayStatue=!1,t.baidupayStatue=!1,t.value2=t.value,t.value="");else if("aliPay"==a)t.aliPayStatue?t.aliPayStatue=!1:(t.useWallte=!1,t.wxPayStatue=!1,t.aliPayStatue=!0,t.baidupayStatue=!1,t.value2=t.value,t.value="");else if("baidu"==a)t.baidupayStatue?t.baidupayStatue=!1:(t.useWallte=!1,t.wxPayStatue=!1,t.aliPayStatue=!1,t.baidupayStatue=!0,t.value2=t.value,t.value="");else if("balance"==a)if(t.useWallte)t.useWallte=!1;else if(t.useWallte=!0,t.wxPayStatue=!1,t.aliPayStatue=!1,t.baidupayStatue=!1,t.total>=Number(t.user_money))t.value=t.user_money,console.log("me.value=================1"),console.log(t.value),t.needpay=parseFloat(t.total-Number(t.user_money)).toFixed(2),console.log("me.needpay=================12"),console.log(t.needpay);else if(t.bargain)t.value=Number(t.products_total)+Number(t.freight),console.log("me.value=================2"),console.log(t.value),t.needpay=0,console.log("me.needpay=================13"),console.log(t.needpay);else{t.value=parseFloat((t.products_total-t.coupon_name-t.reduce_money)*t.discount*t.grade_rate+t.freight).toFixed(2),console.log("me.value=================3"),console.log(t.value);var o=(t.products_total-t.coupon_name-t.reduce_money)*t.discount*t.grade_rate+t.freight;t.total=o,t.needpay=0,console.log("me.needpay=================14"),console.log(t.needpay),""===t.value&&(t.value=t.value2),o-t.value>0&&(t.needpay=o-t.value,console.log("me.needpay=================15"),console.log(t.needpay))}}function r(e,a){var t=a;if(!(Number(t.user_money)<=0))if(t.useWallte=!t.useWallte,t.useWallte)if(t.wxPayStatue=!1,t.aliPayStatue=!1,t.baidupayStatue=!1,t.total>=Number(t.user_money))t.value=t.user_money,console.log("me.value=================1"),console.log(t.value),t.needpay=parseFloat(t.total-Number(t.user_money)).toFixed(2),console.log("me.needpay=================12"),console.log(t.needpay);else if(t.bargain)t.value=Number(t.products_total)+Number(t.freight),console.log("me.value=================2"),console.log(t.value),t.needpay=0,console.log("me.needpay=================13"),console.log(t.needpay);else{t.value=parseFloat((t.products_total-t.coupon_name-t.reduce_money)*t.discount*t.grade_rate+t.freight).toFixed(2),console.log("me.value=================3"),console.log(t.value);var o=(t.products_total-t.coupon_name-t.reduce_money)*t.discount*t.grade_rate+t.freight;t.total=o,t.needpay=0,console.log("me.needpay=================14"),console.log(t.needpay),""===t.value&&(t.value=t.value2),o-t.value>0&&(t.needpay=o-t.value,console.log("me.needpay=================15"),console.log(t.needpay))}else t.wxPayStatue=!1,t.aliPayStatue=!1,t.baidupayStatue=!1,t.value2=t.value,t.value="",t.needpay=""}function s(e,a,t){var o=e;o.$nextTick((function(){o.price1=(o.products_total-o.coupon_name-o.reduce_money)*o.discount*o.grade_rate,console.log("计算price1"+o.products_total+"===="+o.discount+"===="+o.freight+"===="+o.coupon_name+"===="+o.reduce_money),o.price2=o.price1.toFixed(2),console.log(o.price2),o.price2<0?(o.price2=.01+o.freight,o.price2=o.price2.toFixed(2),o.price2=Number(o.price2).toFixed(2)):(o.price2=o.price2+0+o.freight,o.price2=Number(o.price2).toFixed(2));var e=(o.products_total-o.coupon_name-o.reduce_money)*o.discount*o.grade_rate;if(e<=0?(e=.01+o.freight,o.price2=.01+o.freight,o.price2=Number(o.price2).toFixed(2),o.value=.01+o.freight,o.isdx=!0):e=e+0+o.freight,console.log(e>=0),console.log("计算should_pay"+o.products_total+"===="+o.discount+"===="+o.freight+"===="+o.coupon_name+"===="+o.reduce_money),console.log("Number(me.value)"),console.log(Number(o.value)),console.log("should_pay------"+e.toFixed(2)+"---Number(me.value)----"+Number(o.value)),o.price2=e.toFixed(2),Number(o.value)>o.user_money&&(o.value=o.user_money),Number(o.value)>e.toFixed(2)?(console.log("me.value=================999"),e<=o.user_money?(o.value=e.toFixed(2),console.log(e),console.log("me.value=================4"),console.log(o.value)):(o.value=o.user_money,console.log("me.value=================6"),console.log(o.value)),Number(o.value).toFixed(2)>e.toFixed(2)&&e.toFixed(2)>0&&(console.log("===========是否超过最大金额"),console.log(Number(o.value)),console.log(e),uni.showToast({title:"已超过最大金额",icon:"none",duration:1500}))):Number(o.value)<e&&Number(o.value)>o.user_money&&(o.value=o.user_money,console.log("me.value=================7"),console.log(o.value),uni.showToast({title:"已超过最大金额",icon:"none",duration:1500})),o.price2<.0099999999&&console.log("me.value=================888"),0==Math.abs(a-t)){console.log("me.value=================777");var i=String(a).indexOf(".")+1,n=String(a).length-i;n>2&&0!=i&&(o.value=Number(a).toFixed(2),console.log("me.value=================8"),console.log(o.value))}else Math.abs(a-t)<.009999999999&&(o.value=Number(o.value).toFixed(2),console.log("me.value=================9"),console.log(o.value))}))}function d(e){var a=e;if(!a.can_pay)return!1;if(console.log("click"),a.can_pay=!1,setTimeout((function(){a.can_pay=!0}),1500),a._gotPayType(),a.firstFlag)if(a.firstFlag=!1,a.value||(a.value=0),a.bargain||a.seckill?a.price1=a.products_total+a.freight-Number(a.value):a.price1=a.products_total+a.freight-a.coupon_name-Number(a.reduce_money)-Number(a.value),a.price1=a.price1.toFixed(2),a.afhalen_translateX>5)if(a.shop_address_id)if(a.useWallte)if(0==a.password_status)uni.showModal({title:"提示",content:"请先设置支付密码",showCancel:!0,success:function(e){a.firstFlag=!0,e.confirm&&uni.navigateTo({url:"../../pagesB/setUp/payment"})}});else{var t=(Number(a.products_total)-Number(a.coupon_name)-Number(a.reduce_money))*Number(a.discount)*Number(a.grade_rate)+Number(a.freight);if((0!=Number(a.needpay)||Number(t).toFixed(2)>Number(a.value).toFixed(2))&&!(a.wxPayStatue||a.aliPayStatue||a.baidupayStatue))return uni.showToast({title:"金额不足以支付商品价格!",icon:"none",duration:1500}),!1;if("jp"==a.pay_name)var o={module:"app",action:"order",app:"payment",access_id:a.access_id,address_id:a.address_id,type:"JP",auction_id:a.bind_id,coupon_id:a.coupon_id,remarks:a.remarks};else if(a.bargain){console.log("me.bargain");o={module:"app",action:"order",app:"payment",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,type:"KJ",coupon_id:a.coupon_id,bargain_id:a.bargain_id,bargain_order_no:a.order_no,remarks:a.remarks}}else if(a.seckill){console.log("me.seckill");var i=JSON.parse(a.cpId)[3];o={module:"app",action:"order",app:"payment",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,type:"MS",coupon_id:a.coupon_id,bargain_id:"",bargain_order_no:"",remarks:a.remarks,activity_id:a.activity_id,time_id:a.time_id,platform_activities_id:a.platform_activities_id,sec_id:i.sec_id};console.log("1me.activity_id:"+a.activity_id),console.log("1me.time_id:"+a.time_id)}else o={module:"app",action:"order",app:"payment",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,coupon_id:a.coupon_id,bargain_id:a.bargain_id,bargain_order_no:a.order_no,remarks:a.remarks,shop_address_id:a.shop_address_id};if(a.cpId&&(o.product=a.cpId,o.cart_id=""),a.wxPayStatue?(o.pay_type="jsapi_wechat",o.store_type=2):a.aliPayStatue?o.pay_type="aliPay":a.baidupayStatue&&(o.pay_type="baidu_pay"),uni.request({data:o,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(404!=e.data.code){var t=e.data,o=t.status,i=t.data;1==o?(a.makeOrd=!0,a.sNo=e.data.data.sNo,a.order_list=JSON.stringify(i)):(a.firstFlag=!0,uni.hideLoading(),uni.showToast({title:"创建订单失败,请稍后再试!",duration:1500,icon:"none"}),setTimeout((function(){uni.navigateBack({url:"../good/goodsDetailed"})}),1500))}else uni.hideLoading()}}),a.price1>0){console.log("立即支付6");var n=(Number(a.products_total)-Number(a.coupon_name)-Number(a.reduce_money))*Number(a.discount)*Number(a.grade_rate)+Number(a.freight);if(n=n.toFixed(2),0!=Number(a.needpay)||n>a.value){if(!(a.wxPayStatue||a.aliPayStatue||a.baidupayStatue))return a.firstFlag=!0,uni.showToast({title:"金额不足以支付商品价格!2",icon:"none",duration:1500}),!1;a.pay_display=!0,console.log("立即支付7")}else console.log("立即支付8"),a.pay_display=!0}else a.pay_display=!0}else uni.showLoading({title:"正在请求支付...",mask:!0}),a.payThree();else uni.showToast({title:"请选择门店！",duration:1e3,icon:"none"});else if(a.adds_f)if(a.useWallte)if(console.log("立即支付5"),0==a.password_status)uni.showModal({title:"提示",content:"请先设置支付密码",showCancel:!0,success:function(e){a.firstFlag=!0,e.confirm&&uni.navigateTo({url:"../../pagesB/setUp/payment"})}});else{var r=(Number(a.products_total)-Number(a.coupon_name)-Number(a.reduce_money))*Number(a.discount)*Number(a.grade_rate)+Number(a.freight);if(console.log("isdx:"+a.isdx),a.isdx&&a.user_money>.01&&(a.needpay=0),console.log(r),console.log(a.needpay),console.log(Number(r).toFixed(2)>Number(a.value).toFixed(2)),(0!=Number(a.needpay)||Number(r).toFixed(2)>Number(a.value).toFixed(2))&&!(a.wxPayStatue||a.aliPayStatue||a.baidupayStatue))return uni.showToast({title:"金额不足以支付商品价格!3",icon:"none",duration:1500}),!1;if(console.log("jcex2============"),"jp"==a.pay_name)o={module:"app",action:"order",app:"payment",access_id:a.access_id,address_id:a.address_id,type:"JP",auction_id:a.bind_id,coupon_id:a.coupon_id,remarks:a.remarks};else if(a.bargain)o={module:"app",action:"order",app:"payment",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,type:"KJ",coupon_id:a.coupon_id,bargain_id:a.bargain_id,bargain_order_no:a.order_no,remarks:a.remarks};else if(a.seckill){console.log("me.seckill");var s=JSON.parse(a.cpId)[3];o={module:"app",action:"order",app:"payment",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,type:"MS",coupon_id:a.coupon_id,bargain_id:"",bargain_order_no:"",remarks:a.remarks,activity_id:a.activity_id,time_id:a.time_id,platform_activities_id:a.platform_activities_id,sec_id:s.sec_id}}else o={module:"app",action:"order",app:"payment",cart_id:a.cart_id,access_id:a.access_id,address_id:a.address_id,coupon_id:a.coupon_id,bargain_id:a.bargain_id,bargain_order_no:a.order_no,remarks:a.remarks,shop_address_id:a.shop_address_id};if(a.cpId&&(o.product=a.cpId,o.cart_id=""),a.wxPayStatue?(o.pay_type="jsapi_wechat",o.store_type=2):a.aliPayStatue?o.pay_type="aliPay":a.baidupayStatue&&(o.pay_type="baidu_pay"),uni.request({data:o,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(404!=e.data.code){var t=e.data,o=t.status,i=t.data;if(1==o)a.makeOrd=!0,a.sNo=e.data.data.sNo,a.order_list=JSON.stringify(i);else{if(""!=e.data.redis_name&&a.seckill)return uni.showToast({title:"手速慢了哦，已经就被抢完了!",duration:1500,icon:"none"}),setTimeout((function(){uni.navigateBack({delta:2})}),1500),!1;a.firstFlag=!0,uni.hideLoading(),uni.showToast({title:"创建订单失败,请稍后再试!",duration:1500,icon:"none"}),setTimeout((function(){uni.navigateBack({url:"../good/goodsDetailed"})}),1500)}}else uni.hideLoading()}}),a.price1>0){console.log("立即支付6");var d=(Number(a.products_total)-Number(a.coupon_name)-Number(a.reduce_money))*Number(a.discount)*Number(a.grade_rate)+Number(a.freight);if(d=d.toFixed(2),0!=Number(a.needpay)||d>a.value){if(!(a.wxPayStatue||a.aliPayStatue||a.baidupayStatue))return a.firstFlag=!0,uni.showToast({title:"金额不足以支付商品价格!4",icon:"none",duration:1500}),!1;a.pay_display=!0,console.log("立即支付7")}else console.log("立即支付8"),a.pay_display=!0}else a.pay_display=!0}else uni.showLoading({title:"正在请求支付...",mask:!0}),console.log("me.otype"),console.log(a.otype),a.payThree();else uni.showToast({title:"请完善收货地址！",duration:1e3,icon:"none"})}function l(e){var a=e;console.log(a.useWallte),console.log(a.wxPayStatue),console.log(a.aliPayStatue),a.useWallte||a.wxPayStatue||a.aliPayStatue||a.baidupayStatue?a.firstFlag=!0:(uni.showToast({title:"请选择支付方式！",duration:1e3,icon:"none"}),a.firstFlag=!1)}function c(e){var a=e;a.use_coupon=!0;var t={module:"app",action:"Coupon",app:"my_coupon",access_id:a.access_id,cart_id:a.cart_id,product:a.cpId};uni.request({data:t,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(200==e.data.code){var t=e.data.list;a.coupon_list=t}else uni.showToast({title:e.data.message,duration:1500,icon:"none"})},error:function(e){console.log(e)}})}function u(e){var a=e;a.use_coupon=!1;var t={module:"app",action:"Coupon",app:"getvou",access_id:a.access_id,cart_id:a.cart_id,address_id:a.address_id,coupon_id:a.coupon_id,product:a.cpId};a.coupon_id.length>0&&uni.request({data:t,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(200==e.data.code){e.data.money;a.freightt=parseFloat(e.data.freight).toFixed(2),a.freight=e.data.freight,a.coupon_name1=e.data.coupon_name;var t=Number(a.products_total)+Number(a.freight)-Number(a.coupon_name)-Number(a.reduce_money);a.total=t}else uni.showToast({title:e.data.message,duration:1500,icon:"none"});if(200==e.statusCode){a.coupon_name=e.data.money,a.total=a.products_total+a.freight-a.coupon_name-a.reduce_money;var o=a.products_total-a.coupon_name-a.reduce_money;console.log(a.products_total),console.log(a.freight),console.log(a.coupon_name),console.log(a.reduce_money),a.useWallte?a.total>=Number(a.user_money)?(a.value=a.user_money,console.log("me.value=================10"),console.log(a.value),a.needpay=parseFloat(a.products_total-Number(a.user_money)).toFixed(2),console.log("me.needpay=================1"),console.log(a.needpay)):(a.value=a.total,console.log("me.value=================11"),console.log(a.value),a.needpay=0,console.log("me.needpay=================2"),console.log(a.needpay)):o>0?(a.needpay=parseFloat(a.total).toFixed(2),console.log("me.needpay=================3"),console.log(a.needpay)):o<=0&&a.total>0?(a.needpay=parseFloat(a.total).toFixed(2)+.01,console.log("me.needpay=================33"),console.log(a.needpay)):(a.needpay=.01,console.log("me.needpay=================4"),console.log(a.needpay))}}})}function p(e,a,t,o){var i=e;if(1==o){i.coupon_list.length;i.coupon_id.length>0?i.coupon_id=0==t?[0]:t:i.coupon_id=t}else uni.showToast({title:"不能使用该优惠券",icon:"none",duration:1500})}t("c975"),t("a9e3"),t("b680"),t("acd8"),Object.defineProperty(a,"__esModule",{value:!0}),a.laikeUseyue=o,a.laikePayThree=i,a.laikeChooseWay=n,a.laikeSwitchChange=r,a.laikeChangeValue=s,a.laikePayAtOnce=d,a.laikeGetPayType=l,a.laikeShowCoupon=c,a.laikeCloseCoupon=u,a.laikeChooseCoupon=p},cc1a:function(e,a,t){"use strict";var o=t("4ea4");t("d3b7"),t("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;for(var i=o(t("b85c")),n=[],r=0;r<6;r++)n.push({text:"",pass:""});var s={props:["value"],data:function(){return{numlist:[1,2,3,4,5,6,7,8,9,"",0],password:n,conu:6,num:0,qiandaoguanbiimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/guanbi2x.png",show:!1}},watch:{value:function(e){this.show=e},show:function(e){this.$emit("input",e)}},methods:{enterPassword:function(e){if(""!==e&&!(this.num>=this.conu)&&(this.password[this.num].text="●",this.password[this.num].pass=e,this.num++,this.num===this.conu)){var a,t="",o=(0,i.default)(this.password);try{for(o.s();!(a=o.n()).done;){var n=a.value;t+=n.pass.toString()}}catch(r){o.e(r)}finally{o.f()}this.success(t)}},deletePassword:function(){0!=this.num&&(this.password[this.num-1].text="",this.password[this.num-1].pass="",this.num--)},cancel:function(){this.restorePassword(),this.$emit("cancel")},restorePassword:function(){this.show=!this.show;var e,a=(0,i.default)(this.password);try{for(a.s();!(e=a.n()).done;){var t=e.value;t.text="",t.pass=""}}catch(o){a.e(o)}finally{a.f()}this.num=0},success:function(e){this.$emit("success",e),this.restorePassword()},forgetPW:function(){uni.navigateTo({url:"../../pagesB/setUp/paymentPassword"})}}};a.default=s},d78f:function(e,a,t){"use strict";var o=t("08fb"),i=t.n(o);i.a},e597:function(e,a,t){"use strict";var o;t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){return o}));var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.display?t("div",{staticClass:"mask",on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=e.$handleEvent(a)}}},[t("div",{staticClass:"mask_content"},[t("p",[e._v(e._s(e.content))]),t("div",[t("div",{staticClass:"cancel",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e._click("取消")}}},[e._v("取消")]),t("div",{staticClass:"confirm",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e._click("确认")}}},[e._v("确认")])])])]):e._e()},n=[]},ea9e:function(e,a,t){var o=t("4ff1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=t("4f06").default;i("28975f65",o,!0,{sourceMap:!1,shadowMode:!1})},f7c9:function(e,a,t){"use strict";var o=t("4ea4");t("ac1f"),t("5319"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(t("2ff3")),n={name:"wxParse",props:{content:{type:String,default:""}},computed:{nodes:function(){var e=this.content.replace(/src/g,"style='width:100%!important;height: auto!important;' src").replace(/table/g,'table style="width:100%!important;"');return(0,i.default)(e)}},methods:{}};a.default=n},fb77:function(e,a,t){"use strict";t.r(a);var o=t("82a0"),i=t("cba7");for(var n in i)"default"!==n&&function(e){t.d(a,e,(function(){return i[e]}))}(n);t("865e");var r,s=t("f0c5"),d=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"4b3c7e46",null,!1,o["a"],r);a["default"]=d.exports}}]);