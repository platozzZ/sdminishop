(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-evaluate-evaluate"],{"1ad4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".border[data-v-4b3c7e46]{border-bottom:0 solid #eee!important}.head[data-v-4b3c7e46]{position:fixed;left:0;top:0;background-color:#fff!important;width:100%;z-index:9999}.head .white[data-v-4b3c7e46]{background:#fff}.header[data-v-4b3c7e46]{background-color:#fff;width:100%;height:%?88?%;border-bottom:1px solid #eee;color:#020202;font-size:%?40?%}.header img[data-v-4b3c7e46]{position:absolute;top:%?26?%;left:%?20?%;width:%?24?%;height:%?36?%}.header a[data-v-4b3c7e46]{position:absolute;width:%?36?%;height:%?36?%;border-radius:50%}.header_img[data-v-4b3c7e46]{top:%?46?%!important;left:%?10?%!important;width:%?64?%!important;height:%?64?%!important}.header p[data-v-4b3c7e46]{text-align:center;width:100%;height:100%;line-height:%?88?%;color:#020202;font-size:%?32?%}.header>div[data-v-4b3c7e46]{height:%?88?%;width:%?160?%;position:absolute;z-index:9999}.head_w[data-v-4b3c7e46]{background:transparent;border-bottom:0}.title_w[data-v-4b3c7e46]{color:#fff!important}",""]),t.exports=e},2773:function(t,e,a){"use strict";function i(t,e){uni.setStorage({key:t,data:e,success:function(){console.log("setSuccess")}})}function l(t){var e;return uni.getStorage({key:t,success:function(t){e=t.data,console.log("getSuccess")}}),e}function n(t){uni.removeStorage({key:t,success:function(t){console.log("removeSuccess")}})}Object.defineProperty(e,"__esModule",{value:!0}),e.setStorage=i,e.getStorage=l,e.removeStorage=n},4376:function(t,e,a){"use strict";a.r(e);var i=a("a1af"),l=a("dc31");for(var n in l)"default"!==n&&function(t){a.d(e,t,(function(){return l[t]}))}(n);a("ce1b");var s,o=a("f0c5"),r=Object(o["a"])(l["default"],i["b"],i["c"],!1,null,"370df5f2",null,!1,i["a"],s);e["default"]=r.exports},"49f8":function(t,e,a){var i=a("694a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var l=a("4f06").default;l("5a46e9ce",i,!0,{sourceMap:!1,shadowMode:!1})},"5e73":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=i(a("fb77")),n=(a("2773"),{data:function(){return{bargain:!1,fff:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/ffff3x.png",title:"评价",pid:"",access_id:"",evaluat:"",praise:[],review:[],negativeComment:[],reply:"",img:[],allevaluat:"",allevaluat1:!0,allevaluat2:!1,allevaluat3:!1,allevaluat4:!1,allevaluat5:!1,isBigimg:!1,src:"",comments_cha:"",comments_hao:"",comments_image:"",comments_total:"",comments_zhong:"",type:0,starOffImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xing12x.png",starOnImg:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/xing22x.png",stars:[],page:1,allLoaded:!1,autoFill:!1,bottomStatus:"",bottomPullText:"上拉加载更多...",bottomDropText:"释放更新...",loading:!1,all_img:[],logo:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/lktlogo.png",defaultIndex:0,imgurl:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/landing_logo2x.png"}},onLoad:function(t){this.pid=t.pid,this.bargain=t.bargain,console.log(this.pid),this.access_id=uni.getStorageSync("access_id")?uni.getStorageSync("access_id"):this.$store.state.access_id,this._axios()},methods:{_bigimg:function(t,e,a,i){var l=this,n=[];if("next"==i)for(var s=0;s<l.allevaluat[e].review_images.length;s++)n.push(l.allevaluat[e].review_images[s].url);else for(s=0;s<l.allevaluat[e].images.length;s++)n.push(l.allevaluat[e].images[s].url);uni.previewImage({current:n[a],urls:n})},_smallimg:function(){this.isBigimg=!this.isBigimg},_comment:function(t){this.page=1,"好评"==t?(this.type=1,this.allevaluat1=!1,this.allevaluat2=!0,this.allevaluat3=!1,this.allevaluat4=!1,this.allevaluat5=!1):"中评"==t?(this.type=2,this.allevaluat1=!1,this.allevaluat2=!1,this.allevaluat3=!0,this.allevaluat4=!1,this.allevaluat5=!1):"差评"==t?(this.type=3,this.allevaluat1=!1,this.allevaluat2=!1,this.allevaluat3=!1,this.allevaluat4=!0,this.allevaluat5=!1):"有图"==t?(this.type=4,this.allevaluat1=!1,this.allevaluat2=!1,this.allevaluat3=!1,this.allevaluat4=!1,this.allevaluat5=!0):"全部"==t&&(this.type=0,this.allevaluat1=!0,this.allevaluat2=!1,this.allevaluat3=!1,this.allevaluat4=!1,this.allevaluat5=!1),this._axios()},_axios:function(){var t=this,e={module:"app",action:"product",app:"getcomment",pid:this.pid,type:this.type};this.bargain&&(e.bargain=!0),console.log(e),uni.request({data:e,url:uni.getStorageSync("url"),header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){if(200==e.data.code){var a=e.data,i=a.comments_cha,l=a.comments_hao,n=a.comments_image,s=a.comments_total,o=a.comments_zhong,r=a.data;t.comments_cha=i,t.comments_hao=l,t.comments_image=n,t.comments_total=s,t.comments_zhong=o,r&&r.length>0&&r.filter((function(t){t.add_time=t.add_time.substr(0,10)})),0==t.type?(t.evaluat=r,t.allevaluat=t.evaluat):1==t.type?(t.praise=r,t.allevaluat=t.praise):2==t.type?(t.review=r,t.allevaluat=t.review):3==t.type?(t.negativeComment=r,t.allevaluat=t.negativeComment):4==t.type&&(t.img=r,t.allevaluat=t.img),console.log(r),r.length<10?t.allLoaded=!0:t.allLoaded=!1,console.log(r);for(var c=[],d=0;d<r.length;d++){for(var u=[],f=0;f<5;f++)u.push(!1);t.$set(t.stars,d,u);for(var g=r[d].CommentType,v=0;v<g;v++)t.$set(t.stars[d],v,!0);if(r[d].images&&r[d].review_images){var m=r[d].images.concat(r[d].review_images);console.log(m);for(var h=0;h<m.length;h++)c.push(m[h].url)}else if(r[d].images||r[d].review_images){console.log(r[d].images,r[d].review_images);m=r[d].images?r[d].images:r[d].review_images;console.log(m);for(h=0;h<m.length;h++)c.push(m[h].url)}}for(var _=0;_<c.length;_++)t.$set(t.all_img,_,c[_]);console.log(t.all_img)}else uni.showToast({title:e.data.message,duration:1500,icon:"none"})}})}},components:{Heads:l.default}});e.default=n},"694a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.evaluate[data-v-370df5f2]{width:100%;background-color:#fff}.evaluate-header[data-v-370df5f2]{height:%?150?%;padding-top:%?40?%;border-bottom:1px solid #eee}.evaluate-classify_li[data-v-370df5f2]{border-radius:%?6?%;margin:0 %?20?% %?20?% 0;height:%?54?%;background-color:#f8f8f8;text-align:center;line-height:%?54?%;font-size:%?22?%;color:#9d9d9d}.evaluate-header>ul[data-v-370df5f2]{font-size:%?26?%;margin-left:25%}.evaluate-header>ul[data-v-370df5f2]:after{content:"";display:block;clear:both}.evaluate-header>ul li[data-v-370df5f2]{width:%?180?%;height:%?66?%;text-align:center;line-height:%?66?%;float:left}.evaluate-header>ul li[data-v-370df5f2]:first-child{border-top-left-radius:%?10?%;border-bottom-left-radius:%?10?%;border:1px solid #e83737}.evaluate-header>ul li[data-v-370df5f2]:last-child{border-top-right-radius:%?10?%;border-bottom-right-radius:%?10?%;border:1px solid #e83737}.evaluate-header>ul li span[data-v-370df5f2]{margin-left:%?10?%}.evaluate-classify[data-v-370df5f2]{padding:%?20?% %?30?% 0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.evaluate-classify div[data-v-370df5f2]{margin-left:%?20?%;margin-right:%?20?%}.evaluate-content li[data-v-370df5f2]{background-color:#fff;padding:%?40?% 0 %?30?% 0;border-bottom:1px solid #eee;margin:0 %?30?%}.content-user[data-v-370df5f2]{margin-bottom:%?20?%}.content-user img[data-v-370df5f2]{width:%?46?%;height:%?46?%;border-radius:50%;vertical-align:bottom}.evaluate-content span[data-v-370df5f2],.evaluate-content .color[data-v-370df5f2]{font-size:%?24?%;color:#9d9d9d}.evaluate-content p[data-v-370df5f2],.evaluate-content .user-name[data-v-370df5f2]{font-size:%?26?%;color:#020202;-webkit-box-flex:1;-webkit-flex:1;flex:1}.evaluate-content .img[data-v-370df5f2]{width:%?200?%;height:%?200?%;margin-right:%?20?%}.active[data-v-370df5f2]{background-color:#fff;color:#020202;border:%?2?% solid #000;border-radius:%?6?%;height:%?50?%}.bigimg[data-v-370df5f2]{height:100vh;width:100%;position:fixed;top:0;left:0;z-index:45;background-color:#242424}.bigimg_img[data-v-370df5f2]{width:100%;height:100vh;background-color:#000;position:fixed;top:0;left:0;text-align:center}.bigimg img[data-v-370df5f2]{width:100%}.position_flex[data-v-370df5f2]{position:fixed;top:%?88?%;left:0;background-color:#fff;z-index:29;width:100%;height:auto}.starall[data-v-370df5f2]{margin-left:%?20?%}.starall img[data-v-370df5f2]{width:%?24?%;height:%?24?%;margin-right:%?10?%}.content-user[data-v-370df5f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content_n[data-v-370df5f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.content_img[data-v-370df5f2]{margin-top:%?20?%}.bigimg_i[data-v-370df5f2]{height:%?88?%;width:100%}.bigimg_i img[data-v-370df5f2]{width:%?32?%;height:%?32?%;margin:%?30?% 0 0 %?30?%}.bigimg_w[data-v-370df5f2]{height:100%;width:100%;margin-top:%?1?%}.bigimg_w img[data-v-370df5f2]{width:100%}.review_title[data-v-370df5f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% 0}.review_title p[data-v-370df5f2]{font-size:%?24?%;color:#999}.review_title p[data-v-370df5f2]:first-child{font-size:%?26?%;color:red}.ev_img[data-v-370df5f2]{width:%?60?%!important;height:%?60?%!important;border-radius:50%;margin-right:%?20?%}',""]),t.exports=e},"82a0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"display:flex;height:"+t.BoxHeight},[a("div",{staticClass:"head",class:{head_w:"1"==t.ishead_w,border:1==t.border}},[a("div",{class:{white:!t.navWhite},style:{height:t.halfWidth}}),a("div",{staticClass:"header"},[t.flag&&!t.returnFlag?a("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}},["1"==t.ishead_w?a("img",{attrs:{src:t.back1}}):a("img",{attrs:{src:t.back}})]):t._e(),t.flag||t.returnFlag?t._e():a("img",{staticClass:"header_img",attrs:{src:t.bback},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._back1.apply(void 0,arguments)}}}),a("p",{class:{title_w:"1"==t.ishead_w}},[t._v(t._s(t.title))])])])])},n=[]},"865e":function(t,e,a){"use strict";var i=a("8902"),l=a.n(i);l.a},8902:function(t,e,a){var i=a("1ad4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var l=a("4f06").default;l("774cd36e",i,!0,{sourceMap:!1,shadowMode:!1})},9653:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=i(a("5530")),n=a("2f62"),s=a("2773"),o={data:function(){return{flag:!0,bback:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon/bback.png",back:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png",back1:this.LaiKeTuiCommon.LKT_ROOT_VERSION_URL+"images/icon1/back2x.png"}},computed:{halfWidth:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=parseInt(t);return e+"px"},BoxHeight:function(){var t=(0,s.getStorage)("data_height")?(0,s.getStorage)("data_height"):this.$store.state.data_height,e=0,a=parseInt(t)+uni.upx2px(88);return e=a&&a>0?a:uni.upx2px(88),e+"px"}},onLoad:function(t){console.log("header"),console.log(this.returnR)},props:["title","returnR","navWhite","returnFlag","border","ishead_w"],methods:(0,l.default)((0,l.default)({},(0,n.mapMutations)({status:"data_height"})),{},{_back:function(){this.flag=!1,console.log(this.returnR)},_back1:function(){switch(this.flag=!1,Number(this.returnR)){case 1:uni.navigateBack({delta:2});break;case 2:uni.switchTab({url:"../tabBar/shoppingCart"});break;case 3:uni.redirectTo({url:"../login/login.vue"});break;case 4:uni.navigateBack({delta:3});break;case 5:uni.redirectTo({url:"../order/myOrder"});break;case 6:uni.switchTab({url:"../../pages/tabBar/home"});break;case 7:uni.switchTab({url:"../../pages/tabBar/my"});break;case 8:uni.switchTab({url:"../tabBar/my"});break;case 9:uni.redirectTo({url:"/pagesA/myStore/myStore"});break;default:getCurrentPages().length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/tabBar/home"})}this.flag=!0}})};e.default=o},a1af:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"evaluate"},[a("div",{ref:"evaluate_all"},[a("div",[a("ul",{staticClass:"evaluate-classify"},[a("li",{staticClass:"evaluate-classify_li",class:t.allevaluat1?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._comment("全部")}}},[t._m(0)]),t.comments_hao?a("li",{staticClass:"evaluate-classify_li",class:t.allevaluat2?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._comment("好评")}}},[a("div",[a("span",[t._v("好评")]),a("span",[t._v("("+t._s(t.comments_hao)+")")])])]):t._e(),t.comments_zhong?a("li",{staticClass:"evaluate-classify_li",class:t.allevaluat3?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._comment("中评")}}},[a("div",[a("span",[t._v("中评")]),a("span",[t._v("("+t._s(t.comments_zhong)+")")])])]):t._e(),t.comments_cha?a("li",{staticClass:"evaluate-classify_li",class:t.allevaluat4?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._comment("差评")}}},[a("div",[a("span",[t._v("差评")]),a("span",[t._v("("+t._s(t.comments_cha)+")")])])]):t._e(),t.comments_image?a("li",{staticClass:"evaluate-classify_li",class:t.allevaluat5?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._comment("有图")}}},[a("div",[a("span",[t._v("有图")]),a("span",[t._v("("+t._s(t.comments_image)+")")])])]):t._e()])]),a("ul",{ref:"evaluate_content",staticClass:"evaluate-content"},t._l(t.allevaluat,(function(e,i){return a("li",{key:e.id},[a("div",{staticClass:"content-user"},[a("div",{staticClass:"content_n"},[null==e.user_name?a("img",{staticClass:"ev_img",attrs:{src:t.logo}}):a("img",{staticClass:"ev_img",attrs:{src:0==e.anonymous?""==e.headimgurl?t.imgurl:e.headimgurl:t.imgurl}}),a("span",{staticClass:"user-name"},[t._v(t._s(1==e.anonymous||""==e.user_name||"null"==e.user_name||null==e.user_name?"匿名":e.user_name))]),a("div",{staticClass:"starall"},t._l(t.stars[i],(function(e,l){return a("img",{attrs:{src:t.stars[i][l]?t.starOnImg:t.starOffImg}})})),0)])]),a("div",{staticStyle:{"font-size":"20upx",color:"#9D9D9D"}},[t._v(t._s(e.add_time)),a("span",{staticStyle:{"margin-left":"16rpx"}},[t._v(t._s(e.attribute_str))])]),a("div",{staticStyle:{"margin-top":"20upx"}},[a("p",[t._v(t._s(e.content))]),a("div",{staticClass:"content_img"},t._l(e.images,(function(l,n){return a("img",{key:e.images.id,staticClass:"img",attrs:{src:l.url},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._bigimg(l.url,i,n,"")}}})})),0),e.reply?a("div",[t._v("商家回复:"),a("span",{staticStyle:{color:"red"}},[t._v(t._s(e.reply))])]):t._e()]),e.review?a("div",[a("div",{staticClass:"review_title"},[a("p",[t._v("追加评论")]),a("div",{staticClass:"review_title",staticStyle:{"font-size":"20upx",color:"rgb(157, 157, 157)",margin:"0"}},[t._v(t._s(e.review_time))])]),a("p",[t._v(t._s(e.review))]),a("div",{staticClass:"content_img"},t._l(e.review_images,(function(l,n){return a("img",{key:e.review_images.id,staticClass:"img",attrs:{src:l.url},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._bigimg(l.url,i,n,"next")}}})})),0)]):t._e()])})),0)]),t.isBigimg?a("div",{staticClass:"bigimg",attrs:{id:"bigimg"}},[a("div",{staticClass:"bigimg_i"},[a("img",{attrs:{src:t.fff},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._smallimg.apply(void 0,arguments)}}})])]):t._e()])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",[t._v("全部")])])}]},cba7:function(t,e,a){"use strict";a.r(e);var i=a("9653"),l=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=l.a},ce1b:function(t,e,a){"use strict";var i=a("49f8"),l=a.n(i);l.a},dc31:function(t,e,a){"use strict";a.r(e);var i=a("5e73"),l=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=l.a},fb77:function(t,e,a){"use strict";a.r(e);var i=a("82a0"),l=a("cba7");for(var n in l)"default"!==n&&function(t){a.d(e,t,(function(){return l[t]}))}(n);a("865e");var s,o=a("f0c5"),r=Object(o["a"])(l["default"],i["b"],i["c"],!1,null,"4b3c7e46",null,!1,i["a"],s);e["default"]=r.exports}}]);