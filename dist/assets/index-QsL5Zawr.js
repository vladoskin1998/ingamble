const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-B2O_FlXP.js","assets/index-C1SF7CgY.js","assets/index-tQxzX4Sf.css"])))=>i.map(i=>d[i]);
import{r as l,d as N,u as k,j as s,k as w,W as E,m as P,L as u,s as y,b as x,e as L,c as z,n as $,_ as I,$ as S}from"./index-C1SF7CgY.js";import{B as C}from"./BreadCrumb-DPQOHlS1.js";import{P as A}from"./PaginationPage-CAYBxgto.js";import{S as B}from"./SubscribeForm-DQlVJnIM.js";/* empty css              */const D=l.lazy(()=>I(()=>import("./BottomInfo-B2O_FlXP.js"),__vite__mapDeps([0,1,2]))),h=10;function H(){const[i,b]=l.useState(1),[j,n]=l.useState([]),[o,f]=l.useState(window.innerWidth<900),v=async e=>(await S.get(`get-see-all-loyalties/?page=${e}&page_size=${h}`)).data,{data:a,isLoading:m}=N(["get-see-all-loyalties",i],()=>v(i),{keepPreviousData:!0});l.useEffect(()=>{_()},[m]),l.useEffect(()=>{a!=null&&a.results&&n(e=>[...e,...a==null?void 0:a.results])},[a]),l.useEffect(()=>{if(o&&!(a!=null&&a.results)){n([]);return}if(o&&i===1&&(a!=null&&a.results)){n(a==null?void 0:a.results);return}if(o){n(e=>[...e,...(a==null?void 0:a.results)||[]]);return}},[a]),l.useEffect(()=>{const e=()=>f(window.innerWidth<900);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const{initializeAdaptiveBehavior:_}=k();l.useEffect(()=>{_()},[m]);const c=o?j:a==null?void 0:a.results;return m?s.jsx(w,{}):s.jsx(E,{children:s.jsx("main",{className:"gamble__loyaltie-programs main-gamble loyaltie-programs loyaltie-filtered__main",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(P,{}),s.jsx(C,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"Gambling Hub",link:"https://cryptogamblers.pro/bonuses"},{name:"Essential VIP Loyalty Programs",link:"#"}]}),s.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"main-loyaltie-programs__top top",children:s.jsx("div",{className:"top__row",children:s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})})})}),s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:c==null?void 0:c.map(e=>{var t,g,p;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(u,{to:`/casino/${y(e.casino_name)}?queryId=${e.casino_id}`,className:"item-loyaltie-programs__image loyalty-img-custom",children:s.jsx(x,{img:(e==null?void 0:e.casino_image)||"",width:"100%"})})}),s.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:L,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e.casino_rank})]})]}),s.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[e.loyalty_program.loyalty_keypoint.map(r=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon ",children:s.jsx(x,{img:(r==null?void 0:r.image)||"",width:"100%",size:"medium"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:r.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:r.text_2})]})]})})),s.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:s.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:s.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[s.jsxs("div",{className:"item-essential-programs-gamble__rating-number",children:[parseInt(String((t=e==null?void 0:e.loyalty_program)==null?void 0:t.loyalty_rank),10),"/10"]}),s.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[s.jsx("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[1,2,3,4,5,6,7,8,9,10].map(r=>{var d;return s.jsx("div",{className:`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${r} ${r<=(Number((d=e==null?void 0:e.loyalty_program)==null?void 0:d.loyalty_rank)||10)&&"full"}`})})}),s.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:((g=e==null?void 0:e.loyalty_program)==null?void 0:g.loyalty_level_description)||"Excellent"})]})]})})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{href:z((e==null?void 0:e.url_casino)||(e==null?void 0:e.casino_affiliate_link)),onClick:r=>{r.stopPropagation(),r.preventDefault(),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(u,{to:`/casino/${y(e.casino_name)}/loyalty?queryId=${(p=e==null?void 0:e.loyalty_program)==null?void 0:p.id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})})})}),s.jsx(A,{countElem:a==null?void 0:a.count,currentPage:i,countPageElem:h,setCurrentPage:e=>{b(e),o||window.scrollTo({behavior:"smooth",top:0})}})]})}),s.jsx($,{}),s.jsx(B,{}),s.jsx(D,{})]})})})}export{H as default};