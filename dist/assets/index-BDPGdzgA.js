const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-H4NrRvzJ.js","assets/index-yyE7bgY4.js","assets/index-DLzKuvB3.css","assets/CheckMoreWhatSuitsYouBest-yHPSWV_C.js","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-D3PjivV-.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css"])))=>i.map(i=>d[i]);
import{u as I,i as L,r as l,d as F,j as s,k as R,W as T,l as W,F as V,_ as v,q as w,L as k,s as E,e as M,N as O,c as B,b as q,t as D,v as U,$ as Y}from"./index-yyE7bgY4.js";import{L as P}from"./LazyCardImg-DCe4Qs_G.js";import{l as H}from"./like-DhHpW3pT.js";import{rankCasinosSeeAll as Q,WithdrawalSeeAllCasinos as G}from"./index-Csz0aC-m.js";import{P as J}from"./PaginationPage-BuLyAfnZ.js";import{l as S,v as K}from"./v4-BIKf28dU.js";import{s as X}from"./search-filter-B3Q_Zd2F.js";import{N as Z}from"./index-CNVka4SE.js";import"./BreadCrumb-CWUzu9Vf.js";const ee=l.lazy(()=>v(()=>import("./BottomInfo-H4NrRvzJ.js"),__vite__mapDeps([0,1,2]))),se=l.lazy(()=>v(()=>import("./CheckMoreWhatSuitsYouBest-yHPSWV_C.js"),__vite__mapDeps([3,1,2,4]))),ae=l.lazy(()=>v(()=>import("./SubscribeForm-D3PjivV-.js"),__vite__mapDeps([5,1,2,6,7]))),C=window.innerWidth<900?8:15,oe=({filtersDataLicenses:o,casinoFiltersLicenses:n,itemLicenses:i})=>{const[e,m]=l.useState(void 0);return l.useEffect(()=>{const r=setTimeout(()=>{const _=(o==null?void 0:o.find(c=>(c==null?void 0:c.id)===(n==null?void 0:n[0])))||(i==null?void 0:i[0]);m(_)},700);return()=>clearTimeout(r)},[o,n,i]),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:s.jsxs(s.Fragment,{children:[D(e==null?void 0:e.name,15),(e==null?void 0:e.image)&&s.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:s.jsx("img",{src:e.image,alt:e.name||""})})]})})},ie=S.debounce((o,n)=>n(o),1e3),le=S.debounce((o,n,i,e)=>{e||i(!0),n(o).finally(()=>i(!1))}),ne=async(o,n)=>{const i=U(o);return(await Y.post(`filter/casinos/?page=${n}&page_size=${C}`,i)).data};function fe(){var N;const{initializeAdaptiveBehavior:o,isSidebarActive:n}=I(),{data:i,casinoFilters:e,setCasinoFilters:m}=L(),[r,_]=l.useState(1),[c,p]=l.useState([]),[d,g]=l.useState(window.innerWidth<900),[u,h]=l.useState(!0),{data:a,isLoading:j,refetch:f}=F(["filter/casinos",e,r],()=>ne(e,r),{keepPreviousData:!0,enabled:!1});l.useEffect(()=>{le(e,f,h,d)},[r,f,_]),l.useEffect(()=>{_(1),ie(e,f),d?p([]):window.scrollTo({behavior:"smooth",top:0})},[e,f]),l.useEffect(()=>{a!=null&&a.results&&d&&p(t=>[...t,...a==null?void 0:a.results]),!c.length&&(a!=null&&a.results)&&p(a==null?void 0:a.results)},[a]),l.useEffect(()=>{o()},[j,n]),l.useEffect(()=>{const t=()=>g(window.innerWidth<900);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]);const x=d?c:a==null?void 0:a.results,$=()=>{m(w)},z=t=>{if(t.includes("withdrawal_limits")){const y=t.replace("withdrawal_limits.","");m(b=>({...b,withdrawal_limits:{...b.withdrawal_limits,[y]:y==="unlimited"?void 0:null}}))}const A=w[t];m(y=>({...y,[t]:A}))};return u?s.jsx(R,{}):s.jsx(T,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(W,{}),s.jsx(V,{initList:e,clearAll:$,clearOne:t=>z(t)}),s.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:X,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),s.jsx(te,{displayedData:x,filtersDataLicenses:(N=i==null?void 0:i.casino)==null?void 0:N.licenses,casinoFiltersLicenses:e==null?void 0:e.licenses}),s.jsx(J,{countElem:a==null?void 0:a.count,currentPage:r,countPageElem:C,setCurrentPage:t=>{_(t),d||window.scrollTo({behavior:"smooth",top:0})}}),!(x!=null&&x.length)&&j&&s.jsx(Z,{})]})}),s.jsx(se,{}),s.jsx(ae,{}),s.jsx(ee,{})]})})})}const te=l.memo(({displayedData:o,filtersDataLicenses:n,casinoFiltersLicenses:i})=>s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(e=>{var m,r,_,c,p,d,g,u,h;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(k,{rel:"nofollow noopener","aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",to:`/casino/${E(e.casino_name)}?queryId=${e.casino_id}`,children:s.jsx(P,{img:(e==null?void 0:e.casino_image)||"",height:"100%",width:"100%"})},K())}),s.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:s.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:H,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:M(e==null?void 0:e.likes)})]})]}),s.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:s.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),s.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[e==null?void 0:e.casino_rank,s.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:Q(Number(e==null?void 0:e.casino_rank))})]})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(r=(m=e.min_dep)==null?void 0:m[0])!=null&&r.value?`${(c=(_=e.min_dep)==null?void 0:_[0])==null?void 0:c.value} $ USDT`:"Unlimited"})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),s.jsx(oe,{filtersDataLicenses:n,casinoFiltersLicenses:i,itemLicenses:e.licenses})]})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${O(((p=e==null?void 0:e.withdrawal_limit)==null?void 0:p.monthly)||((d=e==null?void 0:e.withdrawal_limit)==null?void 0:d.weekly)||((g=e==null?void 0:e.withdrawal_limit)==null?void 0:g.daily)||"Unlimited")} ${G(e==null?void 0:e.withdrawal_limit)}`})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),s.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${e.payout_speed.toLocaleLowerCase()}`,children:e==null?void 0:e.payout_speed})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),s.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${e!=null&&e.vpn_usage?"yes":"no"}`,children:e!=null&&e.vpn_usage?"Yes":"No"})]})]})]})}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{href:B(e==null?void 0:e.casino_name),onClick:a=>{a.stopPropagation(),a.preventDefault(),q(e==null?void 0:e.casino_affiliate_link),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(k,{to:`/casino/${E(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:s.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(h=(u=e==null?void 0:e.loyalty_program)==null?void 0:u.loyalty_keypoint)==null?void 0:h.slice(0,3).map(a=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon",children:s.jsx(P,{img:(a==null?void 0:a.image)||"",size:"medium",width:"100%"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]})}))})})]})})]})})})}));export{fe as default};
