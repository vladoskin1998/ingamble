const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-B2O_FlXP.js","assets/index-C1SF7CgY.js","assets/index-tQxzX4Sf.css"])))=>i.map(i=>d[i]);
import{u as P,i as y,r as i,d as E,j as e,k as F,W as $,m as C,v as z,n as S,_ as I,A as B,w as A,L as h,s as u,b as D,c as R,C as O,e as W,l as T,f as q,y as M,$ as V}from"./index-C1SF7CgY.js";import{F as G}from"./FilterHeaderList-Y0y48fH6.js";import{P as H}from"./PaginationPage-CAYBxgto.js";import{l as x,v as Q}from"./v4-DI5VfCuL.js";/* empty css              */import{S as Y}from"./SubscribeForm-DQlVJnIM.js";import{N as J}from"./index-CkTyOq2R.js";const K=i.lazy(()=>I(()=>import("./BottomInfo-B2O_FlXP.js"),__vite__mapDeps([0,1,2]))),b=20,U=x.debounce((o,s)=>s(o),700),X=x.debounce((o,s,c,n)=>{n||c(!0),s(o).finally(()=>c(!1))}),Z=async(o,s)=>{const c=M(o);return(await V.post(`filter/bonus/?page=${s}&page_size=${b}`,c)).data};function ls(){const{initializeAdaptiveBehavior:o}=P(),{bonusFilters:s,setBonusFilters:c}=y(),[n,t]=i.useState(1),[j,_]=i.useState([]),[l,g]=i.useState(window.innerWidth<900),[m,N]=i.useState(!0),{data:a,isLoading:v,refetch:f}=E(["filter/bonus",s,n],()=>Z(s,n),{keepPreviousData:!0,enabled:!1});i.useEffect(()=>{X(s,f,N,l)},[n,f,t]),i.useEffect(()=>{t(1),U(s,f),l?_([]):window.scrollTo({behavior:"smooth",top:0})},[s,f]),i.useEffect(()=>{if(l&&!(a!=null&&a.results)){_([]);return}if(l&&n===1&&(a!=null&&a.results)){_(a==null?void 0:a.results);return}if(l){_(r=>[...r,...(a==null?void 0:a.results)||[]]);return}},[a]),i.useEffect(()=>{const r=()=>g(window.innerWidth<900);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const d=l?j:a==null?void 0:a.results,k=()=>{c(B)},w=r=>{const p=A[r];c(L=>({...L,[r]:p}))};return console.log("displayedData",d),i.useEffect(()=>{o()},[v]),m?e.jsx(F,{}):e.jsx($,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(C,{}),e.jsx(G,{initList:s,clearAll:k,clearOne:r=>w(r)}),e.jsx("section",{className:"see-all__main main-see-all",children:e.jsxs("div",{className:"main-see-all__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:z,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),d!=null&&d.length?e.jsxs(e.Fragment,{children:[e.jsx(ss,{displayedData:d}),e.jsx(H,{countElem:a==null?void 0:a.count,currentPage:n,countPageElem:b,setCurrentPage:r=>{t(r),l||window.scrollTo({behavior:"smooth",top:0})}}),"     "]}):e.jsx(J,{})]})}),e.jsx(S,{}),e.jsx(Y,{}),e.jsx(K,{})]})})})}const ss=i.memo(({displayedData:o})=>e.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:o==null?void 0:o.map(s=>{var c;return e.jsx("div",{className:"main-see-all__column",children:e.jsxs("div",{className:"slide-slider__item casino-card",children:[e.jsx("div",{className:"casino-card__top",children:e.jsxs("div",{className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[e.jsx(h,{rel:"nofollow noopener",to:`/casino/${u(s.casino_name)}/bonuses/${u(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__image see-all-custom__image-custom",children:e.jsx(D,{img:s==null?void 0:s.bonus_image,height:"100%",width:"100%"})},Q()),e.jsx("a",{rel:"nofollow noopener",href:R((s==null?void 0:s.url_casino)||(s==null?void 0:s.casino_affiliate_link)),onClick:n=>{n.stopPropagation(),n.preventDefault(),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),e.jsxs("div",{className:"casino-card__content",children:[e.jsx("div",{className:"casino-card__tags tags-casino-card",children:(c=s==null?void 0:s.labels)==null?void 0:c.map((n,t)=>e.jsx("div",{className:`tags-casino-card__item ${O[t%4]}`,children:e.jsx("span",{className:"tags-casino-card__item-label",children:typeof n=="string"?n:n==null?void 0:n.name})},t))}),e.jsxs("div",{className:"casino-card__info info-casino-card",children:[e.jsxs("div",{className:"info-casino-card__stake",children:[e.jsx(h,{rel:"nofollow noopener",to:`/casino/${u(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:W,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:T,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:q(s==null?void 0:s.bonus_likes)})]})]}),e.jsx(h,{rel:"nofollow noopener",to:`/casino/${u(s.casino_name)}/bonuses/${u(s.bonus_name)}?queryId=${s.bonus_id}`,"aria-label":"Put your description here.",className:"casino-card__name",children:s==null?void 0:s.bonus_name})]})]})})})}));export{ls as default};
