"use strict";(self.webpackChunkpsbeauty=self.webpackChunkpsbeauty||[]).push([[589],{8788:function(e,t,n){n.d(t,{l:function(){return D}});var r,o,a,i,u,c=n(2791);function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.Center="center",e.Right="right",e.Left="left"}(r||(r={})),function(e){e.Next="next",e.Prev="prev",e.Up="up",e.Down="down"}(o||(o={})),function(e){e.TopLeft="TopLeft",e.TopCenter="TopCenter",e.TopRight="TopRight",e.CenterLeft="CenterLeft",e.CenterCenter="CenterCenter",e.CenterRight="CenterRight",e.BottomLeft="BottomLeft",e.BottomCenter="BottomCenter",e.BottomRight="BottomRight"}(a||(a={})),function(e){e.page="page",e.remainder="remainder"}(i||(i={})),function(e){e.EaseLinear="easeLinear",e.EaseQuad="easeQuad",e.EaseQuadIn="easeQuadIn",e.EaseQuadOut="easeQuadOut",e.EaseQuadInOut="easeQuadInOut",e.EaseCubic="easeCubic",e.EaseCubicIn="easeCubicIn",e.EaseCubicOut="easeCubicOut",e.EaseCubicInOut="easeCubicInOut",e.EasePoly="easePoly",e.EasePolyIn="easePolyIn",e.EasePolyOut="easePolyOut",e.EasePolyInOut="easePolyInOut",e.EaseSin="easeSin",e.EaseSinIn="easeSinIn",e.EaseSinOut="easeSinOut",e.EaseSinInOut="easeSinInOut",e.EaseExp="easeExp",e.EaseExpIn="easeExpIn",e.EaseExpOut="easeExpOut",e.EaseExpInOut="easeExpInOut",e.EaseCircle="easeCircle",e.EaseCircleIn="easeCircleIn",e.EaseCircleOut="easeCircleOut",e.EaseCircleInOut="easeCircleInOut",e.EaseBack="easeBack",e.EaseBackIn="easeBackIn",e.EaseBackOut="easeBackOut",e.EaseBackInOut="easeBackInOut",e.EaseBounce="easeBounce",e.EaseBounceIn="easeBounceIn",e.EaseBounceOut="easeBounceOut",e.EaseBounceInOut="easeBounceInOut",e.EaseElastic="easeElastic",e.EaseElasticIn="easeElasticIn",e.EaseElasticOut="easeElasticOut",e.EaseElasticInOut="easeElasticInOut"}(u||(u={}));var f=function(e,t,n,r,o,a,i,u,c){var l=function(e,t){return"".concat(t?100/(3*e):100/e,"%")}(e,r),s=n?1:0,f="fade"===a?200:500;return{width:l,flex:1,height:c?"100%":"auto",padding:"0 ".concat(o?o/2:0,"px"),transition:a?"".concat(i||f,"ms ease 0s"):"none",transform:"".concat("zoom"===a?"scale(".concat(t?1:u||.85,")"):"initial"),touchAction:"none",opacity:"fade"===a?s:1}},d=function(e){var t=e.count,n=e.children,o=e.currentSlide,a=e.index,i=e.isCurrentSlide,u=e.typeOfSlide,s=e.wrapAround,d=e.cellSpacing,p=e.animation,m=e.speed,b=e.slidesToShow,g=e.zoomScale,v=e.cellAlign,y=e.setFrameHeight,h=e.frameHeight,C=e.visibleHeights,E=e.adaptiveHeight,O=s?function(e,t,n){return"prev-cloned"===n?e-t:"next-cloned"===n?e+t:e}(a,t,u):a,S=function(e,t,n,o){return 1===n?t===e:o===r.Left?t<e+n&&t>=e:o===r.Center?t>=e-n/2&&t<=e||t>e&&t<=e+n/2:o===r.Right&&t<=e&&t>e-n}(o,O,b,v),w=(0,c.useRef)(null);return(0,c.useEffect)((function(){var e=w.current;if(e){var t,n=null===(t=e.getBoundingClientRect())||void 0===t?void 0:t.height;S?e.removeAttribute("inert"):e.setAttribute("inert","true"),E&&S&&1===b?n!==h&&y(n):E&&S&&b>1?C.current=[].concat(l(C.current),[{height:n,slideIndex:O}]):E&&!S&&C.current.findIndex((function(e){return e.slideIndex===O}))>-1&&(C.current=C.current.filter((function(e){return e.slideIndex!==O})))}}),[E,O,h,S,y,b,C]),(0,c.useEffect)((function(){if(E&&b>1){var e=C.current.reduce((function(e,t){return e>=t.height?e:t.height}),0);e!==h&&y(e)}}),[E,C.current]),c.createElement("div",{ref:w,className:"slide".concat(u?" ".concat(u):"").concat(S?" slide-visible":""),style:f(t,i,S,s,d,p,m,g,E)},n)},p={position:"absolute",width:"1px",height:"1px",overflow:"hidden",padding:0,margin:"-1px",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},m=function(e){var t=e.message,n=e.ariaLive,r=void 0===n?"polite":n;return c.createElement("div",{"aria-live":r,"aria-atomic":"true",style:p,tabIndex:-1},t)},b=function(e,t,n,o,a){if(o===r.Left){if(a){var i=100/(3*e);return t-i*(n-1)-i}return-(100/e*n+t)}if(o===r.Center){if(a){var u=100/(3*e);return t-u*(n-1)-u}return t-100/e*n}if(o===r.Right){if(a){var c=100/(3*e);return t-c*(n-1)-c}return t-100/e*n}return t},g=function(e,t,n,o,a,i,u,l,s){var f=c.Children.count(e),d=function(e,t,n){var r=t||1;return"".concat(n?100*e/r*3:100*e/r,"%")}(f,o,i),p=function(e,t,n,o,a,i){if(!e||e===r.Left){var u=b(n,a?100/(3*n)*-n:0,o,e,a),c=i?"calc(".concat(u,"% - ").concat(i,"px)"):"".concat(u,"%");return"translate3d(".concat(c,", 0, 0)")}if(e===r.Right){var l=b(n,a?100/(3*n)*-n+100/(3*n)*(t-1):t>1?100/n*(t-1):0,o,e,a),s=i?"calc(".concat(l,"% - ").concat(i,"px)"):"".concat(l,"%");return"translate3d(".concat(s,", 0, 0)")}if(e===r.Center){var f=t>1?100/n*Math.floor(t/2):0,d=t%2===0?f-100/n/2:f,p=100/(3*n)*-n+Math.floor(t/2)*(100/(3*n)),m=b(n,a?t%2===0?p-100/(3*n)/2:p:d,o,e,a),g=i?"calc(".concat(m,"% - ").concat(i,"px)"):"".concat(m,"%");return"translate3d(".concat(g,", 0, 0)")}return"translate3d(0, 0, 0)"}(a||r.Left,o||1,f,t,i,l);return{width:d,textAlign:"left",transition:n&&"fade"!==s?"".concat(u||500,"ms ease 0s"):"none",transform:p,display:"flex"}},v=function(e){switch(e){case a.TopLeft:return{position:"absolute",top:0,left:0};case a.TopCenter:return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case a.TopRight:return{position:"absolute",top:0,right:0};case a.CenterLeft:return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case a.CenterCenter:return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case a.CenterRight:return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case a.BottomLeft:return{position:"absolute",bottom:0,left:0};case a.BottomCenter:return{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case a.BottomRight:return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=[{funcName:"renderTopLeftControls",key:a.TopLeft},{funcName:"renderTopCenterControls",key:a.TopCenter},{funcName:"renderTopRightControls",key:a.TopRight},{funcName:"renderCenterLeftControls",key:a.CenterLeft},{funcName:"renderCenterCenterControls",key:a.CenterCenter},{funcName:"renderCenterRightControls",key:a.CenterRight},{funcName:"renderBottomLeftControls",key:a.BottomLeft},{funcName:"renderBottomCenterControls",key:a.BottomCenter},{funcName:"renderBottomRightControls",key:a.BottomRight}],O=function(e,t,n,r,o,a,i){return e.withoutControls?null:E.map((function(u){var l;return e[u.funcName]&&"function"===typeof e[u.funcName]?c.createElement("div",{key:u.funcName,className:["slider-control-".concat(u.key.toLowerCase()),e.defaultControlsConfig.containerClassName||""].join(" ").trim(),style:h({},v(u.key))},null===(l=e[u.funcName])||void 0===l?void 0:l.call(e,{cellAlign:e.cellAlign,cellSpacing:e.cellSpacing,currentSlide:n,defaultControlsConfig:e.defaultControlsConfig||{},goToSlide:function(e){return r(e)},nextSlide:function(){return o()},previousSlide:function(){return a()},scrollMode:e.scrollMode,slideCount:t,slidesToScroll:i,slidesToShow:e.slidesToShow||1,vertical:e.vertical,wrapAround:e.wrapAround})):c.createElement(c.Fragment,{key:u.funcName})}))};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(e){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,textTransform:"uppercase",opacity:e?.3:1,cursor:e?"not-allowed":"pointer"}},I=function(e){var t=e.defaultControlsConfig||{},n=t.prevButtonClassName,r=t.prevButtonStyle,o=void 0===r?{}:r,a=t.prevButtonText,i=function(e){var t=e.currentSlide,n=e.slideCount,r=e.slidesToShow,o=e.wrapAround;return!(o&&r<n)&&!o&&0===t}(e);return c.createElement("button",{className:n,style:w(w({},T(i)),o),disabled:i,onClick:function(t){t.preventDefault(),null===e||void 0===e||e.previousSlide()},"aria-label":"previous",type:"button"},a||"Prev")},x=function(e){var t=e.defaultControlsConfig,n=t.nextButtonClassName,r=t.nextButtonStyle,o=void 0===r?{}:r,a=t.nextButtonText,u=function(e){var t=e.currentSlide,n=e.slideCount,r=e.slidesToShow,o=e.slidesToScroll,a=e.wrapAround,u=e.scrollMode;return!a&&u===i.remainder&&t>=n-r||!(a&&r<n)&&!a&&!(t<n-o)}(e);return c.createElement("button",{className:n,style:w(w({},T(u)),o),disabled:u,onClick:function(t){t.preventDefault(),e.nextSlide()},"aria-label":"next",type:"button"},a||"Next")},j=function(e){var t=(0,c.useCallback)((function(e){return{cursor:"pointer",opacity:e?1:.5,background:"transparent",border:"none",fill:"black"}}),[]),n=(0,c.useMemo)((function(){return function(e,t,n,r,o){for(var a=[],u=0===t?1:t,c=0;c<e;c+=u)!o&&n===i.remainder&&c>e-r||a.push(c);if(!o&&n===i.remainder&&r%1!==0){var l=a[a.length-1];a.push(l+r%1)}return a}(e.slideCount,e.slidesToScroll,e.scrollMode,e.slidesToShow,e.wrapAround)}),[e.slideCount,e.slidesToScroll,e.scrollMode,e.slidesToShow,e.wrapAround]),r=e.defaultControlsConfig,o=r.pagingDotsContainerClassName,a=r.pagingDotsClassName,u=r.pagingDotsStyle,l=void 0===u?{}:u;return c.createElement("ul",{className:o,style:{position:"relative",top:-10,display:"flex",margin:0,padding:0,listStyleType:"none"}},n.map((function(r,o){var i=e.currentSlide===r||e.currentSlide-e.slideCount===r||e.currentSlide+e.slideCount===r;return e.currentSlide<r&&e.currentSlide>n[o-1]&&(i=!0),c.createElement("li",{key:r,className:i?"paging-item active":"paging-item"},c.createElement("button",{className:a,type:"button",style:w(w({},t(i)),l),onClick:e.goToSlide.bind(null,r),"aria-label":"slide ".concat(r+1," bullet"),"aria-selected":i},c.createElement("svg",{className:"paging-dot",width:"6",height:"6","aria-hidden":"true",focusable:"false"},c.createElement("circle",{cx:"3",cy:"3",r:"3"}))))})))},P={adaptiveHeight:!1,afterSlide:function(){},autoplay:!1,autoplayInterval:3e3,autoplayReverse:!1,beforeSlide:function(){},cellAlign:r.Left,cellSpacing:0,defaultControlsConfig:{},disableAnimation:!1,disableEdgeSwiping:!1,dragging:!0,dragThreshold:.5,easing:u.EaseCircleOut,edgeEasing:u.EaseElasticOut,enableKeyboardControls:!1,frameAriaLabel:"carousel-slider",keyCodeConfig:{nextSlide:[39,68,38,87],previousSlide:[37,65,40,83],firstSlide:[81],lastSlide:[69],pause:[32]},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},pauseOnHover:!0,renderAnnounceSlideMessage:function(e){var t=e.currentSlide,n=e.count;return"Slide ".concat(t+1," of ").concat(n)},renderBottomCenterControls:function(e){return c.createElement(j,e)},renderCenterLeftControls:function(e){return c.createElement(I,e)},renderCenterRightControls:function(e){return c.createElement(x,e)},scrollMode:i.page,slideIndex:0,slidesToScroll:1,slidesToShow:1,speed:500,style:{},swiping:!0,vertical:!1,withoutControls:!1,wrapAround:!1,children:c.createElement(c.Fragment,null)};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(e){var t=e.adaptiveHeight,n=e.afterSlide,r=e.animation,o=e.autoplay,a=e.autoplayInterval,u=e.autoplayReverse,l=e.beforeSlide,s=e.cellAlign,f=e.cellSpacing,p=e.children,b=e.className,v=e.disableAnimation,y=e.disableEdgeSwiping,h=e.dragging,C=e.dragThreshold,E=e.enableKeyboardControls,S=e.frameAriaLabel,w=e.innerRef,k=e.keyCodeConfig,T=e.onDrag,I=e.onDragEnd,x=e.onDragStart,j=e.pauseOnHover,P=e.renderAnnounceSlideMessage,A=e.scrollMode,L=e.slideIndex,N=e.slidesToScroll,D=e.slidesToShow,M=e.speed,H=e.style,Q=e.swiping,X=e.wrapAround,F=e.zoomScale,W=c.Children.count(p),U=R((0,c.useState)(u?W-D:L),2),Y=U[0],z=U[1],K=R((0,c.useState)(!1),2),$=K[0],q=K[1],J=R((0,c.useState)(!1),2),G=J[0],V=J[1],Z=R((0,c.useState)(!1),2),_=Z[0],ee=Z[1],te=R((0,c.useState)(0),2),ne=te[0],re=te[1],oe=R((0,c.useState)(0),2),ae=oe[0],ie=oe[1],ue=(0,c.useRef)([]),ce=R((0,c.useState)(null),2),le=ce[0],se=ce[1],fe=(0,c.useRef)(null),de=(0,c.useRef)(!1),pe=(0,c.useRef)(0),me=(0,c.useRef)(null),be=(0,c.useRef)(null),ge=(0,c.useRef)(!0),ve="fade"===r?D:N,ye=(fe.current||0)/D*C,he=function(e,t,n){var r=e,o=t;return r<0?r+=n:r>n-1&&(r-=n),o<0?o+=n:o>n-1&&(o-=n),[r,o]}(Y,Y-ve,W),Ce=R(he,1)[0];(0,c.useEffect)((function(){return ge.current=!0,function(){ge.current=!1}}),[]),(0,c.useEffect)((function(){document.querySelectorAll(".slider-list img").forEach((function(e){return e.setAttribute("draggable","false")}))}),[]);var Ee=w||me,Oe=(0,c.useCallback)((function(e){var t=null!==e&&void 0!==e?e:Y;return t<0?t+W:t===W?0:t}),[W,Y]),Se=(0,c.useCallback)((function(e){var t=Oe(e);"number"===typeof e&&l(Ce,t),!v&&q(!0),"number"===typeof e&&z(e),setTimeout((function(){ge.current&&("number"===typeof e&&n(t),!v&&q(!1))}),v?40:M||500)}),[Ce,n,l,v,Oe,M]),we=(0,c.useCallback)((function(){if(X||Y<W-N){var e=function(e,t,n,r,o,a){return!t&&e===i.remainder&&r<n+(o+a)?n+(r-(n+o)-(a-o)):n+o}(A,X,Y,W,N,D);Se(e)}}),[W,Y,Se,N,A,X,D]),ke=(0,c.useCallback)((function(){if(X||Y>0){var e=function(e,t,n,r){return!t&&e===i.remainder&&n-r<0?0:n-r}(A,X,Y,N);Se(e)}}),[Y,Se,N,A,X]);(0,c.useEffect)((function(){"number"!==typeof L||u||Se(L)}),[L,u]),(0,c.useEffect)((function(){o&&!$&&X&&(Y>W?(z(Y-W),null!==be&&void 0!==be&&be.current&&clearTimeout(be.current)):Y<0&&(z(W- -Y),null!==be&&void 0!==be&&be.current&&clearTimeout(be.current)))}),[$,Y,W,X,o]),(0,c.useEffect)((function(){return o&&!G&&(be.current=setTimeout((function(){u?(!X&&Y>0||X)&&ke():(!X&&Y<W-D||X)&&we()}),a)),o&&G&&null!==be&&void 0!==be&&be.current&&clearTimeout(be.current),function(){be.current&&clearTimeout(be.current)}}),[Y,D,W,G,o,a,u,X,ke,we]),(0,c.useEffect)((function(){var e=null,t=null;if(X&&!o){var n=v?0:M||500;Y<=-D?e=setTimeout((function(){ge.current&&z(W- -Y)}),n+10):Y>=W&&(t=setTimeout((function(){ge.current&&z(Y-W)}),n+10))}return function(){e&&clearTimeout(e),t&&clearTimeout(t)}}),[Y,o,X,v,M,D,W]),(0,c.useEffect)((function(){if(E&&le&&de.current){switch(le){case"nextSlide":we();break;case"previousSlide":ke();break;case"firstSlide":z(0);break;case"lastSlide":z(W-D);break;case"pause":if(G&&o){V(!1);break}if(o){V(!0);break}}se(null)}}),[le,E,W,D,G,o,we,ke]);var Te=(0,c.useCallback)((function(e){if(E&&de.current&&e.keyCode){var t=k;for(var n in t){var r;null!==(r=t[n])&&void 0!==r&&r.includes(e.keyCode)&&se(n)}}}),[E,k]);(0,c.useEffect)((function(){var e,t,n;return me&&me.current?fe.current=me.current.offsetWidth:w&&(fe.current=w.current.offsetWidth),E&&(e=document,t="keydown",n=Te,null!==e&&"undefined"!==typeof e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n)),function(){!function(e,t,n){null!==e&&"undefined"!==typeof e&&(e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on".concat(t),n):e["on".concat(t)]=null)}(document,"keydown",Te)}}),[E,w,Te]);var Ie=(0,c.useCallback)((function(e){if(h&&_){if(ee(!1),I(e),Math.abs(ne)<=ye)return Se(),re(0),void(pe.current=0);ne>0?we():ke(),re(0),pe.current=0}}),[ye,_,ne,Se,we,I,ke,h]),xe=(0,c.useCallback)((function(e){Q&&(ee(!0),x(e))}),[x,Q]),je=(0,c.useCallback)((function(e){if(h&&_){var t=.75*e,n=ne+(t-pe.current);Math.abs(ne)>ye?Ie():(!X&&y&&(Y<=0&&n<=0||n>0&&Y>=W-D)||0!==pe.current&&re(n),pe.current=t)}}),[W,Y,y,ye,_,Ie,ne,h,D,X]),Pe=(0,c.useCallback)((function(e){if(h&&_){x(e);var t=((null===fe||void 0===fe?void 0:fe.current)||0)-e.touches[0].pageX;je(t)}}),[h,_,je,x]),Ae=(0,c.useCallback)((function(e){var t;h&&(null===Ee||void 0===Ee||null===(t=Ee.current)||void 0===t||t.focus(),ee(!0),x(e))}),[Ee,h,x]),Be=(0,c.useCallback)((function(e){var t;if(h&&_){T(e);var n=e.clientX-((null===(t=Ee.current)||void 0===t?void 0:t.getBoundingClientRect().left)||0),r=((null===fe||void 0===fe?void 0:fe.current)||0)-n;je(r)}}),[Ee,_,je,T,h]),Le=(0,c.useCallback)((function(e){null===e||void 0===e||e.preventDefault(),Ie(e)}),[Ie]),Re=(0,c.useCallback)((function(){j&&V(!0)}),[j]),Ne=(0,c.useCallback)((function(){j&&V(!1)}),[j]),De=function(e){return c.Children.map(p,(function(n,o){var a=X?Y===o||Y===o+W||Y===o-W:Y===o;return c.createElement(d,{key:"".concat(e,"-").concat(o),count:W,currentSlide:Y,index:o,isCurrentSlide:a,typeOfSlide:e,wrapAround:X,cellSpacing:f,animation:r,slidesToShow:D,speed:M,zoomScale:F,cellAlign:s,setFrameHeight:ie,frameHeight:ae,visibleHeights:ue,adaptiveHeight:t},n)}))};return c.createElement("div",{className:"slider-container",style:{position:"relative"},onMouseEnter:Re,onMouseLeave:Ne},c.createElement(m,{ariaLive:o&&!G?"off":"polite",message:P({currentSlide:Ce,count:W})}),c.createElement("div",{className:["slider-frame",b||""].join(" ").trim(),style:B({overflow:"hidden",width:"100%",position:"relative",outline:"none",height:t?"".concat(ae,"px"):"auto"},H),"aria-label":S,role:"region",tabIndex:0,onFocus:function(){return de.current=!0},onBlur:function(){return de.current=!1},ref:w||me,onMouseUp:Le,onMouseDown:Ae,onMouseMove:Be,onMouseLeave:Le,onTouchStart:xe,onTouchEnd:Ie,onTouchMove:Pe},c.createElement("div",{className:"slider-list",style:g(p,Y,$,D,s,X,M,ne,r)},X?De("prev-cloned"):null,De(),X?De("next-cloned"):null)),O(e,W,Y,Se,we,ke,ve))};D.defaultProps=P},6586:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(9388),o=n(2791),a=n(3124),i=n(6578),u=n(5046),c=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function l(e,t){var n=(0,i.A)((0,u.x)(t&&t.client),e),l=(0,o.useRef)(),s=l.current?(0,a.J)(t,l.current):t,f=n.useQuery((0,r.pi)((0,r.pi)({},s),{skip:!l.current})),d=f.observable.options.initialFetchPolicy||n.getDefaultFetchPolicy(),p=Object.assign(f,{called:!!l.current}),m=(0,o.useMemo)((function(){for(var e={},t=function(t){var r=p[t];e[t]=function(){return l.current||(l.current=Object.create(null),n.forceUpdate()),r.apply(this,arguments)}},r=0,o=c;r<o.length;r++){t(o[r])}return e}),[]);return Object.assign(p,m),[(0,o.useCallback)((function(e){l.current=e?(0,r.pi)((0,r.pi)({},e),{fetchPolicy:e.fetchPolicy||d}):{fetchPolicy:d};var t=n.asyncUpdate().then((function(e){return Object.assign(e,m)}));return t.catch((function(){})),t}),[]),p]}}}]);
//# sourceMappingURL=589.32c538e5.chunk.js.map