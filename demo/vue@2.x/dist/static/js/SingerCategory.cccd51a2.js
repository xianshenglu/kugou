(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{HuTp:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"singer_category"},t._l(t.singerCategories,function(e,s){return a("ul",{key:s,staticClass:"singer_category__list main_border"},t._l(e.data,function(e,s){return a("li",{key:"1"+s,staticClass:"singer_category__item main_border_bottom"},[a("router-link",{staticClass:"singer_category__link",attrs:{to:e.path}},[a("div",{staticClass:"singer_category__title"},[t._v(t._s(e.classname))]),a("button",{staticClass:"singer_category_btn"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],1)}))}))},i=[],n=(a("dRSK"),a("yT7P")),r=a("pEem"),o={method:"GET",url:r["a"]+"/singer/class&json=true"},c=a("OVlj"),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.params,a=void 0===e?{}:e;return Object(c["a"])(Object(n["a"])({},o,{params:Object(n["a"])({},a)}))},l=a("L2JU"),u=a("eToF"),g={name:"SingerCategory",mixins:[u["a"]],computed:Object(n["a"])({},Object(l["d"])("singer",["singerCategories"])),created:function(){0===this.singerCategories.length&&(this.setLoadingExcludeNav(),this.startLoading(),this.getSingerCategories())},methods:Object(n["a"])({},Object(l["c"])(["replaceProperty"]),{getSingerCategories:function(){var t=this;d().then(function(e){var a=e.data,s=a.list.reduce(function(t,e){e.path="/singer/list/"+e.classid;var a=t.find(function(t){return t.category===e.classname.substring(0,2)});return a?a.data.push(e):t.push({category:e.classname.substring(0,2),data:[e]}),t},[]);t.replaceProperty({paths:"singer.singerCategories",data:s}),t.stopLoading()})}})},p=g,h=(a("aPHM"),a("KHd+")),f=Object(h["a"])(p,s,i,!1,null,"1d95f400",null);e["default"]=f.exports},"VmN+":function(t,e,a){},aPHM:function(t,e,a){"use strict";var s=a("VmN+"),i=a.n(s);i.a},dRSK:function(t,e,a){"use strict";var s=a("XKFU"),i=a("CkkT")(5),n="find",r=!0;n in[]&&Array(1)[n](function(){r=!1}),s(s.P+s.F*r,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},eToF:function(t,e,a){"use strict";var s=a("yT7P"),i=a("L2JU");e["a"]={updated:function(){this.stopLoading()},methods:Object(s["a"])({},Object(i["c"])(["replaceProperty"]),{startLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!0})},stopLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!1})},setLoadingExcludeHeader:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_header"})},setLoadingExcludeNav:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_nav"})},setLoadingExcludeModuleTitle:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_module_title"})},setLoadingExcludeSearchForm:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_search_form"})}})}}}]);
//# sourceMappingURL=SingerCategory.cccd51a2.js.map