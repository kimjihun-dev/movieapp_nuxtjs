(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{278:function(e,t,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(109).default)("3948d5a4",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n(278)},280:function(e,t,n){var o=n(108)(!1);o.push([e.i,".loading[data-v-b5e9d1d2]{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@-webkit-keyframes circle-loading-data-v-b5e9d1d2{to{transform:rotate(1turn)}}@keyframes circle-loading-data-v-b5e9d1d2{to{transform:rotate(1turn)}}.loading span[data-v-b5e9d1d2]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top-color:#fff;-webkit-animation:circle-loading-data-v-b5e9d1d2 1.2s ease infinite;animation:circle-loading-data-v-b5e9d1d2 1.2s ease infinite}",""]),e.exports=o},282:function(e,t,n){"use strict";n.r(t);var o={},c=(n(279),n(46)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loading"},[t("span")])}],!1,null,"b5e9d1d2",null);t.default=component.exports},286:function(e,t,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(109).default)("3ba55a72",content,!0,{sourceMap:!1})},289:function(e,t,n){"use strict";n(286)},290:function(e,t,n){var o=n(108)(!1);o.push([e.i,".single-movie[data-v-1c1c336a]{color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:32px 16px}.single-movie .button[data-v-1c1c336a]{align-self:flex-start;margin-bottom:32px}.single-movie .movie-info[data-v-1c1c336a]{display:flex;flex-direction:column;align-content:center;grid-gap:32px;gap:32px;color:#fff}@media(min-width:800px){.single-movie .movie-info[data-v-1c1c336a]{flex-direction:row;align-items:flex-start}}.single-movie .movie-info .movie-img img[data-v-1c1c336a]{max-height:500px;width:100%}@media(min-width:800px){.single-movie .movie-info .movie-img img[data-v-1c1c336a]{max-height:700px;width:auto}}.single-movie .movie-info .movie-content h1[data-v-1c1c336a]{font-size:56px;font-weight:400}.single-movie .movie-info .movie-content .movie-fact[data-v-1c1c336a]{margin-top:12px;font-size:20px;line-height:1.5}.single-movie .movie-info .movie-content .movie-fact span[data-v-1c1c336a]{font-weight:600;text-decoration:underline}.single-movie .movie-info .movie-content .tagline[data-v-1c1c336a]{font-style:italic}.single-movie .movie-info .movie-content .tagline span[data-v-1c1c336a]{font-style:normal}",""]),e.exports=o},293:function(e,t,n){"use strict";n.r(t);var o=n(10),c=(n(62),n(78)),r=n.n(c),l={name:"single-movie",head:function(){return{title:this.movie.title}},data:function(){return{movie:""}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSingleMovie();case 2:case"end":return t.stop()}}),t)})))()},fetchDelay:1e3,methods:{getSingleMovie:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data=r.a.get("https://api.themoviedb.org/3/movie/".concat(e.$route.params.movieid,"?api_key=7c36122d553d34675e5093cd8f94049d&language=ko-KR&page=1")),t.next=3,data;case 3:n=t.sent,e.movie=n.data;case 5:case"end":return t.stop()}}),t)})))()}}},v=(n(289),n(46)),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$fetchState.pending?n("Loading"):n("section",{staticClass:"container single-movie"},[n("NuxtLink",{staticClass:"button",attrs:{to:{name:"index"}}},[e._v("Back")]),e._v(" "),n("div",{staticClass:"movie-info"},[n("div",{staticClass:"movie-img"},[n("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+e.movie.poster_path,alt:""}})]),e._v(" "),n("div",{staticClass:"movie-content"},[n("h1",[e._v("제목 : "+e._s(e.movie.title))]),e._v(" "),n("p",{staticClass:"movie-fact tagline"},[n("span",[e._v("태그라인:")]),e._v('"'+e._s(e.movie.tagline)+'"\n      ')]),e._v(" "),n("p",{staticClass:"movie-fact"},[n("span",[e._v("개봉일:")]),e._v("\n        "+e._s(new Date(e.movie.release_date).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+"\n      ")]),e._v(" "),n("p",{staticClass:"movie-fact"},[n("span",[e._v("상영시간 : ")]),e._v(" "+e._s(e.movie.runtime)+" 분\n      ")]),e._v(" "),n("p",{staticClass:"movie-fact"},[n("span",[e._v("수익(달러):")]),e._v("\n        "+e._s(e.movie.revenue.toLocaleString("en-us",{style:"currency",currency:"USD"}))+"\n      ")]),e._v(" "),n("p",{staticClass:"movie-fact"},[n("span",[e._v("줄거리 : ")]),e._v(" "+e._s(e.movie.overview))])])])],1)}),[],!1,null,"1c1c336a",null);t.default=component.exports;installComponents(component,{Loading:n(282).default})}}]);