import{r as l,q as _,d as g,j as s,L as c,c as u,b as h,a as k}from"./index-t6W5ORKW.js";import{s as x}from"./star-CJcP6Lxy.js";import{l as f}from"./like-DhHpW3pT.js";import{P as j}from"./gift-uJFS4mvJ.js";import{S as N,a as b,L as w}from"./LazyCardImg-BFnmunZy.js";const S=({data:i})=>{const e=l.useRef(null),n=l.useRef(null);if(e.current&&n.current){const a=e.current.swiper;a&&n.current&&(a.params.pagination.el=n.current,a.pagination.init(),a.pagination.render(),a.pagination.update())}const d=_(),p=(a,o)=>{a.preventDefault(),d(o)},{isShowPlayButton:t}=g();return s.jsxs("div",{className:"more-staket-simple-bonus__slider slider",children:[s.jsx("div",{className:"slider__body",children:s.jsx("div",{className:"more-staket-simple-bonus__swiper slider__swiper swiper",children:s.jsx("div",{className:"slider__wrapper",children:s.jsx(N,{lazyPreloadPrevNext:1,slidesPerView:"auto",ref:e,pagination:{el:n.current,clickable:!0},modules:[j],breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:i==null?void 0:i.map((a,o)=>s.jsx(b,{children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsxs("div",{className:"casino-card__image-block",children:[s.jsx(c,{to:(a==null?void 0:a.imageLink)||"/",onClick:r=>p(r,(a==null?void 0:a.imageLink)||""),"aria-label":"Put your description here.",className:"casino-card__image",children:s.jsx(w,{img:a.img||"",width:"100%",height:"100%"})}),t&&s.jsx("a",{rel:"nofollow noopener",href:u(a.casinoName),target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",onClick:r=>{r.stopPropagation(),r.preventDefault(),h(a.playLink),window.open(a.playLink,"_blank","noopener,noreferrer")},children:"Play"})]}),(a==null?void 0:a.tags)&&s.jsx("div",{className:"casino-card__tags tags-casino-card",children:a.tags}),s.jsxs("div",{className:"casino-card__content",children:[s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx(c,{rel:"nofollow noopener",to:a!=null&&a.casinoLink?a==null?void 0:a.casinoLink:"#","aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:a.casinoName}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon casino-small-card__rating-icon",children:s.jsx("img",{src:x,alt:"star"})}),s.jsx("span",{children:a.raiting})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:f,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:k((a==null?void 0:a.likes)||0)})]})]}),s.jsx(c,{rel:"nofollow noopener",to:a!=null&&a.bonuseLink?a==null?void 0:a.bonuseLink:"#","aria-label":"Put your description here.",className:"casino-card__name",children:a==null?void 0:a.bonuseName})]})]})},o))})})})}),s.jsx("div",{className:"slider__bottom bottom-slider",children:s.jsx("div",{ref:n,className:"bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"})})]})};export{S as M};
