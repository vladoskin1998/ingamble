import{r as _,j as n,S as A,a as D,L as p,s as a,c as M,b as V}from"./index-g0259tv0.js";import{s as G}from"./star-CJcP6Lxy.js";import{P as H}from"./pagination-BeSBqM8W.js";/* empty css               *//* empty css                   */import{B as J}from"./index-1nkf6qFn.js";import{L as F}from"./LazyCardImg-C16cXQpW.js";import{S as K}from"./SeeAllButton-BLwXH8OH.js";function ns({data:o}){var d,u,b,f,g,h,x,j,m,N,w;const r=_.useRef(null),e=_.useRef(null);return _.useEffect(()=>{if(r.current&&e.current){const s=r.current.swiper;s&&e.current&&(s.params.pagination.el=e.current,s.pagination.init(),s.pagination.render(),s.pagination.update())}},[]),!o||o.items_block.type_block!==J.BlockType2?n.jsx(n.Fragment,{}):n.jsx("section",{"aria-label":"BlockTypeNumber.BlockType2",className:"main-gamble__new-bonuses new-bonuses-gamble playing-now-gamble  main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble",children:n.jsxs("div",{className:"new-bonuses-gamble__container container",children:[n.jsx("div",{className:"new-bonuses-gamble__top top",children:n.jsxs("div",{className:"top__row",children:[n.jsxs("div",{className:"top__column",children:[n.jsxs("div",{className:"top__title-block",children:[((d=o==null?void 0:o.items_block)==null?void 0:d.title_image)&&n.jsx("span",{className:"top__title-icon",children:n.jsx("img",{src:(u=o==null?void 0:o.items_block)==null?void 0:u.title_image,alt:"security"})}),n.jsx("h2",{className:"top__title",children:(b=o==null?void 0:o.items_block)==null?void 0:b.block_title})]}),((f=o==null?void 0:o.items_block)==null?void 0:f.subtitle)&&n.jsx("div",{className:"top__subtitle",children:(g=o==null?void 0:o.items_block)==null?void 0:g.subtitle})]}),n.jsx("div",{className:"top__column",children:n.jsx(K,{type_category:(h=o==null?void 0:o.items_block)==null?void 0:h.type_category,parameter:((j=(x=o==null?void 0:o.items_block)==null?void 0:x.category)==null?void 0:j.name)||"",id:(N=(m=o==null?void 0:o.items_block)==null?void 0:m.category)==null?void 0:N.id})})]})}),n.jsxs("div",{className:"new-bonuses-gamble__slider slider",children:[n.jsx("div",{className:"slider__body",children:n.jsx("div",{className:"new-bonuses-gamble__swiper slider__swiper swiper",children:n.jsx(A,{ref:r,className:"slider__wrapper swiper-wrapper",slidesPerView:"auto",modules:[H],pagination:{el:e.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:(w=o==null?void 0:o.items_block)==null?void 0:w.data_cards.sort((s,c)=>(s==null?void 0:s.order)-(c==null?void 0:c.order)).map((s,c)=>{var k,y,t,v,B,P,$,L,S,R,T,I,q,E;return n.jsx(D,{children:n.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:n.jsxs("div",{className:"slide-slider__item casino-card",children:[n.jsxs("div",{rel:"nofollow noopener","aria-label":"Put your description here.",className:"casino-card__image-block",children:[n.jsx(p,{className:"casino-card__image ibg--custom",to:`/casino/${a((k=s==null?void 0:s.casino_info)==null?void 0:k.casino_name)}/bonuses/${a((y=s==null?void 0:s.bonus_info)==null?void 0:y.bonus_name)}?queryId=${(t=s==null?void 0:s.bonus_info)==null?void 0:t.bonus_id}`,children:n.jsx(F,{img:((v=s==null?void 0:s.bonus_info)==null?void 0:v.bonus_image)||"",height:"100%",width:"100%"})}),n.jsx("a",{href:M((B=s==null?void 0:s.casino_info)==null?void 0:B.casino_name),onClick:i=>{var l,z,C;i.stopPropagation(),i.preventDefault(),V((l=s==null?void 0:s.casino_info)==null?void 0:l.casino_affiliate_link),window.open(((z=s==null?void 0:s.casino_info)==null?void 0:z.casino_affiliate_link)||((C=s==null?void 0:s.casino_info)==null?void 0:C.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),n.jsx("div",{className:"casino-card__content",children:n.jsxs("div",{className:"casino-card__small-card casino-small-card",children:[n.jsx(p,{rel:"nofollow noopener",to:`/casino/${a((P=s==null?void 0:s.casino_info)==null?void 0:P.casino_name)}?queryId=${($=s==null?void 0:s.casino_info)==null?void 0:$.casino_id}`,"aria-label":"Put your description here.",className:"casino-small-card__image-block",children:n.jsx("div",{className:"casino-small-card__image ibg--custom",children:n.jsx(F,{img:((L=s==null?void 0:s.casino_info)==null?void 0:L.casino_image)||"",height:"100%",width:"100%"})})}),n.jsxs("div",{className:"casino-small-card__body",children:[n.jsx(p,{rel:"nofollow noopener",to:`/casino/${a((S=s==null?void 0:s.casino_info)==null?void 0:S.casino_name)}?queryId=${(R=s==null?void 0:s.casino_info)==null?void 0:R.casino_id}`,"aria-label":"Put your description here.",className:"casino-small-card__name",children:(T=s==null?void 0:s.casino_info)==null?void 0:T.casino_name}),n.jsx("div",{className:"casino-small-card__info",children:(q=(I=s==null?void 0:s.casino_info)==null?void 0:I.additional_casino_params)==null?void 0:q.map((i,l)=>n.jsx("span",{className:"casino-small-card__info-link",children:i},l))}),n.jsxs("div",{className:"casino-small-card__rating",children:[n.jsx("span",{className:"casino-small-card__rating-icon",children:n.jsx("img",{src:G,alt:"star"})}),n.jsx("span",{className:"casino-small-card__rating-number",children:(E=s==null?void 0:s.casino_info)==null?void 0:E.casino_rank})]})]})]})})]})})},c)})})})}),n.jsx("div",{className:"slider__bottom bottom-slider",children:n.jsx("div",{ref:e,className:"bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"})})]})]})})}export{ns as default};
