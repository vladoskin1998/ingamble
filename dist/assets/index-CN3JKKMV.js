import{u as F,o as y,r as l,f as C,j as s,h as L,W as B,C as S,p as z,x as A,q as D,L as R,m as $,s as I,l as O,v as T,$ as W}from"./index-Dd_lq-dn.js";import{F as q}from"./FilterHeaderList-vJPhqDbB.js";import{P as H}from"./PaginationPage-BDp0uZM1.js";import{l as x,v as V}from"./v4-BdJULDfw.js";/* empty css              */const p=20,M=x.debounce((i,e)=>e(i),1e3),G=x.debounce((i,e,o,n)=>{n||o(!0),e(i).finally(()=>o(!1))}),Q=async(i,e)=>{const o=T(i);return(await W.post(`filter/bonus/?page=${e}&page_size=${p}`,o)).data};function ss(){document.title="Filter Bonus";const{initializeAdaptiveBehavior:i}=F(),{bonusFilters:e,setBonusFilters:o}=y(),[n,c]=l.useState(1),[m,_]=l.useState([]),[t,j]=l.useState(window.innerWidth<900),[b,N]=l.useState(!0),{data:a,isLoading:v,refetch:u}=C(["filter/bonus",e,n],()=>Q(e,n),{keepPreviousData:!0,enabled:!1});l.useEffect(()=>{G(e,u,N,t)},[n,u,c]),l.useEffect(()=>{c(1),M(e,u),t?_([]):window.scrollTo({behavior:"smooth",top:0})},[e,u]),l.useEffect(()=>{a!=null&&a.results&&t&&_(r=>{const d=[...r,...a==null?void 0:a.results];return d==null?void 0:d.reduce((h,g)=>(h.some(E=>E.bonus_id===g.bonus_id)||h.push(g),h),[])}),!m.length&&(a!=null&&a.results)&&_(a==null?void 0:a.results)},[a]),l.useEffect(()=>{i()},[v]),l.useEffect(()=>{const r=()=>j(window.innerWidth<900);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const k=t?m:a==null?void 0:a.results,P=()=>{o(A)},w=r=>{const d=D[r];o(f=>({...f,[r]:d}))};return console.log("currentPage",n),b?s.jsx(L,{}):s.jsx(B,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(S,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:"No Deposit Bonuses"},{name:"VPN Allowed Casinos"}]}),s.jsx(q,{initList:e,clearAll:P,clearOne:r=>w(r)}),s.jsx("section",{className:"see-all__main main-see-all",children:s.jsxs("div",{className:"main-see-all__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:z,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),s.jsx(J,{displayedData:k}),s.jsx(H,{countElem:a==null?void 0:a.count,currentPage:n,countPageElem:p,setCurrentPage:r=>{c(r),t||window.scrollTo({behavior:"smooth",top:0})}})]})})]})})})}const J=l.memo(({displayedData:i})=>s.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:i==null?void 0:i.map(e=>{var o;return s.jsx("div",{className:"main-see-all__column",children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsx("div",{className:"casino-card__top",children:s.jsxs("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[s.jsx("div",{className:"casino-card__image see-all-custom__image-custom",children:s.jsx(R,{img:e==null?void 0:e.bonus_image,height:"100%",width:"100%"})},V()),s.jsx("a",{href:e==null?void 0:e.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),s.jsxs("div",{className:"casino-card__content",children:[s.jsx("div",{className:"casino-card__tags tags-casino-card",children:(o=e==null?void 0:e.labels)==null?void 0:o.map((n,c)=>s.jsx("div",{className:`tags-casino-card__item ${$[c%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof n=="string"?n:n==null?void 0:n.name})},c))}),s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:I,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e==null?void 0:e.casino_rank})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:O,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:e==null?void 0:e.bonus_likes})]})]}),s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:e==null?void 0:e.bonus_name})]})]})})})}));export{ss as default};
