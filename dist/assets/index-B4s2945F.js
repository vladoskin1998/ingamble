import{u as F,n as C,r as i,f as L,j as s,h as S,W as B,C as D,o as z,L as A,k as R,s as $,l as I,w as O,q as T,t as W,$ as q}from"./index-Dm7dJ94G.js";import{F as H,l as x}from"./lodash-BN5FaIOg.js";import{P as V}from"./PaginationPage-JbqyZwdg.js";/* empty css              */const j=1,M=x.debounce((r,c)=>c(r),1e3),G=x.debounce((r,c,n,l)=>{l||n(!0),c(r).finally(()=>n(!1))}),Q=async(r,c)=>{const n=W(r);return(await q.post(`filter/bonus/?page=${c}&page_size=${j}`,n)).data};function Y(){document.title="Filter Bonus";const{initializeAdaptiveBehavior:r,isSidebarActive:c}=F(),{bonusFilters:n,setBonusFilters:l}=C(),[_,g]=i.useState(1),[b,p]=i.useState([]),[t,N]=i.useState(window.innerWidth<900),[v,k]=i.useState(!0),{data:a,isLoading:w,refetch:h}=L(["filter/bonus",n,_],()=>Q(n,_),{keepPreviousData:!0,enabled:!1});i.useEffect(()=>{G(n,h,k,t)},[_,h,g]),i.useEffect(()=>{M(n,h),t||window.scrollTo({behavior:"smooth",top:0})},[n,h]),i.useEffect(()=>{a!=null&&a.results&&t&&p(e=>[...e,...a==null?void 0:a.results].reduce((o,u)=>(o.some(E=>E.bonus_id===u.bonus_id)||o.push(u),o),[])),!b.length&&(a!=null&&a.results)&&p(a==null?void 0:a.results)},[a]),i.useEffect(()=>{r()},[w,c]),i.useEffect(()=>{const e=()=>N(window.innerWidth<900);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const f=t?b:a==null?void 0:a.results,P=()=>{l(O)},y=e=>{const m=T[e];l(d=>({...d,[e]:m}))};return v?s.jsx(S,{}):s.jsx(B,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(D,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:"No Deposit Bonuses"},{name:"VPN Allowed Casinos"}]}),s.jsx(H,{initList:n,clearAll:P,clearOne:e=>y(e)}),s.jsx("section",{className:"see-all__main main-see-all",children:s.jsxs("div",{className:"main-see-all__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:z,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),s.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:f==null?void 0:f.map((e,m)=>{var d;return s.jsx("div",{className:"main-see-all__column",children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsx("div",{className:"casino-card__top",children:s.jsxs("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[s.jsx("div",{className:"casino-card__image see-all-custom__image-custom ibg",style:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:s.jsx(A,{img:e==null?void 0:e.bonus_image,width:"100%"})}),s.jsx("a",{href:e==null?void 0:e.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),s.jsxs("div",{className:"casino-card__content",children:[s.jsx("div",{className:"casino-card__tags tags-casino-card",children:(d=e==null?void 0:e.labels)==null?void 0:d.map((o,u)=>s.jsx("div",{className:`tags-casino-card__item ${R[u%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof o=="string"?o:o.name})},u))}),s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:$,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e==null?void 0:e.casino_rank})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:I,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:e==null?void 0:e.bonus_likes})]})]}),s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:e==null?void 0:e.bonus_name})]})]})},m)})}),s.jsx(V,{countElem:a==null?void 0:a.count,currentPage:_,countPageElem:j,setCurrentPage:e=>{g(e),t||window.scrollTo({behavior:"smooth",top:0})}})]})})]})})})}export{Y as default};
