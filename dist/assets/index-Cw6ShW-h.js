const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-B1KIbtWz.js","assets/index-BRkw4U5y.js","assets/index-D4hbNwZK.css","assets/CheckMoreWhatSuitsYouBest-CjckUmnb.js","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-Dl-UewT_.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css"])))=>i.map(i=>d[i]);
import{u as A,m as F,r as l,e as I,j as s,n as L,W as R,o as T,F as W,_ as j,z as w,L as k,b as E,l as B,f as V,N as M,c as O,d as D,B as U,y as H,$ as Y}from"./index-BRkw4U5y.js";import{rankCasinosSeeAll as Q,WithdrawalSeeAllCasinos as q}from"./index-lNtoRaix.js";import{P as G}from"./PaginationPage-B9p_2oDe.js";import{l as P,v as J}from"./v4-Btc4NPqN.js";import{s as K}from"./search-filter-B3Q_Zd2F.js";import{N as X}from"./index-DaStV-i9.js";import{B as Z}from"./BreadCrumb-DaNTQYAz.js";const ee=l.lazy(()=>j(()=>import("./BottomInfo-B1KIbtWz.js"),__vite__mapDeps([0,1,2]))),se=l.lazy(()=>j(()=>import("./CheckMoreWhatSuitsYouBest-CjckUmnb.js"),__vite__mapDeps([3,1,2,4]))),ae=l.lazy(()=>j(()=>import("./SubscribeForm-Dl-UewT_.js"),__vite__mapDeps([5,1,2,6,7]))),C=window.innerWidth<900?8:15,oe=({filtersDataLicenses:o,casinoFiltersLicenses:n,itemLicenses:i})=>{const[e,m]=l.useState(void 0);return l.useEffect(()=>{const r=setTimeout(()=>{const _=(o==null?void 0:o.find(c=>(c==null?void 0:c.id)===(n==null?void 0:n[0])))||(i==null?void 0:i[0]);m(_)},700);return()=>clearTimeout(r)},[o,n,i]),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:s.jsxs(s.Fragment,{children:[U(e==null?void 0:e.name,15),(e==null?void 0:e.image)&&s.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:s.jsx("img",{src:e.image,alt:e.name||""})})]})})},ie=P.debounce((o,n)=>n(o),1e3),le=P.debounce((o,n,i,e)=>{e||i(!0),n(o).finally(()=>i(!1))}),ne=async(o,n)=>{const i=H(o);return(await Y.post(`filter/casinos/?page=${n}&page_size=${C}`,i)).data};function ue(){var N;const{initializeAdaptiveBehavior:o,isSidebarActive:n}=A(),{data:i,casinoFilters:e,setCasinoFilters:m}=F(),[r,_]=l.useState(1),[c,p]=l.useState([]),[d,g]=l.useState(window.innerWidth<900),[u,h]=l.useState(!0),{data:a,isLoading:v,refetch:f}=I(["filter/casinos",e,r],()=>ne(e,r),{keepPreviousData:!0,enabled:!1});l.useEffect(()=>{le(e,f,h,d)},[r,f,_]),l.useEffect(()=>{_(1),ie(e,f),d?p([]):window.scrollTo({behavior:"smooth",top:0})},[e,f]),l.useEffect(()=>{a!=null&&a.results&&d&&p(t=>[...t,...a==null?void 0:a.results]),!c.length&&(a!=null&&a.results)&&p(a==null?void 0:a.results)},[a]),l.useEffect(()=>{o()},[v,n]),l.useEffect(()=>{const t=()=>g(window.innerWidth<900);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const x=d?c:a==null?void 0:a.results,S=()=>{m(w)},$=t=>{if(t.includes("withdrawal_limits")){const y=t.replace("withdrawal_limits.","");m(b=>({...b,withdrawal_limits:{...b.withdrawal_limits,[y]:y==="unlimited"?void 0:null}}))}const z=w[t];m(y=>({...y,[t]:z}))};return u?s.jsx(L,{}):s.jsx(R,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(T,{}),s.jsx(Z,{path:[{name:"Home",link:"/"},{name:"Casinos Filters",link:"#"}]}),s.jsx(W,{initList:e,clearAll:S,clearOne:t=>$(t)}),s.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:K,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),s.jsx(te,{displayedData:x,filtersDataLicenses:(N=i==null?void 0:i.casino)==null?void 0:N.licenses,casinoFiltersLicenses:e==null?void 0:e.licenses}),s.jsx(G,{countElem:a==null?void 0:a.count,currentPage:r,countPageElem:C,setCurrentPage:t=>{_(t),d||window.scrollTo({behavior:"smooth",top:0})}}),!(x!=null&&x.length)&&!v&&s.jsx(X,{})]})}),s.jsx(se,{}),s.jsx(ae,{}),s.jsx(ee,{})]})})})}const te=l.memo(({displayedData:o,filtersDataLicenses:n,casinoFiltersLicenses:i})=>s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(e=>{var m,r,_,c,p,d,g,u,h;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(k,{rel:"nofollow noopener","aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",to:`/casino/${e.casino_slug}`,children:s.jsx(E,{img:(e==null?void 0:e.casino_image)||"",height:"100%",width:"100%"})},J())}),s.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:s.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:B,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:V(e==null?void 0:e.likes)})]})]}),s.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:s.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),s.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[e==null?void 0:e.casino_rank,s.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:Q(Number(e==null?void 0:e.casino_rank))})]})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(r=(m=e.min_dep)==null?void 0:m[0])!=null&&r.value?`${(c=(_=e.min_dep)==null?void 0:_[0])==null?void 0:c.value} ${window.location.origin.includes("ingamble.com")?"$":"$ USDT"}`:"Unlimited"})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),s.jsx(oe,{filtersDataLicenses:n,casinoFiltersLicenses:i,itemLicenses:e.licenses})]})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),s.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${M(((p=e==null?void 0:e.withdrawal_limit)==null?void 0:p.monthly)||((d=e==null?void 0:e.withdrawal_limit)==null?void 0:d.weekly)||((g=e==null?void 0:e.withdrawal_limit)==null?void 0:g.daily)||"Unlimited")} ${q(e==null?void 0:e.withdrawal_limit)}`})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),s.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${e.payout_speed.toLocaleLowerCase()}`,children:e==null?void 0:e.payout_speed})]}),s.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[s.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),s.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${e!=null&&e.vpn_usage?"yes":"no"}`,children:e!=null&&e.vpn_usage?"Yes":"No"})]})]})]})}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{href:O(e==null?void 0:e.casino_name),onClick:a=>{a.stopPropagation(),a.preventDefault(),D(e==null?void 0:e.casino_affiliate_link),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(k,{to:`/casino/${e==null?void 0:e.casino_slug}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:s.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(h=(u=e==null?void 0:e.loyalty_program)==null?void 0:u.loyalty_keypoint)==null?void 0:h.slice(0,3).map(a=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon",children:s.jsx(E,{img:(a==null?void 0:a.image)||"",size:"medium",width:"100%"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]})}))})})]})})]})})})}));export{ue as default};
