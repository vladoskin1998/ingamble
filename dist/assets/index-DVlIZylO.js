import{r as n,i as P,u as y,f as w,j as s,h as B,W as E,C as S,L as A,k as C,s as D,l as L,$ as z}from"./index-DfQHqykV.js";import{B as $}from"./BreadCrumb-rIdOiXm4.js";import{P as I}from"./PaginationPage-8POVEx_s.js";/* empty css              */const g=60;function M(){document.title="See All Bonus";const[r,p]=n.useState(1),[x,b]=n.useState([]),[t,j]=n.useState(window.innerWidth<900),[d]=P(),[c,f]=n.useState(""),{initializeAdaptiveBehavior:N}=y();n.useEffect(()=>{const e=d.get("id");e&&f(e)},[d]);const v=async e=>(await z.get(`get-see-all-bonus-category/${c}/?page=${e}&page_size=${g}`)).data,{data:a,isLoading:m}=w(["get-see-all-bonus-category/",r],()=>v(r),{keepPreviousData:!0,enabled:!!c});n.useEffect(()=>{var e;(e=a==null?void 0:a.bonuses)!=null&&e.results&&b(i=>{var u;return[...i,...(u=a==null?void 0:a.bonuses)==null?void 0:u.results].reduce((o,h)=>(o.some(k=>k.bonus_id===h.bonus_id)||o.push(h),o),[])})},[a]),n.useEffect(()=>{const e=()=>j(window.innerWidth<900);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const l=t?x:a==null?void 0:a.bonuses.results;return n.useEffect(()=>{N()},[m]),m||!c?s.jsx(B,{}):s.jsx(E,{children:s.jsx("main",{className:"gamble__see-all main-gamble see-all",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(S,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:"No Deposit Bonuses"},{name:"VPN Allowed Casinos"}]}),s.jsx($,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"All Bonuses",link:"https://cryptogamblers.pro/bonuses"}]}),s.jsx("section",{className:"see-all__main main-see-all",children:s.jsxs("div",{className:"main-see-all__container container",children:[s.jsx("div",{className:"main-see-all__top top",children:s.jsx("div",{className:"top__row",children:s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:a==null?void 0:a.category_name})})})})}),s.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:l==null?void 0:l.map(e=>s.jsx("div",{className:"main-see-all__column",children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsx("div",{className:"casino-card__top",children:s.jsxs("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[s.jsx("div",{className:"casino-card__image see-all-custom__image-custom",children:s.jsx(A,{img:e.bonus_image,width:"100%"})}),s.jsx("a",{href:e.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),s.jsxs("div",{className:"casino-card__content",children:[s.jsx("div",{className:"casino-card__tags tags-casino-card",children:e.labels.map((i,_)=>s.jsx("div",{className:`tags-casino-card__item ${C[_%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof i=="string"?i:i.name})}))}),s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:D,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e.casino_rank})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:L,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:e.bonus_likes})]})]}),s.jsx("a",{href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:e.bonus_name})]})]})}))}),s.jsx(I,{countElem:a==null?void 0:a.bonuses.count,currentPage:r,countPageElem:g,setCurrentPage:e=>{p(e),t||window.scrollTo({behavior:"smooth",top:0})}})]})})]})})})}export{M as default};
