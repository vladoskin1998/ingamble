const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BottomInfo-C7r0msvf.js","assets/index-3X6MdBuj.js","assets/index-D4hbNwZK.css","assets/CheckMoreWhatSuitsYouBest-DLhiVqDA.js","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-VuIf0exC.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css"])))=>i.map(i=>d[i]);
import{u as P,m as F,r as l,e as z,n as C,j as s,o as I,W as S,p as A,F as D,_ as p,x,L as y,b as f,s as R,c as $,d as B,z as V,$ as W}from"./index-3X6MdBuj.js";import{l as b,v as O}from"./v4-wPHZQlpx.js";import{P as T}from"./PaginationPage-Bnib-NY0.js";/* empty css              */import{N as M}from"./index-CttdZkXI.js";import{s as H}from"./search-filter-B3Q_Zd2F.js";import{B as Q}from"./BreadCrumb-BivtvAR_.js";const Y=l.lazy(()=>p(()=>import("./BottomInfo-C7r0msvf.js"),__vite__mapDeps([0,1,2]))),q=l.lazy(()=>p(()=>import("./CheckMoreWhatSuitsYouBest-DLhiVqDA.js"),__vite__mapDeps([3,1,2,4]))),G=l.lazy(()=>p(()=>import("./SubscribeForm-VuIf0exC.js"),__vite__mapDeps([5,1,2,6,7]))),j=window.innerWidth<900?8:15,J=b.debounce((o,e)=>e(o),700),K=b.debounce((o,e,i,t)=>{t||i(!0),e(o).finally(()=>i(!1))}),U=async(o,e)=>{const i=V(o);return(await W.post(`filter/loyalty/?page=${e}&page_size=${j}`,i)).data};function ts(){const{isSidebarActive:o}=P(),{loyaltiesFilters:e,setLoyaltiesFilters:i}=F(),[t,m]=l.useState(1),[_,a]=l.useState([]),[c,v]=l.useState(window.innerWidth<900),[N,w]=l.useState(!0),{data:r,isLoading:u,refetch:g}=z(["filter/loyalty",e,t],()=>U(e,t),{keepPreviousData:!0,enabled:!1});l.useEffect(()=>{K(e,g,w,c)},[t,g,m]),l.useEffect(()=>{m(1),J(e,g),c?a([]):window.scrollTo({behavior:"smooth",top:0})},[e,g]),l.useEffect(()=>{if(c&&!(r!=null&&r.results)){a([]);return}if(c&&t===1&&(r!=null&&r.results)){a(r==null?void 0:r.results);return}if(c){a(n=>[...n,...(r==null?void 0:r.results)||[]]);return}},[r]),l.useEffect(()=>{C()},[u,o]),l.useEffect(()=>{const n=()=>v(window.innerWidth<900);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const d=c?_:r==null?void 0:r.results,L=()=>{i(x)},E=n=>{const h=x[n];i(k=>({...k,[n]:h}))};return N?s.jsx(I,{}):s.jsx(S,{children:s.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered loyaltie-filtered__main",children:s.jsxs("div",{className:"main-gamble__body",children:[s.jsx(A,{}),s.jsx(Q,{path:[{name:"Home",link:"/"},{name:"Loyalties Filters",link:"#"}]}),s.jsx(D,{initList:e,clearAll:L,clearOne:n=>E(n)}),s.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:s.jsxs("div",{className:"main-loyaltie-programs__container container",children:[s.jsx("div",{className:"results-filter-scenarios__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx("img",{src:H,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Results"})]})}),s.jsxs(s.Fragment,{children:[s.jsx(X,{displayedData:d}),s.jsx(T,{countElem:r==null?void 0:r.count,currentPage:t,countPageElem:j,setCurrentPage:n=>{m(n),c||window.scrollTo({behavior:"smooth",top:0})}})]}),!(d!=null&&d.length)&&!u&&s.jsx(M,{})]})}),s.jsx(q,{}),s.jsx(G,{}),s.jsx(Y,{})]})})})}const X=l.memo(({displayedData:o})=>s.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:o==null?void 0:o.map(e=>{var i,t,m,_;return s.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:s.jsxs("div",{className:"item-loyaltie-programs__row",children:[s.jsx("div",{className:"item-loyaltie-programs__main",children:s.jsx(y,{rel:"nofollow noopener",to:`/casino/${e.casino_slug}`,className:"item-loyaltie-programs__image loyalty-img-custom ",children:s.jsx(f,{img:(e==null?void 0:e.casino_image)||"",height:"100%",width:"100%"})},O())}),s.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[s.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[s.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:R,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e==null?void 0:e.casino_rank})]})]}),s.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[(i=e==null?void 0:e.loyalty_program)==null?void 0:i.loyalty_keypoint.map(a=>s.jsx("div",{className:"features-essential-programs-gamble__column",children:s.jsxs("div",{className:"features-essential-programs-gamble__item",children:[s.jsx("div",{className:"features-essential-programs-gamble__icon",children:s.jsx(f,{img:(a==null?void 0:a.image)||"",width:"100%",size:"medium"})}),s.jsxs("div",{className:"features-essential-programs-gamble__info",children:[s.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),s.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]})})),s.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:s.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:s.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[s.jsxs("div",{className:"item-essential-programs-gamble__rating-number",children:[parseInt(String((t=e==null?void 0:e.loyalty_program)==null?void 0:t.loyalty_rank),10),"/10"]}),s.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[s.jsx("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[1,2,3,4,5,6,7,8,9,10].map(a=>{var c;return s.jsx("div",{className:`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${a} ${a<=(((c=e==null?void 0:e.loyalty_program)==null?void 0:c.count_levels)||10)&&"full"}`})})}),s.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:((m=e==null?void 0:e.loyalty_program)==null?void 0:m.loyalty_level_description)||"Excellent"})]})]})})})]}),s.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:s.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[s.jsx("a",{target:"_blank",href:$(e==null?void 0:e.casino_name),onClick:a=>{a.stopPropagation(),a.preventDefault(),B(e==null?void 0:e.casino_affiliate_link),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),s.jsx(y,{to:`/casino/${(_=e==null?void 0:e.loyalty_program)==null?void 0:_.loyalty_slug}/loyalty`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})})})}));export{ts as default};
