import{r as l,B as d,j as e,D as m,S as b,P as p,a as g,L as f}from"./index-C1xt4OiN.js";import{s as u}from"./shield-DiMqO4Xl.js";function h({data:s}){var c,o;const n=l.useRef(null),a=l.useRef(null);return l.useEffect(()=>{if(n.current&&a.current){const i=n.current.swiper;i&&a.current&&(i.params.pagination.el=a.current,i.pagination.init(),i.pagination.render(),i.pagination.update())}},[]),!s||s.items_block.type_block!==d.BlockType7?e.jsx(e.Fragment,{}):e.jsx("section",{className:"main-gamble__low-risk-bonuses low-risk-bonuses-gamble main-gamble__different-casino-bg",children:e.jsxs("div",{className:"low-risk-bonuses-gamble__container container",children:[e.jsx("div",{className:"low-risk-bonuses-gamble__top top",children:e.jsxs("div",{className:"top__row",children:[e.jsxs("div",{className:"top__column",children:[e.jsxs("div",{className:"top__title-block",children:[s.items_block.title_image&&e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:s.items_block.title_image,alt:"security"})}),e.jsxs("h2",{className:"top__title",children:["Type 7            ",s.items_block.block_title]})]}),s.items_block.subtitle&&e.jsx("div",{className:"top__subtitle",children:s.items_block.subtitle})]}),e.jsx("div",{className:"top__column",children:e.jsx(m,{type_category:s.items_block.type_category,parameter:((o=(c=s==null?void 0:s.items_block)==null?void 0:c.category)==null?void 0:o.name)||""})})]})}),e.jsxs("div",{className:"low-risk-bonuses-gamble__slider slider",children:[e.jsx("div",{className:"slider__body",children:e.jsx("div",{className:"low-risk-bonuses-gamble__swiper slider__swiper swiper",children:e.jsx(b,{slidesPerView:"auto",modules:[p],ref:n,pagination:{el:a.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:s.items_block.data_cards.sort((i,r)=>i.order-r.order).map((i,r)=>e.jsx(g,{className:"slider__slide slide-slider slide-slider__different-casino-bg swiper-slide",children:e.jsxs("div",{className:"slide-slider__item different-casino-bg",children:[e.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"different-casino-bg__image-block",children:e.jsx("span",{className:"different-casino-bg__image ibg",children:e.jsx(f,{img:i.casino_info.casino_image||""})})}),e.jsxs("div",{className:"different-casino-bg__content",children:[e.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"different-casino-bg__name",children:i.casino_info.casino_name}),e.jsx("div",{className:"different-casino-bg__info",children:i.casino_info.additional_casino_params.map((t,_)=>e.jsx("span",{className:"different-casino-bg__info-link",children:t},_))}),e.jsxs("div",{className:"different-casino-bg__rating",children:[e.jsx("span",{className:"different-casino-bg__rating-icon",children:e.jsx("img",{src:u,alt:"shield"})}),e.jsx("span",{className:"different-casino-bg__rating-number",children:i.casino_info.casino_rank}),e.jsx("span",{className:"different-casino-bg__rating-text",children:"Safety Index"})]})]})]})},r))})})}),e.jsx("div",{className:"slider__bottom bottom-slider",children:e.jsx("div",{ref:a,className:"bottom-slider__pagination low-risk-bonuses-gamble__pagination swiper-pagination"})})]})]})})}export{h as default};
