import{j as s,m as j,c as m,L as t,M as _,s as i,C as p,S as u,a as N,b as c,d,l as v,$ as g}from"./index-5xxXFk7r.js";const y="/assets/01-DEGeqFDK.png",w=()=>s.jsx("section",{className:"simple-bonus__casino-person simple-bonus__casino-person_desktop casino-person",children:s.jsx("div",{className:"casino-person__container container",children:s.jsxs("div",{className:"casino-person__body",children:[s.jsxs("div",{className:"casino-person__row",children:[s.jsxs("div",{className:"casino-person__info info-casino-person",children:[s.jsx("div",{className:"info-casino-person__img",children:s.jsx(j.LazyLoadImage,{src:y,alt:"HARRY STYLES"})}),s.jsxs("div",{className:"info-casino-person__content",children:[s.jsx("h3",{className:"info-casino-person__name h3",children:"HARRY STYLES"}),s.jsx("div",{className:"info-casino-person__position",children:"Content Maker, Chief Marketing at Lerio"})]})]}),s.jsx("div",{className:"casino-person__socials",children:s.jsxs("div",{className:"socials-top-footer__items",children:[s.jsx("div",{className:"socials-top-footer__item",children:s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"socials-top-footer__link",rel:"noreferrer",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#x"})})})}),s.jsx("div",{className:"socials-top-footer__item",children:s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"socials-top-footer__link",rel:"noreferrer",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#facebook"})})})}),s.jsx("div",{className:"socials-top-footer__item",children:s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"socials-top-footer__link",rel:"noreferrer",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#linkedin"})})})})]})})]}),s.jsxs("div",{className:"casino-person__waves",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]})})}),f=async()=>(await g.get("bonuses-in-rank-range/")).data,k=async()=>(await g.get("loyalty-programs-in-rank-range/")).data,$=({casinoName:r})=>{const{data:l}=m(["bonuses-in-rank-range/"],()=>f(),{keepPreviousData:!0,staleTime:1/0}),{data:o}=m(["loyalty-programs-in-rank-range/"],()=>k(),{keepPreviousData:!0,staleTime:1/0});return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"simple-bonus__more-stake more-staket-simple-bonus",children:s.jsxs("div",{className:"more-staket-simple-bonus__container container",children:[s.jsx("div",{className:"more-staket-simple-bonus__top top",children:s.jsxs("div",{className:"top__row",children:[s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:"Other Best Reload Bonuses"})})}),s.jsx("div",{className:"top__column",children:s.jsxs(t,{rel:"nofollow noopener",to:"/all-bonus","aria-label":"Put your description here.",className:"top__btn",children:[s.jsx("span",{children:"See All"}),s.jsx("span",{className:"top__btn-arrow",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),s.jsx(_,{data:l==null?void 0:l.map(e=>({img:(e==null?void 0:e.bonus_image)||"",raiting:e==null?void 0:e.casino_rank,likes:e==null?void 0:e.bonus_likes,casinoName:e==null?void 0:e.casino_name,bonuseName:e==null?void 0:e.bonus_name,imageLink:`/casino/${i(e==null?void 0:e.casino_name)}/bonuses/${i(e==null?void 0:e.bonus_name)}?queryId=${e==null?void 0:e.bonus_id}`,playLink:e.casino_affiliate_link||e.url_casino,casinoLink:`/casino/${i(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,bonuseLink:`/casino/${i(e==null?void 0:e.casino_name)}/bonuses/${i(e==null?void 0:e.bonus_name)}?queryId=${e==null?void 0:e.bonus_id}`,tags:s.jsx(s.Fragment,{children:typeof e!="string"?e==null?void 0:e.labels.map((n,a)=>s.jsx("div",{className:`tags-casino-card__item ${p[a%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof n!="string"&&"name"in n?n==null?void 0:n.name:""})})):[]})}))})]})}),s.jsx("section",{className:"simple-bonus__essential-programs essential-programs-gamble essential-programs-gamble_images",children:s.jsxs("div",{className:"essential-programs-gamble__container container",children:[s.jsx("div",{className:"essential-programs-gamble__top top",children:s.jsxs("div",{className:"top__row",children:[s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})}),s.jsx("div",{className:"top__column",children:s.jsxs(t,{rel:"nofollow noopener",to:"/all-loyalties","aria-label":"Put your description here.",className:"top__btn",children:[s.jsx("span",{children:"See All"}),s.jsx("span",{className:"top__btn-arrow",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),s.jsx("div",{className:"essential-programs-gamble__slider slider",children:s.jsx("div",{className:"essential-programs-gamble__swiper slider__swiper swiper",children:s.jsx(u,{slidesPerView:"auto",allowTouchMove:!0,breakpoints:{320:{spaceBetween:16},1024.98:{spaceBetween:20},1920:{spaceBetween:20}},className:"slider__wrapper swiper-wrapper",children:o==null?void 0:o.map(e=>{var n;return s.jsx(N,{children:s.jsx("div",{className:"slider__slide slide-slider ",style:{height:"100%"},children:s.jsxs("div",{className:"slide-slider__item essential-programs-gamble__item item-essential-programs-gamble",children:[s.jsx("div",{className:"item-essential-programs-gamble__top",style:{maxHeight:"160px"},children:s.jsx("a",{href:`/casino/${i(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,"aria-label":"Put your description here.",className:"item-essential-programs-gamble__logo ibg--custom",children:s.jsx(c,{img:(e==null?void 0:e.card_logo)||"",height:"auto",width:"auto"})})}),s.jsxs("div",{className:"item-essential-programs-gamble__body",children:[s.jsxs("div",{className:"item-essential-programs-gamble__provider",children:[s.jsx(t,{className:"item-essential-programs-gamble__provider-name",to:`/casino/${i(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,children:e.casino_name}),s.jsxs("span",{className:"item-essential-programs-gamble__provider-rating",children:[s.jsx("span",{className:"item-essential-programs-gamble__provider-rating-star",children:s.jsx("img",{src:d,alt:"star"})}),s.jsx("span",{className:"item-essential-programs-gamble__provider-rating-number",children:e==null?void 0:e.casino_rank})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:v,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:(e==null?void 0:e.loyalty_likes)||0})]})]}),s.jsxs("div",{className:"item-essential-programs-gamble__stats stats-item-essential-programs-gamble",children:[s.jsx("div",{className:"stats-item-essential-programs-gamble__column",children:s.jsxs("div",{className:"stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"item-stats-essential-programs-gamble__label",children:"Loyalty Rank"}),s.jsxs("div",{className:"item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"value-item-stats-essential-programs-gamble__number",children:e==null?void 0:e.loyalty_rank}),s.jsx("div",{className:"value-item-stats-essential-programs-gamble__content",children:s.jsx("div",{className:"value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_5",children:(n=e==null?void 0:e.stars)==null?void 0:n.map(a=>s.jsx("div",{className:"value-item-stats-essential-programs-gamble__star",children:s.jsx("img",{src:d,alt:"star"})},a))})})]})]})}),s.jsx("div",{className:"stats-item-essential-programs-gamble__column",children:s.jsxs("div",{className:"stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"item-stats-essential-programs-gamble__label",children:"Levels"}),s.jsxs("div",{className:"item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"value-item-stats-essential-programs-gamble__number",children:e==null?void 0:e.loyalty_count_levels}),s.jsx("div",{className:"value-item-stats-essential-programs-gamble__content",children:e==null?void 0:e.loyalty_level_description})]})]})})]}),s.jsx("div",{className:"item-essential-programs-gamble__features features-essential-programs-gamble",children:e==null?void 0:e.keypoints.map(a=>s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx(t,{className:"features-essential-programs-gamble__icon",rel:"nofollow noopener",to:`/casino/${i(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,children:s.jsx(c,{img:(a==null?void 0:a.image)||"",height:"100%",width:"100%",size:"medium"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]}))})]}),s.jsxs("div",{className:"item-essential-programs-gamble__bottom",children:[s.jsx("div",{className:"item-essential-programs-gamble__bottom-column",children:s.jsx("a",{rel:"nofollow noopener",href:e.casino_affiliate_link||(e==null?void 0:e.url_casino),"aria-label":"Put your description here.",target:"_blank",className:"item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow",children:"Visit Casino"})}),s.jsx("div",{className:"item-essential-programs-gamble__bottom-column",children:s.jsx(t,{to:`/casino/${i(e==null?void 0:e.casino_name)}/loyalty?queryId=${e==null?void 0:e.loyalty_id}`,"aria-label":"Put your description here.",className:"item-essential-programs-gamble__btn",children:"Read More"})})]})]})})})})})})})]})})]})},L=({casinoName:r,casino_rank:l,casino_affiliate_link:o,casino_id:e,sibling_bonuses:n})=>s.jsx("section",{className:"simple-bonus__more-stake more-staket-simple-bonus",children:s.jsxs("div",{className:"more-staket-simple-bonus__container container",children:[s.jsx("div",{className:"more-staket-simple-bonus__top top",children:s.jsxs("div",{className:"top__row",children:[s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsxs("h2",{className:"top__title",children:["More ",r," Bonuses"]})})}),s.jsx("div",{className:"top__column",children:s.jsxs(t,{rel:"nofollow noopener",to:"/all-casinos","aria-label":"Put your description here.",className:"top__btn",children:[s.jsx("span",{children:"See All"}),s.jsx("span",{className:"top__btn-arrow",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),s.jsx(_,{data:n==null?void 0:n.map(a=>({img:(a==null?void 0:a.bonus_image)||"",raiting:l||10,likes:(a==null?void 0:a.likes)||0,casinoName:r||"",bonuseName:(a==null?void 0:a.name)||"",playLink:o,imageLink:`/casino/${i(a.name)}/bonuses/${i(a==null?void 0:a.name)}?queryId=${a==null?void 0:a.id}`||"",casinoLink:`/casino/${i(r)}?queryId=${e}`||"",bonuseLink:`/casino/${i(a.name)}/bonuses/${i(a==null?void 0:a.name)}?queryId=${a==null?void 0:a.id}`||"",tags:s.jsx(s.Fragment,{children:a.labels.map((x,h)=>s.jsx("div",{className:`tags-casino-card__item ${p[h%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:x.name})}))})}))})]})});export{$ as H,L as S,w as a};
