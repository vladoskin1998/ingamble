const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-B2O_FlXP.js","assets/index-C1SF7CgY.js","assets/index-tQxzX4Sf.css"])))=>i.map(i=>d[i]);
import{r as o,u as L,h as E,d as S,j as a,k as z,W as B,m as A,L as p,s as t,b as C,c as I,C as D,e as q,l as R,f as W,n as T,_ as F,$ as M}from"./index-C1SF7CgY.js";import{B as O}from"./BreadCrumb-DPQOHlS1.js";import{P as Q}from"./PaginationPage-CAYBxgto.js";/* empty css              */import{S as G}from"./SubscribeForm-DQlVJnIM.js";import{N as H}from"./index-CkTyOq2R.js";const V=o.lazy(()=>F(()=>import("./BottomInfo-B2O_FlXP.js"),__vite__mapDeps([0,1,2]))),Y=async(c,d)=>(await M.get(`get-see-all-bonus-category${d?"/"+d:""}/?page=${c}&page_size=${v}`)).data,v=60;function es(){var g,j,f;const[c,d]=o.useState(1),[x,u]=o.useState([]),[i,k]=o.useState(window.innerWidth<900),{initializeAdaptiveBehavior:w,category:h}=L(),[y]=E(),m=y.get("queryId"),[l,P]=o.useState(m||"");o.useEffect(()=>{P(m||""),window.scrollTo(0,0)},[m]);const{data:e,isLoading:b}=S(["get-see-all-bonus-category/",c,l],()=>Y(c,l),{keepPreviousData:!0});o.useEffect(()=>{var s,n,_;if(i&&!((s=e==null?void 0:e.bonuses)!=null&&s.results)){u([]);return}if(i&&c===1&&((n=e==null?void 0:e.bonuses)!=null&&n.results)){u((_=e==null?void 0:e.bonuses)==null?void 0:_.results);return}if(i){u($=>{var N;return[...$,...((N=e==null?void 0:e.bonuses)==null?void 0:N.results)||[]]});return}},[e,l]),o.useEffect(()=>{const s=()=>k(window.innerWidth<900);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const r=i?x:(g=e==null?void 0:e.bonuses)==null?void 0:g.results;return console.log("displayedData",r),o.useEffect(()=>{w()},[b]),b?a.jsx(z,{}):a.jsx(B,{children:a.jsx("main",{className:"gamble__see-all main-gamble see-all",children:a.jsxs("div",{className:"main-gamble__body",children:[a.jsx(A,{}),a.jsx(O,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"All Bonuses",link:"https://cryptogamblers.pro/bonuses"}]}),a.jsx("section",{className:"see-all__main main-see-all",children:a.jsxs("div",{className:"main-see-all__container container",children:[a.jsx("div",{className:"main-see-all__top top",children:a.jsx("div",{className:"top__row",children:a.jsx("div",{className:"top__column",children:a.jsx("div",{className:"top__title-block",children:a.jsx("h2",{className:"top__title",children:l?(e==null?void 0:e.category_name)||((j=h==null?void 0:h.find(s=>(s==null?void 0:s.bonus_id)===Number(l)))==null?void 0:j.name):"All Bonuses"})})})})}),r!=null&&r.length?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:r==null?void 0:r.map(s=>a.jsx("div",{className:"main-see-all__column",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsx("div",{className:"casino-card__top",children:a.jsxs("div",{style:{padding:"0 8px 50.432% 8px"},className:"casino-card__image-block",children:[a.jsx(p,{to:`/casino/${t(s.casino_name)}/bonuses/${t(s.bonus_name)}?queryId=${s.bonus_id}`,className:"casino-card__image see-all-custom__image-custom",children:a.jsx(C,{img:s.bonus_image,width:"100%"})}),a.jsx("a",{href:I((s==null?void 0:s.url_casino)||(s==null?void 0:s.casino_affiliate_link)),onClick:n=>{n.stopPropagation(),n.preventDefault(),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),a.jsxs("div",{className:"casino-card__content",children:[a.jsx("div",{className:"casino-card__tags tags-casino-card",children:s.labels.map((n,_)=>a.jsx("div",{className:`tags-casino-card__item ${D[_%4]}`,children:a.jsx("span",{className:"tags-casino-card__item-label",children:typeof n=="string"?n:n.name})}))}),a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx(p,{to:`/casino/${t(s==null?void 0:s.casino_name)}?queryId=${s==null?void 0:s.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:s==null?void 0:s.casino_name}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx("img",{src:q,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:s.casino_rank})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx("img",{src:R,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:W(s==null?void 0:s.bonus_likes)})]})]}),a.jsx(p,{to:`/casino/${t(s.casino_name)}/bonuses/${t(s.bonus_name)}?queryId=${s.bonus_id}`,className:"casino-card__name",children:s.bonus_name})]})]})}))}),a.jsx(Q,{countElem:(f=e==null?void 0:e.bonuses)==null?void 0:f.count,currentPage:c,countPageElem:v,setCurrentPage:s=>{d(s),i||window.scrollTo({behavior:"smooth",top:0})}})]}):a.jsx(H,{})]})}),a.jsx(T,{}),a.jsx(G,{}),a.jsx(V,{})]})})})}export{es as default};