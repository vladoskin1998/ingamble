import{r as n,B as _,j as s,S as d,P as m,k as p,s as b}from"./index-2g5NLBCQ.js";function x({data:e}){const l=n.useRef(null),i=n.useRef(null);return n.useEffect(()=>{if(l.current&&i.current){const a=l.current.swiper;a&&i.current&&(a.params.pagination.el=i.current,a.pagination.init(),a.pagination.render(),a.pagination.update())}},[]),!e||e.items_block.type_block!==_.BlockType2?s.jsx(s.Fragment,{}):s.jsx("section",{className:"main-gamble__new-bonuses new-bonuses-gamble playing-now-gamble  main-gamble__fastest-payout-casinos fastest-payout-casinos-gamble",children:s.jsxs("div",{className:"new-bonuses-gamble__container container",children:[s.jsx("div",{className:"new-bonuses-gamble__top top",children:s.jsxs("div",{className:"top__row",children:[s.jsx("div",{className:"top__column",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:e.items_block.title_image&&s.jsx("img",{src:e.items_block.title_image,alt:"security"})}),s.jsx("h2",{className:"top__title",children:e.items_block.block_title})]})}),s.jsx("div",{className:"top__column",children:s.jsxs("a",{href:"/see-all?key=77890123","aria-label":"Put your description here.",target:"_blank",className:"top__btn",children:[s.jsx("span",{children:"See All"}),s.jsx("span",{className:"top__btn-arrow",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),s.jsxs("div",{className:"new-bonuses-gamble__slider slider",children:[s.jsx("div",{className:"slider__body",children:s.jsx("div",{className:"new-bonuses-gamble__swiper slider__swiper swiper",children:s.jsx(d,{ref:l,className:"slider__wrapper swiper-wrapper",slidesPerView:"auto",spaceBetween:20,modules:[m],pagination:{el:i.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:e.items_block.data_cards.map(a=>{var c,r,o;return s.jsx(p,{children:s.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsxs("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[s.jsx("div",{className:"casino-card__image ibg",children:s.jsx("img",{src:((c=a==null?void 0:a.bonus_info)==null?void 0:c.bonus_image)||"",alt:"Big Fat Race to $100 Moon coins "})}),s.jsx("a",{href:(r=a==null?void 0:a.casino_info)==null?void 0:r.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),s.jsx("div",{className:"casino-card__content",children:s.jsxs("div",{className:"casino-card__small-card casino-small-card",children:[s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-small-card__image-block",children:s.jsx("div",{className:"casino-small-card__image ibg",children:s.jsx("img",{src:((o=a==null?void 0:a.casino_info)==null?void 0:o.casino_image)||"",alt:"Casino Vibes"})})}),s.jsxs("div",{className:"casino-small-card__body",children:[s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-small-card__name",children:a.casino_info.casino_name}),s.jsx("div",{className:"casino-small-card__info",children:a.casino_info.additional_casino_params.map(t=>s.jsx("span",{className:"casino-small-card__info-link",children:t}))}),s.jsxs("div",{className:"casino-small-card__rating",children:[s.jsx("span",{className:"casino-small-card__rating-icon",children:s.jsx("img",{src:b,alt:"star"})}),s.jsx("span",{className:"casino-small-card__rating-number",children:a.casino_info.casino_rank})]})]})]})})]})})})})})})}),s.jsx("div",{className:"slider__bottom bottom-slider",children:s.jsx("div",{ref:i,className:"bottom-slider__pagination new-bonuses-gamble__pagination swiper-pagination"})})]})]})})}export{x as default};
