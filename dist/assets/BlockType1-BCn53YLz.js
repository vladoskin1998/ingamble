import{B,j as n,p as L,s as c}from"./index-yyE7bgY4.js";import{M as T}from"./MainSlider-C4csomxl.js";import{S as q}from"./SeeAllButton-S1BCMlkp.js";import"./star-CJcP6Lxy.js";import"./like-DhHpW3pT.js";import"./pagination-BstH5rUu.js";/* empty css               *//* empty css                   */import"./LazyCardImg-DCe4Qs_G.js";function R({data:o}){var l,_,a,r;if(!o||o.items_block.type_block!==B.BlockType1)return n.jsx(n.Fragment,{});const v=L(o==null?void 0:o.items_block.data_cards).slice(0,8);return n.jsx("section",{"aria-label":"BlockTypeNumber.BlockType1",className:"main-gamble__todays-hot todays-hot-gamble",children:n.jsxs("div",{className:"todays-hot-gamble__container container",children:[n.jsx("div",{className:"todays-hot-gamble__top top",children:n.jsxs("div",{className:"top__row",children:[n.jsxs("div",{className:"top__column",children:[n.jsxs("div",{className:"top__title-block",children:[o.items_block.title_image&&n.jsx("span",{className:"top__title-icon ibg--custom cristmas-style",children:n.jsx("img",{src:o.items_block.title_image,alt:"security"})}),n.jsx("h2",{className:"top__title",children:o.items_block.block_title})]}),o.items_block.subtitle&&n.jsx("div",{className:"top__subtitle",children:o.items_block.subtitle})]}),n.jsx("div",{className:"top__column",children:n.jsx(q,{type_category:o.items_block.type_category,parameter:((_=(l=o==null?void 0:o.items_block)==null?void 0:l.category)==null?void 0:_.name)||"",id:(r=(a=o==null?void 0:o.items_block)==null?void 0:a.category)==null?void 0:r.id})})]})}),n.jsx(T,{data:v.map(s=>{var i,b,u,p,e,k,f,y,g,x,h,j,d,N,$;return{img:(i=s==null?void 0:s.bonus_info)==null?void 0:i.bonus_image,raiting:(b=s==null?void 0:s.casino_info)==null?void 0:b.casino_rank,likes:(u=s==null?void 0:s.bonus_info)==null?void 0:u.bonus_likes,casinoName:(p=s==null?void 0:s.casino_info)==null?void 0:p.casino_name,bonuseName:(e=s==null?void 0:s.bonus_info)==null?void 0:e.bonus_name,playLink:((k=s==null?void 0:s.casino_info)==null?void 0:k.casino_affiliate_link)||((f=s==null?void 0:s.casino_info)==null?void 0:f.url_casino),imageLink:`/casino/${c((y=s==null?void 0:s.casino_info)==null?void 0:y.casino_name)}/bonuses/${c((g=s==null?void 0:s.bonus_info)==null?void 0:g.bonus_name)}?queryId=${(x=s==null?void 0:s.bonus_info)==null?void 0:x.bonus_id}`,casinoLink:`/casino/${c((h=s==null?void 0:s.casino_info)==null?void 0:h.casino_name)}?queryId=${(j=s==null?void 0:s.casino_info)==null?void 0:j.casino_id}`,bonuseLink:`/casino/${c((d=s==null?void 0:s.casino_info)==null?void 0:d.casino_name)}/bonuses/${c((N=s==null?void 0:s.bonus_info)==null?void 0:N.bonus_name)}?queryId=${($=s==null?void 0:s.bonus_info)==null?void 0:$.bonus_id}`}})})]})})}export{R as default};
