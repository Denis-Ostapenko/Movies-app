(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},178:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(20),s=a.n(r),i=(a(107),a(46)),c=a(39),o=a(32),u=a(33),l=a(66),g=a(65),h=a(88),d=a(45),p=a.n(d),f=a(75),v=function(){function e(){Object(o.a)(this,e),this.apiBase="https://api.themoviedb.org/3/",this.apiKey="a4d0b37d32322c580bdd559932e85f65",this.requestGet=function(e){return fetch(e).then((function(t){if(!t.ok)throw new Error("error fetch URL ".concat(e,", response status ").concat(t.status));return t.json()}))}}return Object(u.a)(e,[{key:"getResource",value:function(){var e=Object(f.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this.apiBase,"search/movie?api_key=").concat(this.apiKey,"&language=en-US&query=").concat(t,"&page=").concat(a,"&include_adult=false"),e.next=3,this.requestGet(n);case 3:return r=e.sent,e.abrupt("return",{totalPages:r.total_pages,list:r.results});case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.apiBase,"genre/movie/list?api_key=").concat(this.apiKey,"&language=en-US"),e.next=3,this.requestGet(t);case 3:return a=e.sent,e.abrupt("return",a.genres);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),b=a(101),j=a(193),m=a(191),O=a(192),x=a(194),y=a.p+"static/media/no-pictures.5533b14a.png",S=(a(108),a(6)),w=function(e){var t=e.itemData,a=e.rating\u0421hanges,n=t.title,r=t.backdropPath,s=t.overview,i=t.releaseDate,c=t.genreIds,o=t.voteAverage,u=t.ratingValue,l=c.map((function(e){return Object(S.jsx)("div",{className:"film-details__tab",children:e},Math.floor(9*Math.random())+1)})),g=null!==r?"https://image.tmdb.org/t/p/w200/".concat(r):y,h=s;if(s.length>125){var d=s.slice(0,125).lastIndexOf(" ");h="".concat(s.slice(0,d)," ...")}var p=n;if(n.length>25){var f=n.slice(0,25).lastIndexOf(" ");p="".concat(n.slice(0,f)," ...")}var v="#E90000";return o>=3&&o<5&&(v="#E97E00"),o>=5&&o<7&&(v="#E9D100"),o>=7&&(v="#66E900"),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:g,alt:"film",className:"film-cover"})}),Object(S.jsxs)("div",{className:"film-details",children:[Object(S.jsx)("h3",{className:"film-details__header",children:p}),Object(S.jsx)("div",{className:"film-details__rating",style:{borderColor:v},children:Object(S.jsx)("span",{children:o})}),Object(S.jsx)("span",{className:"film-details__date",children:i}),Object(S.jsx)("div",{children:l}),Object(S.jsx)("p",{className:"film-details__text",children:h}),Object(S.jsx)("div",{className:"film-details__stars",children:Object(S.jsx)(x.a,{defaultValue:u,count:10,onChange:a})})]})]})};w.defaultProps={itemData:{},"rating\u0421hanges":function(){}};var P=w,C=(a(178),["id"]),_=function(e){var t=e.props,a=e.onPageChange,n=e.rating\u0421hanges,r=t.totalPages,s=t.loading,i=t.page,c=t.appDate,o=t.error,u=t.notFound,l=t.searchValue,g=t.rating,h=t.ratingMoviesList,d=(g?h:c).map((function(e){var t=e.id,a=Object(b.a)(e,C);return Object(S.jsx)("li",{className:"movies-list-item",children:Object(S.jsx)(P,{itemData:a,"rating\u0421hanges":function(a){n(a,e,t)}})},t)})),p=o&&""!==l?Object(S.jsx)(j.a,{message:"Error",description:"Oops, something went wrong :-(",type:"error",showIcon:!0}):null,f=o||s||!u?null:Object(S.jsx)(j.a,{message:"No results were found for your search!",type:"info",showIcon:!0}),v=s?Object(S.jsx)(m.a,{size:"large"}):null,x=o||s||u?null:Object(S.jsx)("ul",{className:"movies-list",children:d}),y=0===c.length||o||""===l||s||g?null:Object(S.jsx)(O.a,{size:"small",defaultCurrent:i,total:20*r,defaultPageSize:20,onChange:a,hideOnSinglePage:!0,showSizeChanger:!1});return Object(S.jsxs)(S.Fragment,{children:[v,x,f,p,y]})};_.defaultProps={props:{},totalPages:0,loading:!1,page:0,appDate:{},error:!1,notFound:!1,searchValue:"",rating:!1,ratingMoviesList:{},onPageChange:function(){},"rating\u0421hanges":function(){}};var k=_,N=(a(184),function(e){var t=e.onInputChange;return Object(S.jsx)("div",{className:"search-form",children:Object(S.jsx)("input",{className:"search-panel",type:"search",placeholder:"Type to search...",onChange:t})})});N.defaultProps={onInputChange:function(){}};var I=N,D=(a(185),function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:{active:!0},rated:{active:!1}},e.getSearch=function(t){t(),e.setState({search:{active:!0},rated:{active:!1}})},e.getRated=function(t){t(),e.setState({search:{active:!1},rated:{active:!0}})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.getRated,n=t.getSearch,r=this.state,s=r.search,i=r.rated,c=s.active?"tabs-button tabs-button--active":"tabs-button",o=i.active?"tabs-button tabs-button--active":"tabs-button";return Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{type:"button",className:c,onClick:function(){return e.getSearch(n)},children:"Search"}),Object(S.jsx)("button",{type:"button",className:o,onClick:function(){return e.getRated(a)},children:"Rated"})]})}}]),a}(n.Component));D.defaultProps={getSearch:function(){},getRated:function(){}};a(186);var L=function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:"",totalPages:0,page:0,loading:!1,error:!1,notFound:!1,rating:!1,ratingMoviesList:JSON.parse(localStorage.getItem("ratingMoviesList"))||[],appDate:[]},e.apiMovies=new v,e.debouncedGetList=Object(h.debounce)((function(t,a){return e.getResource(t,a)}),500),e.getResource=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.apiMovies.getResource(t,a).then((function(n){var r=n.totalPages,s=n.list.map((function(e){var t=e.title,a=e.release_date,n=e.id;return{title:t,releaseDate:a,backdropPath:e.poster_path,overview:e.overview,voteAverage:e.vote_average,genreIds:e.genre_ids,id:n}}));e.getGenre(s,r,a,t)})).then((function(){0===e.state.appDate.length&&e.setState({notFound:!0})})).catch(e.onError)},e.onPageChange=function(t){e.setState({page:t})},e.onError=function(){e.setState({error:!0,loading:!1})},e.onInputChange=function(t){t.preventDefault(),e.setState({searchValue:t.target.value,page:1})},e.rating\u0421hanges=function(t,a,n){e.setState((function(e){var r=e.ratingMoviesList,s=r.findIndex((function(e){return e.id===n})),o=-1!==s?r[s]:Object(c.a)({},a),u=Object(c.a)(Object(c.a)({},o),{},{ratingValue:t});return{ratingMoviesList:-1!==s?[].concat(Object(i.a)(r.slice(0,s)),[u],Object(i.a)(r.slice(s+1))):[].concat(Object(i.a)(r),[u])}}))},e.getRated=function(){e.setState({rating:!0})},e.getSearch=function(){e.setState({rating:!1})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.searchValue,r=a.page;n===t.searchValue&&r===t.page||(this.componentLoading(),this.debouncedGetList(n,r))}},{key:"getGenre",value:function(e,t,a,n){var r=this;this.apiMovies.getGenres().then((function(s){var o=e.map((function(e){var t=[];return e.genreIds.forEach((function(e){s.forEach((function(a){var n=a.id,r=a.name;n===e&&t.push(r)}))})),Object(c.a)(Object(c.a)({},e),{},{genreIds:t})}));r.setState((function(){return{totalPages:t,appDate:Object(i.a)(o),page:a,loading:!1,notFound:!1,searchValue:n}}))}))}},{key:"componentLoading",value:function(){this.setState({loading:!0,error:!1,notFound:!1})}},{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.totalPages,n=e.loading,r=e.page,s=e.appDate,i=e.error,c=e.notFound,o=e.rating,u=e.ratingMoviesList;localStorage.setItem("ratingMoviesList",JSON.stringify(u));var l=o?null:Object(S.jsx)(I,{onInputChange:this.onInputChange});return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(D,{getRated:this.getRated,getSearch:this.getSearch}),l,Object(S.jsx)(k,{props:{totalPages:a,searchValue:t,loading:n,page:r,appDate:s,error:i,notFound:c,rating:o,ratingMoviesList:u},onPageChange:this.onPageChange,"rating\u0421hanges":this.rating\u0421hanges})]})}}]),a}(n.Component);a(187);s.a.render(Object(S.jsx)(L,{}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.de5e0c7e.chunk.js.map