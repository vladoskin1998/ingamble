import{u as E,n as F,r as i,f as C,j as a,h as L,W as B,C as D,o as S,L as z,k as A,s as R,l as $,w as H,q as I,t as O,$ as T}from"./index-DfQHqykV.js";import{F as W,l as b}from"./lodash-BE7mP6Qe.js";import{P as q}from"./PaginationPage-8POVEx_s.js";/* empty css              */const m=60,V=b.debounce((r,n)=>n(r),1e3),M=b.debounce((r,n,o,c)=>{c||o(!0),n(r).finally(()=>o(!1))}),G=async(r,n)=>{const o=O(r);return(await T.post(`filter/bonus/?page=${n}&page_size=${m}`,o)).data};function X(){document.title="Filter Bonus";const{initializeAdaptiveBehavior:r}=E(),{bonusFilters:n,setBonusFilters:o}=F(),[c,x]=i.useState(1),[p,j]=i.useState([]),[u,N]=i.useState(window.innerWidth<900),[v,k]=i.useState(!0),{data:e,isLoading:w,refetch:_}=C(["filter/bonus",n,c],()=>G(n,c),{keepPreviousData:!0,enabled:!1});i.useEffect(()=>{M(n,_,k,u)},[c,_,x]),i.useEffect(()=>{V(n,_),u||window.scrollTo({behavior:"smooth",top:0})},[n,_]),i.useEffect(()=>{e!=null&&e.results&&j(s=>[...s,...e==null?void 0:e.results].reduce((t,h)=>(t.some(g=>(g==null?void 0:g.bonus_id)===(h==null?void 0:h.bonus_id))||t.push(h),t),[]))},[e]),i.useEffect(()=>{r()},[w]),i.useEffect(()=>{const s=()=>N(window.innerWidth<900);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const f=u?p:e==null?void 0:e.results,P=()=>{o(H)},y=s=>{const d=I[s];o(l=>({...l,[s]:d}))};return v?a.jsx(L,{}):a.jsx(B,{children:a.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:a.jsxs("div",{className:"main-gamble__body",children:[a.jsx(D,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:"No Deposit Bonuses"},{name:"VPN Allowed Casinos"}]}),a.jsx(W,{initList:n,clearAll:P,clearOne:s=>y(s)}),a.jsx("section",{className:"see-all__main main-see-all",children:a.jsxs("div",{className:"main-see-all__container container",children:[a.jsx("div",{className:"results-filter-scenarios__top top",children:a.jsxs("div",{className:"top__title-block",children:[a.jsx("span",{className:"top__title-icon",children:a.jsx("img",{src:S,alt:"search"})}),a.jsx("h2",{className:"top__title",children:"Results"})]})}),a.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:f==null?void 0:f.map(s=>{var d;return a.jsx("div",{className:"main-see-all__column",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsx("div",{className:"casino-card__top",children:a.jsxs("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",style:{minHeight:"126px"},children:[a.jsx("div",{className:"casino-card__image see-all-custom__image-custom ",children:a.jsx(z,{img:s==null?void 0:s.bonus_image,width:"100%"})}),a.jsx("a",{href:s==null?void 0:s.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),a.jsxs("div",{className:"casino-card__content",children:[a.jsx("div",{className:"casino-card__tags tags-casino-card",children:(d=s==null?void 0:s.labels)==null?void 0:d.map((l,t)=>a.jsx("div",{className:`tags-casino-card__item ${A[t%4]}`,children:a.jsx("span",{className:"tags-casino-card__item-label",children:typeof l=="string"?l:l.name})},t))}),a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:s==null?void 0:s.casino_name}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx("img",{src:R,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx("img",{src:$,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:s==null?void 0:s.bonus_likes})]})]}),a.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:s==null?void 0:s.bonus_name})]})]})},(s==null?void 0:s.bonus_id)+(s==null?void 0:s.bonus_image))})}),a.jsx(q,{countElem:e==null?void 0:e.count,currentPage:c,countPageElem:m,setCurrentPage:s=>{x(s),u||window.scrollTo({behavior:"smooth",top:0})}})]})})]})})})}export{X as default};
