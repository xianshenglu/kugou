(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"7b+T":function(t,e,r){"use strict";var i=r("sKwG"),s=r.n(i);s.a},O3pU:function(t,e,r){"use strict";var i=r("pyS9"),s=r.n(i);s.a},WzpN:function(t,e,r){"use strict";var i=r("WzqO"),s=r.n(i);s.a},WzqO:function(t,e,r){},dwBr:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.music?r("section",{staticClass:"player"},[r("div",{staticClass:"player__mask",style:t.playerBgImg}),r("div",{staticClass:"player__cont"},[r("h6",{staticClass:"player__song_name"},[t._v(t._s(t.songName))]),r("img",{class:t.isPlaying?"player__singer_img player__singer_img--active":"player__singer_img",attrs:{src:t.singerImg}}),r("PlayerLyrics",{staticClass:"player__lyrics"}),r("PlayerProgress",{staticClass:"player__progress"}),r("div",{staticClass:"player__buttons"},[r("PrevButton",{staticClass:"player__btn_prev"}),r("PlayButton",{staticClass:"player__btn_status"}),r("NextButton",{staticClass:"play__btn_next"})],1),r("button",{staticClass:"player__download"})],1)]):t._e()},s=[],a=(r("pIFo"),r("yT7P")),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player_lyric",on:{touchstart:function(e){t.isTouching=!0},touchend:function(e){t.isTouching=!1}}},t._l(t.lyricItems,function(e,i){return r("p",t._b({key:e.millisecond,ref:e.millisecond,refInFor:!0,class:i===t.prevLyricIndex+1?"player_lyric_text player_lyric_text--active ":"player_lyric_text"},"p",t.getVBindObj("millisecond-"+e.millisecond),!1),[t._v(t._s(e.text))])}))},o=[],c=(r("INYr"),r("L2JU")),l=r("7Qib"),u={name:"PlayerLyrics",data:function(){return{getVBindObj:l["a"],prevLyricIndex:0,isTouching:!1}},computed:Object(a["a"])({},Object(c["d"])("player",["audioEl"]),Object(c["b"])("player",["lyricItems"]),{lyricMillisecond:function(){return this.lyricItems.map(function(t){return t.millisecond})}}),mounted:function(){var t=this;this.$nextTick(function(){t.audioEl.addEventListener("timeupdate",t.timeUpdateCb)})},destroyed:function(){this.audioEl.removeEventListener("timeupdate",this.timeUpdateCb)},methods:{timeUpdateCb:function(t){if(!this.isTouching){var e=Math.floor(1e3*t.target.currentTime),r=this.lyricMillisecond.findIndex(function(t){return t>1.005*e}),i=r>1?r-2:0,s=this.$refs&&this.$refs[this.lyricMillisecond[i]];s&&this.$refs[this.lyricMillisecond[i]][0].scrollIntoView(),this.prevLyricIndex=i}}}},d=u,h=(r("7b+T"),r("KHd+")),p=Object(h["a"])(d,n,o,!1,null,"504f5f57",null),m=p.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player_progress",on:{touchstart:t.setCurTime}},[r("div",{staticClass:"player_progress__song_cur_time"},[t._v(t._s(t.secondToMin(t.currentTime)))]),r("div",{ref:"progressBar",staticClass:"player_progress__progress_bar",style:t.progressBarStyle},[r("div",{staticClass:"player_progress__progress_bar_pointer",style:"left:"+t.currentProgress+"%;"})]),r("div",{staticClass:"player_progress__song_duration"},[t._v(t._s(t.secondToMin(t.audioEl.duration)))])])},y=[],_={name:"PlayerProgress",data:function(){return{secondToMin:l["d"],currentTime:0,loadProgress:0,isTouching:!1,touchStartX:0,progressBarRect:null}},computed:Object(a["a"])({},Object(c["d"])("player",["song","audioEl"]),{currentProgress:function(){return Math.floor(100*this.currentTime/this.audioEl.duration)},progressBarStyle:function(){return"background-image:linear-gradient(to right, #2ca2f9 ".concat(this.currentProgress,"%, transparent ").concat(this.currentProgress,"%),linear-gradient(to right, #6c6b70 ").concat(this.loadProgress,"%, transparent ").concat(this.loadProgress,"%)")}}),mounted:function(){var t=this;this.$nextTick(function(){t.audioEl.addEventListener("progress",t.progressCb),t.audioEl.addEventListener("timeupdate",t.timeUpdateCb)})},destroyed:function(){this.audioEl.removeEventListener("progress",this.progressCb),this.audioEl.removeEventListener("timeupdate",this.timeUpdateCb)},methods:{progressCb:function(){if(!(this.audioEl.readyState<2)){var t=this.audioEl.buffered.length;this.loadProgress=Math.floor(100*this.audioEl.buffered.end(t-1)/this.audioEl.duration)}},timeUpdateCb:function(t){this.isTouching||(this.currentTime=t.target.currentTime)},setCurTime:function(t){this.isTouching=!0,this.progressBarRect||(this.progressBarRect=this.$refs.progressBar.getBoundingClientRect());var e=t.touches[0].clientX;this.currentTime=this.calcCurTime(e,this.progressBarRect.left,0),this.touchStartX=e,window.addEventListener("touchmove",this.setCurTimeOnMove),window.addEventListener("touchend",this.touchEndCb)},setCurTimeOnMove:function(t){var e=t.touches[0].clientX;this.currentTime=this.calcCurTime(e,this.touchStartX,1),this.touchStartX=e},touchEndCb:function(){this.isTouching=!1,this.audioEl.currentTime=this.currentTime,window.removeEventListener("touchmove",this.setCurTimeOnMove),window.removeEventListener("touchend",this.touchEndCb)},calcCurTime:function(t,e,r){var i,s=t-e,a=s/this.progressBarRect.width;switch(r){case 0:i=this.audioEl.duration*a;break;case 1:i=this.currentTime+this.audioEl.duration*a;break}return i<0?i=0:i>this.audioEl.duration&&(i=this.audioEl.duration),i}}},f=_,v=(r("WzpN"),Object(h["a"])(f,g,y,!1,null,"a5d7f626",null)),b=v.exports,E=r("xh0E"),C=r("1qAx"),T=r("FDq3"),P=r("v3bD"),w=r("Q2AE"),O={name:"PlayerMax",components:{PlayerLyrics:m,PlayerProgress:b,PlayButton:E["a"],NextButton:C["a"],PrevButton:T["a"]},computed:Object(a["a"])({},Object(c["d"])("images",["logo__theme"]),Object(c["d"])("player",["audioEl","isPlaying","song","music"]),Object(c["b"])("player",["songName","singerName","singerImg"]),{playerBgImg:function(){return"background-image:url(".concat(this.singerImg,"),linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204));")}}),watch:{"music.hash":function(t){this.$router.replace({query:{musicHash:t}})}},beforeRouteEnter:function(t,e,r){var i=t.query.musicHash;if(i)return t.params.fromPlayerMed?r():Object(P["a"])({params:{hash:i}}).then(function(t){var e=t.data;e.filename=e.fileName,w["a"].commit("player/wantPlay",{music:e,musicList:[e]}),r()})},mounted:function(){this.replaceProperty({paths:"player.isPlayerMedShow",data:!1})},destroyed:function(){this.replaceProperty({paths:"player.isPlayerMedShow",data:!0}),this.replaceProperty({paths:"player.isPlayerMedSmall",data:!1})},methods:Object(a["a"])({},Object(c["c"])(["replaceProperty"]))},B=O,x=(r("O3pU"),Object(h["a"])(B,i,s,!1,null,"0fdfb11c",null));e["default"]=x.exports},pyS9:function(t,e,r){},sKwG:function(t,e,r){}}]);
//# sourceMappingURL=PlayerMax.64d0fe6f.js.map