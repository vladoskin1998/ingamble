import{r as t,i as T,u as R,f as z,k as q,j as e,h as V,W as Q,C as U,L as D,l as Y,e as F,N as O,$ as B,w as j}from"./index-C__LFOZ5.js";import{B as G}from"./BreadCrumb-DO33u5eT.js";import{P as J}from"./PaginationPage-Bgsr1Kkq.js";const K=async()=>(await B.get("get-data-home-page-categories/")).data,X=async(i,y)=>(await B.get(`get-see-all-casinos-category/${y}/?page=${i}&page_size=${W}`)).data,Z=i=>i>=8?j.High:i>=5?j.Medium:j.Low,ee=i=>i.monthly?"Monthly":i.weekly?"Weekly":i.daily?"Daily":"",W=10;function oe(){var k,P;const[i,y]=t.useState(1),[_,N]=t.useState([]),[f,I]=t.useState(window.innerWidth<900),{casino_categories:b}=T(),[p,M]=t.useState(""),{initializeAdaptiveBehavior:H}=R(),{data:u}=z("get-data-home-page-categories/",K,{keepPreviousData:!0,staleTime:1/0});t.useEffect(()=>{var o;const s=(o=u==null?void 0:u.casino_categories)==null?void 0:o.find(n=>q(n.name)===b);s&&(document.title=`All Casinos | ${s==null?void 0:s.name}`,M(String(s.id)))},[b,u]);const{data:a,isLoading:w}=z(["get-see-all-loyalties",i,p],()=>X(i,p),{keepPreviousData:!0,enabled:!!p});t.useEffect(()=>{var s,o,n;(s=a==null?void 0:a.casino)!=null&&s.results&&f&&N(h=>{var d;const r=[...h,...(d=a==null?void 0:a.casino)==null?void 0:d.results];return r==null?void 0:r.reduce((c,l)=>(c.some(m=>(m==null?void 0:m.casino_id)===(l==null?void 0:l.casino_id))||c.push(l),c),[])}),!(_!=null&&_.length)&&((o=a==null?void 0:a.casino)!=null&&o.results)&&N((n=a==null?void 0:a.casino)==null?void 0:n.results)},[a]),t.useEffect(()=>{H()},[w]),t.useEffect(()=>{const s=()=>I(window.innerWidth<900);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const x=f?_:(k=a==null?void 0:a.casino)==null?void 0:k.results;return w||!p?e.jsx(V,{}):e.jsx(Q,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(U,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:"No Deposit Bonuses"},{name:"VPN Allowed Casinos"}]}),e.jsx(G,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"All Bonuses",link:"https://cryptogamblers.pro/bonuses"}]}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"main-loyaltie-programs__top top",children:e.jsx("div",{className:"top__row",children:e.jsx("div",{className:"top__column",children:e.jsx("div",{className:"top__title-block",children:e.jsx("h2",{className:"top__title",children:a==null?void 0:a.category_name})})})})}),e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:x==null?void 0:x.map(s=>{var o,n,h,r,v,d,c,l,m,C,A,E,L,S,$;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx("div",{"aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom",children:e.jsx(D,{img:(s==null?void 0:s.casino_image)||"",height:"auto",width:"100%"})})}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:Y,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:s==null?void 0:s.likes})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[s.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:Z(Number(s.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${(n=(o=s.min_dep)==null?void 0:o[0])==null?void 0:n.value} ${F()}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[(r=(h=s==null?void 0:s.licenses)==null?void 0:h[0])==null?void 0:r.name,((d=(v=s==null?void 0:s.licenses)==null?void 0:v[0])==null?void 0:d.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:((l=(c=s==null?void 0:s.licenses)==null?void 0:c[0])==null?void 0:l.image)||"",alt:(C=(m=s==null?void 0:s.licenses)==null?void 0:m[0])==null?void 0:C.country_code})})]})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${O(((A=s==null?void 0:s.withdrawal_limit)==null?void 0:A.monthly)||((E=s==null?void 0:s.withdrawal_limit)==null?void 0:E.weekly)||((L=s==null?void 0:s.withdrawal_limit)==null?void 0:L.daily)||"Unlimited")} ${ee(s==null?void 0:s.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.payout_speed.toLocaleLowerCase()}`,children:s.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.vpn_usage?"yes":"no"}`,children:s.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:s.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"View Casino"}),e.jsx("a",{href:"/loyaltie",target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:($=(S=s==null?void 0:s.loyalty_program)==null?void 0:S.loyalty_keypoint)==null?void 0:$.slice(0,3).map(g=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(D,{img:(g==null?void 0:g.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:g.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:g.text_2})]})]})}))})})]})})]})})})}),e.jsx(J,{countElem:(P=a==null?void 0:a.casino)==null?void 0:P.count,currentPage:i,countPageElem:W,setCurrentPage:s=>{y(s),f||window.scrollTo({behavior:"smooth",top:0})}})]})})]})})})}export{ee as WithdrawalSeeAllCasinos,oe as default,Z as rankCasinosSeeAll};