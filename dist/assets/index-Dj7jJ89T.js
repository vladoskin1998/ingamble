const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-kuMfTtfa.js","assets/index-B4GMHQZC.css"])))=>i.map(i=>d[i]);
import{u as L,m as F,r,e as y,j as e,n as B,W as z,o as C,F as S,B as $,_ as p,H as D,D as A,L as f,b as I,c as O,d as R,C as T,s as W,l as V,f as H,z as M,$ as Q}from"./index-kuMfTtfa.js";import{P as G}from"./PaginationPage-DfeFNvGb.js";import{l as j,v as K}from"./v4-ZmZm4oJW.js";/* empty css              */import{N as Y}from"./index-B8-IolbM.js";import{B as q}from"./BreadCrumb-BPl36hmz.js";const J=r.lazy(()=>p(()=>import("./index-kuMfTtfa.js").then(n=>n.Q),__vite__mapDeps([0,1]))),U=r.lazy(()=>p(()=>import("./index-kuMfTtfa.js").then(n=>n.K),__vite__mapDeps([0,1]))),X=r.lazy(()=>p(()=>import("./index-kuMfTtfa.js").then(n=>n.O),__vite__mapDeps([0,1]))),m=window.innerWidth<900?10:20,Z=j.debounce((n,c)=>c(n),700),ss=j.debounce((n,c,s,l)=>{l||s(!0),c(n).finally(()=>s(!1))}),es=async(n,c)=>{const s=M(n);return(await Q.post(`filter/bonus/?page=${c}&page_size=${m}`,s)).data};function ts(){const{initializeAdaptiveBehavior:n,isShowPlayButton:c}=L(),{bonusFilters:s,setBonusFilters:l}=F(),[o,d]=r.useState(1),[b,_]=r.useState([]),[t,v]=r.useState(window.innerWidth<900),[N,k]=r.useState(!0),{data:a,isLoading:x,refetch:u}=y(["filter/bonus",s,o],()=>es(s,o),{keepPreviousData:!0,enabled:!1});r.useEffect(()=>{ss(s,u,k,t)},[o,u,d]),r.useEffect(()=>{d(1),Z(s,u),t?_([]):window.scrollTo({behavior:"smooth",top:0})},[s,u]),r.useEffect(()=>{if(t&&!(a!=null&&a.results)){_([]);return}if(t&&o===1&&(a!=null&&a.results)){_(a==null?void 0:a.results);return}if(t){_(i=>[...i,...(a==null?void 0:a.results)||[]]);return}},[a]),r.useEffect(()=>{const i=()=>v(window.innerWidth<900);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const h=t?b:a==null?void 0:a.results,w=()=>{l(D)},P=i=>{const g=A[i];l(E=>({...E,[i]:g}))};return r.useEffect(()=>{n()},[x]),N?e.jsx(B,{}):e.jsx(z,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(C,{}),e.jsx(q,{path:[{name:"Home",link:"/"},{name:"Bonuses Filters",link:"#"}]}),e.jsx(S,{initList:s,clearAll:w,clearOne:i=>P(i)}),e.jsx("section",{className:"see-all__main main-see-all",children:e.jsxs("div",{className:"main-see-all__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:$,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),e.jsx(as,{displayedData:h,isShowPlayButton:c}),e.jsx(G,{countElem:a==null?void 0:a.count,currentPage:o,countPageElem:m,setCurrentPage:i=>{d(i),t||window.scrollTo({behavior:"smooth",top:0})}}),!(h!=null&&h.length)&&!x&&e.jsx(Y,{})]})}),e.jsx(U,{}),e.jsx(X,{}),e.jsx(J,{})]})})})}const as=r.memo(({displayedData:n,isShowPlayButton:c})=>e.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:n==null?void 0:n.map(s=>{var l;return e.jsx("div",{className:"main-see-all__column",children:e.jsxs("div",{className:"slide-slider__item casino-card",children:[e.jsx("div",{className:"casino-card__top",children:e.jsxs("div",{className:"casino-card__image-block",style:{padding:"0 8px 50.432% 8px"},children:[e.jsx(f,{rel:"nofollow noopener",to:`/casino/${s.casino_slug}/bonuses/${s.bonus_slug}`,"aria-label":"Put your description here.",className:"casino-card__image see-all-custom__image-custom",children:e.jsx(I,{img:s==null?void 0:s.bonus_image,height:"100%",width:"100%"})},K()),c&&e.jsx("a",{rel:"nofollow noopener",href:O(s==null?void 0:s.casino_name),onClick:o=>{o.stopPropagation(),o.preventDefault(),R(s==null?void 0:s.casino_affiliate_link),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),e.jsxs("div",{className:"casino-card__content",children:[e.jsx("div",{className:"casino-card__tags tags-casino-card",children:(l=s==null?void 0:s.labels)==null?void 0:l.map((o,d)=>e.jsx("div",{className:`tags-casino-card__item ${T[d%4]}`,children:e.jsx("span",{className:"tags-casino-card__item-label",children:typeof o=="string"?o:o==null?void 0:o.name})},d))}),e.jsxs("div",{className:"casino-card__info info-casino-card",children:[e.jsxs("div",{className:"info-casino-card__stake",children:[e.jsx(f,{rel:"nofollow noopener",to:`/casino/${s.casino_slug}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:W,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:V,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:H(s==null?void 0:s.bonus_likes)})]})]}),e.jsx(f,{rel:"nofollow noopener",to:`/casino/${s.casino_slug}/bonuses/${s.bonus_slug}`,"aria-label":"Put your description here.",className:"casino-card__name",children:s==null?void 0:s.bonus_name})]})]})})})}));export{ts as default};
