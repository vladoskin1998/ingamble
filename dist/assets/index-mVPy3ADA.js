const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SubscribeForm-DHKdZZ2Y.js","assets/index-syUWwQJE.js","assets/index-C8pGztM1.css","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css","assets/CheckMoreWhatSuitsYouBest-3wTSg1ia.js","assets/search-filter-B3Q_Zd2F.js","assets/BottomInfo-Cexk87aH.js"])))=>i.map(i=>d[i]);
import{r as l,e as E,u as k,j as s,o as w,W as P,p as L,L as y,s as h,b as x,f as z,c as I,d as $,_,$ as A}from"./index-syUWwQJE.js";import{B as C}from"./BreadCrumb-DZJ4RFLD.js";import{P as D}from"./PaginationPage-CiD_zmKw.js";/* empty css              */const S=l.lazy(()=>_(()=>import("./SubscribeForm-DHKdZZ2Y.js"),__vite__mapDeps([0,1,2,3,4]))),B=l.lazy(()=>_(()=>import("./CheckMoreWhatSuitsYouBest-3wTSg1ia.js"),__vite__mapDeps([5,1,2,6]))),R=l.lazy(()=>_(()=>import("./BottomInfo-Cexk87aH.js"),__vite__mapDeps([7,1,2]))),b=window.innerWidth<900?8:15;function O(){const[i,j]=l.useState(1),[f,n]=l.useState([]),[o,v]=l.useState(window.innerWidth<900),N=async e=>(await A.get(`get-see-all-loyalties/?page=${e}&page_size=${b}`)).data,{data:a,isLoading:c}=E(["get-see-all-loyalties",i],()=>N(i),{keepPreviousData:!0,cacheTime:1e3*60*5});l.useEffect(()=>{g()},[c]),l.useEffect(()=>{a!=null&&a.results&&n(e=>[...e,...a==null?void 0:a.results])},[a]),l.useEffect(()=>{if(o&&!(a!=null&&a.results)){n([]);return}if(o&&i===1&&(a!=null&&a.results)){n(a==null?void 0:a.results);return}if(o){n(e=>[...e,...(a==null?void 0:a.results)||[]]);return}},[a]),l.useEffect(()=>{const e=()=>v(window.innerWidth<900);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const{initializeAdaptiveBehavior:g}=k();l.useEffect(()=>{g()},[c]);const m=o?f:a==null?void 0:a.results;return c?s.jsx(w,{}):s.jsx(P,{children:s.jsx("main",{className:"gamble__loyaltie-programs main-gamble loyaltie-programs loyaltie-filtered__main",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(L,{}),s.jsx(C,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"Gambling Hub",link:"https://cryptogamblers.pro/bonuses"},{name:"Essential VIP Loyalty Programs",link:"#"}]}),s.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"main-loyaltie-programs__top top",children:s.jsx("div",{className:"top__row",children:s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})})})}),s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:m==null?void 0:m.map(e=>{var t,p,d;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(y,{to:`/casino/${h(e.casino_name)}?queryId=${e.casino_id}`,className:"item-loyaltie-programs__image loyalty-img-custom",children:s.jsx(x,{img:(e==null?void 0:e.casino_image)||"",width:"100%"})})}),s.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:z,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e.casino_rank})]})]}),s.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[e.loyalty_program.loyalty_keypoint.map(r=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon ",children:s.jsx(x,{img:(r==null?void 0:r.image)||"",width:"100%",size:"medium"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:r.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:r.text_2})]})]})})),s.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:s.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:s.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[s.jsxs("div",{className:"item-essential-programs-gamble__rating-number",children:[parseInt(String((t=e==null?void 0:e.loyalty_program)==null?void 0:t.loyalty_rank),10),"/10"]}),s.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[s.jsx("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[1,2,3,4,5,6,7,8,9,10].map(r=>{var u;return s.jsx("div",{className:`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${r} ${r<=(Number((u=e==null?void 0:e.loyalty_program)==null?void 0:u.loyalty_rank)||10)&&"full"}`})})}),s.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:((p=e==null?void 0:e.loyalty_program)==null?void 0:p.loyalty_level_description)||"Excellent"})]})]})})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{href:I(e==null?void 0:e.casino_name),onClick:r=>{r.stopPropagation(),r.preventDefault(),$(e==null?void 0:e.casino_affiliate_link),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(y,{to:`/casino/${h(e.casino_name)}/loyalty?queryId=${(d=e==null?void 0:e.loyalty_program)==null?void 0:d.id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})})})}),s.jsx(D,{countElem:a==null?void 0:a.count,currentPage:i,countPageElem:b,setCurrentPage:e=>{j(e),o||window.scrollTo({behavior:"smooth",top:0})}})]})}),s.jsx(B,{}),s.jsx(S,{}),s.jsx(R,{})]})})})}export{O as default};
