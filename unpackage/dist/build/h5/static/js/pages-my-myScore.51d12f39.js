(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-myScore"],{"07db":function(t,e,a){"use strict";var i=a("86ab"),n=a.n(i);n.a},"0e9a":function(t,e,a){"use strict";a.r(e);var i=a("43c4"),n=a("3e15");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("07db");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"0d0a11e5",null,!1,i["a"],s);e["default"]=c.exports},"171c":function(t,e,a){"use strict";var i=a("eacf"),n=a.n(i);n.a},"1ad4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),t.exports=e},2773:function(t,e,a){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function n(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function o(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=n,e.removeStorage=o},"2ff3":function(t,e,a){"use strict";a("c975"),a("13d5"),a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("5319"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,n=/^<\/([-A-Za-z0-9_]+)[^>]*>/,o=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),r=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),c=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),d=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function f(t,e){var a,f,h,p=[],g=t;p.last=function(){return this[this.length-1]};while(t){if(f=!0,p.last()&&u[p.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(t,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(a),""})),m("",p.last());else if(0==t.indexOf("\x3c!--")?(a=t.indexOf("--\x3e"),a>=0&&(e.comment&&e.comment(t.substring(4,a)),t=t.substring(a+3),f=!1)):0==t.indexOf("</")?(h=t.match(n),h&&(t=t.substring(h[0].length),h[0].replace(n,m),f=!1)):0==t.indexOf("<")&&(h=t.match(i),h&&(t=t.substring(h[0].length),h[0].replace(i,v),f=!1)),f){a=t.indexOf("<");var b=a<0?t:t.substring(0,a);t=a<0?"":t.substring(a),e.chars&&e.chars(b)}if(t==g)throw"Parse Error: "+t;g=t}function v(t,a,i,n){if(a=a.toLowerCase(),r[a])while(p.last()&&c[p.last()])m("",p.last());if(d[a]&&p.last()==a&&m("",a),n=s[a]||!!n,n||p.push(a),e.start){var u=[];i.replace(o,(function(t,e){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[e]?e:"";u.push({name:e,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(a,u,n)}}function m(t,a){if(a){for(i=p.length-1;i>=0;i--)if(p[i]==a)break}else var i=0;if(i>=0){for(var n=p.length-1;n>=i;n--)e.end&&e.end(p[n]);p.length=i}}m()}function h(t){for(var e={},a=t.split(","),i=0;i<a.length;i++)e[a[i]]=!0;return e}function p(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function g(t){return t.reduce((function(t,e){var a=e.value,i=e.name;return t[i]?t[i]=t[i]+" "+a:t[i]=a,t}),{})}function b(t){t=p(t);var e=[],a={node:"root",children:[]};return f(t,{start:function(t,i,n){var o={name:t};if(0!==i.length&&(o.attrs=g(i)),n){var s=e[0]||a;s.children||(s.children=[]),s.children.push(o)}else e.unshift(o)},end:function(t){var i=e.shift();if(i.name!==t&&console.error("invalid state: mismatch end tag"),0===e.length)a.children.push(i);else{var n=e[0];n.children||(n.children=[]),n.children.push(i)}},chars:function(t){var i={type:"text",text:t};if(0===e.length)a.children.push(i);else{var n=e[0];n.children||(n.children=[]),n.children.push(i)}},comment:function(t){var a={node:"comment",text:t},i=e[0];i.children||(i.children=[]),i.children.push(a)}}),a.children}var v=b;e.default=v},"3e15":function(t,e,a){"use strict";a.r(e);var i=a("c4dc"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},4202:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yh-myscore"},[a("lktauthorize",{ref:"lktAuthorizeComp",on:{pChangeLoginStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLoginStatus.apply(void 0,arguments)}}}),t.load?a("div",{staticClass:"load"},[a("div",[a("img",{attrs:{src:t.loadGif}}),a("p",[t._v("加载中…")])])]):a("div",{staticClass:"yh-halfWidth2",style:{top:t.halfWidth2}},[a("div",{staticClass:"score_head"},[a("div",{staticClass:"scoreData"},[a("div",{staticClass:"scoreNum"},[t._v(t._s(t.scoreNum))]),a("div",{staticClass:"yh-kyjf"},[t._v("当前可用积分")]),a("v-uni-view",{staticClass:"scoreData-btn",staticStyle:{margin:"0 auto"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jmpNav()}}},[t._v("签到领积分")])],1),a("div",{staticClass:"useExp",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._toGradeUse(!0)}}},[a("img",{attrs:{src:t.useExp,alt:""}}),a("span",[t._v("使用说明")])]),a("v-uni-image",{attrs:{src:t.myScoreimg}})],1),a("div",{staticClass:"scoreRecode",style:{top:t.halfWidth1}},[a("div",{staticClass:"recodeTop"},[a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.topChange(0)}}},[a("span",[t._v("全部明细")]),0==t.topStatus?a("span",{staticClass:"border1"}):t._e()]),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.topChange(1)}}},[a("span",[t._v("获取明细")]),1==t.topStatus?a("span",{staticClass:"border1"}):t._e()]),a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.topChange(2)}}},[a("span",[t._v("使用明细")]),2==t.topStatus?a("span",{staticClass:"border1"}):t._e()])]),a("div",{staticClass:"recodeDiv"},[0==t.topStatus?a("div",[t._l(t.list1,(function(e,i){return a("div",{key:i,staticClass:"recodeDetail"},[a("div",[a("div",{staticClass:"recodeTitle"},[a("span",[t._v(t._s(e.name))])]),a("div",{staticClass:"recodeTime"},[t._v(t._s(e.sign_time))])]),a("div",[a("div",{staticClass:"recodeScore"},[e.status?a("span",[t._v("+"+t._s(e.sign_score))]):a("span",{staticClass:"yh-sign_score"},[t._v("-"+t._s(e.sign_score))])])])])})),t.list1.length>5?a("uni-load-more",{attrs:{loadingType:t.loadingType0}}):t._e()],2):1==t.topStatus?a("div",[t._l(t.list2,(function(e,i){return a("div",{key:i,staticClass:"recodeDetail"},[a("div",[a("div",{staticClass:"recodeTitle"},[a("span",[t._v(t._s(e.name))])]),a("div",{staticClass:"recodeTime"},[t._v(t._s(e.sign_time))])]),a("div",[a("div",{staticClass:"recodeScore"},[a("span",[t._v("+"+t._s(e.sign_score))])])])])})),t.list2.length>5?a("uni-load-more",{attrs:{loadingType:t.loadingType1}}):t._e()],2):2==t.topStatus?a("div",[t._l(t.list3,(function(e,i){return a("div",{key:i,staticClass:"recodeDetail"},[a("div",[a("div",{staticClass:"recodeTitle"},[a("span",[t._v(t._s(e.name))])]),a("div",{staticClass:"recodeTime"},[t._v(t._s(e.sign_time))])]),a("div",[a("div",{staticClass:"recodeScore"},[a("span",{staticClass:"yh-sign_score"},[t._v("-"+t._s(e.sign_score))])])])])})),t.list3.length>10?a("uni-load-more",{attrs:{loadingType:t.loadingType2}}):t._e()],2):t._e()])])]),a("ruleModal",{attrs:{title:"使用规则",details:t.content},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._toGradeUse.apply(void 0,arguments)}},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}})],1)},o=[]},"43c4":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShow?a("v-uni-view",{staticClass:"ruleModal",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.cancel()}}},[a("v-uni-view",{staticClass:"ruleModal-content",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"ruleModal-content-header"},[t._v(t._s(t.title))]),a("v-uni-scroll-view",{staticClass:"ruleModal-content-body",attrs:{"scroll-y":"true"}},[a("v-uni-rich-text",{attrs:{nodes:t.details}})],1),a("v-uni-view",{staticClass:"ruleModal-content-footer"},[a("v-uni-view",{staticClass:"foobtn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.cancel()}}},[a("v-uni-text",[t._v("我知道了")])],1)],1)],1)],1):t._e()},o=[]},"52bc":function(t,e,a){var i=a("802b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3951ebe2",i,!0,{sourceMap:!1,shadowMode:!1})},"554d":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("fb77")),o=i(a("db1b")),s=i(a("0e9a")),r=i(a("2ff3")),c={data:function(){return{loadingType0:0,loadingType1:0,loadingType2:0,topStatus:0,title:"我的积分",access_id:"",load:!1,scoreNum:"",list1:"",list2:"",list3:"",page0:1,page1:1,page2:1,myScoreimg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/integralback.png",useExp:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/useExp.png",loadGif:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/loading.gif",isShow:!1,content:""}},mounted:function(){var t=this;t.$nextTick((function(){t.$refs.lktAuthorizeComp.handleAfterAuth(t,"../login/login?landing_code=1",(function(){t.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):t.$store.state.access_id,t._axios()}))}))},methods:{jmpNav:function(){uni.navigateTo({url:"../../pagesA/shop/sign"})},changeLoginStatus:function(){var t=this;t.access_id=uni.getStorageSync("access_id"),t._axios()},_toGradeUse:function(t){var e=this;t?uni.request({data:{module:"app",action:"sign",app:"Instructions",access_id:this.access_id},url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){200==t.data.code?(e.content=(0,r.default)(t.data.Instructions),e.isShow=!e.isShow):uni.showToast({title:t.data.message,duration:1500,icon:"none"})}}):this.isShow=!this.isShow},topChange:function(t){this.topStatus=t,uni.pageScrollTo({scrollTop:0,duration:10})},_axios:function(){var t=this;uni.request({url:uni.getStorageSync("url"),data:{access_id:t.access_id,module:"app",action:"sign",app:"integral"},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){200==e.data.code?(t.scoreNum=e.data.data.score,t.list1=e.data.data.whole,t.list2=e.data.data.sign,t.list3=e.data.data.consumption):uni.showToast({title:e.data.message,duration:1500,icon:"none"})},error:function(t){console.log("异常"),console.error(t)}})}},computed:{halfWidth:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,e=parseInt(t),a=2*e;return uni.upx2px(a)+"px"},halfWidth1:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,e=(parseInt(t),0);return e=350,uni.upx2px(e)+"px"},halfWidth2:function(){var t=uni.getStorageSync("data_height")?uni.getStorageSync("data_height"):this.$store.state.data_height,e=parseInt(t),a=2*e;return a=0,uni.upx2px(a)+"px"}},onReachBottom:function(){var t=this;if(0==this.topStatus){if(0!=this.loadingType0)return;this.loadingType0=1;var e={module:"app",action:"sign",app:"load_integral",access_id:t.access_id,type:"",page:this.page0};uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log(e);var a=e.data.list;console.log(a),t.page0+=1,a.length>0?(t.list1=t.list1.concat(a),t.loadingType0=0):t.loadingType0=2},error:function(t){console.log(t)}})}else if(1==this.topStatus){if(0!=this.loadingType1)return;this.loadingType1=1;e={module:"app",action:"sign",app:"load_integral",access_id:t.access_id,type:1,page:this.page1};uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log(e);var a=e.data.list;console.log(a),t.page0+=1,a.length>0?(t.list2=t.list2.concat(a),t.loadingType1=0):t.loadingType1=2},error:function(t){console.log(t)}})}else if(2==this.topStatus){if(0!=this.loadingType2)return;this.loadingType2=1;e={module:"app",action:"sign",app:"load_integral",access_id:t.access_id,type:2,page:this.page2};uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){console.log(e);var a=e.data.list;console.log(a),t.page0+=1,a.length>0?(t.list3=t.list3.concat(a),t.loadingType2=0):t.loadingType2=2},error:function(t){console.log(t)}})}},components:{heads:n.default,uniLoadMore:o.default,ruleModal:s.default}};e.default=c},"7d18":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[]},"802b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".recodeTitle[data-v-e35c67d2]{font-size:%?28?%;color:#020202;margin-bottom:%?10?%}.recodeScore[data-v-e35c67d2]{font-size:%?28?%;color:#020202}.recodeTime[data-v-e35c67d2]{font-size:%?22?%;color:#999}.recodeDetail[data-v-e35c67d2]{height:%?120?%;padding:0 %?30?%;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.scoreNum[data-v-e35c67d2]{font-size:%?88?%;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.score_head[data-v-e35c67d2]{height:%?350?%;font-size:%?28?%;background:#000;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:fixed;width:100%;z-index:99}.score_head uni-image[data-v-e35c67d2]{position:absolute;top:0;height:100%;width:100%}.scoreData[data-v-e35c67d2]{color:#fff;text-align:center;z-index:1}.scoreData .scoreData-btn[data-v-e35c67d2]{height:%?70?%;width:%?240?%;background-color:#fff;color:#020202;font-weight:700;font-size:%?30?%;border-radius:%?35?%;line-height:%?68?%}.toSignBtn[data-v-e35c67d2]{width:%?240?%;height:%?70?%;color:#020202;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:%?35?%;background-color:#fff}.useExp[data-v-e35c67d2]{z-index:2;position:absolute;right:%?31?%;top:%?20?%;font-size:%?24?%;color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.useExp img[data-v-e35c67d2]{width:%?24?%;height:%?24?%;margin-right:%?7?%;position:static}.scoreRecode[data-v-e35c67d2]{position:relative}.recodeTop[data-v-e35c67d2]{position:fixed;height:%?90?%;width:100%;left:0;background-color:#fff;color:#020202;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;border-bottom:1px solid #c8c7cc}.recodeTop div[data-v-e35c67d2]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:33.33%}.border1[data-v-e35c67d2]{position:absolute;height:2px;background-color:#020202;bottom:0;width:%?120?%}.recodeDiv[data-v-e35c67d2]{padding-top:%?90?%}\n/* 优化 */.yh-myscore[data-v-e35c67d2]{height:100vh}.yh-title[data-v-e35c67d2]{height:%?88?%}.yh-halfWidth2[data-v-e35c67d2]{position:relative}.yh-kyjf[data-v-e35c67d2]{opacity:.6;margin:%?14?% 0 %?34?% 0}.yh-sign_score[data-v-e35c67d2]{color:#999}\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 订单模块颜色值 */\n/* 背景颜色 */\n/*  背景渐变色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */",""]),t.exports=e},"82a0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"display:flex;height:"+t.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[a("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),a("div",{staticClass:"header"},[t.flag&&!t.returnFlag?a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?a("img",{attrs:{src:t.back1}}):a("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():a("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},o=[]},"865e":function(t,e,a){"use strict";var i=a("8902"),n=a.n(i);n.a},"86ab":function(t,e,a){var i=a("cbfe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("63398237",i,!0,{sourceMap:!1,shadowMode:!1})},8902:function(t,e,a){var i=a("1ad4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("774cd36e",i,!0,{sourceMap:!1,shadowMode:!1})},9653:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),o=a("2f62"),s=a("2773"),r={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=0,a=parseInt(t)+uni.upx2px(88);return e=a&&a>0?a:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)({status:"data_height"})),{},{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=r},ba3c:function(t,e,a){"use strict";a.r(e);var i=a("4202"),n=a("dbae");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("d2a8");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"e35c67d2",null,!1,i["a"],s);e["default"]=c.exports},c4dc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"ruleModal",props:["value","title","details"],data:function(){return{isShow:!1}},watch:{value:function(t){this.isShow=t}},methods:{cancel:function(){this.$emit("click",!1)}}};e.default=i},cba7:function(t,e,a){"use strict";a.r(e);var i=a("9653"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},cbfe:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ruleModal[data-v-0d0a11e5]{position:fixed;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.6);z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ruleModal-content[data-v-0d0a11e5]{width:%?520?%;height:%?720?%;background-color:#fff;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.ruleModal-content-header[data-v-0d0a11e5]{color:#020202;font-weight:700;font-size:%?30?%;text-align:center;padding-top:%?39?%;padding-bottom:%?34?%}.ruleModal-content-body[data-v-0d0a11e5]{padding:%?0?% %?29?%;margin-bottom:%?15?%;font-size:%?24?%;color:#666;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:scroll;box-sizing:border-box;word-wrap:break-word}.ruleModal-content-footer[data-v-0d0a11e5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:%?40?%}.ruleModal-content-footer .foobtn[data-v-0d0a11e5]{width:%?240?%;height:%?70?%;border-radius:%?8?%;border:%?2?% solid #242424;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.ruleModal-content-footer .foobtn uni-text[data-v-0d0a11e5]{color:#020202;font-size:%?30?%;font-weight:500}',""]),t.exports=e},d2a8:function(t,e,a){"use strict";var i=a("52bc"),n=a.n(i);n.a},db1b:function(t,e,a){"use strict";a.r(e);var i=a("7d18"),n=a("eb04");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("171c");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3fb1f804",null,!1,i["a"],s);e["default"]=c.exports},dbae:function(t,e,a){"use strict";a.r(e);var i=a("554d"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},eacf:function(t,e,a){var i=a("edd0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("590872a0",i,!0,{sourceMap:!1,shadowMode:!1})},eb04:function(t,e,a){"use strict";a.r(e);var i=a("f2a1"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},edd0:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".load-more[data-v-3fb1f804]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loading-img[data-v-3fb1f804]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-3fb1f804]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-3fb1f804]{position:absolute}.load1[data-v-3fb1f804],\n.load2[data-v-3fb1f804],\n.load3[data-v-3fb1f804]{height:24px;width:24px}.load2[data-v-3fb1f804]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-3fb1f804]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-3fb1f804]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-3fb1f804 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-3fb1f804]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-3fb1f804]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-3fb1f804]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-3fb1f804]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-3fb1f804]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-3fb1f804]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-3fb1f804]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-3fb1f804]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-3fb1f804]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-3fb1f804]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-3fb1f804]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-3fb1f804]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-3fb1f804]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-3fb1f804{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},f2a1:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},fb77:function(t,e,a){"use strict";a.r(e);var i=a("82a0"),n=a("cba7");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("865e");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4b3c7e46",null,!1,i["a"],s);e["default"]=c.exports}}]);