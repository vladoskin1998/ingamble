import{u as W,n as B,r as n,f as R,j as e,h as V,W as M,C as H,o as L,L as k,l as D,e as O,N as U,p as q,q as P,t as Q,$ as Y}from"./index-CvwISJsr.js";import{F as G,l as E}from"./lodash-CpDzNxfp.js";import{rankCasinosSeeAll as J,WithdrawalSeeAllCasinos as K}from"./index-Dtf3LBca.js";import{P as X}from"./PaginationPage-CMYeFlhn.js";import"./BreadCrumb-CPwByMKB.js";const S=15,Z=({filtersDataLicenses:o,casinoFiltersLicenses:l,itemLicenses:t})=>{const[s,g]=n.useState(void 0);return n.useEffect(()=>{const r=setTimeout(()=>{const m=(o==null?void 0:o.find(c=>(c==null?void 0:c.id)===(l==null?void 0:l[0])))||(t==null?void 0:t[0]);g(m)},1e3);return()=>clearTimeout(r)},[o,l,t]),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:e.jsxs(e.Fragment,{children:[q(s==null?void 0:s.name,15),e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:(s==null?void 0:s.image)&&e.jsx("img",{src:s.image,alt:s.name||""})})]})})},ee=E.debounce((o,l)=>l(o),1e3),ae=E.debounce((o,l,t,s)=>{s||t(!0),l(o).finally(()=>t(!1))}),se=async(o,l)=>{const t=Q(o);return(await Y.post(`filter/casinos/?page=${l}&page_size=${S}`,t)).data};function re(){document.title="Filter Casino";const{initializeAdaptiveBehavior:o,isSidebarActive:l}=W(),{data:t,casinoFilters:s,setCasinoFilters:g}=B(),[r,m]=n.useState(1),[c,f]=n.useState([]),[d,A]=n.useState(window.innerWidth<900),[F,$]=n.useState(!0),{data:i,isLoading:z,refetch:p}=R(["filter/casinos",s,r],()=>se(s,r),{keepPreviousData:!0,enabled:!1});n.useEffect(()=>{ae(s,p,$,d)},[r,p,m]),n.useEffect(()=>{m(1),ee(s,p),d?f([]):window.scrollTo({behavior:"smooth",top:0})},[s,p]),n.useEffect(()=>{i!=null&&i.results&&d&&f(a=>[...a,...i==null?void 0:i.results]),!c.length&&(i!=null&&i.results)&&f(i==null?void 0:i.results)},[i]),n.useEffect(()=>{o()},[z,l]),n.useEffect(()=>{const a=()=>A(window.innerWidth<900);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const y=d?c:i==null?void 0:i.results,I=()=>{g(P)},T=a=>{const u=P[a];g(h=>({...h,[a]:u}))};return F?e.jsx(V,{}):e.jsx(M,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(H,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:"No Deposit Bonuses"},{name:"VPN Allowed Casinos"}]}),e.jsx(G,{initList:s,clearAll:I,clearOne:a=>T(a)}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:L,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:y==null?void 0:y.map(a=>{var u,h,x,v,j,N,b,w,C;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx("div",{"aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom ",children:e.jsx(k,{img:(a==null?void 0:a.casino_image)||"",height:"100%",width:"100%"})})}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:a.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:D,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:a==null?void 0:a.likes})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[a.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:J(Number(a.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:(h=(u=a.min_dep)==null?void 0:u[0])!=null&&h.value?`${(v=(x=a.min_dep)==null?void 0:x[0])==null?void 0:v.value} ${O()}`:"Unlimited"})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsx(Z,{filtersDataLicenses:t==null?void 0:t.casino.licenses,casinoFiltersLicenses:s.licenses,itemLicenses:a.licenses})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${U(((j=a==null?void 0:a.withdrawal_limit)==null?void 0:j.monthly)||((N=a==null?void 0:a.withdrawal_limit)==null?void 0:N.weekly)||((b=a==null?void 0:a.withdrawal_limit)==null?void 0:b.daily)||"Unlimited")} ${K(a==null?void 0:a.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${a.payout_speed.toLocaleLowerCase()}`,children:a.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${a.vpn_usage?"yes":"no"}`,children:a.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:a.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"View Casino"}),e.jsx("a",{href:"/loyaltie",target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(C=(w=a==null?void 0:a.loyalty_program)==null?void 0:w.loyalty_keypoint)==null?void 0:C.slice(0,3).map(_=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(k,{img:(_==null?void 0:_.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:_.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:_.text_2})]})]})}))})})]})})]})},(a==null?void 0:a.casino_id)+(a==null?void 0:a.casino_image))})}),e.jsx(X,{countElem:i==null?void 0:i.count,currentPage:r,countPageElem:S,setCurrentPage:a=>{m(a),d||window.scrollTo({behavior:"smooth",top:0})}})]})})]})})})}export{re as default};
