import{u as z,h as A,r as t,d as M,j as e,i as I,W as T,k as W,p as L,m as B,q as j,L as b,s as N,b as w,l as G,t as O,N as R,c as V,v as q,w as D,$ as U}from"./index-C0sDxxVN.js";import{F as Y}from"./FilterHeaderList-CZEU5uCS.js";import{rankCasinosSeeAll as H,WithdrawalSeeAllCasinos as Q}from"./index-8rCOkLYI.js";import{P as J}from"./PaginationPage-BsqofbQZ.js";import{l as k,v as K}from"./v4-EMhTGt9X.js";import{S as X}from"./SubscribeForm-DXd0cWZr.js";import"./BreadCrumb-BqRkr8cD.js";const C=15,Z=({filtersDataLicenses:o,casinoFiltersLicenses:l,itemLicenses:i})=>{const[a,m]=t.useState(void 0);return t.useEffect(()=>{const r=setTimeout(()=>{const d=(o==null?void 0:o.find(c=>(c==null?void 0:c.id)===(l==null?void 0:l[0])))||(i==null?void 0:i[0]);m(d)},1e3);return()=>clearTimeout(r)},[o,l,i]),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:e.jsxs(e.Fragment,{children:[q(a==null?void 0:a.name,15),(a==null?void 0:a.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:a.image,alt:a.name||""})})]})})},ee=k.debounce((o,l)=>l(o),1e3),ae=k.debounce((o,l,i,a)=>{a||i(!0),l(o).finally(()=>i(!1))}),se=async(o,l)=>{const i=D(o);return(await U.post(`filter/casinos/?page=${l}&page_size=${C}`,i)).data};function de(){var y;document.title="Filter Casino";const{initializeAdaptiveBehavior:o,isSidebarActive:l}=z(),{data:i,casinoFilters:a,setCasinoFilters:m}=A(),[r,d]=t.useState(1),[c,p]=t.useState([]),[_,h]=t.useState(window.innerWidth<900),[g,u]=t.useState(!0),{data:s,isLoading:S,refetch:f}=M(["filter/casinos",a,r],()=>se(a,r),{keepPreviousData:!0,enabled:!1});t.useEffect(()=>{ae(a,f,u,_)},[r,f,d]),t.useEffect(()=>{d(1),ee(a,f),_?p([]):window.scrollTo({behavior:"smooth",top:0})},[a,f]),t.useEffect(()=>{s!=null&&s.results&&_&&p(n=>[...n,...s==null?void 0:s.results]),!c.length&&(s!=null&&s.results)&&p(s==null?void 0:s.results)},[s]),t.useEffect(()=>{o()},[S,l]),t.useEffect(()=>{const n=()=>h(window.innerWidth<900);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const P=_?c:s==null?void 0:s.results,E=()=>{m(j)},$=n=>{if(n.includes("withdrawal_limits")){const x=n.replace("withdrawal_limits.","");m(v=>({...v,withdrawal_limits:{...v.withdrawal_limits,[x]:x==="unlimited"?void 0:null}}))}const F=j[n];m(x=>({...x,[n]:F}))};return g?e.jsx(I,{}):e.jsx(T,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(W,{}),e.jsx(Y,{initList:a,clearAll:E,clearOne:n=>$(n)}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:L,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),e.jsx(oe,{displayedData:P,filtersDataLicenses:(y=i==null?void 0:i.casino)==null?void 0:y.licenses,casinoFiltersLicenses:a==null?void 0:a.licenses}),e.jsx(J,{countElem:s==null?void 0:s.count,currentPage:r,countPageElem:C,setCurrentPage:n=>{d(n),_||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(B,{}),e.jsx(X,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}const oe=t.memo(({displayedData:o,filtersDataLicenses:l,casinoFiltersLicenses:i})=>e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(a=>{var m,r,d,c,p,_,h,g,u;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(b,{rel:"nofollow noopener","aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",to:`/casino/${N(a.casino_name)}?queryId=${a.casino_id}`,children:e.jsx(w,{img:(a==null?void 0:a.casino_image)||"",height:"100%",width:"100%"})},K())}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:a==null?void 0:a.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:G,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:a==null?void 0:a.likes})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[a==null?void 0:a.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:H(Number(a==null?void 0:a.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(r=(m=a.min_dep)==null?void 0:m[0])!=null&&r.value?`${(c=(d=a.min_dep)==null?void 0:d[0])==null?void 0:c.value} ${O()}`:"Unlimited"})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsx(Z,{filtersDataLicenses:l,casinoFiltersLicenses:i,itemLicenses:a.licenses})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${R(((p=a==null?void 0:a.withdrawal_limit)==null?void 0:p.monthly)||((_=a==null?void 0:a.withdrawal_limit)==null?void 0:_.weekly)||((h=a==null?void 0:a.withdrawal_limit)==null?void 0:h.daily)||"Unlimited")} ${Q(a==null?void 0:a.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${a.payout_speed.toLocaleLowerCase()}`,children:a==null?void 0:a.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${a!=null&&a.vpn_usage?"yes":"no"}`,children:a!=null&&a.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:V((a==null?void 0:a.casino_affiliate_link)||(a==null?void 0:a.url_casino)),onClick:s=>{s.stopPropagation(),s.preventDefault(),window.open((a==null?void 0:a.casino_affiliate_link)||(a==null?void 0:a.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),e.jsx(b,{to:`/casino/${N(a==null?void 0:a.casino_name)}?queryId=${a==null?void 0:a.casino_id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(u=(g=a==null?void 0:a.loyalty_program)==null?void 0:g.loyalty_keypoint)==null?void 0:u.slice(0,3).map(s=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(w,{img:(s==null?void 0:s.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:s==null?void 0:s.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:s==null?void 0:s.text_2})]})]})}))})})]})})]})})})}));export{de as default};
