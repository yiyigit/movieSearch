(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/unavailable.11bbcf00.jpg"},,,function(e,t,n){e.exports=n.p+"static/media/spinner.05360875.svg"},function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),i=(n(12),n(1)),l=function(){return Promise.reject({error:"NETWORK_ERROR"})},u=function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))},s=function(e){var t="https://api.themoviedb.org/3/find/".concat(e,"?api_key=c946c30088ad16d4120dcc22233c5fdc&language=en-US&external_source=imdb_id");return fetch(t,{method:"GET"}).catch(l).then(u)},m={DEFAULT:"Oh no!  Something went wrong, please try again",USERNAME_REQUIRED:"Username is required",LACK_KEYWORD:"Please enter a more specific key word",NETWORK_ERROR:"There was a problem reaching your network, please try again",NOT_ACCEPTABLE:'Your username cannot include "dog" or empty space, please log in with another name',LOGIN_REQUIRED:"You must be logged in to view this content",LOGIN_UNAUTHORIZED:"You are not permitted to view this content.Please Log in.",MESSAGE_REQUIRED:"You cannot send an empty comment.",MOVIE_NOT_FOUND:"Movie not found. Please try anoterh keyword."},d=c.a.createContext({default:"doesn't matter"}),h=c.a.createContext({default:"doesn't matter"}),f=n(6),E=n.n(f),b=function(e){var t=e.onLogin,n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],s=r[1],d=Object(a.useState)(!1),f=Object(i.a)(d,2),b=f[0],p=f[1],g=Object(a.useContext)(h),v=Object(i.a)(g,1)[0],O=function(e){e.preventDefault(),o?(v(""),p(!0),function(e){return fetch("/session",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:e})}).catch(l).then(u)}(o).then((function(e){t(e.username)})).catch((function(e){v(m[e.error||"DEFAULT"]),p(!1)}))):v(m.USERNAME_REQUIRED)};return c.a.createElement("div",{className:"login"},c.a.createElement("form",{onSubmit:function(e){return O(e)}},c.a.createElement("input",{onChange:function(e){return s(e.target.value)}}),b?c.a.createElement("img",{alt:"spinner",src:E.a}):c.a.createElement("button",{type:"submit",disabled:!o},"Login")))},p=function(e){var t=e.onLogout,n=Object(a.useContext)(h),r=Object(i.a)(n,2),o=(r[0],r[1]);return c.a.createElement("button",{className:"header-btn",onClick:function(){fetch("/session",{method:"DELETE"}).catch(l).then((function(e){return e.ok})).then((function(){t()})).catch((function(e){o(m[e.error||"DEFAULT"])}))}}," ","Log out"," ")},g=n(2),v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useContext)(d),s=Object(i.a)(o,2),f=s[0],E=s[1],b=Object(a.useContext)(h),p=Object(i.a)(b,1)[0];Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c946c30088ad16d4120dcc22233c5fdc&language=en-US&page=1",{method:"GET"}).catch(l).then(u).then((function(e){r(e.results.slice(0,4))})).catch((function(e){p(m[e.message||"DEFAULT"])}))}),[]);var v=function(e){E(Object(g.a)({},f,{id:e}))},O=n.map((function(e){return c.a.createElement("li",{key:n.indexOf(e),className:"top-movie"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,className:"clickable",onClick:function(){return v(e.id)},alt:"poster"}),c.a.createElement("p",{className:"clickable",onClick:function(){return v(e.id)}}," ",e.title," "),c.a.createElement("p",{className:"time"}," ",e.release_date," "),c.a.createElement("p",{className:"rating"}," Rating: ",e.vote_average," "),c.a.createElement("button",{onClick:function(){return v(e.id)}}," details"))}));return c.a.createElement("div",null,c.a.createElement("h2",null," Top Rated Movies: "),c.a.createElement("ol",{className:"top-rated-movies"},O))},O=n(3),j=n.n(O),N=function(){var e=Object(a.useContext)(d),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),f=Object(i.a)(o,2),E=f[0],b=f[1],p=Object(a.useContext)(h),v=Object(i.a)(p,1)[0];Object(a.useEffect)((function(){n.id?(O(n.id),v("")):s(n.imdbID).then((function(e){var t=e.movie_results[0].id;O(t)})).catch((function(e){v(m[e.error||"DEFAULT"])}))}),[n.imdbID,n.id]);var O=function(e){return function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/recommendations?api_key=c946c30088ad16d4120dcc22233c5fdc&language=en-US&page=1");return fetch(t,{method:"GET"}).catch(l).then(u)}(e).then((function(e){b(e.results.slice(0,3)),v("")})).catch((function(e){v(m[e.error||"DEFAULT"])}))},N=function(e){r(Object(g.a)({},n,{id:e}))},w=E.map((function(e){var t;return t=e.poster_path?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,className:"clickable",onClick:function(){return N(e.id)},alt:"poster"}):c.a.createElement("img",{src:j.a,alt:"poster unavailable",className:"clickable",onClick:function(){return N(e.id)}}),c.a.createElement("li",{key:E.indexOf(e)},c.a.createElement("p",{className:"clickable",onClick:function(){return N(e.id)}},e.title),c.a.createElement("p",{className:"time"}," ",e.release_date," "),c.a.createElement("p",{className:"rating"}," Rating: ",e.vote_average," "),t,c.a.createElement("p",null,c.a.createElement("button",{onClick:function(){return N(e.id)}}," details")))}));return c.a.createElement("div",null,c.a.createElement("h2",null,"Recommendation according to ",c.a.createElement("span",{className:"highlight-title"},n.Title)),c.a.createElement("ul",{className:"recommendation"},w))},w=function(){var e=Object(a.useContext)(d),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useContext)(h),f=Object(i.a)(o,1)[0],E=Object(a.useState)(""),b=Object(i.a)(E,2),p=b[0],v=b[1],O=Object(a.useState)(""),w=Object(i.a)(O,2),T=w[0],k=w[1];Object(a.useEffect)((function(){window.scrollTo(0,0),n.id?(v(""),_(n.id)):s(n.imdbID).then((function(e){if(0===e.movie_results.length)throw new Error("LACK_KEYWORD");var t=e.movie_results[0].id;r(Object(g.a)({},n,{id:t})),v(""),f("")})).catch((function(e){f(m[e.error||e.message||"DEFAULT"])}))}),[n.id,n.imdbID]);var D,_=function(e){return function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=c946c30088ad16d4120dcc22233c5fdc&language=en-US");return fetch(t,{method:"GET"}).catch(l).then(u)}(e).then((function(e){r({Title:e.title,Year:e.release_date,imdbID:e.imdb_id,id:e.id,overview:e.overview,PosterUrl:"https://image.tmdb.org/t/p/w500/"+e.poster_path}),function(e){return fetch("/comments/".concat(e),{method:"GET"}).catch(l).then(u)}(e.id).then((function(e){k(e.comment)})),f("")})).catch((function(e){f(m[e.error||e||"DEFAULT"])}))},y=function(e){e.preventDefault(),function(e,t){return fetch("/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,comment:t})}).catch(l).then(u)}(n.id,p).then((function(e){k(e.comment),v("")})).catch((function(e){f(m[e.error||e||"DEFAULT"])}))};return D=n.PosterUrl&&"https://image.tmdb.org/t/p/w500/N/A"!==n.PosterUrl?c.a.createElement("img",{src:n.PosterUrl,alt:"poster"}):c.a.createElement("img",{src:j.a,alt:"poster unavailable"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"flex-box"},c.a.createElement("div",{className:"result-detail"},c.a.createElement("p",{className:"title"}," Title: ",n.Title," "),c.a.createElement("p",{className:"time"}," Year: ",n.Year," "),c.a.createElement("p",{className:"overview"}," ","Overview: ",n.overview||"Not Available"),c.a.createElement("p",null,"My comment:",T)," ",c.a.createElement("button",{onClick:function(){var e;(e=n.id,fetch("/comments/".concat(e),{method:"DELETE"}).catch(l).then(u)).then((function(e){k("")})).catch((function(e){f(m[e.error||e||"DEFAULT"])}))},disabled:!T},"delete"),c.a.createElement("form",{onSubmit:function(e){return y(e)}},c.a.createElement("label",null,"New Comment:",c.a.createElement("input",{value:p,onChange:function(e){return function(e){v(e.target.value)}(e)}})),c.a.createElement("button",{type:"submit"},"add/update"))),c.a.createElement("div",{className:"img-detail"},D)),c.a.createElement(N,null))},T=function(){var e,t=Object(a.useContext)(d),n=Object(i.a)(t,2),r=n[0],o=n[1],s=Object(a.useContext)(h),f=Object(i.a)(s,1)[0],E=function(e){var t;e.preventDefault(),(t=r.keyword,fetch("https://www.omdbapi.com/?apikey=c27a2924&s="+t,{method:"GET"}).catch(l).then(u)).then((function(e){if(e.Error)throw new Error("MOVIE_NOT_FOUND");o({imdbID:e.Search[0].imdbID,Title:e.Search[0].Title,Year:e.Search[0].Year})})).catch((function(e){f(m[e.error||e.message||"DEFAULT"]),o({})}))};return e=r.imdbID||r.id?c.a.createElement(w,null):c.a.createElement(v,null),console.log(r),c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){return E(e)},className:"search-panel"},c.a.createElement("input",{type:"text",value:r.keyword||"",placeholder:"Search...",onChange:function(e){return function(e){o(Object(g.a)({},r,{keyword:e.target.value}))}(e)}}),c.a.createElement("button",{type:"submit",disabled:!r.keyword}," ","Search"," ")),e)},k=function(){var e=Object(a.useContext)(d),t=Object(i.a)(e,2),n=(t[0],t[1]);return c.a.createElement("button",{className:"header-btn",onClick:function(){n({})}},"return to homepage")};n(13);var D=function(){var e,t=Object(a.useState)({isLoggedIn:!1}),n=Object(i.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)({}),f=Object(i.a)(s,2),E=f[0],g=f[1],v=Object(a.useState)(),O=Object(i.a)(v,2),j=O[0],N=O[1];return Object(a.useEffect)((function(){fetch("/session",{method:"GET"}).catch(l).then(u).then((function(e){o({isLoggedIn:!0,username:e.username})})).catch((function(e){N(m[e.error||e||"DEFAULT"])}))}),[r.username]),e=r.isLoggedIn?c.a.createElement(d.Provider,{value:[E,g]},c.a.createElement("div",{className:"header"},c.a.createElement(k,null),c.a.createElement(p,{onLogout:function(){o({isLoggedIn:!1})}})),c.a.createElement(T,null)):c.a.createElement("div",null,c.a.createElement(b,{onLogin:function(e){o({isLoggedIn:!0,username:e})}})),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Your Movie Database"),c.a.createElement("p",{className:"error"},j),c.a.createElement(h.Provider,{value:[N]},e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7ae588b1.chunk.js.map