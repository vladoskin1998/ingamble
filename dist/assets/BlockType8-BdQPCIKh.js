import{E as T,j as o,t as L,F,M as S,s as l,C as q}from"./index-Bow1qMdZ.js";function I({data:n}){var _,a,e,i,r,b;if(!n||n.items_block.type_block!==T.BlockType8)return o.jsx(o.Fragment,{});const c=L((_=n==null?void 0:n.items_block)==null?void 0:_.data_cards);return console.log("BlockTypeNumber.BlockType8"),o.jsx("section",{"aria-label":"BlockTypeNumber.BlockType8",className:"main-gamble__low-wager-bonuses low-wager-bonuses-gamble ",children:o.jsxs("div",{className:"low-wager-bonuses-gamble__container container",children:[o.jsx("div",{className:"low-wager-bonuses-gamble__top top",children:o.jsxs("div",{className:"top__row",children:[o.jsxs("div",{className:"top__column",children:[o.jsxs("div",{className:"top__title-block",children:[n.items_block.title_image&&o.jsx("span",{className:"top__title-icon",children:o.jsx("img",{src:n.items_block.title_image,alt:"security"})}),o.jsx("h2",{className:"top__title",children:n.items_block.block_title})]}),n.items_block.subtitle&&o.jsx("div",{className:"top__subtitle",children:n.items_block.subtitle})]}),o.jsx("div",{className:"top__column",children:o.jsx(F,{type_category:n.items_block.type_category,parameter:((e=(a=n==null?void 0:n.items_block)==null?void 0:a.category)==null?void 0:e.name)||"",id:(r=(i=n==null?void 0:n.items_block)==null?void 0:i.category)==null?void 0:r.id})})]})}),o.jsx(S,{data:(b=c==null?void 0:c.slice(0,8))==null?void 0:b.map(s=>{var u,k,p,g,f,j,x,y,N,h,d,w,$;return{playLink:((u=s==null?void 0:s.casino_info)==null?void 0:u.casino_affiliate_link)||((k=s==null?void 0:s.casino_info)==null?void 0:k.url_casino),img:s.bonus_info.bonus_image,raiting:s.casino_info.casino_rank,likes:s.bonus_info.bonus_likes,casinoName:s.casino_info.casino_name,bonuseName:s.bonus_info.bonus_name,imageLink:`/casino/${l((p=s==null?void 0:s.casino_info)==null?void 0:p.casino_name)}/bonuses/${l((g=s==null?void 0:s.bonus_info)==null?void 0:g.bonus_name)}?queryId=${(f=s==null?void 0:s.bonus_info)==null?void 0:f.bonus_id}`,casinoLink:`/casino/${l((j=s==null?void 0:s.casino_info)==null?void 0:j.casino_name)}?queryId=${(x=s==null?void 0:s.casino_info)==null?void 0:x.casino_id}`,bonuseLink:`/casino/${l((y=s==null?void 0:s.casino_info)==null?void 0:y.casino_name)}/bonuses/${l((N=s==null?void 0:s.bonus_info)==null?void 0:N.bonus_name)}?queryId=${(h=s==null?void 0:s.bonus_info)==null?void 0:h.bonus_id}`,tags:o.jsx(o.Fragment,{children:(w=(d=s==null?void 0:s.bonus_info)==null?void 0:d.labels)!=null&&w.length?($=s==null?void 0:s.bonus_info)==null?void 0:$.labels.map((B,v)=>o.jsx("div",{className:`tags-casino-card__item ${q[v%4]}`,children:o.jsx("span",{className:"tags-casino-card__item-label",children:B})},v)):o.jsx(o.Fragment,{})})}})})]})})}export{I as default};