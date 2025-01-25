import{I as Kt,r as o,t as Ze,T as Wt,j as L}from"./index-CYjPSA87.js";import{_ as Yt}from"./objectWithoutPropertiesLoose-CAYKN5F1.js";function Me(e){"@babel/helpers - typeof";return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Me(e)}function Gt(e,t){if(Me(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(Me(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bt(e){var t=Gt(e,"string");return Me(t)=="symbol"?t:t+""}function re(e,t,r){return(t=Bt(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ht(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,a)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ht(Object(r),!0).forEach(function(a){re(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ht(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function qe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}function Vt(e){if(Array.isArray(e))return qe(e)}function Xt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e,t){if(e){if(typeof e=="string")return qe(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?qe(e,t):void 0}}function Qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(e){return Vt(e)||Xt(e)||_t(e)||Qt()}function Zt(e){if(Array.isArray(e))return e}function qt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var a,u,n,i,s=[],g=!0,h=!1;try{if(n=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;g=!1}else for(;!(g=(a=n.call(r)).done)&&(s.push(a.value),s.length!==t);g=!0);}catch(b){h=!0,u=b}finally{try{if(!g&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(h)throw u}}return s}}function zt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,t){return Zt(e)||qt(e,t)||_t(e,t)||zt()}var Nt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var n="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(n=u(n,a(s)))}return n}function a(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return r.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var i="";for(var s in n)t.call(n,s)&&n[s]&&(i=u(i,s));return i}function u(n,i){return i?n?n+" "+i:n+i:n}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Nt);var Jt=Nt.exports;const Te=Kt(Jt);function Fe(e){var t=o.useRef();t.current=e;var r=o.useCallback(function(){for(var a,u=arguments.length,n=new Array(u),i=0;i<u;i++)n[i]=arguments[i];return(a=t.current)===null||a===void 0?void 0:a.call.apply(a,[t].concat(n))},[]);return r}function er(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var yt=er()?o.useLayoutEffect:o.useEffect,Rt=function(t,r){var a=o.useRef(!0);yt(function(){return t(a.current)},r),yt(function(){return a.current=!1,function(){a.current=!0}},[])},Et=function(t,r){Rt(function(a){if(!a)return t()},r)};function bt(e){var t=o.useRef(!1),r=o.useState(e),a=K(r,2),u=a[0],n=a[1];o.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function i(s,g){g&&t.current||n(s)}return[u,i]}function Qe(e){return e!==void 0}function tr(e,t){var r=t||{},a=r.defaultValue,u=r.value,n=r.onChange,i=r.postState,s=bt(function(){return Qe(u)?u:Qe(a)?typeof a=="function"?a():a:typeof e=="function"?e():e}),g=K(s,2),h=g[0],b=g[1],S=u!==void 0?u:h,C=i?i(S):S,y=Fe(n),M=bt([S]),m=K(M,2),f=m[0],v=m[1];Et(function(){var E=f[0];h!==E&&y(h,E)},[f]),Et(function(){Qe(u)||b(u)},[u]);var l=Fe(function(E,R){b(E,R),v([S],R)});return[C,l]}var ze={},rr=function(t){};function nr(e,t){}function ar(e,t){}function ur(){ze={}}function Ot(e,t,r){!t&&!ze[r]&&(e(!1,r),ze[r]=!0)}function je(e,t){Ot(nr,e,t)}function or(e,t){Ot(ar,e,t)}je.preMessage=rr;je.resetWarned=ur;je.noteOnce=or;function ir(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=new Set;function u(n,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,g=a.has(n);if(je(!g,"Warning: There may be circular references"),g)return!1;if(n===i)return!0;if(r&&s>1)return!1;a.add(n);var h=s+1;if(Array.isArray(n)){if(!Array.isArray(i)||n.length!==i.length)return!1;for(var b=0;b<n.length;b++)if(!u(n[b],i[b],h))return!1;return!0}if(n&&i&&Me(n)==="object"&&Me(i)==="object"){var S=Object.keys(n);return S.length!==Object.keys(i).length?!1:S.every(function(C){return u(n[C],i[C],h)})}return!1}return u(e,t)}function xt(e,t){if(e==null)return{};var r,a,u=Yt(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}function Je(e,t,r){return(e-t)/(r-t)}function et(e,t,r,a){var u=Je(t,r,a),n={};switch(e){case"rtl":n.right="".concat(u*100,"%"),n.transform="translateX(50%)";break;case"btt":n.bottom="".concat(u*100,"%"),n.transform="translateY(50%)";break;case"ttb":n.top="".concat(u*100,"%"),n.transform="translateY(-50%)";break;default:n.left="".concat(u*100,"%"),n.transform="translateX(-50%)";break}return n}function Ie(e,t){return Array.isArray(e)?e[t]:e}var c={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var r=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||r>=c.F1&&r<=c.F12)return!1;switch(r){case c.ALT:case c.CAPS_LOCK:case c.CONTEXT_MENU:case c.CTRL:case c.DOWN:case c.END:case c.ESC:case c.HOME:case c.INSERT:case c.LEFT:case c.MAC_FF_META:case c.META:case c.NUMLOCK:case c.NUM_CENTER:case c.PAGE_DOWN:case c.PAGE_UP:case c.PAUSE:case c.PRINT_SCREEN:case c.RIGHT:case c.SHIFT:case c.UP:case c.WIN_KEY:case c.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=c.ZERO&&t<=c.NINE||t>=c.NUM_ZERO&&t<=c.NUM_MULTIPLY||t>=c.A&&t<=c.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case c.SPACE:case c.QUESTION_MARK:case c.NUM_PLUS:case c.NUM_MINUS:case c.NUM_PERIOD:case c.NUM_DIVISION:case c.SEMICOLON:case c.DASH:case c.EQUALS:case c.COMMA:case c.PERIOD:case c.SLASH:case c.APOSTROPHE:case c.SINGLE_QUOTE:case c.OPEN_SQUARE_BRACKET:case c.BACKSLASH:case c.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Ae=o.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),lr=o.createContext({}),cr=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],St=o.forwardRef(function(e,t){var r=e.prefixCls,a=e.value,u=e.valueIndex,n=e.onStartMove,i=e.onDelete,s=e.style,g=e.render,h=e.dragging,b=e.draggingDelete,S=e.onOffsetChange,C=e.onChangeComplete,y=e.onFocus,M=e.onMouseEnter,m=xt(e,cr),f=o.useContext(Ae),v=f.min,l=f.max,E=f.direction,R=f.disabled,T=f.keyboard,D=f.range,V=f.tabIndex,Q=f.ariaLabelForHandle,k=f.ariaLabelledByForHandle,O=f.ariaValueTextFormatterForHandle,_=f.styles,N=f.classNames,U="".concat(r,"-handle"),z=function(Y){R||n(Y,u)},W=function(Y){y==null||y(Y,u)},J=function(Y){M(Y,u)},I=function(Y){if(!R&&T){var w=null;switch(Y.which||Y.keyCode){case c.LEFT:w=E==="ltr"||E==="btt"?-1:1;break;case c.RIGHT:w=E==="ltr"||E==="btt"?1:-1;break;case c.UP:w=E!=="ttb"?1:-1;break;case c.DOWN:w=E!=="ttb"?-1:1;break;case c.HOME:w="min";break;case c.END:w="max";break;case c.PAGE_UP:w=2;break;case c.PAGE_DOWN:w=-2;break;case c.BACKSPACE:case c.DELETE:i(u);break}w!==null&&(Y.preventDefault(),S(w,u))}},me=function(Y){switch(Y.which||Y.keyCode){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:case c.HOME:case c.END:case c.PAGE_UP:case c.PAGE_DOWN:C==null||C();break}},ue=et(E,a,v,l),ge={};if(u!==null){var oe;ge={tabIndex:R?null:Ie(V,u),role:"slider","aria-valuemin":v,"aria-valuemax":l,"aria-valuenow":a,"aria-disabled":R,"aria-label":Ie(Q,u),"aria-labelledby":Ie(k,u),"aria-valuetext":(oe=Ie(O,u))===null||oe===void 0?void 0:oe(a),"aria-orientation":E==="ltr"||E==="rtl"?"horizontal":"vertical",onMouseDown:z,onTouchStart:z,onFocus:W,onMouseEnter:J,onKeyDown:I,onKeyUp:me}}var _e=o.createElement("div",Ze({ref:t,className:Te(U,re(re(re({},"".concat(U,"-").concat(u+1),u!==null&&D),"".concat(U,"-dragging"),h),"".concat(U,"-dragging-delete"),b),N.handle),style:B(B(B({},ue),s),_.handle)},ge,m));return g&&(_e=g(_e,{index:u,prefixCls:r,value:a,dragging:h,draggingDelete:b})),_e}),sr=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],fr=o.forwardRef(function(e,t){var r=e.prefixCls,a=e.style,u=e.onStartMove,n=e.onOffsetChange,i=e.values,s=e.handleRender,g=e.activeHandleRender,h=e.draggingIndex,b=e.draggingDelete,S=e.onFocus,C=xt(e,sr),y=o.useRef({}),M=o.useState(!1),m=K(M,2),f=m[0],v=m[1],l=o.useState(-1),E=K(l,2),R=E[0],T=E[1],D=function(_){T(_),v(!0)},V=function(_,N){D(N),S==null||S(_)},Q=function(_,N){D(N)};o.useImperativeHandle(t,function(){return{focus:function(_){var N;(N=y.current[_])===null||N===void 0||N.focus()},hideHelp:function(){Wt.flushSync(function(){v(!1)})}}});var k=B({prefixCls:r,onStartMove:u,onOffsetChange:n,render:s,onFocus:V,onMouseEnter:Q},C);return o.createElement(o.Fragment,null,i.map(function(O,_){var N=h===_;return o.createElement(St,Ze({ref:function(z){z?y.current[_]=z:delete y.current[_]},dragging:N,draggingDelete:N&&b,style:Ie(a,_),key:_,value:O,valueIndex:_},k))}),g&&f&&o.createElement(St,Ze({key:"a11y"},k,{value:i[R],valueIndex:null,dragging:h!==-1,draggingDelete:b,render:g,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),vr=function(t){var r=t.prefixCls,a=t.style,u=t.children,n=t.value,i=t.onClick,s=o.useContext(Ae),g=s.min,h=s.max,b=s.direction,S=s.includedStart,C=s.includedEnd,y=s.included,M="".concat(r,"-text"),m=et(b,n,g,h);return o.createElement("span",{className:Te(M,re({},"".concat(M,"-active"),y&&S<=n&&n<=C)),style:B(B({},m),a),onMouseDown:function(v){v.stopPropagation()},onClick:function(){i(n)}},u)},dr=function(t){var r=t.prefixCls,a=t.marks,u=t.onClick,n="".concat(r,"-mark");return a.length?o.createElement("div",{className:n},a.map(function(i){var s=i.value,g=i.style,h=i.label;return o.createElement(vr,{key:s,prefixCls:n,style:g,value:s,onClick:u},h)})):null},mr=function(t){var r=t.prefixCls,a=t.value,u=t.style,n=t.activeStyle,i=o.useContext(Ae),s=i.min,g=i.max,h=i.direction,b=i.included,S=i.includedStart,C=i.includedEnd,y="".concat(r,"-dot"),M=b&&S<=a&&a<=C,m=B(B({},et(h,a,s,g)),typeof u=="function"?u(a):u);return M&&(m=B(B({},m),typeof n=="function"?n(a):n)),o.createElement("span",{className:Te(y,re({},"".concat(y,"-active"),M)),style:m})},gr=function(t){var r=t.prefixCls,a=t.marks,u=t.dots,n=t.style,i=t.activeStyle,s=o.useContext(Ae),g=s.min,h=s.max,b=s.step,S=o.useMemo(function(){var C=new Set;if(a.forEach(function(M){C.add(M.value)}),u&&b!==null)for(var y=g;y<=h;)C.add(y),y+=b;return Array.from(C)},[g,h,b,u,a]);return o.createElement("div",{className:"".concat(r,"-step")},S.map(function(C){return o.createElement(mr,{prefixCls:r,key:C,value:C,style:n,activeStyle:i})}))},Ct=function(t){var r=t.prefixCls,a=t.style,u=t.start,n=t.end,i=t.index,s=t.onStartMove,g=t.replaceCls,h=o.useContext(Ae),b=h.direction,S=h.min,C=h.max,y=h.disabled,M=h.range,m=h.classNames,f="".concat(r,"-track"),v=Je(u,S,C),l=Je(n,S,C),E=function(V){!y&&s&&s(V,-1)},R={};switch(b){case"rtl":R.right="".concat(v*100,"%"),R.width="".concat(l*100-v*100,"%");break;case"btt":R.bottom="".concat(v*100,"%"),R.height="".concat(l*100-v*100,"%");break;case"ttb":R.top="".concat(v*100,"%"),R.height="".concat(l*100-v*100,"%");break;default:R.left="".concat(v*100,"%"),R.width="".concat(l*100-v*100,"%")}var T=g||Te(f,re(re({},"".concat(f,"-").concat(i+1),i!==null&&M),"".concat(r,"-track-draggable"),s),m.track);return o.createElement("div",{className:T,style:B(B({},R),a),onMouseDown:E,onTouchStart:E})},hr=function(t){var r=t.prefixCls,a=t.style,u=t.values,n=t.startPoint,i=t.onStartMove,s=o.useContext(Ae),g=s.included,h=s.range,b=s.min,S=s.styles,C=s.classNames,y=o.useMemo(function(){if(!h){if(u.length===0)return[];var m=n??b,f=u[0];return[{start:Math.min(m,f),end:Math.max(m,f)}]}for(var v=[],l=0;l<u.length-1;l+=1)v.push({start:u[l],end:u[l+1]});return v},[u,h,n,b]);if(!g)return null;var M=C.tracks||S.tracks?o.createElement(Ct,{index:null,prefixCls:r,start:y[0].start,end:y[y.length-1].end,replaceCls:Te(C.tracks,"".concat(r,"-tracks")),style:S.tracks}):null;return o.createElement(o.Fragment,null,M,y.map(function(m,f){var v=m.start,l=m.end;return o.createElement(Ct,{index:f,prefixCls:r,style:B(B({},Ie(a,f)),S.track),start:v,end:l,key:f,onStartMove:i})}))},yr=130;function Mt(e){var t="targetTouches"in e?e.targetTouches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function Er(e,t,r,a,u,n,i,s,g,h,b){var S=o.useState(null),C=K(S,2),y=C[0],M=C[1],m=o.useState(-1),f=K(m,2),v=f[0],l=f[1],E=o.useState(!1),R=K(E,2),T=R[0],D=R[1],V=o.useState(r),Q=K(V,2),k=Q[0],O=Q[1],_=o.useState(r),N=K(_,2),U=N[0],z=N[1],W=o.useRef(null),J=o.useRef(null),I=o.useRef(null),me=o.useContext(lr),ue=me.onDragStart,ge=me.onDragChange;Rt(function(){v===-1&&O(r)},[r,v]),o.useEffect(function(){return function(){document.removeEventListener("mousemove",W.current),document.removeEventListener("mouseup",J.current),I.current&&(I.current.removeEventListener("touchmove",W.current),I.current.removeEventListener("touchend",J.current))}},[]);var oe=function($,j,Z){j!==void 0&&M(j),O($);var ee=$;Z&&(ee=$.filter(function(F,q){return q!==v})),i(ee),ge&&ge({rawValues:$,deleteIndex:Z?v:-1,draggingIndex:v,draggingValue:j})},_e=Fe(function(w,$,j){if(w===-1){var Z=U[0],ee=U[U.length-1],F=a-Z,q=u-ee,ne=$*(u-a);ne=Math.max(ne,F),ne=Math.min(ne,q);var ke=n(Z+ne);ne=ke-Z;var ie=U.map(function(G){return G+ne});oe(ie)}else{var le=(u-a)*$,ce=de(k);ce[w]=U[w];var ye=g(ce,le,w,"dist");oe(ye.values,ye.value,j)}}),he=function($,j,Z){$.stopPropagation();var ee=Z||r,F=ee[j];l(j),M(F),z(ee),O(ee),D(!1);var q=Mt($),ne=q.pageX,ke=q.pageY,ie=!1;ue&&ue({rawValues:ee,draggingIndex:j,draggingValue:F});var le=function(G){G.preventDefault();var Ne=Mt(G),Pe=Ne.pageX,Be=Ne.pageY,ae=Pe-ne,te=Be-ke,Re=e.current.getBoundingClientRect(),De=Re.width,pe=Re.height,Ee,p;switch(t){case"btt":Ee=-te/pe,p=ae;break;case"ttb":Ee=te/pe,p=ae;break;case"rtl":Ee=-ae/De,p=te;break;default:Ee=ae/De,p=te}ie=h?Math.abs(p)>yr&&b<k.length:!1,D(ie),_e(j,Ee,ie)},ce=function ye(G){G.preventDefault(),document.removeEventListener("mouseup",ye),document.removeEventListener("mousemove",le),I.current&&(I.current.removeEventListener("touchmove",W.current),I.current.removeEventListener("touchend",J.current)),W.current=null,J.current=null,I.current=null,s(ie),l(-1),D(!1)};document.addEventListener("mouseup",ce),document.addEventListener("mousemove",le),$.currentTarget.addEventListener("touchend",ce),$.currentTarget.addEventListener("touchmove",le),W.current=le,J.current=ce,I.current=$.currentTarget},Y=o.useMemo(function(){var w=de(r).sort(function(F,q){return F-q}),$=de(k).sort(function(F,q){return F-q}),j={};$.forEach(function(F){j[F]=(j[F]||0)+1}),w.forEach(function(F){j[F]=(j[F]||0)-1});var Z=h?1:0,ee=Object.values(j).reduce(function(F,q){return F+Math.abs(q)},0);return ee<=Z?k:r},[r,k,h]);return[v,y,T,Y,he]}function br(e,t,r,a,u,n){var i=o.useCallback(function(y){return Math.max(e,Math.min(t,y))},[e,t]),s=o.useCallback(function(y){if(r!==null){var M=e+Math.round((i(y)-e)/r)*r,m=function(E){return(String(E).split(".")[1]||"").length},f=Math.max(m(r),m(t),m(e)),v=Number(M.toFixed(f));return e<=v&&v<=t?v:null}return null},[r,e,t,i]),g=o.useCallback(function(y){var M=i(y),m=a.map(function(l){return l.value});r!==null&&m.push(s(y)),m.push(e,t);var f=m[0],v=t-e;return m.forEach(function(l){var E=Math.abs(M-l);E<=v&&(f=l,v=E)}),f},[e,t,a,r,i,s]),h=function y(M,m,f){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof m=="number"){var l,E=M[f],R=E+m,T=[];a.forEach(function(O){T.push(O.value)}),T.push(e,t),T.push(s(E));var D=m>0?1:-1;v==="unit"?T.push(s(E+D*r)):T.push(s(R)),T=T.filter(function(O){return O!==null}).filter(function(O){return m<0?O<=E:O>=E}),v==="unit"&&(T=T.filter(function(O){return O!==E}));var V=v==="unit"?E:R;l=T[0];var Q=Math.abs(l-V);if(T.forEach(function(O){var _=Math.abs(O-V);_<Q&&(l=O,Q=_)}),l===void 0)return m<0?e:t;if(v==="dist")return l;if(Math.abs(m)>1){var k=de(M);return k[f]=l,y(k,m-D,f,v)}return l}else{if(m==="min")return e;if(m==="max")return t}},b=function(M,m,f){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",l=M[f],E=h(M,m,f,v);return{value:E,changed:E!==l}},S=function(M){return n===null&&M===0||typeof n=="number"&&M<n},C=function(M,m,f){var v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",l=M.map(g),E=l[f],R=h(l,m,f,v);if(l[f]=R,u===!1){var T=n||0;f>0&&l[f-1]!==E&&(l[f]=Math.max(l[f],l[f-1]+T)),f<l.length-1&&l[f+1]!==E&&(l[f]=Math.min(l[f],l[f+1]-T))}else if(typeof n=="number"||n===null){for(var D=f+1;D<l.length;D+=1)for(var V=!0;S(l[D]-l[D-1])&&V;){var Q=b(l,1,D);l[D]=Q.value,V=Q.changed}for(var k=f;k>0;k-=1)for(var O=!0;S(l[k]-l[k-1])&&O;){var _=b(l,-1,k-1);l[k-1]=_.value,O=_.changed}for(var N=l.length-1;N>0;N-=1)for(var U=!0;S(l[N]-l[N-1])&&U;){var z=b(l,-1,N-1);l[N-1]=z.value,U=z.changed}for(var W=0;W<l.length-1;W+=1)for(var J=!0;S(l[W+1]-l[W])&&J;){var I=b(l,1,W+1);l[W+1]=I.value,J=I.changed}}return{value:l[f],values:l}};return[g,C]}function Sr(e){return o.useMemo(function(){if(e===!0||!e)return[!!e,!1,!1,0];var t=e.editable,r=e.draggableTrack,a=e.minCount,u=e.maxCount;return[!0,t,!t&&r,a||0,u]},[e])}var Cr=o.forwardRef(function(e,t){var r=e.prefixCls,a=r===void 0?"rc-slider":r,u=e.className,n=e.style,i=e.classNames,s=e.styles,g=e.id,h=e.disabled,b=h===void 0?!1:h,S=e.keyboard,C=S===void 0?!0:S,y=e.autoFocus,M=e.onFocus,m=e.onBlur,f=e.min,v=f===void 0?0:f,l=e.max,E=l===void 0?100:l,R=e.step,T=R===void 0?1:R,D=e.value,V=e.defaultValue,Q=e.range,k=e.count,O=e.onChange,_=e.onBeforeChange,N=e.onAfterChange,U=e.onChangeComplete,z=e.allowCross,W=z===void 0?!0:z,J=e.pushable,I=J===void 0?!1:J,me=e.reverse,ue=e.vertical,ge=e.included,oe=ge===void 0?!0:ge,_e=e.startPoint,he=e.trackStyle,Y=e.handleStyle,w=e.railStyle,$=e.dotStyle,j=e.activeDotStyle,Z=e.marks,ee=e.dots,F=e.handleRender,q=e.activeHandleRender,ne=e.track,ke=e.tabIndex,ie=ke===void 0?0:ke,le=e.ariaLabelForHandle,ce=e.ariaLabelledByForHandle,ye=e.ariaValueTextFormatterForHandle,G=o.useRef(null),Ne=o.useRef(null),Pe=o.useMemo(function(){return ue?me?"ttb":"btt":me?"rtl":"ltr"},[me,ue]),Be=Sr(Q),ae=K(Be,5),te=ae[0],Re=ae[1],De=ae[2],pe=ae[3],Ee=ae[4],p=o.useMemo(function(){return isFinite(v)?v:0},[v]),Ue=o.useMemo(function(){return isFinite(E)?E:100},[E]),Oe=o.useMemo(function(){return T!==null&&T<=0?1:T},[T]),Tt=o.useMemo(function(){return typeof I=="boolean"?I?Oe:!1:I>=0?I:!1},[I,Oe]),Ke=o.useMemo(function(){return Object.keys(Z||{}).map(function(x){var d=Z[x],A={value:Number(x)};return d&&Me(d)==="object"&&!o.isValidElement(d)&&("label"in d||"style"in d)?(A.style=d.style,A.label=d.label):A.label=d,A}).filter(function(x){var d=x.label;return d||typeof d=="number"}).sort(function(x,d){return x.value-d.value})},[Z]),At=br(p,Ue,Oe,Ke,W,Tt),tt=K(At,2),We=tt[0],rt=tt[1],kt=tr(V,{value:D}),nt=K(kt,2),be=nt[0],Pt=nt[1],X=o.useMemo(function(){var x=be==null?[]:Array.isArray(be)?be:[be],d=K(x,1),A=d[0],P=A===void 0?p:A,H=be===null?[]:[P];if(te){if(H=de(x),k||be===void 0){var Se=k>=0?k+1:2;for(H=H.slice(0,Se);H.length<Se;){var se;H.push((se=H[H.length-1])!==null&&se!==void 0?se:p)}}H.sort(function(fe,ve){return fe-ve})}return H.forEach(function(fe,ve){H[ve]=We(fe)}),H},[be,te,p,k,We]),we=function(d){return te?d:d[0]},Ye=Fe(function(x){var d=de(x).sort(function(A,P){return A-P});O&&!ir(d,X,!0)&&O(we(d)),Pt(d)}),at=Fe(function(x){x&&G.current.hideHelp();var d=we(X);N==null||N(d),je(!N,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),U==null||U(d)}),Dt=function(d){if(!(b||!Re||X.length<=pe)){var A=de(X);A.splice(d,1),_==null||_(we(A)),Ye(A);var P=Math.max(0,d-1);G.current.hideHelp(),G.current.focus(P)}},Ut=Er(Ne,Pe,X,p,Ue,We,Ye,at,rt,Re,pe),He=K(Ut,5),ut=He[0],wt=He[1],Lt=He[2],Ve=He[3],ot=He[4],it=function(d,A){if(!b){var P=de(X),H=0,Se=0,se=Ue-p;X.forEach(function(Ce,Ge){var gt=Math.abs(d-Ce);gt<=se&&(se=gt,H=Ge),Ce<d&&(Se=Ge)});var fe=H;Re&&se!==0&&(!Ee||X.length<Ee)?(P.splice(Se+1,0,d),fe=Se+1):P[H]=d,te&&!X.length&&k===void 0&&P.push(d);var ve=we(P);if(_==null||_(ve),Ye(P),A){var xe,Le;(xe=document.activeElement)===null||xe===void 0||(Le=xe.blur)===null||Le===void 0||Le.call(xe),G.current.focus(fe),ot(A,fe,P)}else N==null||N(ve),je(!N,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),U==null||U(ve)}},It=function(d){d.preventDefault();var A=Ne.current.getBoundingClientRect(),P=A.width,H=A.height,Se=A.left,se=A.top,fe=A.bottom,ve=A.right,xe=d.clientX,Le=d.clientY,Ce;switch(Pe){case"btt":Ce=(fe-Le)/H;break;case"ttb":Ce=(Le-se)/H;break;case"rtl":Ce=(ve-xe)/P;break;default:Ce=(xe-Se)/P}var Ge=p+Ce*(Ue-p);it(We(Ge),d)},Ft=o.useState(null),lt=K(Ft,2),Xe=lt[0],ct=lt[1],jt=function(d,A){if(!b){var P=rt(X,d,A);_==null||_(we(X)),Ye(P.values),ct(P.value)}};o.useEffect(function(){if(Xe!==null){var x=X.indexOf(Xe);x>=0&&G.current.focus(x)}ct(null)},[Xe]);var pt=o.useMemo(function(){return De&&Oe===null?!1:De},[De,Oe]),st=Fe(function(x,d){ot(x,d),_==null||_(we(X))}),ft=ut!==-1;o.useEffect(function(){if(!ft){var x=X.lastIndexOf(wt);G.current.focus(x)}},[ft]);var $e=o.useMemo(function(){return de(Ve).sort(function(x,d){return x-d})},[Ve]),Ht=o.useMemo(function(){return te?[$e[0],$e[$e.length-1]]:[p,$e[0]]},[$e,te,p]),vt=K(Ht,2),dt=vt[0],mt=vt[1];o.useImperativeHandle(t,function(){return{focus:function(){G.current.focus(0)},blur:function(){var d,A=document,P=A.activeElement;(d=Ne.current)!==null&&d!==void 0&&d.contains(P)&&(P==null||P.blur())}}}),o.useEffect(function(){y&&G.current.focus(0)},[]);var $t=o.useMemo(function(){return{min:p,max:Ue,direction:Pe,disabled:b,keyboard:C,step:Oe,included:oe,includedStart:dt,includedEnd:mt,range:te,tabIndex:ie,ariaLabelForHandle:le,ariaLabelledByForHandle:ce,ariaValueTextFormatterForHandle:ye,styles:s||{},classNames:i||{}}},[p,Ue,Pe,b,C,Oe,oe,dt,mt,te,ie,le,ce,ye,s,i]);return o.createElement(Ae.Provider,{value:$t},o.createElement("div",{ref:Ne,className:Te(a,u,re(re(re(re({},"".concat(a,"-disabled"),b),"".concat(a,"-vertical"),ue),"".concat(a,"-horizontal"),!ue),"".concat(a,"-with-marks"),Ke.length)),style:n,onMouseDown:It,id:g},o.createElement("div",{className:Te("".concat(a,"-rail"),i==null?void 0:i.rail),style:B(B({},w),s==null?void 0:s.rail)}),ne!==!1&&o.createElement(hr,{prefixCls:a,style:he,values:X,startPoint:_e,onStartMove:pt?st:void 0}),o.createElement(gr,{prefixCls:a,marks:Ke,dots:ee,style:$,activeStyle:j}),o.createElement(fr,{ref:G,prefixCls:a,style:Y,values:Ve,draggingIndex:ut,draggingDelete:Lt,onStartMove:st,onOffsetChange:jt,onFocus:M,onBlur:m,handleRender:F,activeHandleRender:q,onChangeComplete:at,onDelete:Re?Dt:void 0}),o.createElement(dr,{prefixCls:a,marks:Ke,onClick:it})))});const Nr=({initState:e,field:t,minmax:r,unlimitedInitStateField:a,setLocalFilters:u})=>{const[n,i]=o.useState(r),s=g=>{const[h,b]=g,S=Math.max(0,Math.min(h,r[1])),C=Math.max(0,Math.min(b,r[1]));if(i([S,C]),!S&&!C){u(y=>({...y,[t]:void 0,[a]:void 0}));return}u(y=>({...y,[t]:{min:isNaN(S)?0:S,max:isNaN(C)?0:C},[a]:void 0}))};return o.useEffect(()=>{i(e?[e.min,e.max]:[r[0],r[1]])},[e,r]),L.jsx("div",{className:"form-filter__body",children:L.jsxs("div",{className:"form-filter__range range-form-filter range-form-filter_few",children:[L.jsxs("div",{className:"range-form-filter__top",children:[L.jsx("div",{className:"range-form-filter__field field",children:L.jsx("input",{type:"number",className:"field__input field__input_min",value:n[0]||"",onChange:g=>s([Number(g.target.value),n==null?void 0:n[1]])})}),L.jsx("div",{className:"range-form-filter__separetor",children:"to"}),L.jsx("div",{className:"range-form-filter__field field",children:L.jsx("input",{type:"number",className:"field__input field__input_max",value:n[1]||"",onChange:g=>s([n==null?void 0:n[0],Number(g.target.value)])})})]}),L.jsx(Cr,{range:!0,className:"input-style-range",min:r[0],max:r[1],value:n,onChange:g=>s(g)})]})})},Rr=({initState:e,field:t,setLocalCasinoFilters:r,nameFiled:a=["Yes","No"]})=>{const u=n=>{r(i=>({...i,[t]:(i==null?void 0:i[t])===n?void 0:n}))};return L.jsx("div",{className:"form-filter__body",children:L.jsx("div",{className:"form-filter__radio radio-form-filter",children:L.jsxs("div",{className:"radio-form-filter__items",children:[L.jsxs("div",{className:"radio-form-filter__item",onClick:()=>u(!0),children:[L.jsx("input",{type:"checkbox",className:"radio-form-filter__input form-filter__input",checked:e===!0,onChange:()=>{}}),L.jsx("label",{className:"radio-form-filter__label",children:L.jsx("span",{children:a[0]})})]}),L.jsxs("div",{className:"radio-form-filter__item",onClick:()=>u(!1),children:[L.jsx("input",{onChange:()=>{},type:"checkbox",className:"radio-form-filter__input form-filter__input",checked:e===!1}),L.jsx("label",{className:"radio-form-filter__label",children:L.jsx("span",{children:a[1]})})]})]})})})};export{Nr as R,Cr as S,Rr as Y};
