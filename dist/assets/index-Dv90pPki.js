const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-Cexk87aH.js","assets/index-syUWwQJE.js","assets/index-C8pGztM1.css","assets/CheckMoreWhatSuitsYouBest-3wTSg1ia.js","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-DHKdZZ2Y.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css"])))=>i.map(i=>d[i]);
import{u as E,n as y,r as o,e as F,j as e,o as z,W as $,p as C,F as I,_ as p,D,x as S,L as f,s as d,b as A,c as B,d as R,C as O,f as T,l as W,h as V,z as q,$ as M}from"./index-syUWwQJE.js";import{P as G}from"./PaginationPage-CiD_zmKw.js";import{l as j,v as H}from"./v4-DN6ZNkOK.js";import{s as Q}from"./search-filter-B3Q_Zd2F.js";/* empty css              */import{N as Y}from"./index-CLKi0dlP.js";const J=o.lazy(()=>p(()=>import("./BottomInfo-Cexk87aH.js"),__vite__mapDeps([0,1,2]))),K=o.lazy(()=>p(()=>import("./CheckMoreWhatSuitsYouBest-3wTSg1ia.js"),__vite__mapDeps([3,1,2,4]))),U=o.lazy(()=>p(()=>import("./SubscribeForm-DHKdZZ2Y.js"),__vite__mapDeps([5,1,2,6,7]))),g=window.innerWidth<900?10:20,X=j.debounce((r,s)=>s(r),700),Z=j.debounce((r,s,c,n)=>{n||c(!0),s(r).finally(()=>c(!1))}),ss=async(r,s)=>{const c=q(r);return(await M.post(`filter/bonus/?page=${s}&page_size=${g}`,c)).data};function ls(){const{initializeAdaptiveBehavior:r}=E(),{bonusFilters:s,setBonusFilters:c}=y(),[n,t]=o.useState(1),[m,_]=o.useState([]),[l,v]=o.useState(window.innerWidth<900),[N,k]=o.useState(!0),{data:a,isLoading:x,refetch:u}=F(["filter/bonus",s,n],()=>ss(s,n),{keepPreviousData:!0,enabled:!1});o.useEffect(()=>{Z(s,u,k,l)},[n,u,t]),o.useEffect(()=>{t(1),X(s,u),l?_([]):window.scrollTo({behavior:"smooth",top:0})},[s,u]),o.useEffect(()=>{if(l&&!(a!=null&&a.results)){_([]);return}if(l&&n===1&&(a!=null&&a.results)){_(a==null?void 0:a.results);return}if(l){_(i=>[...i,...(a==null?void 0:a.results)||[]]);return}},[a]),o.useEffect(()=>{const i=()=>v(window.innerWidth<900);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const h=l?m:a==null?void 0:a.results,w=()=>{c(D)},L=i=>{const b=S[i];c(P=>({...P,[i]:b}))};return o.useEffect(()=>{r()},[x]),N?e.jsx(z,{}):e.jsx($,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(C,{}),e.jsx(I,{initList:s,clearAll:w,clearOne:i=>L(i)}),e.jsx("section",{className:"see-all__main main-see-all",children:e.jsxs("div",{className:"main-see-all__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:Q,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),e.jsx(es,{displayedData:h}),e.jsx(G,{countElem:a==null?void 0:a.count,currentPage:n,countPageElem:g,setCurrentPage:i=>{t(i),l||window.scrollTo({behavior:"smooth",top:0})}}),!(h!=null&&h.length)&&x&&e.jsx(Y,{})]})}),e.jsx(K,{}),e.jsx(U,{}),e.jsx(J,{})]})})})}const es=o.memo(({displayedData:r})=>e.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:r==null?void 0:r.map(s=>{var c;return e.jsx("div",{className:"main-see-all__column",children:e.jsxs("div",{className:"slide-slider__item casino-card",children:[e.jsx("div",{className:"casino-card__top",children:e.jsxs("div",{className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[e.jsx(f,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}/bonuses/${d(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__image see-all-custom__image-custom",children:e.jsx(A,{img:s==null?void 0:s.bonus_image,height:"100%",width:"100%"})},H()),e.jsx("a",{rel:"nofollow noopener",href:B(s==null?void 0:s.casino_name),onClick:n=>{n.stopPropagation(),n.preventDefault(),R(s==null?void 0:s.casino_affiliate_link),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),e.jsxs("div",{className:"casino-card__content",children:[e.jsx("div",{className:"casino-card__tags tags-casino-card",children:(c=s==null?void 0:s.labels)==null?void 0:c.map((n,t)=>e.jsx("div",{className:`tags-casino-card__item ${O[t%4]}`,children:e.jsx("span",{className:"tags-casino-card__item-label",children:typeof n=="string"?n:n==null?void 0:n.name})},t))}),e.jsxs("div",{className:"casino-card__info info-casino-card",children:[e.jsxs("div",{className:"info-casino-card__stake",children:[e.jsx(f,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:T,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:W,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:V(s==null?void 0:s.bonus_likes)})]})]}),e.jsx(f,{rel:"nofollow noopener",to:`/casino/${d(s.casino_name)}/bonuses/${d(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__name",children:s==null?void 0:s.bonus_name})]})]})})})}));export{ls as default};