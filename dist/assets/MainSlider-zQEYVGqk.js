import{r as R,q as G,d as H,j as s,L as j,c as J,b as K,a as Q}from"./index-C6H1Jn7Q.js";import{s as U}from"./star-CJcP6Lxy.js";import{l as W}from"./like-DhHpW3pT.js";import{P as X}from"./gift-DfhdZGqO.js";import{g as E,S as Y,a as Z,L as $}from"./LazyCardImg-BV3dDfvM.js";function ee(v){let{swiper:e,extendParams:_,on:t,emit:i,params:c}=v;e.autoplay={running:!1,paused:!1,timeLeft:0},_({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,a,f=c&&c.autoplay?c.autoplay.delay:3e3,l=c&&c.autoplay?c.autoplay.delay:3e3,o,h=new Date().getTime(),L,x,m,S,N,d,T;function D(n){!e||e.destroyed||!e.wrapperEl||n.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",D),!(T||n.detail&&n.detail.bySwiperTouchMove)&&y())}const P=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?L=!0:L&&(l=o,L=!1);const n=e.autoplay.paused?o:h+l-new Date().getTime();e.autoplay.timeLeft=n,i("autoplayTimeLeft",n,n/f),a=requestAnimationFrame(()=>{P()})},C=()=>{let n;return e.virtual&&e.params.virtual.enabled?n=e.slides.filter(r=>r.classList.contains("swiper-slide-active"))[0]:n=e.slides[e.activeIndex],n?parseInt(n.getAttribute("data-swiper-autoplay"),10):void 0},k=n=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),P();let u=typeof n>"u"?e.params.autoplay.delay:n;f=e.params.autoplay.delay,l=e.params.autoplay.delay;const r=C();!Number.isNaN(r)&&r>0&&typeof n>"u"&&(u=r,f=r,l=r),o=u;const w=e.params.speed,B=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(w,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,w,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(w,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,w,!0,!0),i("autoplay")),e.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return u>0?(clearTimeout(p),p=setTimeout(()=>{B()},u)):requestAnimationFrame(()=>{B()}),u},M=()=>{h=new Date().getTime(),e.autoplay.running=!0,k(),i("autoplayStart")},b=()=>{e.autoplay.running=!1,clearTimeout(p),cancelAnimationFrame(a),i("autoplayStop")},g=(n,u)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(p),n||(d=!0);const r=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",D):y()};if(e.autoplay.paused=!0,u){N&&(o=e.params.autoplay.delay),N=!1,r();return}o=(o||e.params.autoplay.delay)-(new Date().getTime()-h),!(e.isEnd&&o<0&&!e.params.loop)&&(o<0&&(o=0),r())},y=()=>{e.isEnd&&o<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(h=new Date().getTime(),d?(d=!1,k(o)):k(),e.autoplay.paused=!1,i("autoplayResume"))},O=()=>{if(e.destroyed||!e.autoplay.running)return;const n=E();n.visibilityState==="hidden"&&(d=!0,g(!0)),n.visibilityState==="visible"&&y()},I=n=>{n.pointerType==="mouse"&&(d=!0,T=!0,!(e.animating||e.autoplay.paused)&&g(!0))},A=n=>{n.pointerType==="mouse"&&(T=!1,e.autoplay.paused&&y())},F=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",A))},q=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",A))},z=()=>{E().addEventListener("visibilitychange",O)},V=()=>{E().removeEventListener("visibilitychange",O)};t("init",()=>{e.params.autoplay.enabled&&(F(),z(),M())}),t("destroy",()=>{q(),V(),e.autoplay.running&&b()}),t("_freeModeStaticRelease",()=>{(m||d)&&y()}),t("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?b():g(!0,!0)}),t("beforeTransitionStart",(n,u,r)=>{e.destroyed||!e.autoplay.running||(r||!e.params.autoplay.disableOnInteraction?g(!0,!0):b())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){b();return}x=!0,m=!1,d=!1,S=setTimeout(()=>{d=!0,m=!0,g(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!x)){if(clearTimeout(S),clearTimeout(p),e.params.autoplay.disableOnInteraction){m=!1,x=!1;return}m&&e.params.cssMode&&y(),m=!1,x=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||(N=!0)}),Object.assign(e.autoplay,{start:M,stop:b,pause:g,resume:y})}const ie=({data:v,isAutoPlay:e=!1})=>{const _=R.useRef(null),t=R.useRef(null);if(_.current&&t.current){const a=_.current.swiper;a&&t.current&&(a.params.pagination.el=t.current,a.pagination.init(),a.pagination.render(),a.pagination.update())}const i=G(),c=(a,f)=>{a.preventDefault(),i(f)},{isShowPlayButton:p}=H();return s.jsxs("div",{className:"more-staket-simple-bonus__slider slider",children:[s.jsx("div",{className:"slider__body",children:s.jsx("div",{className:"more-staket-simple-bonus__swiper slider__swiper swiper",children:s.jsx("div",{className:"slider__wrapper",children:s.jsx(Y,{lazyPreloadPrevNext:1,slidesPerView:"auto",ref:_,pagination:{el:t.current,clickable:!0},modules:[X,ee],autoplay:e&&{delay:2e3,disableOnInteraction:!1},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:v==null?void 0:v.map((a,f)=>s.jsx(Z,{children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsxs("div",{className:"casino-card__image-block",children:[s.jsx(j,{to:(a==null?void 0:a.imageLink)||"/",onClick:l=>c(l,(a==null?void 0:a.imageLink)||""),"aria-label":"Put your description here.",className:"casino-card__image",children:s.jsx($,{img:a.img||"",width:"100%",height:"100%"})}),p&&s.jsx("a",{rel:"nofollow noopener",href:J(a.casinoName),target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",onClick:l=>{l.stopPropagation(),l.preventDefault(),K(a.playLink),window.open(a.playLink,"_blank","noopener,noreferrer")},children:"Play"})]}),(a==null?void 0:a.tags)&&s.jsx("div",{className:"casino-card__tags tags-casino-card",children:a.tags}),s.jsxs("div",{className:"casino-card__content",children:[s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx(j,{rel:"nofollow noopener",to:a!=null&&a.casinoLink?a==null?void 0:a.casinoLink:"#","aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:a.casinoName}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon casino-small-card__rating-icon",children:s.jsx("img",{src:U,alt:"star"})}),s.jsx("span",{children:a.raiting})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:W,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:Q((a==null?void 0:a.likes)||0)})]})]}),s.jsx(j,{rel:"nofollow noopener",to:a!=null&&a.bonuseLink?a==null?void 0:a.bonuseLink:"#","aria-label":"Put your description here.",className:"casino-card__name",children:a==null?void 0:a.bonuseName})]})]})},f))})})})}),s.jsx("div",{className:"slider__bottom bottom-slider",children:s.jsx("div",{ref:t,className:"bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"})})]})};export{ee as A,ie as M};
