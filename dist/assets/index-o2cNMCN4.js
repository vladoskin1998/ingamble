const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CS4tY0I3.js","assets/index-arX01Q-X.css"])))=>i.map(i=>d[i]);
import{r as l,e as v,u as N,j as s,n as E,W as w,o as P,L as u,b as y,s as k,c as L,d as z,_,$ as I}from"./index-CS4tY0I3.js";import{B as A}from"./BreadCrumb-CZjwAgig.js";import{P as C}from"./PaginationPage-vv_ElyFh.js";/* empty css              */const D=l.lazy(()=>_(()=>import("./index-CS4tY0I3.js").then(i=>i.K),__vite__mapDeps([0,1]))),S=l.lazy(()=>_(()=>import("./index-CS4tY0I3.js").then(i=>i.J),__vite__mapDeps([0,1]))),$=l.lazy(()=>_(()=>import("./index-CS4tY0I3.js").then(i=>i.O),__vite__mapDeps([0,1]))),h=window.innerWidth<900?8:15;function T(){const[i,x]=l.useState(1),[j,t]=l.useState([]),[o,b]=l.useState(window.innerWidth<900),f=async e=>(await I.get(`get-see-all-loyalties/?page=${e}&page_size=${h}`)).data,{data:a,isLoading:m}=v(["get-see-all-loyalties",i],()=>f(i),{keepPreviousData:!0,cacheTime:1e3*60*5});l.useEffect(()=>{g()},[m]),l.useEffect(()=>{a!=null&&a.results&&t(e=>[...e,...a==null?void 0:a.results])},[a]),l.useEffect(()=>{if(o&&!(a!=null&&a.results)){t([]);return}if(o&&i===1&&(a!=null&&a.results)){t(a==null?void 0:a.results);return}if(o){t(e=>[...e,...(a==null?void 0:a.results)||[]]);return}},[a]),l.useEffect(()=>{const e=()=>b(window.innerWidth<900);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const{initializeAdaptiveBehavior:g}=N();l.useEffect(()=>{g()},[m]);const c=o?j:a==null?void 0:a.results;return m?s.jsx(E,{}):s.jsx(w,{children:s.jsx("main",{className:"gamble__loyaltie-programs main-gamble loyaltie-programs loyaltie-filtered__main",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(P,{}),s.jsx(A,{path:[{name:"Home",link:"/"},{name:"Essential VIP Loyalty Programs",link:"#"}]}),s.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"main-loyaltie-programs__top top",children:s.jsx("div",{className:"top__row",children:s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})})})}),s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:c==null?void 0:c.map(e=>{var n,d;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(u,{to:`/casino/${e.casino_slug}`,className:"item-loyaltie-programs__image loyalty-img-custom",children:s.jsx(y,{img:(e==null?void 0:e.casino_image)||"",width:"100%"})})}),s.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:k,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e.casino_rank})]})]}),s.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[e.loyalty_program.loyalty_keypoint.map(r=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon ",children:s.jsx(y,{img:(r==null?void 0:r.image)||"",width:"100%",size:"medium"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:r.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:r.text_2})]})]})})),s.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:s.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:s.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[s.jsxs("div",{className:"item-essential-programs-gamble__rating-number",children:[parseInt(String((n=e==null?void 0:e.loyalty_program)==null?void 0:n.loyalty_rank),10),"/10"]}),s.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[s.jsx("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[1,2,3,4,5,6,7,8,9,10].map(r=>{var p;return s.jsx("div",{className:`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${r} ${r<=(Number((p=e==null?void 0:e.loyalty_program)==null?void 0:p.loyalty_rank)||10)&&"full"}`})})}),s.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:((d=e==null?void 0:e.loyalty_program)==null?void 0:d.loyalty_level_description)||"Excellent"})]})]})})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{href:L(e==null?void 0:e.casino_name),onClick:r=>{r.stopPropagation(),r.preventDefault(),z(e==null?void 0:e.casino_affiliate_link),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(u,{to:`/casino/${e.loyalty_program.loyalty_slug}/loyalty`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})})})}),s.jsx(C,{countElem:a==null?void 0:a.count,currentPage:i,countPageElem:h,setCurrentPage:e=>{x(e),o||window.scrollTo({behavior:"smooth",top:0})}})]})}),s.jsx(S,{}),s.jsx(D,{}),s.jsx($,{})]})})})}export{T as default};
