import{r as d,B as E,j as a,S as C,a as F,L as r,s as o,c as A,b as D}from"./index-C4T5OK3j.js";import{s as V}from"./star-CJcP6Lxy.js";import{P as W}from"./pagination-FFza7K-G.js";/* empty css               *//* empty css                   */import{L as z}from"./LazyCardImg-hFstVQW7.js";import{S as G}from"./SeeAllButton-CVrk5LkJ.js";function X({data:n}){var b,p,u,g;const e=d.useRef(null),c=d.useRef(null);return d.useEffect(()=>{if(e.current&&c.current){const s=e.current.swiper;s&&c.current&&(s.params.pagination.el=c.current,s.pagination.init(),s.pagination.render(),s.pagination.update())}},[]),!n||n.items_block.type_block!==E.BlockType4?a.jsx(a.Fragment,{}):a.jsx("section",{"aria-label":"BlockTypeNumber.BlockType4",className:"main-gamble__highest-max-bet-bonuses-2 highest-max-bet-bonuses-2-gamble main-gamble__casino-big-cards",children:a.jsxs("div",{className:"highest-max-bet-bonuses-2-gamble__container container",children:[a.jsx("div",{className:"highest-max-bet-bonuses-2-gamble__top top",children:a.jsxs("div",{className:"top__row",children:[a.jsxs("div",{className:"top__column",children:[a.jsxs("div",{className:"top__title-block",children:[n.items_block.title_image&&a.jsx("span",{className:"top__title-icon",children:a.jsx("img",{src:n.items_block.title_image,alt:"security"})}),a.jsx("h2",{className:"top__title",children:n.items_block.block_title})]}),n.items_block.subtitle&&a.jsx("div",{className:"top__subtitle",children:n.items_block.subtitle})]}),a.jsx("div",{className:"top__column",children:a.jsx(G,{type_category:n.items_block.type_category,parameter:((p=(b=n==null?void 0:n.items_block)==null?void 0:b.category)==null?void 0:p.name)||"",id:(g=(u=n==null?void 0:n.items_block)==null?void 0:u.category)==null?void 0:g.id})})]})}),a.jsxs("div",{className:"highest-max-bet-bonuses-2-gamble__slider slider",children:[a.jsx("div",{className:"slider__body",children:a.jsx("div",{className:"highest-max-bet-bonuses-2-gamble__swiper slider__swiper swiper",children:a.jsx("div",{className:"slider__wrapper swiper-wrapper",children:a.jsx(C,{className:"slider__wrapper swiper-wrapper",slidesPerView:"auto",modules:[W],ref:e,pagination:{el:c.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:n.items_block.data_cards.sort((s,_)=>s.order-_.order).map((s,_)=>{var h,x,f,j,t,N,m,k,y,v,w,B,$,P,L,S,I,R;return a.jsx(F,{children:a.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:a.jsxs("div",{"aria-label":"Put your description here.",className:"slide-slider__item casino-big-card",children:[a.jsx(r,{className:"casino-big-card__image ibg--custom",to:`/casino/${o((h=s==null?void 0:s.casino_info)==null?void 0:h.casino_name)}/bonuses/${o((x=s==null?void 0:s.bonus_info)==null?void 0:x.bonus_name)}?queryId=${(f=s==null?void 0:s.bonus_info)==null?void 0:f.bonus_id}`,children:a.jsx(z,{img:((j=s==null?void 0:s.bonus_info)==null?void 0:j.bonus_image)||"",width:"100%"})}),a.jsx("div",{className:"casino-big-card__top",children:a.jsxs("div",{className:"casino-big-card__top-small-card casino-small-card",children:[a.jsx(r,{to:`/casino/${o((t=s==null?void 0:s.casino_info)==null?void 0:t.casino_name)}?queryId=${(N=s==null?void 0:s.casino_info)==null?void 0:N.casino_id}`,"aria-label":"Put your description here.",className:"casino-small-card__image-block",children:a.jsx("div",{className:"casino-small-card__image ibg--custom",children:a.jsx(z,{img:((m=s==null?void 0:s.casino_info)==null?void 0:m.casino_image)||"",size:"medium"})})}),a.jsxs("div",{className:"casino-small-card__body",children:[a.jsx(r,{to:`/casino/${o((k=s==null?void 0:s.casino_info)==null?void 0:k.casino_name)}?queryId=${(y=s==null?void 0:s.casino_info)==null?void 0:y.casino_id}`,"aria-label":"Put your description here.",className:"casino-small-card__name",children:(v=s==null?void 0:s.casino_info)==null?void 0:v.casino_name}),a.jsx("div",{className:"casino-small-card__info",children:(B=(w=s==null?void 0:s.casino_info)==null?void 0:w.additional_casino_params)==null?void 0:B.map((i,l)=>a.jsx("span",{className:"casino-small-card__info-link",children:i},l))}),a.jsxs("div",{className:"casino-small-card__rating",children:[a.jsx("span",{className:"casino-small-card__rating-icon",children:a.jsx("img",{src:V,alt:"star"})}),a.jsx("span",{className:"casino-small-card__rating-number",children:($=s==null?void 0:s.casino_info)==null?void 0:$.casino_rank})]})]})]})}),a.jsxs("div",{className:"casino-big-card__bottom",children:[a.jsx(r,{to:`/casino/${o((P=s==null?void 0:s.casino_info)==null?void 0:P.casino_name)}/bonuses/${o((L=s==null?void 0:s.bonus_info)==null?void 0:L.bonus_name)}?queryId=${(S=s==null?void 0:s.bonus_info)==null?void 0:S.bonus_id}`,"aria-label":"Put your description here.",className:"casino-big-card__title",style:{maxWidth:"60%"},children:a.jsx("span",{className:"casino-big-card__title-label",children:(I=s==null?void 0:s.bonus_info)==null?void 0:I.bonus_name})}),a.jsx("a",{href:A((R=s==null?void 0:s.casino_info)==null?void 0:R.casino_name),onClick:i=>{var l,T,q;i.stopPropagation(),i.preventDefault(),D((l=s==null?void 0:s.casino_info)==null?void 0:l.casino_affiliate_link),window.open(((T=s==null?void 0:s.casino_info)==null?void 0:T.casino_affiliate_link)||((q=s==null?void 0:s.casino_info)==null?void 0:q.url_casino),"_blank","noopener,noreferrer")},className:"casino-big-card__btn",children:"Play"})]})]})})},_)})})})})}),a.jsx("div",{className:"slider__bottom bottom-slider",children:a.jsx("div",{ref:c,className:"bottom-slider__pagination highest-max-bet-bonuses-2-gamble__pagination swiper-pagination"})})]})]})})}export{X as default};
