const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CheckMoreWhatSuitsYouBest-D7MOl2jN.js","assets/index-IJv12g3l.js","assets/index-DV5VKsj0.css","assets/index-DirvL745.js","assets/search-filter-B3Q_Zd2F.js","assets/BottomInfo-Dsl8AyHS.js"])))=>i.map(i=>d[i]);
import{u as E,i as F,r as o,d as y,j as e,k as $,W as z,l as C,_ as m,v as I,p as S,L as h,s as d,c as B,b as A,C as D,e as R,t as O,$ as T}from"./index-IJv12g3l.js";import{F as W}from"./FilterHeaderList-9KmJq5F0.js";import{L as V}from"./LazyCardImg-C0JDTlkT.js";import{l as q}from"./like-DhHpW3pT.js";import{s as M}from"./star-CJcP6Lxy.js";import{P as G}from"./PaginationPage-_F7d2dx3.js";import{l as x,v as H}from"./v4-BZfVOmz0.js";import{s as Q}from"./search-filter-B3Q_Zd2F.js";/* empty css              */import{S as Y}from"./SubscribeForm-ipeuRaA2.js";import{N as J}from"./index-COSbzELW.js";import"./index-DirvL745.js";const K=o.lazy(()=>m(()=>import("./CheckMoreWhatSuitsYouBest-D7MOl2jN.js"),__vite__mapDeps([0,1,2,3,4]))),U=o.lazy(()=>m(()=>import("./BottomInfo-Dsl8AyHS.js"),__vite__mapDeps([5,1,2]))),b=20,X=x.debounce((r,s)=>s(r),700),Z=x.debounce((r,s,c,n)=>{n||c(!0),s(r).finally(()=>c(!1))}),ss=async(r,s)=>{const c=O(r);return(await T.post(`filter/bonus/?page=${s}&page_size=${b}`,c)).data};function hs(){const{initializeAdaptiveBehavior:r}=E(),{bonusFilters:s,setBonusFilters:c}=F(),[n,t]=o.useState(1),[j,_]=o.useState([]),[l,g]=o.useState(window.innerWidth<900),[v,N]=o.useState(!0),{data:a,isLoading:k,refetch:u}=y(["filter/bonus",s,n],()=>ss(s,n),{keepPreviousData:!0,enabled:!1});o.useEffect(()=>{Z(s,u,N,l)},[n,u,t]),o.useEffect(()=>{t(1),X(s,u),l?_([]):window.scrollTo({behavior:"smooth",top:0})},[s,u]),o.useEffect(()=>{if(l&&!(a!=null&&a.results)){_([]);return}if(l&&n===1&&(a!=null&&a.results)){_(a==null?void 0:a.results);return}if(l){_(i=>[...i,...(a==null?void 0:a.results)||[]]);return}},[a]),o.useEffect(()=>{const i=()=>g(window.innerWidth<900);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const f=l?j:a==null?void 0:a.results,w=()=>{c(I)},L=i=>{const p=S[i];c(P=>({...P,[i]:p}))};return o.useEffect(()=>{r()},[k]),v?e.jsx($,{}):e.jsx(z,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(C,{}),e.jsx(W,{initList:s,clearAll:w,clearOne:i=>L(i)}),e.jsx("section",{className:"see-all__main main-see-all",children:e.jsxs("div",{className:"main-see-all__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:Q,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),f!=null&&f.length?e.jsxs(e.Fragment,{children:[e.jsx(es,{displayedData:f}),e.jsx(G,{countElem:a==null?void 0:a.count,currentPage:n,countPageElem:b,setCurrentPage:i=>{t(i),l||window.scrollTo({behavior:"smooth",top:0})}})," "]}):e.jsx(J,{})]})}),e.jsx(K,{}),e.jsx(Y,{}),e.jsx(U,{})]})})})}const es=o.memo(({displayedData:r})=>e.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:r==null?void 0:r.map(s=>{var c;return e.jsx("div",{className:"main-see-all__column",children:e.jsxs("div",{className:"slide-slider__item casino-card",children:[e.jsx("div",{className:"casino-card__top",children:e.jsxs("div",{className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[e.jsx(h,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}/bonuses/${d(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__image see-all-custom__image-custom",children:e.jsx(V,{img:s==null?void 0:s.bonus_image,height:"100%",width:"100%"})},H()),e.jsx("a",{rel:"nofollow noopener",href:B(s==null?void 0:s.casino_name),onClick:n=>{n.stopPropagation(),n.preventDefault(),A(s==null?void 0:s.casino_affiliate_link),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),e.jsxs("div",{className:"casino-card__content",children:[e.jsx("div",{className:"casino-card__tags tags-casino-card",children:(c=s==null?void 0:s.labels)==null?void 0:c.map((n,t)=>e.jsx("div",{className:`tags-casino-card__item ${D[t%4]}`,children:e.jsx("span",{className:"tags-casino-card__item-label",children:typeof n=="string"?n:n==null?void 0:n.name})},t))}),e.jsxs("div",{className:"casino-card__info info-casino-card",children:[e.jsxs("div",{className:"info-casino-card__stake",children:[e.jsx(h,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:M,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:q,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:R(s==null?void 0:s.bonus_likes)})]})]}),e.jsx(h,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}/bonuses/${d(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__name",children:s==null?void 0:s.bonus_name})]})]})})})}));export{hs as default};
