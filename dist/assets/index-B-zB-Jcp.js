const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-B2O_FlXP.js","assets/index-C1SF7CgY.js","assets/index-tQxzX4Sf.css"])))=>i.map(i=>d[i]);
import{u as F,i as z,r as t,d as $,j as s,k as C,W as S,m as I,v as A,n as D,_ as R,B as h,L as x,s as f,b as y,e as B,c as W,y as M,$ as V}from"./index-C1SF7CgY.js";import{F as O}from"./FilterHeaderList-Y0y48fH6.js";import{l as b,v as T}from"./v4-DI5VfCuL.js";import{P as q}from"./PaginationPage-CAYBxgto.js";/* empty css              */import{S as H}from"./SubscribeForm-DQlVJnIM.js";import{N as Q}from"./index-CkTyOq2R.js";const Y=t.lazy(()=>R(()=>import("./BottomInfo-B2O_FlXP.js"),__vite__mapDeps([0,1,2]))),j=15,G=b.debounce((o,e)=>e(o),700),J=b.debounce((o,e,l,i)=>{i||l(!0),e(o).finally(()=>l(!1))}),K=async(o,e)=>{const l=M(o);return(await V.post(`filter/loyalty/?page=${e}&page_size=${j}`,l)).data};function os(){const{initializeAdaptiveBehavior:o,isSidebarActive:e}=F(),{loyaltiesFilters:l,setLoyaltiesFilters:i}=z(),[c,g]=t.useState(1),[r,m]=t.useState([]),[_,v]=t.useState(window.innerWidth<900),[N,w]=t.useState(!0),{data:a,isLoading:L,refetch:d}=$(["filter/loyalty",l,c],()=>K(l,c),{keepPreviousData:!0,enabled:!1});t.useEffect(()=>{J(l,d,w,_)},[c,d,g]),t.useEffect(()=>{g(1),G(l,d),_?m([]):window.scrollTo({behavior:"smooth",top:0})},[l,d]),t.useEffect(()=>{if(_&&!(a!=null&&a.results)){m([]);return}if(_&&c===1&&(a!=null&&a.results)){m(a==null?void 0:a.results);return}if(_){m(n=>[...n,...(a==null?void 0:a.results)||[]]);return}},[a]),t.useEffect(()=>{o()},[L,e]),t.useEffect(()=>{const n=()=>v(window.innerWidth<900);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const p=_?r:a==null?void 0:a.results,k=()=>{i(h)},E=n=>{const u=h[n];i(P=>({...P,[n]:u}))};return N?s.jsx(C,{}):s.jsx(S,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered loyaltie-filtered__main",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(I,{}),s.jsx(O,{initList:l,clearAll:k,clearOne:n=>E(n)}),s.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:A,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),p!=null&&p.length?s.jsxs(s.Fragment,{children:[s.jsx(U,{displayedData:p}),s.jsx(q,{countElem:a==null?void 0:a.count,currentPage:c,countPageElem:j,setCurrentPage:n=>{g(n),_||window.scrollTo({behavior:"smooth",top:0})}})]}):s.jsx(Q,{})]})}),s.jsx(D,{}),s.jsx(H,{}),s.jsx(Y,{})]})})})}const U=t.memo(({displayedData:o})=>s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(e=>{var l,i,c,g;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(x,{rel:"nofollow noopener",to:`/casino/${f(e.casino_name)}?queryId=${e.casino_id}`,className:"item-loyaltie-programs__image loyalty-img-custom ",children:s.jsx(y,{img:(e==null?void 0:e.casino_image)||"",height:"100%",width:"100%"})},T())}),s.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:B,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e==null?void 0:e.casino_rank})]})]}),s.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[(l=e==null?void 0:e.loyalty_program)==null?void 0:l.loyalty_keypoint.map(r=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon",children:s.jsx(y,{img:(r==null?void 0:r.image)||"",width:"100%",size:"medium"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:r==null?void 0:r.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:r==null?void 0:r.text_2})]})]})})),s.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:s.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:s.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[s.jsxs("div",{className:"item-essential-programs-gamble__rating-number",children:[((i=e==null?void 0:e.loyalty_program)==null?void 0:i.count_levels)||10,"/10"]}),s.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[s.jsx("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[1,2,3,4,5,6,7,8,9,10].map(r=>{var m;return s.jsx("div",{className:`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${r} ${r<=(((m=e==null?void 0:e.loyalty_program)==null?void 0:m.count_levels)||10)&&"full"}`})})}),s.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:((c=e==null?void 0:e.loyalty_program)==null?void 0:c.loyalty_level_description)||"Excellent"})]})]})})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{target:"_blank",href:W((e==null?void 0:e.url_casino)||(e==null?void 0:e.casino_affiliate_link)),onClick:r=>{r.stopPropagation(),r.preventDefault(),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(x,{to:`/casino/${f(e.casino_name)}/loyalty?queryId=${(g=e==null?void 0:e.loyalty_program)==null?void 0:g.id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})})})}));export{os as default};
