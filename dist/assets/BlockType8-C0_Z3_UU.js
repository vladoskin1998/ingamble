import{E as L,j as n,t as T,F,M as S,s as c,C as q}from"./index-DBFlBBWg.js";function I({data:o}){var _,a,e,i,r,b;if(!o||o.items_block.type_block!==L.BlockType8)return n.jsx(n.Fragment,{});const l=T((_=o==null?void 0:o.items_block)==null?void 0:_.data_cards);return n.jsx("section",{"aria-label":"BlockTypeNumber.BlockType8",className:"main-gamble__low-wager-bonuses low-wager-bonuses-gamble ",children:n.jsxs("div",{className:"low-wager-bonuses-gamble__container container",children:[n.jsx("div",{className:"low-wager-bonuses-gamble__top top",children:n.jsxs("div",{className:"top__row",children:[n.jsxs("div",{className:"top__column",children:[n.jsxs("div",{className:"top__title-block",children:[o.items_block.title_image&&n.jsx("span",{className:"top__title-icon",children:n.jsx("img",{src:o.items_block.title_image,alt:"security"})}),n.jsx("h2",{className:"top__title",children:o.items_block.block_title})]}),o.items_block.subtitle&&n.jsx("div",{className:"top__subtitle",children:o.items_block.subtitle})]}),n.jsx("div",{className:"top__column",children:n.jsx(F,{type_category:o.items_block.type_category,parameter:((e=(a=o==null?void 0:o.items_block)==null?void 0:a.category)==null?void 0:e.name)||"",id:(r=(i=o==null?void 0:o.items_block)==null?void 0:i.category)==null?void 0:r.id})})]})}),n.jsx(S,{data:(b=l==null?void 0:l.slice(0,8))==null?void 0:b.map(s=>{var u,k,g,p,f,x,j,y,h,N,d,w,$;return{playLink:((u=s==null?void 0:s.casino_info)==null?void 0:u.casino_affiliate_link)||((k=s==null?void 0:s.casino_info)==null?void 0:k.url_casino),img:s.bonus_info.bonus_image,raiting:s.casino_info.casino_rank,likes:s.bonus_info.bonus_likes,casinoName:s.casino_info.casino_name,bonuseName:s.bonus_info.bonus_name,imageLink:`/casino/${c((g=s==null?void 0:s.casino_info)==null?void 0:g.casino_name)}/bonuses/${c((p=s==null?void 0:s.bonus_info)==null?void 0:p.bonus_name)}?queryId=${(f=s==null?void 0:s.bonus_info)==null?void 0:f.bonus_id}`,casinoLink:`/casino/${c((x=s==null?void 0:s.casino_info)==null?void 0:x.casino_name)}?queryId=${(j=s==null?void 0:s.casino_info)==null?void 0:j.casino_id}`,bonuseLink:`/casino/${c((y=s==null?void 0:s.casino_info)==null?void 0:y.casino_name)}/bonuses/${c((h=s==null?void 0:s.bonus_info)==null?void 0:h.bonus_name)}?queryId=${(N=s==null?void 0:s.bonus_info)==null?void 0:N.bonus_id}`,tags:n.jsx(n.Fragment,{children:(w=(d=s==null?void 0:s.bonus_info)==null?void 0:d.labels)!=null&&w.length?($=s==null?void 0:s.bonus_info)==null?void 0:$.labels.map((v,B)=>n.jsx("div",{className:`tags-casino-card__item ${q[B%4]}`,children:n.jsx("span",{className:"tags-casino-card__item-label",children:v})})):n.jsx(n.Fragment,{})})}})})]})})}export{I as default};
