const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-C7r0msvf.js","assets/index-3X6MdBuj.js","assets/index-D4hbNwZK.css","assets/CheckMoreWhatSuitsYouBest-DLhiVqDA.js","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-VuIf0exC.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css"])))=>i.map(i=>d[i]);
import{u as E,m as L,r as o,e as F,n as y,j as s,o as B,W as z,p as C,F as S,_ as p,H as $,B as A,L as f,b as D,c as I,d as R,C as O,s as T,l as W,f as V,z as H,$ as M}from"./index-3X6MdBuj.js";import{P as G}from"./PaginationPage-Bnib-NY0.js";import{l as m,v as Q}from"./v4-wPHZQlpx.js";import{s as Y}from"./search-filter-B3Q_Zd2F.js";/* empty css              */import{N as q}from"./index-CttdZkXI.js";import{B as J}from"./BreadCrumb-BivtvAR_.js";const K=o.lazy(()=>p(()=>import("./BottomInfo-C7r0msvf.js"),__vite__mapDeps([0,1,2]))),U=o.lazy(()=>p(()=>import("./CheckMoreWhatSuitsYouBest-DLhiVqDA.js"),__vite__mapDeps([3,1,2,4]))),X=o.lazy(()=>p(()=>import("./SubscribeForm-VuIf0exC.js"),__vite__mapDeps([5,1,2,6,7]))),j=window.innerWidth<900?10:20,Z=m.debounce((i,n)=>n(i),700),ss=m.debounce((i,n,e,c)=>{c||e(!0),n(i).finally(()=>e(!1))}),es=async(i,n)=>{const e=H(i);return(await M.post(`filter/bonus/?page=${n}&page_size=${j}`,e)).data};function ds(){const{isShowPlayButton:i}=E(),{bonusFilters:n,setBonusFilters:e}=L(),[c,r]=o.useState(1),[d,_]=o.useState([]),[t,b]=o.useState(window.innerWidth<900),[v,N]=o.useState(!0),{data:a,isLoading:x,refetch:u}=F(["filter/bonus",n,c],()=>es(n,c),{keepPreviousData:!0,enabled:!1});o.useEffect(()=>{ss(n,u,N,t)},[c,u,r]),o.useEffect(()=>{r(1),Z(n,u),t?_([]):window.scrollTo({behavior:"smooth",top:0})},[n,u]),o.useEffect(()=>{if(t&&!(a!=null&&a.results)){_([]);return}if(t&&c===1&&(a!=null&&a.results)){_(a==null?void 0:a.results);return}if(t){_(l=>[...l,...(a==null?void 0:a.results)||[]]);return}},[a]),o.useEffect(()=>{const l=()=>b(window.innerWidth<900);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const h=t?d:a==null?void 0:a.results,k=()=>{e($)},w=l=>{const g=A[l];e(P=>({...P,[l]:g}))};return o.useEffect(()=>{y()},[x]),v?s.jsx(B,{}):s.jsx(z,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(C,{}),s.jsx(J,{path:[{name:"Home",link:"/"},{name:"Bonuses Filters",link:"#"}]}),s.jsx(S,{initList:n,clearAll:k,clearOne:l=>w(l)}),s.jsx("section",{className:"see-all__main main-see-all",children:s.jsxs("div",{className:"main-see-all__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:Y,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),s.jsx(as,{displayedData:h,isShowPlayButton:i}),s.jsx(G,{countElem:a==null?void 0:a.count,currentPage:c,countPageElem:j,setCurrentPage:l=>{r(l),t||window.scrollTo({behavior:"smooth",top:0})}}),!(h!=null&&h.length)&&!x&&s.jsx(q,{})]})}),s.jsx(U,{}),s.jsx(X,{}),s.jsx(K,{})]})})})}const as=o.memo(({displayedData:i,isShowPlayButton:n})=>s.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:i==null?void 0:i.map(e=>{var c;return s.jsx("div",{className:"main-see-all__column",children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsx("div",{className:"casino-card__top",children:s.jsxs("div",{className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[s.jsx(f,{rel:"nofollow noopener",to:`/casino/${e.casino_slug}/bonuses/${e.bonus_slug}`,"aria-label":"Put your description here.",className:"casino-card__image see-all-custom__image-custom",children:s.jsx(D,{img:e==null?void 0:e.bonus_image,height:"100%",width:"100%"})},Q()),n&&s.jsx("a",{rel:"nofollow noopener",href:I(e==null?void 0:e.casino_name),onClick:r=>{r.stopPropagation(),r.preventDefault(),R(e==null?void 0:e.casino_affiliate_link),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),s.jsxs("div",{className:"casino-card__content",children:[s.jsx("div",{className:"casino-card__tags tags-casino-card",children:(c=e==null?void 0:e.labels)==null?void 0:c.map((r,d)=>s.jsx("div",{className:`tags-casino-card__item ${O[d%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof r=="string"?r:r==null?void 0:r.name})},d))}),s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx(f,{rel:"nofollow noopener",to:`/casino/${e.casino_slug}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:T,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e==null?void 0:e.casino_rank})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:W,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:V(e==null?void 0:e.bonus_likes)})]})]}),s.jsx(f,{rel:"nofollow noopener",to:`/casino/${e.casino_slug}/bonuses/${e.bonus_slug}`,"aria-label":"Put your description here.",className:"casino-card__name",children:e==null?void 0:e.bonus_name})]})]})})})}));export{ds as default};
