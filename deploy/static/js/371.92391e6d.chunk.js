"use strict";(self.webpackChunkpsbeauty=self.webpackChunkpsbeauty||[]).push([[371],{6427:function(n,e,t){t.d(e,{Z:function(){return x}});var r=t(1413),i=t(4942),o=t(4925),l="Header_wrapper__e2tXX",u="Header_large__tDbDa",d="Header_small__U9DHq",a="Header_back__Chgho",c="Header_title__87Ruw",s="Header_has-back__h6eqr",v=t(1694),f=t.n(v),g=t(9411),h=t(6871),p=t(184),_=["style"],x=function(n){var e,t=n.style,v=void 0===t?{}:t,x=(0,o.Z)(n,_),b=(0,h.s0)(),m=(0,h.UO)().text;return(0,p.jsxs)("div",{className:f()(l,x.className,(e={},(0,i.Z)(e,u,x.title||x.children),(0,i.Z)(e,d,!x.title&&!x.leftArrow),e)),style:(0,r.Z)({},v),children:[x.leftArrow&&(0,p.jsx)("div",{onClick:function(){return x.redirect?x.redirect():b(m?-2:-1)},children:(0,p.jsx)(g.Z,{className:a,name:"LeftArrow"})}),x.title?(0,p.jsx)("div",{className:f()(c,(0,i.Z)({},s,x.leftArrow)),children:x.title}):x.children]})}},8865:function(n,e,t){t.d(e,{Z:function(){return v}});var r=t(4874),i=t(2791),o="MessageCard_wrapper__ySAWV",l="MessageCard_title__aTmZV",u="MessageCard_message__pvkOQ",d="MessageCard_head__q5s9l",a="MessageCard_tag__rzOuC",c="MessageCard_unread__09yTm",s=t(184),v=function(n){var e=Object.assign({},n),t=(0,r.Z)({}),v=t.containerRef,f=t.isVisible;return(0,i.useEffect)((function(){null!==e&&void 0!==e&&e.last&&f&&e.fetchMore&&(null===e||void 0===e||e.fetchMore())}),[e.last,e.fetchMore,f]),(0,s.jsxs)("div",{ref:e.last?v:null,className:o,onClick:e.onClick,children:[(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("div",{className:a,children:e.isOneOnOne?"1vs1":"\u8aee\u8a62"}),(0,s.jsx)("div",{className:l,children:e.title})]}),(0,s.jsx)("div",{className:u,children:e.message}),e.unread&&(0,s.jsx)("div",{className:c})]})}},4874:function(n,e,t){var r=t(885),i=t(2791);e.Z=function(n){var e=n.root,t=void 0===e?null:e,o=n.rootMargin,l=void 0===o?"0px":o,u=n.threshold,d=void 0===u?1:u,a=(0,i.useState)(!1),c=(0,r.Z)(a,2),s=c[0],v=c[1],f=(0,i.useRef)(null),g=(0,i.useCallback)((function(n){f.current=n,v(!!n)}),[]),h=(0,i.useState)(!1),p=(0,r.Z)(h,2),_=p[0],x=p[1];return(0,i.useEffect)((function(){if(s){var n=new IntersectionObserver((function(n){var e=(0,r.Z)(n,1)[0];x(e.isIntersecting)}),{root:t,rootMargin:l,threshold:d});return(null===f||void 0===f?void 0:f.current)&&n.observe(f.current),function(){(null===f||void 0===f?void 0:f.current)&&n.unobserve(f.current)}}}),[t,l,d,s]),{containerRef:g,isVisible:_}}},4418:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,o=t(2982),l=t(885),u=t(6427),d=t(8865),a=t(7901),c=t(9062),s=t(8820),v=t(2791),f=t(1413),g=t(168),h=t(7743),p=t(6578),_=t(4376),x={},b=(0,h.Ps)(r||(r=(0,g.Z)(["\n  query GetDoctorInbox($input: String) {\n    clinicInbox(first: 15, after: $input, order: { id: DESC }) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          readAt\n          user {\n            id\n            name\n          }\n          topic {\n            id\n            consult {\n              id\n              subject\n              content\n            }\n            replies {\n              id\n              createdAt\n              contentType\n              content\n              readAt\n            }\n          }\n        }\n      }\n    }\n  }\n"])));var m=(0,h.Ps)(i||(i=(0,g.Z)(["\n  mutation readClinicInbox($input: ReadClinicInboxInput!) {\n    readClinicInbox(input: $input) {\n      id\n    }\n  }\n"])));var Z="DoctorInbox_wrapper__lz58A",C="DoctorInbox_hint__4bngY",I=t(2284),j=t(7724),M=t(2103),k=t(184),w=function(){var n,e,t,r=(0,j.a)(),i=(0,s.aC)(),g=function(n){var e=(0,f.Z)((0,f.Z)({},x),n);return p.a(b,e)}({fetchPolicy:"no-cache"}),h=g.data,w=g.loading,N=g.error,O=g.refetch,y=g.fetchMore,A=(null===h||void 0===h||null===(n=h.clinicInbox)||void 0===n?void 0:n.edges)||[],D=null!==(e=null===h||void 0===h||null===(t=h.clinicInbox)||void 0===t?void 0:t.pageInfo.hasNextPage)&&void 0!==e&&e,E=(0,v.useRef)(""),R=function(n){var e=(0,f.Z)((0,f.Z)({},x),n);return _.D(m,e)}(),H=(0,l.Z)(R,1)[0],P=(0,v.useMemo)((function(){return(0,c.JU)(I.RZ,"inbox",i.user.id||"")}),[]);(0,v.useEffect)((function(){return(0,c.cf)(P,(function(n){n.exists()&&O()}))}),[]);var S=function(){var n,e=(null===A||void 0===A||null===(n=A[A.length-1])||void 0===n?void 0:n.cursor)||null;y({variables:{input:e},updateQuery:function(n,t){var r,i,l,u,d,a=t.fetchMoreResult;return!e||e===(null===E||void 0===E?void 0:E.current)||null===a||void 0===a||null===(r=a.clinicInbox)||void 0===r||!r.edges||null===n||void 0===n||null===(i=n.clinicInbox)||void 0===i||!i.edges||(null===n||void 0===n||null===(l=n.clinicInbox)||void 0===l?void 0:l.edges.length)>A.length?n:(a.clinicInbox.edges=[].concat((0,o.Z)((null===n||void 0===n||null===(u=n.clinicInbox)||void 0===u?void 0:u.edges)||[]),(0,o.Z)((null===a||void 0===a||null===(d=a.clinicInbox)||void 0===d?void 0:d.edges)||[])),E.current=e,a)}})};return N?(0,k.jsx)(M.Z.Error,{}):(0,k.jsxs)(k.Fragment,{children:[w?(0,k.jsx)(M.Z.Loading,{}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u.Z,{leftArrow:!0,title:"\u6536\u4ef6\u593e"}),(0,k.jsx)("div",{className:Z,children:A.length?null===A||void 0===A?void 0:A.map((function(n,e){var t,i,o,l,u,a,c,s,v,f=(null===(t=n.node)||void 0===t?void 0:t.id)||"",g=null===(i=n.node)||void 0===i||null===(o=i.topic)||void 0===o?void 0:o.replies,h=null===(l=n.node)||void 0===l?void 0:l.topic,p=0===(null===(u=n.node)||void 0===u?void 0:u.readAt),_=(null===g||void 0===g?void 0:g.length)||0,x=(null===g||void 0===g||null===(a=g[_-1])||void 0===a?void 0:a.content)||(null===h||void 0===h||null===(c=h.consult)||void 0===c?void 0:c.content)||"",b=x.includes("https://firebasestorage")?"\u5716\u7247":x;return 0===_&&"OneOnOne"===(null===h||void 0===h||null===(s=h.consult)||void 0===s?void 0:s.content)?null:(0,k.jsx)(d.Z,{unread:p,title:(null===h||void 0===h||null===(v=h.consult)||void 0===v?void 0:v.subject)||"\u4f86\u81ea\u6703\u54e1\u7684\u4e00\u5c0d\u4e00\u8aee\u8a62",message:b,last:A.length-1===e,fetchMore:function(){D&&S()},onClick:function(){var n;n=f,console.log("read: ".concat(n)),H({variables:{input:{clinicInboxId:n}}}),O(),r.toChatroom({id:(null===h||void 0===h?void 0:h.id)||""})}},f)})):(0,k.jsx)("div",{className:C,children:"\u5c1a\u672a\u6709\u4efb\u4f55\u4fe1\u4ef6"})})]}),(0,k.jsx)(a.Z.Clinic,{})]})}},4376:function(n,e,t){t.d(e,{D:function(){return c}});var r=t(9388),i=t(2791),o=t(3124),l=t(5970),u=t(2364),d=t(9484),a=t(5046);function c(n,e){var t=(0,a.x)(null===e||void 0===e?void 0:e.client);(0,u.Vp)(n,u.n_.Mutation);var c=(0,i.useState)({called:!1,loading:!1,client:t}),s=c[0],v=c[1],f=(0,i.useRef)({result:s,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(f.current,{client:t,options:e,mutation:n});var g=(0,i.useCallback)((function(n){void 0===n&&(n={});var e=f.current,t=e.client,i=e.options,u=e.mutation,a=(0,r.pi)((0,r.pi)({},i),{mutation:u});f.current.result.loading||a.ignoreResults||v(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var c=++f.current.mutationId,s=(0,o.J)(a,n);return t.mutate(s).then((function(e){var r,i,o,u=e.data,a=e.errors,g=a&&a.length>0?new d.c({graphQLErrors:a}):void 0;if(c===f.current.mutationId&&!s.ignoreResults){var h={called:!0,loading:!1,data:u,error:g,client:t};f.current.isMounted&&!(0,l.D)(f.current.result,h)&&v(f.current.result=h)}return null===(i=null===(r=f.current.options)||void 0===r?void 0:r.onCompleted)||void 0===i||i.call(r,e.data),null===(o=n.onCompleted)||void 0===o||o.call(n,e.data),e})).catch((function(e){var r,i,o,u;if(c===f.current.mutationId&&f.current.isMounted){var d={loading:!1,error:e,data:void 0,called:!0,client:t};(0,l.D)(f.current.result,d)||v(f.current.result=d)}if((null===(r=f.current.options)||void 0===r?void 0:r.onError)||s.onError)return null===(o=null===(i=f.current.options)||void 0===i?void 0:i.onError)||void 0===o||o.call(i,e),null===(u=n.onError)||void 0===u||u.call(n,e),{data:void 0,errors:e};throw e}))}),[]),h=(0,i.useCallback)((function(){v({called:!1,loading:!1,client:t})}),[]);return(0,i.useEffect)((function(){return f.current.isMounted=!0,function(){f.current.isMounted=!1}}),[]),[g,(0,r.pi)({reset:h},s)]}}}]);
//# sourceMappingURL=371.92391e6d.chunk.js.map