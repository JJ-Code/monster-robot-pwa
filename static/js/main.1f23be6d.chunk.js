(this["webpackJsonpmonster-robot-pwa"]=this["webpackJsonpmonster-robot-pwa"]||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},19:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),l=(n(19),function(e){var t=e.id,n=e.name,o=(e.username,e.email);return r.a.createElement("div",{className:"card-container bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t,"?set=set3&size=200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,o))}),s=function(e){var t=e.robots;return r.a.createElement("div",{className:"card-list"},t.map((function(e,t){return r.a.createElement(l,{key:t,id:e.id,name:e.name,username:e.username,email:e.email})})))},i=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"}},e.children)},u=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"p2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",label:"Search Robots",onChange:t}))},d=n(3),h=n(8),f=n.n(h),p=n(11),b=Object(d.b)(null,{setCurrentSearch:function(e){return console.log(e),{type:"SET_CURRENT_ROBOTS",payload:e}}})((function(e){var t=e.setCurrentSearch;return r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"Robot Friends"),r.a.createElement(u,{onSearchChange:function(e){e.preventDefault(),t(e.target.value)}}))})),m=function(e){console.log(e.children);try{return e.children}catch(t){return console.log(t),r.a.createElement("h1",null,"Something has went wrong")}},g=(n(27),Object(d.b)((function(e){return{robots:e.robots}}),{fetchRobots:function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}));case 3:n=e.sent,t({type:"GET_ROBOTS",payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"ROTBOTS_ERROR",payload:e.t0.response.statusText});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.robots,n=t.robotFriends,a=t.noResults,c=e.fetchRobots;return Object(o.useEffect)((function(){c()}),[]),r.a.createElement("div",{className:"App tc"},r.a.createElement(b,null),r.a.createElement(i,null,0===n.length?r.a.createElement("h1",null,"Loading..."):r.a.createElement(m,null,!0===a?r.a.createElement("h2",null,"No results..."):r.a.createElement(s,{robots:n}))))}))),v=(n(28),n(1)),w=n(12),E=n(13),R=n(2),O={robotFriends:[],defaultRobots:[],noResults:!1,error:null},y=Object(v.combineReducers)({robots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ROBOTS":return Object(R.a)(Object(R.a)({},e),{},{defaultRobots:t.payload,robotFriends:t.payload});case"SET_CURRENT_ROBOTS":console.log(e.robotFriends);var n=e.defaultRobots.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));return console.log(n),Object(R.a)(Object(R.a)({},e),{},{robotFriends:0===n.length?e.defaultRobots:n,noResults:0===n.length});case"ROTBOTS_ERROR":return console.error(t.payload),Object(R.a)(Object(R.a)({},e),{},{error:t.payload});default:return e}}}),S=[E.a],T=Object(v.createStore)(y,{},Object(w.composeWithDevTools)(v.applyMiddleware.apply(void 0,S))),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:T},r.a.createElement(g,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monster-robot-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/monster-robot-pwa","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.1f23be6d.chunk.js.map