(this["webpackJsonpreddit-test"]=this["webpackJsonpreddit-test"]||[]).push([[0],{15:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(8),i=c.n(a),d=(c(7),c(3)),s=c(9),o=function(t){return{type:"postList/loadData",payload:t}},u=[],l=c(0),h=function(t){var e=t.postList,c=t.subreddit,r=t.dispatch,a=Object(n.useState)(Object(l.jsx)("p",{})),i=Object(d.a)(a,2),s=i[0],u=i[1],h=Object(n.useState)(0),b=Object(d.a)(h,2),j=b[0],p=b[1],f="https://cdn.vox-cdn.com/thumbor/8i-wKl-12cdGNC4U4LF0tzMh3xM=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/37152424/reddit_logo_640.0.jpg";Object(n.useEffect)((function(){c&&(c.search?(u(Object(l.jsx)("p",{})),fetch("http://www.reddit.com/search.json?q=".concat(c.data,"&sort=").concat("relevance","&limit=").concat(25+25*j)).then((function(t){return t.json()})).then((function(t){console.log(t.data.children.map((function(t){return t.data}))),r(o(t.data.children))})).catch((function(t){return console.log(t)}))):(u(Object(l.jsx)("p",{})),fetch("http://www.reddit.com/r/".concat(c.data,".json?limit=").concat(25+25*j)).then((function(t){return t.json()})).then((function(t){console.log(t.data.children.map((function(t){return t.data}))),r(o(t.data.children))})).catch((function(t){return u(Object(l.jsx)("h2",{style:{marginTop:100},children:"The entered subreddit does not exist (or some other error)"})),console.log(t)}))))}),[c,r,j]),Object(n.useEffect)((function(){p(0)}),[c]);return e?Object(l.jsxs)("div",{id:"postlist",style:{marginTop:100},children:[Object(l.jsx)("div",{children:s}),Object(l.jsx)("ul",{children:e.map((function(t,e){return c.search,Object(l.jsxs)("li",{obj:t,children:[Object(l.jsx)("h2",{children:Object(l.jsx)("u",{children:t.data.title})}),Object(l.jsxs)("h3",{children:["Subreddit: ",t.data.subreddit]}),t.data.is_video?Object(l.jsxs)("video",{controls:!0,children:[Object(l.jsx)("source",{src:t.data.media.reddit_video.fallback_url,type:"video/mp4"}),Object(l.jsx)("source",{src:t.data.media.reddit_video.fallback_url.replace("DASH_1080.mp4?source=fallback","audio")})]}):Object(l.jsx)("img",{src:t.data.preview?t.data.preview.images[0].source.url.replace("amp;",""):f,alt:""}),Object(l.jsxs)("h4",{children:["Author name: ",t.data.author]}),Object(l.jsx)("p",{children:t.data.selftext}),Object(l.jsx)("a",{rel:"noreferrer",href:t.data.url,target:"_blank",children:Object(l.jsx)("u",{children:"Click here to open reddit post"})})]},e)}))}),Object(l.jsx)("button",{onClick:function(){p(j+1)},type:"button",id:"loadMore",children:"Load More..."})]}):Object(l.jsx)("h1",{style:{marginTop:100},children:"Sorry, posts weren't able to be retrieved"})},b=function(t,e){return{type:"subreddit/setSubreddit",payload:{data:t,search:e}}},j=function(t){var e=t.text,c=t.dispatch,r=Object(n.useState)(e),a=Object(d.a)(r,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){c({type:"searchbar/search",payload:i})}),[i,c]),Object(l.jsxs)("div",{id:"search",children:[Object(l.jsx)("h3",{children:"Search:"}),Object(l.jsx)("input",{onChange:function(t){return s(t.target.value)},id:"searchbar"}),Object(l.jsx)("button",{onClick:function(){c(b(e,!1))},id:"subredditButton",type:"submit",children:"Open Subreddit by Name"}),Object(l.jsx)("button",{onClick:function(){c(b(e,!0))},id:"searchButton",type:"submit",children:"Submit Search"})]})},p=function(t){var e=t.state,c=t.dispatch;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{text:e.text,dispatch:c}),Object(l.jsx)(h,{postList:e.postList,subreddit:e.subreddit,dispatch:c})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),r(t),a(t),i(t)}))},x=c(6),O={postList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"postList/loadData":return e.payload;case"postList/loadMore":return[].concat(Object(s.a)(t),[e.payload]);default:return t}},text:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return"searchbar/search"===e.type?e.payload:t},subreddit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return"subreddit/setSubreddit"===e.type?e.payload:t}},m=Object(x.b)(Object(x.a)(O)),v=function(){return i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{state:m.getState(),dispatch:m.dispatch})}),document.getElementById("root"))};f(),v(),m.subscribe(v)},7:function(t,e,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.c4759e7a.chunk.js.map