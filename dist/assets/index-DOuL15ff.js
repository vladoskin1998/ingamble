import{r as o,u as A,n as E,b as w,s as t,j as s,f as z,W as L,h as I,L as M,C as D,c as T,l as W,i as q,$ as k}from"./index-CVXHNqeD.js";import{B as G}from"./BreadCrumb-MPotDpKe.js";import{P as F}from"./PaginationPage-DWtYah5-.js";/* empty css              */import{S as O}from"./SubscribeForm-Dirk8Gn3.js";const R=async(i,l)=>(await k.get(`get-see-all-bonus-category${l?"/"+l:""}/?page=${i}&page_size=${y}`)).data,H=async()=>(await k.get("get-data-home-page-categories/")).data,y=60;function X(){var x,j;const[i,l]=o.useState(1),[r,b]=o.useState([]),[u,P]=o.useState(window.innerWidth<900),[g,$]=o.useState(""),{initializeAdaptiveBehavior:C}=A(),{bonus_categories:p}=E(),{data:c}=w("get-data-home-page-categories/",H,{keepPreviousData:!0,staleTime:1/0});o.useEffect(()=>{const e=c==null?void 0:c.bonus_categories.find(n=>t(n.name)===p);e?(document.title=`All Bonuses | ${e==null?void 0:e.name}`,$(String(e.id))):document.title="All Bonuses"},[p,c]);const{data:a,isLoading:f}=w(["get-see-all-bonus-category/",i,g],()=>R(i,g),{keepPreviousData:!0});o.useEffect(()=>{var e,n,m;(e=a==null?void 0:a.bonuses)!=null&&e.results&&u&&b(S=>{var v;const _=[...S,...(v=a==null?void 0:a.bonuses)==null?void 0:v.results];return _==null?void 0:_.reduce((h,N)=>(h.some(B=>B.bonus_id===N.bonus_id)||h.push(N),h),[])}),!(r!=null&&r.length)&&((n=a==null?void 0:a.bonuses)!=null&&n.results)&&b((m=a==null?void 0:a.bonuses)==null?void 0:m.results)},[a]),o.useEffect(()=>{const e=()=>P(window.innerWidth<900);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const d=u?r:(x=a==null?void 0:a.bonuses)==null?void 0:x.results;return console.log("displayedData",d),o.useEffect(()=>{C()},[f]),f?s.jsx(z,{}):s.jsx(L,{children:s.jsx("main",{className:"gamble__see-all main-gamble see-all",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(I,{}),s.jsx(G,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"All Bonuses",link:"https://cryptogamblers.pro/bonuses"}]}),s.jsx("section",{className:"see-all__main main-see-all",children:s.jsxs("div",{className:"main-see-all__container container",children:[s.jsx("div",{className:"main-see-all__top top",children:s.jsx("div",{className:"top__row",children:s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:a==null?void 0:a.category_name})})})})}),s.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:d==null?void 0:d.map(e=>s.jsx("div",{className:"main-see-all__column",children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsx("div",{className:"casino-card__top",children:s.jsxs("div",{style:{padding:"0 8px 50.432% 8px"},className:"casino-card__image-block",children:[s.jsx("a",{href:`/casino/${t(e.casino_name)}/bonuses/${t(e.bonus_name)}?queryId=${e.bonus_id}`,target:"_blank",className:"casino-card__image see-all-custom__image-custom",children:s.jsx(M,{img:e.bonus_image,width:"100%"})}),s.jsx("a",{href:(e==null?void 0:e.casino_affiliate_link)||"",target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),s.jsxs("div",{className:"casino-card__content",children:[s.jsx("div",{className:"casino-card__tags tags-casino-card",children:e.labels.map((n,m)=>s.jsx("div",{className:`tags-casino-card__item ${D[m%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof n=="string"?n:n.name})}))}),s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx("a",{href:`/casino/${t(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,"aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:T,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e.casino_rank})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:W,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:e.bonus_likes})]})]}),s.jsx("a",{href:`/casino/${t(e.casino_name)}/bonuses/${t(e.bonus_name)}?queryId=${e.bonus_id}`,target:"_blank",className:"casino-card__name",children:e.bonus_name})]})]})}))}),s.jsx(F,{countElem:(j=a==null?void 0:a.bonuses)==null?void 0:j.count,currentPage:i,countPageElem:y,setCurrentPage:e=>{l(e),u||window.scrollTo({behavior:"smooth",top:0})}})]})}),s.jsx(q,{}),s.jsx(O,{}),s.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:s.jsx("div",{className:"bottom-info-gamble__container container",children:s.jsxs("div",{className:"bottom-info-gamble__row",children:[s.jsx("div",{className:"bottom-info-gamble__column",children:s.jsxs("div",{className:"bottom-info-gamble__item",children:[s.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),s.jsxs("div",{className:"bottom-info-gamble__text",children:[s.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),s.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),s.jsx("div",{className:"bottom-info-gamble__column",children:s.jsxs("div",{className:"bottom-info-gamble__item",children:[s.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),s.jsxs("div",{className:"bottom-info-gamble__text",children:[s.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),s.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}export{X as default};
