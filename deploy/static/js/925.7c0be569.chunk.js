"use strict";(self.webpackChunkpsbeauty=self.webpackChunkpsbeauty||[]).push([[925],{2313:function(n,e,t){t.d(e,{Z:function(){return u}});var o=t(1413),r=t(4942),c=t(4925),s=(t(2791),t(1694)),a=t.n(s),i={wrapper:"Button_wrapper__GqKsN",primary:"Button_primary__9MLUH",secondary:"Button_secondary__sUGsj",selected:"Button_selected__NZP20",text:"Button_text__Rk+Tr",transparent:"Button_transparent__puDsp"},l=t(184),d=["variant","className","selected","children","eventKey","onClick"],u=function(n){var e=n.variant,t=void 0===e?"primary":e,s=n.className,u=n.selected,p=void 0!==u&&u,f=n.children,m=void 0===f?"Click":f,x=n.eventKey,v=n.onClick,h=(0,c.Z)(n,d);return(0,l.jsx)("button",(0,o.Z)((0,o.Z)({className:a()(i.wrapper,i[t],(0,r.Z)({},i.selected,p),s),style:h.style,onClick:function(n){v&&v(n,{eventKey:x})}},h),{},{children:m}))}},4433:function(n,e,t){t.d(e,{Z:function(){return N}});var o=t(4925),r=t(7467),c=t(184),s=["open","backdrop"],a=function(n){var e=n.open,t=void 0!==e&&e,a=n.backdrop,i=void 0===a||a,l=(0,o.Z)(n,s);return(0,c.jsx)(r.Z,{modal:!0,nested:!0,lockScroll:!0,open:t,closeOnDocumentClick:i,closeOnEscape:!0,onClose:l.onClose,contentStyle:{background:"transparent",border:"none",width:"auto"},overlayStyle:{backgroundColor:"#091e428a"},children:l.children})},i=t(1694),l=t.n(i),d="ModalDialog_wrapper__SJQv5",u=function(n){return(0,c.jsx)("div",{className:l()(d,n.className),style:n.style,children:n.children})},p="ModalHeader_wrapper__tVVhd",f=function(n){return(0,c.jsxs)("header",{className:l()(p,n.className),style:n.style,children:[(0,c.jsx)("h1",{children:n.title}),n.children]})},m="ModalBody_main__yFQS5",x=function(n){return(0,c.jsx)("main",{className:l()(m,n.className),style:n.style,children:n.children||n.content})},v=t(4942),h="ModalFooter_wrapper__eBzg3",_="ModalFooter_disabled__U85L9",C=function(n){var e,t;return(0,c.jsxs)("footer",{className:l()(h,n.className),style:n.style,children:[!!n.cancelText&&(0,c.jsx)("div",{onClick:function(){n.onCancel&&n.onCancel(),n.onClose&&n.onClose()},className:l()((0,v.Z)({},_,null===(e=n.cancelButtonProps)||void 0===e?void 0:e.disabled)),children:n.cancelText}),!!n.confirmText&&(0,c.jsx)("div",{onClick:function(){n.onConfirm&&n.onConfirm(),n.onClose&&n.onClose()},className:l()((0,v.Z)({},_,null===(t=n.confirmButtonProps)||void 0===t?void 0:t.disabled)),children:n.confirmText})]})},Z=function(n){return(0,c.jsx)(a,{open:n.open,closeOnDocumentClick:n.backdrop,onClose:n.onClose,children:(0,c.jsxs)(u,{children:[(0,c.jsx)(f,{title:n.title}),(0,c.jsx)(x,{content:n.content,children:n.children}),(0,c.jsx)(C,{confirmText:n.confirmText,confirmButtonProps:n.confirmButtonProps,cancelText:n.cancelText,cancelButtonProps:n.cancelButtonProps,onConfirm:n.onConfirm,onCancel:n.onCancel,onClose:n.onClose})]})})},y=t(1413),j=(t(2791),t(4164)),b=["onConfirm","onCancel","onClose"];function k(n,e){var t=function(){var n=document.getElementById("popup-root");return n||((n=document.createElement("div")).setAttribute("id","popup-root"),document.body.appendChild(n)),n}(),r=document.createElement("div");function s(e){j.render((0,c.jsx)(n,(0,y.Z)({},function(n){var e=n.onConfirm,t=n.onCancel,r=n.onClose,c=(0,o.Z)(n,b),s=function(n){return n?function(){"function"===typeof n&&n(),a()}:a};return(0,y.Z)((0,y.Z)({},c),{},{onConfirm:s(e),onCancel:s(t),onClose:s(r)})}(e))),r)}function a(){s((0,y.Z)((0,y.Z)({},e),{},{open:!1}))}return t.appendChild(r),s((0,y.Z)((0,y.Z)({},e),{},{open:!0})),{destroy:a,update:function(n){s((0,y.Z)((0,y.Z)((0,y.Z)({},e),n),{},{open:!0}))}}}var N=Object.assign(Z,{alert:function(n){return k(Z,function(n){return(0,y.Z)((0,y.Z)({},n),{},{cancelText:null})}(n))},confirm:function(n){return k(Z,function(n){return(0,y.Z)((0,y.Z)({},n),{},{cancelText:n.cancelText})}(n))},Dialog:u,Header:f,Body:x,Footer:C})},925:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var o=t(1413),r=t(4165),c=t(5861),s=t(885),a="ResendVerification_wrapper__xFesl",i="ResendVerification_title__BbNh8",l="ResendVerification_subtitle__JWDZp",d="ResendVerification_actions__srbPO",u=t(4576),p=t(2313),f=t(4433),m=t(2791),x=t(7724),v=t(1134),h=t(2284),_=t(184),C=function(){var n=(0,x.a)(),e=(0,m.useState)(""),t=(0,s.Z)(e,2),C=t[0],Z=t[1],y=(0,v.cI)({mode:"all"}),j=y.register,b=y.handleSubmit,k=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.xb(e.account,e.password);case 3:Z("\u767c\u9001\u6210\u529f"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),/too-many-requests/.test("".concat(n.t0))?Z("\u9a57\u8b49\u4fe1\u5df2\u5bc4\u9001"):Z("\u5e33\u865f\u5bc6\u78bc\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsxs)("div",{className:a,children:[(0,_.jsx)("div",{className:i,children:"\u91cd\u767c\u9a57\u8b49\u4fe1\u4ef6"}),(0,_.jsx)("div",{className:l,children:"\u6b61\u8fce\u56de\u4f86\uff01\u8acb\u8f38\u5165\u4f60\u7684\u8cc7\u6599"}),(0,_.jsxs)(u.ZP,{onSubmit:b(k),children:[(0,_.jsx)(u.ZP.Input,(0,o.Z)({type:"text",variant:"gray",placeholder:"\u5e33\u865f"},j("account"))),(0,_.jsx)(u.ZP.Input,(0,o.Z)({type:"password",variant:"gray",placeholder:"\u5bc6\u78bc"},j("password"))),(0,_.jsx)(p.Z,{variant:"transparent",type:"submit",children:"\u91cd\u65b0\u767c\u9001"}),(0,_.jsx)(p.Z,{variant:"transparent",type:"button",onClick:n.toHome,children:"\u8a2a\u5ba2\u767b\u5165"}),(0,_.jsx)(f.Z,{title:"\u8a0a\u606f",open:!!C,confirmText:"\u78ba\u5b9a",onClose:function(){return Z("")},children:C})]}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("div",{}),(0,_.jsx)("div",{onClick:n.toForgotPassword,children:"\u5fd8\u8a18\u5bc6\u78bc"}),(0,_.jsx)("div",{children:"|"}),(0,_.jsx)("div",{onClick:n.toRegister,children:"\u8a3b\u518a\u5e33\u865f"}),(0,_.jsx)("div",{})]})]})}}}]);
//# sourceMappingURL=925.7c0be569.chunk.js.map