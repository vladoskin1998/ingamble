const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-BwXV-Zcj.js","assets/index-Dffgb8HI.js","assets/index-BM62F8gK.css","assets/CheckMoreWhatSuitsYouBest-BukO1cio.js","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-Dd1gqgQB.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css"])))=>i.map(i=>d[i]);
import{d as F,u as L,r as t,h as I,n as T,x as R,j as e,k as W,_ as j,e as b,L as w,a as V,N as B,c as M,b as O,y as D,w as H,$ as U}from"./index-Dffgb8HI.js";import{C as Y,L as k}from"./LazyCardImg-BHFrRTiI.js";import{i as Q,m as q,W as G,F as J}from"./index-Cbjp1SC1.js";import{l as K}from"./like-DhHpW3pT.js";import{rankCasinosSeeAll as X,WithdrawalSeeAllCasinos as Z}from"./index-n4EY5k81.js";import{P as ee}from"./PaginationPage-CvQ-1GKS.js";import{l as E,v as se}from"./v4-kkqzq_M3.js";import{s as ae}from"./search-filter-B3Q_Zd2F.js";import{N as oe}from"./index-Duf-bTiN.js";import{B as ie}from"./BreadCrumb-BZ2OfNHy.js";const le=t.lazy(()=>j(()=>import("./BottomInfo-BwXV-Zcj.js"),__vite__mapDeps([0,1,2]))),ne=t.lazy(()=>j(()=>import("./CheckMoreWhatSuitsYouBest-BukO1cio.js"),__vite__mapDeps([3,1,2,4]))),te=t.lazy(()=>j(()=>import("./SubscribeForm-Dd1gqgQB.js"),__vite__mapDeps([5,1,2,6,7]))),P=window.innerWidth<900?8:15,re=({filtersDataLicenses:i,casinoFiltersLicenses:l,itemLicenses:a})=>{const[s,m]=t.useState(void 0);return t.useEffect(()=>{const _=setTimeout(()=>{const p=(i==null?void 0:i.find(c=>(c==null?void 0:c.id)===(l==null?void 0:l[0])))||(a==null?void 0:a[0]);m(p)},700);return()=>clearTimeout(_)},[i,l,a]),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:e.jsxs(e.Fragment,{children:[D(s==null?void 0:s.name,15),(s==null?void 0:s.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:s.image,alt:s.name||""})})]})})},ce=E.debounce((i,l)=>l(i),500),me=E.debounce((i,l,a,s)=>{s||a(!0),l(i).finally(()=>a(!1))}),_e=async(i,l)=>{const a=H(i);return(await U.post(`filter/casinos/?page=${l}&page_size=${P}`,a)).data};function be(){var v;const{isSidebarActive:i}=F(),{data:l,casinoFilters:a,setCasinoFilters:s}=L(),[m,_]=t.useState(1),[p,c]=t.useState([]),[d,g]=t.useState(window.innerWidth<900),[u,h]=t.useState(!0),{data:o,isLoading:n,refetch:f}=I(["filter/casinos",a,m],()=>_e(a,m),{keepPreviousData:!0,enabled:!1}),{casino_slug:C}=T();t.useEffect(()=>{me(a,f,h,d)},[m,f,_]),t.useEffect(()=>{_(1),ce(a,f),d?c([]):window.scrollTo({behavior:"smooth",top:0})},[a,f]),t.useEffect(()=>{o!=null&&o.results&&d&&c(r=>[...r,...o==null?void 0:o.results]),!p.length&&(o!=null&&o.results)&&c(o==null?void 0:o.results)},[o]),t.useEffect(()=>{Q()},[n,i]),t.useEffect(()=>{const r=()=>g(window.innerWidth<900);return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]);const x=d?p:o==null?void 0:o.results,S=()=>{s(b)},$=r=>{if(r.includes("withdrawal_limits")){const y=r.replace("withdrawal_limits.","");s(N=>({...N,withdrawal_limits:{...N.withdrawal_limits,[y]:y==="unlimited"?void 0:null}}))}const A=b[r];s(y=>({...y,[r]:A}))},z=R({slug:C,item:q(a)});return u?e.jsx(W,{}):e.jsx(G,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(Y,{}),e.jsx(ie,{path:[{name:"Home",link:"/"},{name:"Casinos Filters",link:"#"}]}),e.jsx(J,{initList:a,clearAll:S,clearOne:r=>$(r)}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:ae,alt:"search"})}),e.jsx("h2",{className:"top__title",children:`${z||"Results"} `})]})}),e.jsx(de,{displayedData:x,filtersDataLicenses:(v=l==null?void 0:l.casino)==null?void 0:v.licenses,casinoFiltersLicenses:a==null?void 0:a.licenses}),e.jsx(ee,{countElem:o==null?void 0:o.count,currentPage:m,countPageElem:P,setCurrentPage:r=>{_(r),d||window.scrollTo({behavior:"smooth",top:0})}}),!(x!=null&&x.length)&&!n&&e.jsx(oe,{})]})}),e.jsx(ne,{}),e.jsx(te,{}),e.jsx(le,{})]})})})}const de=t.memo(({displayedData:i,filtersDataLicenses:l,casinoFiltersLicenses:a})=>e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:i==null?void 0:i.map(s=>{var m,_,p,c,d,g,u,h,o;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(w,{rel:"nofollow noopener","aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",to:`/casino/${s.casino_slug}`,children:e.jsx(k,{img:(s==null?void 0:s.casino_image)||"",height:"100%",width:"100%"})},se())}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:K,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:V(s==null?void 0:s.likes)})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[s==null?void 0:s.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:X(Number(s==null?void 0:s.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(_=(m=s.min_dep)==null?void 0:m[0])!=null&&_.value?`${(c=(p=s.min_dep)==null?void 0:p[0])==null?void 0:c.value} ${window.location.origin.includes("ingamble.com")?"$":"$ USDT"}`:"Unlimited"})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsx(re,{filtersDataLicenses:l,casinoFiltersLicenses:a,itemLicenses:s.licenses})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${B(((d=s==null?void 0:s.withdrawal_limit)==null?void 0:d.monthly)||((g=s==null?void 0:s.withdrawal_limit)==null?void 0:g.weekly)||((u=s==null?void 0:s.withdrawal_limit)==null?void 0:u.daily)||"Unlimited")} ${Z(s==null?void 0:s.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.payout_speed.toLocaleLowerCase()}`,children:s==null?void 0:s.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s!=null&&s.vpn_usage?"yes":"no"}`,children:s!=null&&s.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:M(s==null?void 0:s.casino_name),onClick:n=>{n.stopPropagation(),n.preventDefault(),O(s==null?void 0:s.casino_affiliate_link),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),e.jsx(w,{to:`/casino/${s==null?void 0:s.casino_slug}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(o=(h=s==null?void 0:s.loyalty_program)==null?void 0:h.loyalty_keypoint)==null?void 0:o.slice(0,3).map(n=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(k,{img:(n==null?void 0:n.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:n==null?void 0:n.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:n==null?void 0:n.text_2})]})]})}))})})]})})]})})})}));export{be as default};
