import{r as _,E as A,j as n,F as D,S as M,P as V,a as G,L as p,s as i,b as C,c as H,d as J,f as K}from"./index-Bow1qMdZ.js";function Q({data:o}){var d,u,b,g,f,h,x,j,N,w,k;const r=_.useRef(null),c=_.useRef(null);return _.useEffect(()=>{if(r.current&&c.current){const s=r.current.swiper;s&&c.current&&(s.params.pagination.el=c.current,s.pagination.init(),s.pagination.render(),s.pagination.update())}},[]),!o||o.items_block.type_block!==A.BlockType2?n.jsx(n.Fragment,{}):n.jsx("section",{"aria-label":"BlockTypeNumber.BlockType2",className:"main-gamble__new-bonuses new-bonuses-gamble playing-now-gamble  main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble",children:n.jsxs("div",{className:"new-bonuses-gamble__container container",children:[n.jsx("div",{className:"new-bonuses-gamble__top top",children:n.jsxs("div",{className:"top__row",children:[n.jsxs("div",{className:"top__column",children:[n.jsxs("div",{className:"top__title-block",children:[((d=o==null?void 0:o.items_block)==null?void 0:d.title_image)&&n.jsx("span",{className:"top__title-icon",children:n.jsx("img",{src:(u=o==null?void 0:o.items_block)==null?void 0:u.title_image,alt:"security"})}),n.jsx("h2",{className:"top__title",children:(b=o==null?void 0:o.items_block)==null?void 0:b.block_title})]}),((g=o==null?void 0:o.items_block)==null?void 0:g.subtitle)&&n.jsx("div",{className:"top__subtitle",children:(f=o==null?void 0:o.items_block)==null?void 0:f.subtitle})]}),n.jsx("div",{className:"top__column",children:n.jsx(D,{type_category:(h=o==null?void 0:o.items_block)==null?void 0:h.type_category,parameter:((j=(x=o==null?void 0:o.items_block)==null?void 0:x.category)==null?void 0:j.name)||"",id:(w=(N=o==null?void 0:o.items_block)==null?void 0:N.category)==null?void 0:w.id})})]})}),n.jsxs("div",{className:"new-bonuses-gamble__slider slider",children:[n.jsx("div",{className:"slider__body",children:n.jsx("div",{className:"new-bonuses-gamble__swiper slider__swiper swiper",children:n.jsx(M,{ref:r,className:"slider__wrapper swiper-wrapper",slidesPerView:"auto",modules:[V],pagination:{el:c.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:(k=o==null?void 0:o.items_block)==null?void 0:k.data_cards.sort((s,e)=>(s==null?void 0:s.order)-(e==null?void 0:e.order)).map((s,e)=>{var m,y,v,t,B,P,$,L,R,S,T,E,I,q;return n.jsx(G,{children:n.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:n.jsxs("div",{className:"slide-slider__item casino-card",children:[n.jsxs("div",{rel:"nofollow noopener","aria-label":"Put your description here.",className:"casino-card__image-block",children:[n.jsx(p,{className:"casino-card__image ibg--custom",to:`/casino/${i((m=s==null?void 0:s.casino_info)==null?void 0:m.casino_name)}/bonuses/${i((y=s==null?void 0:s.bonus_info)==null?void 0:y.bonus_name)}?queryId=${(v=s==null?void 0:s.bonus_info)==null?void 0:v.bonus_id}`,children:n.jsx(C,{img:((t=s==null?void 0:s.bonus_info)==null?void 0:t.bonus_image)||"",height:"100%",width:"100%"})}),n.jsx("a",{href:H((B=s==null?void 0:s.casino_info)==null?void 0:B.casino_name),onClick:l=>{var a,z,F;l.stopPropagation(),l.preventDefault(),J((a=s==null?void 0:s.casino_info)==null?void 0:a.casino_affiliate_link),window.open(((z=s==null?void 0:s.casino_info)==null?void 0:z.casino_affiliate_link)||((F=s==null?void 0:s.casino_info)==null?void 0:F.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),n.jsx("div",{className:"casino-card__content",children:n.jsxs("div",{className:"casino-card__small-card casino-small-card",children:[n.jsx(p,{rel:"nofollow noopener",to:`/casino/${i((P=s==null?void 0:s.casino_info)==null?void 0:P.casino_name)}?queryId=${($=s==null?void 0:s.casino_info)==null?void 0:$.casino_id}`,"aria-label":"Put your description here.",className:"casino-small-card__image-block",children:n.jsx("div",{className:"casino-small-card__image ibg--custom",children:n.jsx(C,{img:((L=s==null?void 0:s.casino_info)==null?void 0:L.casino_image)||"",height:"100%",width:"100%",imgLoading:e?"lazy":"eager"})})}),n.jsxs("div",{className:"casino-small-card__body",children:[n.jsx(p,{rel:"nofollow noopener",to:`/casino/${i((R=s==null?void 0:s.casino_info)==null?void 0:R.casino_name)}?queryId=${(S=s==null?void 0:s.casino_info)==null?void 0:S.casino_id}`,"aria-label":"Put your description here.",className:"casino-small-card__name",children:(T=s==null?void 0:s.casino_info)==null?void 0:T.casino_name}),n.jsx("div",{className:"casino-small-card__info",children:(I=(E=s==null?void 0:s.casino_info)==null?void 0:E.additional_casino_params)==null?void 0:I.map((l,a)=>n.jsx("span",{className:"casino-small-card__info-link",children:l},a))}),n.jsxs("div",{className:"casino-small-card__rating",children:[n.jsx("span",{className:"casino-small-card__rating-icon",children:n.jsx("img",{src:K,alt:"star"})}),n.jsx("span",{className:"casino-small-card__rating-number",children:(q=s==null?void 0:s.casino_info)==null?void 0:q.casino_rank})]})]})]})})]})})},e)})})})}),n.jsx("div",{className:"slider__bottom bottom-slider",children:n.jsx("div",{ref:c,className:"bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"})})]})]})})}export{Q as default};
