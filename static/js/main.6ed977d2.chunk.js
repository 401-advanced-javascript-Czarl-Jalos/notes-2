(this["webpackJsonpnotes-2"]=this["webpackJsonpnotes-2"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(3),a=n(5),s=n(4),u=n(0),i=n(9),o=n.n(i),l=n(1),j=n.n(l);n(15);var b=function(e){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"RESTy"})})})};n(16);var p=function(e){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{children:"\xa9 2020 Code Fellows"})})},h=n(6),O=n.n(h),v=n(8);n(18);var d=function(e){var t,n=function(){var e=Object(v.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t=n.target.value;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var n=Object(v.a)(O.a.mark((function n(r){var c,a,s;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),c=r.target.url.value,n.next=4,fetch(c);case 4:return a=n.sent,n.next=7,a.json();case 7:s=n.sent,e.handleList(s,c,t);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(u.jsxs)("form",{onSubmit:r,children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:["URL:",Object(u.jsx)("input",{id:"url",type:"text",name:"url"})]}),Object(u.jsx)("input",{type:"submit",value:"GO!"})]}),Object(u.jsxs)("div",{className:"button",children:[Object(u.jsx)("input",{onClick:n,type:"button",value:"GET"}),Object(u.jsx)("input",{onClick:n,type:"button",value:"POST"}),Object(u.jsx)("input",{onClick:n,type:"button",value:"PUT"}),Object(u.jsx)("input",{onClick:n,type:"button",value:"DELETE"})]})]})},f=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){console.log(this.props);var e=this.props.value.value.results||[],t=this.props.value.method,n=this.props.value.url;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("pre",{children:Object(u.jsx)("code",{children:Object(u.jsxs)("p",{children:[t," ",n,Object(u.jsx)("br",{}),JSON.stringify(e,null,2)]})})})})}}]),n}(j.a.Component),x=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handleList=function(e,t,n){c.setState({value:e,url:t,method:n}),console.log(c.state)},c.state={value:[],url:"",method:""},c}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(b,{}),Object(u.jsx)(d,{handleList:this.handleList}),Object(u.jsx)(f,{value:this.state}),Object(u.jsx)(p,{})]})}}]),n}(j.a.Component),m=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleClick=function(e){e.preventDefault(),console.log(e.target),console.log(e.target.name)},e.state={url:null},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsx)(x,{})}}]),n}(j.a.Component),y=document.getElementById("root");o.a.render(Object(u.jsx)(m,{}),y)}},[[19,1,2]]]);
//# sourceMappingURL=main.6ed977d2.chunk.js.map