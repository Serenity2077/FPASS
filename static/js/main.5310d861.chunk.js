(this.webpackJsonpfpass=this.webpackJsonpfpass||[]).push([[0],{81:function(n,e){},83:function(n,e){},97:function(n,e,t){"use strict";t.r(e);var a=t(3),o=t(1),i=t(5),r=t.n(i),c=t(100),l=t(101),m=(t(55),t(9)),s=t(10),d=t(4);function h(){var n=Object(m.a)(["\n  display: inline-block;\n  overflow: hidden;\n  width: 32px;\n  height: 32px;\n  color: #fff;\n\n  &:hover {\n    color: #fff;\n  }\n\n  svg {\n    fill: currentColor;\n  }\n"]);return h=function(){return n},n}function u(){var n=Object(m.a)(["\n  background: #343a40;\n"]);return u=function(){return n},n}function g(){var n=Object(m.a)(["\n  body {\n    padding-top: 56px;\n  }\n"]);return g=function(){return n},n}Object(s.b)(g());var f=Object(s.a)(d.k).attrs({dark:!0,fixed:"top"})(u()),p=s.a.a.attrs({href:"https://github.com/fpass/fpass",target:"_blank"})(h()),j=function(){return Object(a.jsx)(f,{children:Object(a.jsxs)(d.b,{children:[Object(a.jsx)(d.l,{href:"/",children:"FPASS"}),Object(a.jsx)(p,{children:Object(a.jsx)("svg",{height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})]})})},b=t(26),v=t(42),x=t(43),O=t(49),w=t(48),y=t(44),k=t.n(y),C=t(45),S=t.n(C),E=t(46),N=t.n(E),A=function(n){var e=n.domain,t=n.salt,a=n.length;if(!e||!t||a<=2)return"";var o=Array.apply(null,{length:3}).reduce((function(n){return S()(n+t)}),e).substr(0,a).split("");o[0]=isNaN(o[0])?o[0].toLowerCase():String.fromCharCode(97+parseInt(o[0],10)),o[1]=isNaN(o[1])?o[1].toLowerCase():String.fromCharCode(97+parseInt(o[1],10)),o[2]=isNaN(o[2])?o[2].charCodeAt(0)%10:o[2],o[3]=["~","!","@","#","$","%","&"][o[4].charCodeAt(0)%7];for(var i=o.join(""),r=N()("keccak256").update(i).digest("hex"),c="",l=0;l<i.length;l++)parseInt(r[l],16)>=8?c+=i[l].toUpperCase():c+=i[l];return c},I=[{name:"\u817e\u8baf\u4f01\u4e1a\u90ae",domain:"exmail.qq.com",length:32},{name:"segmentfault",domain:"segmentfault.com",length:32},{name:"\u7b80\u4e66",domain:"jianshu.com",length:32},{name:"\u4f18\u9177",domain:"youku.com",length:16},{name:"Steam",domain:"store.steampowered.com",length:64},{name:"\u9489\u9489",domain:"dingtalk.com",length:64},{name:"\u817e\u8bafQQ",domain:"qq.com",length:16},{name:"\u5fae\u4fe1",domain:"wx.qq.com",length:16},{name:"GitHub",domain:"github.com",length:72},{name:"NPM",domain:"npmjs.com",length:72},{name:"\u77e5\u4e4e",domain:"zhihu.com",length:128},{name:"\u767e\u5ea6",domain:"baidu.com",length:14},{name:"\u65b0\u6d6a\u5fae\u535a",domain:"weibo.com",length:16},{name:"12306",domain:"12306.cn",length:20},{name:"\u8c46\u74e3",domain:"douban.com",length:20},{name:"\u62c9\u94a9",domain:"lagou.com",length:16},{name:"\u963f\u91cc\u4e91\u4f01\u4e1a\u90ae",domain:"qiye.aliyun.com",length:32},{name:"\u6dd8\u5b9d",domain:"taobao.com",length:20},{name:"\u4eac\u4e1c",domain:"jd.com",length:20},{name:"Coding",domain:"coding.net",length:64},{name:"\u5f00\u6e90\u4e2d\u56fd",domain:"oschina.net",length:20},{name:"\u7801\u4e91",domain:"gitee.com",length:16},{name:"\u6597\u9c7c",domain:"douyu.com",length:25},{name:"\u54d4\u54e9\u54d4\u54e9",domain:"bilibili.com",length:16},{name:"Cloudflare",domain:"cloudflare.com",length:128},{name:"Freenom",domain:"freenom.com",length:64},{name:"Vultr",domain:"vultr.com",length:128},{name:"\u5c0f\u7c73",domain:"mi.com",length:16},{name:"\u534e\u4e3a\u8d26\u53f7",domain:"vmall.com",length:32},{name:"\u7f51\u6613",domain:"163.com",length:16},{name:"\u5b66\u4fe1\u7f51",domain:"chsi.com.cn",length:30},{name:"\u963f\u91cc\u4e91\u76d8",domain:"aliyundrive.com",length:20},{name:"\u8c37\u6b4c",domain:"google",length:32},{name:"\u7f51\u6613\u90ae\u7bb1",domain:"163",length:32},{name:"bitwarden",domain:"bitwarden",length:32},{name:"Roam Research",domain:"roam",length:32},{name:"roamedit",domain:"roam",length:18},{name:"mxc",domain:"mxc",length:32},{name:"\u5e01\u5b89",domain:"bian",length:32},{name:"heyuedi",domain:"heyuedi",length:16},{name:"linode",domain:"linode",length:32},{name:"\u817e\u8baf\u4e91",domain:"cloud",length:30},{name:"\u82f9\u679c",domain:"appid",length:8},{name:"\u63a8\u7279",domain:"twitter",length:32},{name:"Paypal",domain:"paypal",length:20},{name:"\u543e\u7231",domain:"52pojie",length:32},{name:"\u6559\u80b2\u90e8\u8003\u8bd5\u4e2d\u5fc3",domain:"member.neea.cn",length:15},{name:"Etherscan",domain:"etherscan.io",length:75},{name:"Tokenpocket",domain:"tokenpocket.pro",length:64},{name:"\u5b57\u5e55\u7ec4",domain:"yysub.net",length:20},{name:"\u5929\u7ffc",domain:"189.cn",length:16},{name:"V2EX",domain:"v2ex.com",length:64},{name:"wallets",domain:"wallets",length:32},{name:"Ins",domain:"instagram.com",length:32},{name:"matters",domain:"matters.news",length:32}];I.sort((function(n,e){return n.domain<=e.domain?-1:1})),I.unshift({name:"\u81ea\u5b9a\u4e49",domain:""});function q(){var n=Object(m.a)(["\n  max-width: 480px;\n  width: 100%;\n  height: 380px;\n  padding: 15px 0;\n"]);return q=function(){return n},n}function F(){var n=Object(m.a)(["\n  min-height: calc(100vh - 56px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 767px) {\n    display: block;\n  }\n"]);return F=function(){return n},n}var L=Object(s.a)(d.b)(F()),B=Object(s.a)(d.c)(q()),M=function(n){Object(O.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=e.call.apply(e,[this].concat(o))).state={selected:0,domain:"",length:"",password:"",modal:!1},n.submitForm=function(e){n.encrypt()&&n.setState({modal:!0})},n}return Object(x.a)(t,[{key:"componentDidMount",value:function(){var n;this.clipboard(),this.keyup(),n=r.a.findDOMNode(this.refs.passForm).querySelectorAll("input"),Array.from(n).forEach((function(n){return n.addEventListener("focus",(function(){return setTimeout((function(){return n.scrollIntoView(!1)}),250)}))}))}},{key:"render",value:function(){var n=this,e=this.state,t=e.selected,o=e.modal;return Object(a.jsxs)(L,{children:[Object(a.jsxs)(B,{ref:"passForm",children:[Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.f,{children:"\u57df\u540d"}),Object(a.jsx)(d.e,{type:"select",onChange:function(e){return n.setState({selected:~~e.target.value})},value:t,children:I.map((function(n,e){return Object(a.jsx)("option",{value:e,children:0===e?n.name:"".concat(n.domain," - ").concat(n.name)},e)}))})]}),Object(a.jsxs)("div",{style:{display:0===t?"block":"none"},children:[Object(a.jsx)(d.d,{children:Object(a.jsx)(d.e,{type:"text",onInput:function(e){return n.setState({domain:e.target.value})}})}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.f,{children:"\u957f\u5ea6"}),Object(a.jsx)(d.e,{type:"number",onInput:function(e){return n.setState({length:e.target.value})}})]})]}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.f,{children:"\u5bc6\u7801"}),Object(a.jsx)(d.e,{type:"password",autoComplete:"on",onInput:function(e){return n.setState({password:e.target.value})}}),Object(a.jsx)(d.e,{style:{display:"none"}})]}),Object(a.jsx)(d.a,{color:"secondary",ref:"submitButton",onClick:this.submitForm,children:"\u786e\u5b9a"})]}),Object(a.jsxs)(d.g,{isOpen:o,centered:!0,children:[Object(a.jsx)(d.j,{children:"\u63d0\u793a"}),Object(a.jsx)(d.h,{children:"\u5bc6\u7801\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"}),Object(a.jsx)(d.i,{children:Object(a.jsx)(d.a,{color:"secondary",onClick:function(e){return n.setState({modal:!1})},children:"\u5173\u95ed"})})]})]})}},{key:"encrypt",value:function(){var n=this.state,e=n.selected,t=n.domain,a=n.length,o=n.password,i=I[e];return i&&o?A(0===e?{domain:t,length:a,salt:o}:Object(b.a)(Object(b.a)({},i),{},{salt:o})):""}},{key:"clipboard",value:function(){var n=this;new k.a(r.a.findDOMNode(this.refs.submitButton),{text:function(){return n.encrypt()}})}},{key:"keyup",value:function(){var n=this,e={13:function(){return r.a.findDOMNode(n.refs.submitButton).click()},27:function(){return n.setState({modal:!1})}};window.addEventListener("keyup",(function(n){var t=n.keyCode;return e[t]&&e[t]()}))}}]),t}(o.Component),R=function(){return Object(a.jsxs)(o.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(c.a,{children:Object(a.jsx)(l.a,{path:"/",component:M})})]})},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),window.__PLEASE_REFRESH__=!0):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}r.a.render(Object(a.jsx)(R,{}),document.getElementById("app")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");_?(!function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):W(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):W(n)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.5310d861.chunk.js.map