(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"5D0P":function(t,e,n){"use strict";var i=n("Xcmi"),o=n.n(i);o.a},EMzk:function(t,e,n){"use strict";var i=n("qf8L"),o=n.n(i);o.a},Ez3a:function(t,e,n){"use strict";function i(t,e){if(null==t)return{};var n,i,o={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(o[n]=t[n]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",function(){return i})},ScPz:function(t,e,n){},TBnj:function(t,e,n){"use strict";var i=n("ScPz"),o=n.n(i);o.a},WngK:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"music_list"},t._l(t.musicList,function(e,i){return n("li",{key:i,staticClass:"music_list__item main_border_bottom"},[n("div",{staticClass:"music_list__info",on:{click:function(n){t.wantPlay(e)}}},[t._t("index",null,{data:i}),n("div",{staticClass:"music_list__name"},[t._v(t._s(e.filename))])],2),n("button",{staticClass:"music_list__download"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-download"}})])])])}))},o=[],s={name:"AppMusicList",props:{musicList:{type:Array,default:function(){return[]}}},methods:{wantPlay:function(t){this.$store.commit("player/wantPlay",{music:t,musicList:this.$props.musicList})}}},a=s,r=(n("EMzk"),n("KHd+")),u=Object(r["a"])(a,i,o,!1,null,"dac178ac",null);e["a"]=u.exports},Xcmi:function(t,e,n){},eToF:function(t,e,n){"use strict";var i=n("yT7P"),o=n("L2JU");e["a"]={updated:function(){this.stopLoading()},methods:Object(i["a"])({},Object(o["c"])(["replaceProperty"]),{startLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!0})},stopLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!1})},setLoadingExcludeHeader:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_header"})},setLoadingExcludeNav:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_nav"})},setLoadingExcludeModuleTitle:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_module_title"})},setLoadingExcludeSearchForm:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_search_form"})}})}},"iu5/":function(t,e,n){"use strict";var i=n("qWlz"),o=n.n(i);o.a},jd9d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"module__head",style:"background-image:url("+t.moduleHeadInfo.imgUrl+")"},[n("h6",{staticClass:"module__title"},[t._v(t._s(t.moduleHeadInfo.name))]),t._t("moduleUpdateTime")],2),t._t("moduleDes")],2)},o=[],s={name:"PubModuleHead",props:{moduleHeadInfo:{type:Object,default:function(){return{}}}}},a=s,r=(n("TBnj"),n("KHd+")),u=Object(r["a"])(a,i,o,!1,null,"0ae29526",null);e["a"]=u.exports},q3hw:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.showMore?"module_info__intro module_info__intro--more main_box_shadow":"module_info__intro main_box_shadow"},[n("p",{staticClass:"module_info__text"},[t._v(t._s(t.description))]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"module_info__button",on:{click:function(e){t.showMore=!t.showMore}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-circle-arrow-up"}})])]),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.showMore,expression:"!showMore"}],staticClass:"module_info__button",on:{click:function(e){t.showMore=!t.showMore}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-circle-arrow-down"}})])])])},o=[],s={name:"PubModuleDes",props:{description:{type:String,default:function(){return""}}},data:function(){return{showMore:!1}},methods:{}},a=s,r=(n("5D0P"),n("KHd+")),u=Object(r["a"])(a,i,o,!1,null,"2bce49da",null);e["a"]=u.exports},qWlz:function(t,e,n){},qf8L:function(t,e,n){},sSXl:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"singer_info"},[n("PubModuleHead",{attrs:{"module-head-info":t.getModuleHeadInfo}},[n("PubModuleDes",{attrs:{slot:"moduleDes",description:t.getModuleHeadInfo.intro},slot:"moduleDes"})],1),n("AppMusicList",{attrs:{"music-list":t.getMusicList}})],1)},o=[],s=(n("rGqo"),n("KKXr"),n("yT7P")),a=n("jd9d"),r=n("q3hw"),u=n("WngK"),c=n("Ez3a"),l=n("OVlj"),d=n("pEem"),f={method:"GET",url:d["a"]+"/singer/info"},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.singerId,n=t.params,i=void 0===n?{}:n,o=f.url,a=Object(c["a"])(f,["url"]);return o+="/"+e+"&json=true",Object(l["a"])(Object(s["a"])({},a,{url:o,params:i}))},p=n("eToF"),h=n("L2JU"),_=n("rmb2"),g={name:"SingerInfo",mixins:[p["a"]],components:{PubModuleHead:a["a"],AppMusicList:u["a"],PubModuleDes:r["a"]},computed:Object(s["a"])({},Object(h["d"])("singer",["singerInfo"]),{getModuleHeadInfo:function(){return this.singerInfo.info},getMusicList:function(){return this.singerInfo.data}}),created:function(){var t=this.$route.path.split("/").pop();this.setLoadingExcludeHeader(),this.startLoading(),this.getSingerInfo(t)},methods:Object(s["a"])({},Object(h["c"])(["replaceProperty"]),{getSingerInfo:function(t){var e=this;m({singerId:t}).then(function(t){var n=t.data,i={info:{id:n.info.singerid,name:n.info.singername,count:n.info.songcount,albumcount:n.info.albumcount,imgUrl:Object(_["a"])(n.info.imgurl),intro:n.info.intro},data:n.songs.list};n.songs.list.forEach(function(t){t.name=t.filename}),e.replaceProperty({paths:"singer.singerInfo",data:i}),e.stopLoading()})}})},b=g,v=(n("iu5/"),n("KHd+")),w=Object(v["a"])(b,i,o,!1,null,"4252a3de",null);e["default"]=w.exports}}]);
//# sourceMappingURL=SingerInfo.2bcb9a17.js.map