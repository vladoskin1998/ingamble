const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-B2O_FlXP.js","assets/index-C1SF7CgY.js","assets/index-tQxzX4Sf.css"])))=>i.map(i=>d[i]);
import{u as A,i as I,r as t,d as F,j as s,k as L,W,m as R,v as T,n as M,_ as V,w as N,L as b,s as w,b as k,l as B,f as O,N as U,c as q,x as Y,y as D,$ as H}from"./index-C1SF7CgY.js";import{F as Q}from"./FilterHeaderList-Y0y48fH6.js";import{rankCasinosSeeAll as G,WithdrawalSeeAllCasinos as J}from"./index-DEjpyccz.js";import{P as K}from"./PaginationPage-CAYBxgto.js";import{l as P,v as X}from"./v4-DI5VfCuL.js";import{S as Z}from"./SubscribeForm-DQlVJnIM.js";import{N as ee}from"./index-CkTyOq2R.js";import"./BreadCrumb-DPQOHlS1.js";const se=t.lazy(()=>V(()=>import("./BottomInfo-B2O_FlXP.js"),__vite__mapDeps([0,1,2]))),S=15,ae=({filtersDataLicenses:o,casinoFiltersLicenses:i,itemLicenses:l})=>{const[e,m]=t.useState(void 0);return t.useEffect(()=>{const r=setTimeout(()=>{const _=(o==null?void 0:o.find(c=>(c==null?void 0:c.id)===(i==null?void 0:i[0])))||(l==null?void 0:l[0]);m(_)},700);return()=>clearTimeout(r)},[o,i,l]),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:s.jsxs(s.Fragment,{children:[Y(e==null?void 0:e.name,15),(e==null?void 0:e.image)&&s.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:s.jsx("img",{src:e.image,alt:e.name||""})})]})})},oe=P.debounce((o,i)=>i(o),1e3),le=P.debounce((o,i,l,e)=>{e||l(!0),i(o).finally(()=>l(!1))}),ie=async(o,i)=>{const l=D(o);return(await H.post(`filter/casinos/?page=${i}&page_size=${S}`,l)).data};function ue(){var j;const{initializeAdaptiveBehavior:o,isSidebarActive:i}=A(),{data:l,casinoFilters:e,setCasinoFilters:m}=I(),[r,_]=t.useState(1),[c,p]=t.useState([]),[d,g]=t.useState(window.innerWidth<900),[u,h]=t.useState(!0),{data:a,isLoading:E,refetch:f}=F(["filter/casinos",e,r],()=>ie(e,r),{keepPreviousData:!0,enabled:!1});t.useEffect(()=>{le(e,f,h,d)},[r,f,_]),t.useEffect(()=>{_(1),oe(e,f),d?p([]):window.scrollTo({behavior:"smooth",top:0})},[e,f]),t.useEffect(()=>{a!=null&&a.results&&d&&p(n=>[...n,...a==null?void 0:a.results]),!c.length&&(a!=null&&a.results)&&p(a==null?void 0:a.results)},[a]),t.useEffect(()=>{o()},[E,i]),t.useEffect(()=>{const n=()=>g(window.innerWidth<900);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const x=d?c:a==null?void 0:a.results,C=()=>{m(N)},$=n=>{if(n.includes("withdrawal_limits")){const y=n.replace("withdrawal_limits.","");m(v=>({...v,withdrawal_limits:{...v.withdrawal_limits,[y]:y==="unlimited"?void 0:null}}))}const z=N[n];m(y=>({...y,[n]:z}))};return u?s.jsx(L,{}):s.jsx(W,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(R,{}),s.jsx(Q,{initList:e,clearAll:C,clearOne:n=>$(n)}),s.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:T,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),x!=null&&x.length?s.jsxs(s.Fragment,{children:[s.jsx(ne,{displayedData:x,filtersDataLicenses:(j=l==null?void 0:l.casino)==null?void 0:j.licenses,casinoFiltersLicenses:e==null?void 0:e.licenses}),s.jsx(K,{countElem:a==null?void 0:a.count,currentPage:r,countPageElem:S,setCurrentPage:n=>{_(n),d||window.scrollTo({behavior:"smooth",top:0})}})]}):s.jsx(ee,{})]})}),s.jsx(M,{}),s.jsx(Z,{}),s.jsx(se,{})]})})})}const ne=t.memo(({displayedData:o,filtersDataLicenses:i,casinoFiltersLicenses:l})=>s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(e=>{var m,r,_,c,p,d,g,u,h;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(b,{rel:"nofollow noopener","aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",to:`/casino/${w(e.casino_name)}?queryId=${e.casino_id}`,children:s.jsx(k,{img:(e==null?void 0:e.casino_image)||"",height:"100%",width:"100%"})},X())}),s.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:s.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:B,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:O(e==null?void 0:e.likes)})]})]}),s.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:s.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),s.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[e==null?void 0:e.casino_rank,s.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:G(Number(e==null?void 0:e.casino_rank))})]})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(r=(m=e.min_dep)==null?void 0:m[0])!=null&&r.value?`${(c=(_=e.min_dep)==null?void 0:_[0])==null?void 0:c.value} $ USDT`:"Unlimited"})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),s.jsx(ae,{filtersDataLicenses:i,casinoFiltersLicenses:l,itemLicenses:e.licenses})]})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${U(((p=e==null?void 0:e.withdrawal_limit)==null?void 0:p.monthly)||((d=e==null?void 0:e.withdrawal_limit)==null?void 0:d.weekly)||((g=e==null?void 0:e.withdrawal_limit)==null?void 0:g.daily)||"Unlimited")} ${J(e==null?void 0:e.withdrawal_limit)}`})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),s.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${e.payout_speed.toLocaleLowerCase()}`,children:e==null?void 0:e.payout_speed})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),s.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${e!=null&&e.vpn_usage?"yes":"no"}`,children:e!=null&&e.vpn_usage?"Yes":"No"})]})]})]})}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{href:q((e==null?void 0:e.url_casino)||(e==null?void 0:e.casino_affiliate_link)),onClick:a=>{a.stopPropagation(),a.preventDefault(),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(b,{to:`/casino/${w(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:s.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(h=(u=e==null?void 0:e.loyalty_program)==null?void 0:u.loyalty_keypoint)==null?void 0:h.slice(0,3).map(a=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon",children:s.jsx(k,{img:(a==null?void 0:a.image)||"",size:"medium",width:"100%"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]})}))})})]})})]})})})}));export{ue as default};
