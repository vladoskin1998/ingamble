import{j as s,m as w,c as p,L as c,M as v,s as l,C as y,S as $,a as L,b as f,d as k,l as S,$ as g}from"./index-CjeliHC-.js";const P="/assets/01-DEGeqFDK.png",z=()=>s.jsx("section",{className:"simple-bonus__casino-person simple-bonus__casino-person_desktop casino-person",children:s.jsx("div",{className:"casino-person__container container",children:s.jsxs("div",{className:"casino-person__body",children:[s.jsxs("div",{className:"casino-person__row",children:[s.jsxs("div",{className:"casino-person__info info-casino-person",children:[s.jsx("div",{className:"info-casino-person__img",children:s.jsx(w.LazyLoadImage,{src:P,alt:"HARRY STYLES"})}),s.jsxs("div",{className:"info-casino-person__content",children:[s.jsx("h3",{className:"info-casino-person__name h3",children:"HARRY STYLES"}),s.jsx("div",{className:"info-casino-person__position",children:"Content Maker, Chief Marketing at Lerio"})]})]}),s.jsx("div",{className:"casino-person__socials",children:s.jsxs("div",{className:"socials-top-footer__items",children:[s.jsx("div",{className:"socials-top-footer__item",children:s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"socials-top-footer__link",rel:"noreferrer",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#x"})})})}),s.jsx("div",{className:"socials-top-footer__item",children:s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"socials-top-footer__link",rel:"noreferrer",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#facebook"})})})}),s.jsx("div",{className:"socials-top-footer__item",children:s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"socials-top-footer__link",rel:"noreferrer",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#linkedin"})})})})]})})]}),s.jsxs("div",{className:"casino-person__waves",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]})})}),I=async(t,r)=>(await g.post(`filter/casinos/?page=${r}&page_size=6`,t)).data,R=async(t,r)=>(await g.post(`filter/bonus/?page=${r}&page_size=6`,t)).data,H=async(t,r)=>(await g.post(`filter/loyalty/?page=${r}&page_size=4`,t)).data,A=({casinoName:t})=>{var x,h,j;const{data:r}=p(["filter/casinos"],()=>I({min:8,max:10},1),{keepPreviousData:!0,staleTime:1/0}),{data:o}=p(["filter/bonus"],()=>R({min:8,max:10},1),{keepPreviousData:!0,staleTime:1/0}),{data:d}=p(["filter/loyalty"],()=>H({min:8,max:10},1),{keepPreviousData:!0,staleTime:1/0});return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"simple-bonus__more-stake more-staket-simple-bonus",children:s.jsxs("div",{className:"more-staket-simple-bonus__container container",children:[s.jsx("div",{className:"more-staket-simple-bonus__top top",children:s.jsxs("div",{className:"top__row",children:[s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsxs("h2",{className:"top__title",children:["More ",t," Bonuses"]})})}),s.jsx("div",{className:"top__column",children:s.jsxs(c,{rel:"nofollow noopener",to:"/all-casinos","aria-label":"Put your description here.",className:"top__btn",children:[s.jsx("span",{children:"See All"}),s.jsx("span",{className:"top__btn-arrow",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),s.jsx(v,{data:(x=r==null?void 0:r.results)==null?void 0:x.map(e=>{var a;return{img:(e==null?void 0:e.casino_image)||"",raiting:e==null?void 0:e.casino_rank,likes:e==null?void 0:e.likes,casinoName:e==null?void 0:e.casino_name,playLink:e==null?void 0:e.casino_affiliate_link,casinoLink:`/casino/${l(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,tags:s.jsx(s.Fragment,{children:(a=e==null?void 0:e.bonuses)==null?void 0:a.map(n=>n==null?void 0:n.labels.map((m,_)=>s.jsx("div",{className:`tags-casino-card__item ${y[_%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:m==null?void 0:m.name})})))})}})})]})}),s.jsx("section",{className:"simple-bonus__more-stake more-staket-simple-bonus",children:s.jsxs("div",{className:"more-staket-simple-bonus__container container",children:[s.jsx("div",{className:"more-staket-simple-bonus__top top",children:s.jsxs("div",{className:"top__row",children:[s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:"Other Best Reload Bonuses"})})}),s.jsx("div",{className:"top__column",children:s.jsxs(c,{rel:"nofollow noopener",to:"/all-bonus","aria-label":"Put your description here.",className:"top__btn",children:[s.jsx("span",{children:"See All"}),s.jsx("span",{className:"top__btn-arrow",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),s.jsx(v,{data:(h=o==null?void 0:o.results)==null?void 0:h.map(e=>({img:(e==null?void 0:e.bonus_image)||"",raiting:e==null?void 0:e.casino_rank,likes:e==null?void 0:e.bonus_likes,casinoName:e==null?void 0:e.casino_name,bonuseName:e==null?void 0:e.bonus_name,imageLink:`/casino/${l(e==null?void 0:e.casino_name)}/bonuses/${l(e==null?void 0:e.bonus_name)}?queryId=${e==null?void 0:e.bonus_id}`,playLink:e.casino_affiliate_link,casinoLink:`/casino/${l(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,bonuseLink:`/casino/${l(e==null?void 0:e.casino_name)}/bonuses/${l(e==null?void 0:e.bonus_name)}?queryId=${e==null?void 0:e.bonus_id}`,tags:s.jsx(s.Fragment,{children:typeof e!="string"?e==null?void 0:e.labels.map((a,n)=>s.jsx("div",{className:`tags-casino-card__item ${y[n%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof a!="string"&&"name"in a?a==null?void 0:a.name:""})})):[]})}))})]})}),s.jsx("section",{className:"simple-bonus__essential-programs essential-programs-gamble essential-programs-gamble_images",children:s.jsxs("div",{className:"essential-programs-gamble__container container",children:[s.jsx("div",{className:"essential-programs-gamble__top top",children:s.jsxs("div",{className:"top__row",children:[s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})}),s.jsx("div",{className:"top__column",children:s.jsxs(c,{rel:"nofollow noopener",to:"/all-loyalties","aria-label":"Put your description here.",className:"top__btn",children:[s.jsx("span",{children:"See All"}),s.jsx("span",{className:"top__btn-arrow",children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),s.jsx("div",{className:"essential-programs-gamble__slider slider",children:s.jsx("div",{className:"essential-programs-gamble__swiper slider__swiper swiper",children:s.jsx($,{slidesPerView:"auto",allowTouchMove:!0,breakpoints:{320:{spaceBetween:16},1024.98:{spaceBetween:20},1920:{spaceBetween:20}},className:"slider__wrapper swiper-wrapper",children:(j=d==null?void 0:d.results)==null?void 0:j.map(e=>{var a,n,m,_,u,N;return s.jsx(L,{children:s.jsx("div",{className:"slider__slide slide-slider ",style:{height:"100%"},children:s.jsxs("div",{className:"slide-slider__item essential-programs-gamble__item item-essential-programs-gamble",children:[s.jsx("div",{className:"item-essential-programs-gamble__top",style:{maxHeight:"160px"},children:s.jsx("a",{href:e==null?void 0:e.casino_affiliate_link,"aria-label":"Put your description here.",target:"_blank",className:"item-essential-programs-gamble__logo ibg--custom",children:s.jsx(f,{img:(e==null?void 0:e.casino_image)||"",height:"100%",width:"100%"})})}),s.jsxs("div",{className:"item-essential-programs-gamble__body",children:[s.jsxs("div",{className:"item-essential-programs-gamble__provider",children:[s.jsx("span",{className:"item-essential-programs-gamble__provider-name",children:e.casino_name}),s.jsxs("span",{className:"item-essential-programs-gamble__provider-rating",children:[s.jsx("span",{className:"item-essential-programs-gamble__provider-rating-star",children:s.jsx("img",{src:k,alt:"star"})}),s.jsx("span",{className:"item-essential-programs-gamble__provider-rating-number",children:e==null?void 0:e.casino_rank})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:S,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:(e==null?void 0:e.casino_likes)||0})]})]}),s.jsxs("div",{className:"item-essential-programs-gamble__stats stats-item-essential-programs-gamble",children:[s.jsx("div",{className:"stats-item-essential-programs-gamble__column",children:s.jsxs("div",{className:"stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"item-stats-essential-programs-gamble__label",children:"Loyalty Rank"}),s.jsxs("div",{className:"item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"value-item-stats-essential-programs-gamble__number",children:(a=e==null?void 0:e.loyalty_program)==null?void 0:a.loyalty_rank}),s.jsx("div",{className:"value-item-stats-essential-programs-gamble__content",children:s.jsx("div",{className:"value-item-stats-essential-programs-gamble__stars value-item-stats-essential-programs-gamble__stars_5",children:Array((n=e==null?void 0:e.loyalty_program)==null?void 0:n.stars).fill(0).map((i,b)=>s.jsx("div",{className:"value-item-stats-essential-programs-gamble__star",children:s.jsx("img",{src:k,alt:"star"})},i+b))})})]})]})}),s.jsx("div",{className:"stats-item-essential-programs-gamble__column",children:s.jsxs("div",{className:"stats-item-essential-programs-gamble__item item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"item-stats-essential-programs-gamble__label",children:"Levels"}),s.jsxs("div",{className:"item-stats-essential-programs-gamble__value value-item-stats-essential-programs-gamble",children:[s.jsx("div",{className:"value-item-stats-essential-programs-gamble__number",children:(m=e==null?void 0:e.loyalty_program)==null?void 0:m.count_levels}),s.jsx("div",{className:"value-item-stats-essential-programs-gamble__content",children:(_=e==null?void 0:e.loyalty_program)==null?void 0:_.loyalty_level_description})]})]})})]}),s.jsx("div",{className:"item-essential-programs-gamble__features features-essential-programs-gamble",children:(u=e==null?void 0:e.loyalty_program)==null?void 0:u.loyalty_keypoint.map(i=>s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx(c,{className:"features-essential-programs-gamble__icon",rel:"nofollow noopener",to:`/casino/${l(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,children:s.jsx(f,{img:(i==null?void 0:i.image)||"",height:"100%",width:"100%",size:"medium"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:i==null?void 0:i.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:i==null?void 0:i.text_2})]})]}))})]}),s.jsxs("div",{className:"item-essential-programs-gamble__bottom",children:[s.jsx("div",{className:"item-essential-programs-gamble__bottom-column",children:s.jsx("a",{rel:"nofollow noopener",href:e.casino_affiliate_link,"aria-label":"Put your description here.",target:"_blank",className:"item-essential-programs-gamble__btn item-essential-programs-gamble__btn_yellow",children:"Visit Casino"})}),s.jsx("div",{className:"item-essential-programs-gamble__bottom-column",children:s.jsx(c,{to:`/casino/${l(e==null?void 0:e.casino_name)}/loyalty?queruId=${(N=e==null?void 0:e.loyalty_program)==null?void 0:N.id}`,"aria-label":"Put your description here.",className:"item-essential-programs-gamble__btn",children:"Read More"})})]})]})})})})})})})]})})]})};export{A as H,z as a};
