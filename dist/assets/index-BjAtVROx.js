import{u as z,f as A,r as n,c as I,j as e,h as M,W as T,i as W,p as L,k as q,q as N,L as x,s as v,b as w,l as B,m as G,N as O,t as R,v as V,$ as D}from"./index-C-qQnzfU.js";import{F as U}from"./FilterHeaderList-BNKEWRpu.js";import{rankCasinosSeeAll as Y,WithdrawalSeeAllCasinos as H}from"./index-CbB-rLuK.js";import{P as Q}from"./PaginationPage-cs_FBbSH.js";import{l as k,v as J}from"./v4-DjBxcEHj.js";import{S as K}from"./SubscribeForm-CFwpX6uf.js";import"./BreadCrumb-CYoBXDaP.js";const C=15,X=({filtersDataLicenses:o,casinoFiltersLicenses:t,itemLicenses:i})=>{const[s,m]=n.useState(void 0);return n.useEffect(()=>{const r=setTimeout(()=>{const d=(o==null?void 0:o.find(c=>(c==null?void 0:c.id)===(t==null?void 0:t[0])))||(i==null?void 0:i[0]);m(d)},1e3);return()=>clearTimeout(r)},[o,t,i]),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:e.jsxs(e.Fragment,{children:[R(s==null?void 0:s.name,15),(s==null?void 0:s.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:s.image,alt:s.name||""})})]})})},Z=k.debounce((o,t)=>t(o),1e3),ee=k.debounce((o,t,i,s)=>{s||i(!0),t(o).finally(()=>i(!1))}),se=async(o,t)=>{const i=V(o);return(await D.post(`filter/casinos/?page=${t}&page_size=${C}`,i)).data};function me(){var j;document.title="Filter Casino";const{initializeAdaptiveBehavior:o,isSidebarActive:t}=z(),{data:i,casinoFilters:s,setCasinoFilters:m}=A(),[r,d]=n.useState(1),[c,p]=n.useState([]),[_,h]=n.useState(window.innerWidth<900),[g,u]=n.useState(!0),{data:a,isLoading:S,refetch:f}=I(["filter/casinos",s,r],()=>se(s,r),{keepPreviousData:!0,enabled:!1});n.useEffect(()=>{ee(s,f,u,_)},[r,f,d]),n.useEffect(()=>{d(1),Z(s,f),_?p([]):window.scrollTo({behavior:"smooth",top:0})},[s,f]),n.useEffect(()=>{a!=null&&a.results&&_&&p(l=>[...l,...a==null?void 0:a.results]),!c.length&&(a!=null&&a.results)&&p(a==null?void 0:a.results)},[a]),n.useEffect(()=>{o()},[S,t]),n.useEffect(()=>{const l=()=>h(window.innerWidth<900);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const $=_?c:a==null?void 0:a.results,E=()=>{m(N)},P=l=>{if(l.includes("withdrawal_limits")){const y=l.replace("withdrawal_limits.","");m(b=>({...b,withdrawal_limits:{...b.withdrawal_limits,[y]:y==="unlimited"?void 0:null}}))}const F=N[l];m(y=>({...y,[l]:F}))};return g?e.jsx(M,{}):e.jsx(T,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(W,{}),e.jsx(U,{initList:s,clearAll:E,clearOne:l=>P(l)}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:L,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),e.jsx(ae,{displayedData:$,filtersDataLicenses:(j=i==null?void 0:i.casino)==null?void 0:j.licenses,casinoFiltersLicenses:s==null?void 0:s.licenses}),e.jsx(Q,{countElem:a==null?void 0:a.count,currentPage:r,countPageElem:C,setCurrentPage:l=>{d(l),_||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(q,{}),e.jsx(K,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}const ae=n.memo(({displayedData:o,filtersDataLicenses:t,casinoFiltersLicenses:i})=>e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(s=>{var m,r,d,c,p,_,h,g,u;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(x,{rel:"nofollow noopener","aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",to:`/casino/${v(s.casino_name)}?queryId=${s.casino_id}`,children:e.jsx(w,{img:(s==null?void 0:s.casino_image)||"",height:"100%",width:"100%"})},J())}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:B,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:s==null?void 0:s.likes})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[s==null?void 0:s.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:Y(Number(s==null?void 0:s.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(r=(m=s.min_dep)==null?void 0:m[0])!=null&&r.value?`${(c=(d=s.min_dep)==null?void 0:d[0])==null?void 0:c.value} ${G()}`:"Unlimited"})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsx(X,{filtersDataLicenses:t,casinoFiltersLicenses:i,itemLicenses:s.licenses})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${O(((p=s==null?void 0:s.withdrawal_limit)==null?void 0:p.monthly)||((_=s==null?void 0:s.withdrawal_limit)==null?void 0:_.weekly)||((h=s==null?void 0:s.withdrawal_limit)==null?void 0:h.daily)||"Unlimited")} ${H(s==null?void 0:s.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.payout_speed.toLocaleLowerCase()}`,children:s==null?void 0:s.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s!=null&&s.vpn_usage?"yes":"no"}`,children:s!=null&&s.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx(x,{rel:"nofollow noopener",to:`/casino/${v(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"View Casino"}),e.jsx(x,{rel:"nofollow noopener",to:`/casino/${v(s.casino_name)}/loyalty?queryId=${s.loyalty_program.id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(u=(g=s==null?void 0:s.loyalty_program)==null?void 0:g.loyalty_keypoint)==null?void 0:u.slice(0,3).map(a=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(w,{img:(a==null?void 0:a.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]})}))})})]})})]})})})}));export{me as default};
