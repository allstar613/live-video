(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2082a7"],{a442:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"contents"},[i("div",{staticClass:"video-list"},[i("ul",t._l(t.videoList.data,(function(e,n){return i("li",{key:n,on:{click:function(i){return t.showDetail(e)}}},[i("div",{staticClass:"flex child-between align-items-center",staticStyle:{width:"100%"}},[i("div",[i("img",{staticClass:"img-video",attrs:{src:e.image,alt:""}})]),i("div",{staticClass:"flex child-between align-items-center",staticStyle:{width:"100%"}},[i("div",{staticClass:"p15"},[i("h4",{staticClass:"mb10"},[t._v(t._s(e.title))]),i("div",{staticClass:"flex"},[i("div",{staticClass:"mr10"},[i("i",{staticClass:"icon icon-like size15"}),i("span",[t._v(t._s(e.evaluation))])]),i("div",[i("i",{staticClass:"icon icon-view size15"}),i("span",[t._v(t._s(e.look))])])])]),t._m(0,!0)])])])})),0)]),i("div",{staticClass:"pagination"},[i("div",{on:{click:t.previous}},[i("i",{staticClass:"icon icon-arrow-left size30"})]),i("div",{on:{click:t.nextPage}},[i("i",{staticClass:"icon icon-arrow-right size30"})])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",[i("i",{staticClass:"icon icon-play2 size20"})])])}],o=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),c=i("2f62"),r=i("e0eb");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(i,!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={data:function(){return{pageindex:0,timer:null}},methods:l({},Object(c["b"])({getInfo:"main/getInfo",getVideoList:"main/getVideoList",testCDN:"cdn/testCDN"}),{showDetail:function(t){r["d"].create("currentID",t.id),this.$router.push("/detail/"+t.id)},nextPage:function(){this.pageindex+=1;var t={page:this.pageindex};this.getVideoList(t),this.backTop()},previous:function(){if(0!=this.pageindex){this.pageindex-=1;var t={page:this.pageindex};this.getVideoList(t),this.backTop()}},CDN:function(){var t=this;this.timer?clearInterval(this.timer):this.timer=setInterval((function(){t.testCDN()}),6e4)},backTop:function(){var t=this,e=setInterval((function(){var i=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+i,0===t.scrollTop&&clearInterval(e)}),16)},scrollToTop:function(){var t=this,e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollTop=e,t.scrollTop>60?t.btnFlag=!0:t.btnFlag=!1}}),computed:l({},Object(c["d"])({infoList:function(t){return t.main.infoList},videoList:function(t){return t.main.videoList},cdn:function(t){return t.cdn.cdn}})),created:function(){var t={id:r["d"].read("agency")};this.getInfo(t);var e={page:0};this.getVideoList(e)},mounted:function(){window.addEventListener("scroll",this.scrollToTop),this.testCDN(),this.CDN();r["d"].read("key")},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop),clearInterval(this.timer)}},u=d,p=i("2877"),f=Object(p["a"])(u,n,s,!1,null,null,null);e["default"]=f.exports}}]);