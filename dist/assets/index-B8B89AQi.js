const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-s0N-NVsB.js","assets/index-fM_wlnor.js","assets/index-CwNydHv_.css","assets/CheckMoreWhatSuitsYouBest-B_6VeqG7.js","assets/index-CJOFpK1Q.js","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-DWFnWfh_.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-DRhmZswn.css"])))=>i.map(i=>d[i]);
import{u as E,m as y,r as o,e as F,j as e,n as z,W as $,o as C,_ as p,z as I,v as S,L as h,s as d,b as A,c as B,d as D,C as R,f as O,l as T,g as V,x as W,$ as q}from"./index-fM_wlnor.js";import{F as M}from"./FilterHeaderList-NY5v_bUf.js";import{P as G}from"./PaginationPage-EK-oxXsA.js";import{l as m,v as H}from"./v4-CSip0pDd.js";import{s as Q}from"./search-filter-B3Q_Zd2F.js";/* empty css              */import{N as Y}from"./index-DR3CmYW3.js";const J=o.lazy(()=>p(()=>import("./BottomInfo-s0N-NVsB.js"),__vite__mapDeps([0,1,2]))),K=o.lazy(()=>p(()=>import("./CheckMoreWhatSuitsYouBest-B_6VeqG7.js"),__vite__mapDeps([3,1,2,4,5]))),U=o.lazy(()=>p(()=>import("./SubscribeForm-DWFnWfh_.js"),__vite__mapDeps([6,1,2,4,7,8]))),j=20,X=m.debounce((r,s)=>s(r),700),Z=m.debounce((r,s,c,n)=>{n||c(!0),s(r).finally(()=>c(!1))}),ss=async(r,s)=>{const c=W(r);return(await q.post(`filter/bonus/?page=${s}&page_size=${j}`,c)).data};function ts(){const{initializeAdaptiveBehavior:r}=E(),{bonusFilters:s,setBonusFilters:c}=y(),[n,t]=o.useState(1),[g,_]=o.useState([]),[l,v]=o.useState(window.innerWidth<900),[N,k]=o.useState(!0),{data:a,isLoading:x,refetch:u}=F(["filter/bonus",s,n],()=>ss(s,n),{keepPreviousData:!0,enabled:!1});o.useEffect(()=>{Z(s,u,k,l)},[n,u,t]),o.useEffect(()=>{t(1),X(s,u),l?_([]):window.scrollTo({behavior:"smooth",top:0})},[s,u]),o.useEffect(()=>{if(l&&!(a!=null&&a.results)){_([]);return}if(l&&n===1&&(a!=null&&a.results)){_(a==null?void 0:a.results);return}if(l){_(i=>[...i,...(a==null?void 0:a.results)||[]]);return}},[a]),o.useEffect(()=>{const i=()=>v(window.innerWidth<900);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const f=l?g:a==null?void 0:a.results,w=()=>{c(I)},L=i=>{const b=S[i];c(P=>({...P,[i]:b}))};return o.useEffect(()=>{r()},[x]),N?e.jsx(z,{}):e.jsx($,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(C,{}),e.jsx(M,{initList:s,clearAll:w,clearOne:i=>L(i)}),e.jsx("section",{className:"see-all__main main-see-all",children:e.jsxs("div",{className:"main-see-all__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:Q,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),e.jsx(es,{displayedData:f}),e.jsx(G,{countElem:a==null?void 0:a.count,currentPage:n,countPageElem:j,setCurrentPage:i=>{t(i),l||window.scrollTo({behavior:"smooth",top:0})}}),!(f!=null&&f.length)&&x&&e.jsx(Y,{})]})}),e.jsx(K,{}),e.jsx(U,{}),e.jsx(J,{})]})})})}const es=o.memo(({displayedData:r})=>e.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:r==null?void 0:r.map(s=>{var c;return e.jsx("div",{className:"main-see-all__column",children:e.jsxs("div",{className:"slide-slider__item casino-card",children:[e.jsx("div",{className:"casino-card__top",children:e.jsxs("div",{className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[e.jsx(h,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}/bonuses/${d(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__image see-all-custom__image-custom",children:e.jsx(A,{img:s==null?void 0:s.bonus_image,height:"100%",width:"100%"})},H()),e.jsx("a",{rel:"nofollow noopener",href:B(s==null?void 0:s.casino_name),onClick:n=>{n.stopPropagation(),n.preventDefault(),D(s==null?void 0:s.casino_affiliate_link),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),e.jsxs("div",{className:"casino-card__content",children:[e.jsx("div",{className:"casino-card__tags tags-casino-card",children:(c=s==null?void 0:s.labels)==null?void 0:c.map((n,t)=>e.jsx("div",{className:`tags-casino-card__item ${R[t%4]}`,children:e.jsx("span",{className:"tags-casino-card__item-label",children:typeof n=="string"?n:n==null?void 0:n.name})},t))}),e.jsxs("div",{className:"casino-card__info info-casino-card",children:[e.jsxs("div",{className:"info-casino-card__stake",children:[e.jsx(h,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:O,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:T,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:V(s==null?void 0:s.bonus_likes)})]})]}),e.jsx(h,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}/bonuses/${d(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__name",children:s==null?void 0:s.bonus_name})]})]})})})}));export{ts as default};
