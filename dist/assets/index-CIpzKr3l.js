import{u as F,e as z,r as n,b as A,j as e,f as I,W as M,h as T,p as W,i as L,q as j,s as x,L as N,l as q,k as B,N as G,t as O,v as R,$ as V}from"./index-BrqirBCa.js";import{F as D}from"./FilterHeaderList-JKcugQOS.js";import{rankCasinosSeeAll as U,WithdrawalSeeAllCasinos as Y}from"./index-CWn-wJLH.js";import{P as H}from"./PaginationPage-CPXqx0do.js";import{l as w,v as Q}from"./v4-CSUWCKDF.js";import{S as J}from"./SubscribeForm-B9Ck0JnU.js";import"./BreadCrumb-CrqCD7XU.js";const k=15,K=({filtersDataLicenses:o,casinoFiltersLicenses:t,itemLicenses:i})=>{const[a,m]=n.useState(void 0);return n.useEffect(()=>{const r=setTimeout(()=>{const d=(o==null?void 0:o.find(c=>(c==null?void 0:c.id)===(t==null?void 0:t[0])))||(i==null?void 0:i[0]);m(d)},1e3);return()=>clearTimeout(r)},[o,t,i]),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:e.jsxs(e.Fragment,{children:[O(a==null?void 0:a.name,15),(a==null?void 0:a.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:a.image,alt:a.name||""})})]})})},X=w.debounce((o,t)=>t(o),1e3),Z=w.debounce((o,t,i,a)=>{a||i(!0),t(o).finally(()=>i(!1))}),ee=async(o,t)=>{const i=R(o);return(await V.post(`filter/casinos/?page=${t}&page_size=${k}`,i)).data};function ce(){var v;document.title="Filter Casino";const{initializeAdaptiveBehavior:o,isSidebarActive:t}=F(),{data:i,casinoFilters:a,setCasinoFilters:m}=z(),[r,d]=n.useState(1),[c,p]=n.useState([]),[_,h]=n.useState(window.innerWidth<900),[g,u]=n.useState(!0),{data:s,isLoading:C,refetch:f}=A(["filter/casinos",a,r],()=>ee(a,r),{keepPreviousData:!0,enabled:!1});n.useEffect(()=>{Z(a,f,u,_)},[r,f,d]),n.useEffect(()=>{d(1),X(a,f),_?p([]):window.scrollTo({behavior:"smooth",top:0})},[a,f]),n.useEffect(()=>{s!=null&&s.results&&_&&p(l=>[...l,...s==null?void 0:s.results]),!c.length&&(s!=null&&s.results)&&p(s==null?void 0:s.results)},[s]),n.useEffect(()=>{o()},[C,t]),n.useEffect(()=>{const l=()=>h(window.innerWidth<900);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const S=_?c:s==null?void 0:s.results,$=()=>{m(j)},E=l=>{if(l.includes("withdrawal_limits")){const y=l.replace("withdrawal_limits.","");m(b=>({...b,withdrawal_limits:{...b.withdrawal_limits,[y]:y==="unlimited"?void 0:null}}))}const P=j[l];m(y=>({...y,[l]:P}))};return g?e.jsx(I,{}):e.jsx(M,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(T,{}),e.jsx(D,{initList:a,clearAll:$,clearOne:l=>E(l)}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:W,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),e.jsx(ae,{displayedData:S,filtersDataLicenses:(v=i==null?void 0:i.casino)==null?void 0:v.licenses,casinoFiltersLicenses:a==null?void 0:a.licenses}),e.jsx(H,{countElem:s==null?void 0:s.count,currentPage:r,countPageElem:k,setCurrentPage:l=>{d(l),_||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(L,{}),e.jsx(J,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}const ae=n.memo(({displayedData:o,filtersDataLicenses:t,casinoFiltersLicenses:i})=>e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(a=>{var m,r,d,c,p,_,h,g,u;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx("a",{"aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",href:`/casino/${x(a.casino_name)}?queryId=${a.casino_id}`,children:e.jsx(N,{img:(a==null?void 0:a.casino_image)||"",height:"100%",width:"100%"})},Q())}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:a==null?void 0:a.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:q,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:a==null?void 0:a.likes})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[a==null?void 0:a.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:U(Number(a==null?void 0:a.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(r=(m=a.min_dep)==null?void 0:m[0])!=null&&r.value?`${(c=(d=a.min_dep)==null?void 0:d[0])==null?void 0:c.value} ${B()}`:"Unlimited"})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsx(K,{filtersDataLicenses:t,casinoFiltersLicenses:i,itemLicenses:a.licenses})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${G(((p=a==null?void 0:a.withdrawal_limit)==null?void 0:p.monthly)||((_=a==null?void 0:a.withdrawal_limit)==null?void 0:_.weekly)||((h=a==null?void 0:a.withdrawal_limit)==null?void 0:h.daily)||"Unlimited")} ${Y(a==null?void 0:a.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${a.payout_speed.toLocaleLowerCase()}`,children:a==null?void 0:a.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${a!=null&&a.vpn_usage?"yes":"no"}`,children:a!=null&&a.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:`/casino/${x(a.casino_name)}?queryId=${a.casino_id}`,target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"View Casino"}),e.jsx("a",{href:`/casino/${x(a.casino_name)}/loyalty?queryId=${a.loyalty_program.id}`,target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(u=(g=a==null?void 0:a.loyalty_program)==null?void 0:g.loyalty_keypoint)==null?void 0:u.slice(0,3).map(s=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(N,{img:(s==null?void 0:s.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:s==null?void 0:s.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:s==null?void 0:s.text_2})]})]})}))})})]})})]})})})}));export{ce as default};