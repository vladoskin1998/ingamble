import{r as i,e as T,u as F,c as G,j as e,h as O,W as R,i as Y,L as E,s as M,b as z,l as H,q as Q,N as U,k as V,w as v,$ as J}from"./index-BHT4CY0V.js";import{B as K}from"./BreadCrumb-C64NDSUV.js";import{P as X}from"./PaginationPage-BSNhsK23.js";import{S as Z}from"./SubscribeForm-qjXfvXQi.js";const ee=async(o,g)=>(await J.get(`get-see-all-casinos-category${g?"/"+g:""}/?page=${o}&page_size=${W}`)).data,se=o=>o>=8?v.High:o>=5?v.Medium:v.Low,ae=o=>o.monthly?"Monthly":o.weekly?"Weekly":o.daily?"Daily":"",W=10;function le(){var w,k;document.title="All Casino";const[o,g]=i.useState(1),[c,j]=i.useState([]),[y,q]=i.useState(window.innerWidth<900),[B]=T(),h=B.get("queryId"),[b,D]=i.useState(h||"");i.useEffect(()=>{h&&(D(h),window.scrollTo(0,0))},[h]);const{initializeAdaptiveBehavior:I}=F(),{data:a,isLoading:N}=G(["get-see-all-loyalties",o,b],()=>ee(o,b),{keepPreviousData:!0});i.useEffect(()=>{var s,m,d;(s=a==null?void 0:a.casino)!=null&&s.results&&y&&j(u=>{var _;const t=[...u,...(_=a==null?void 0:a.casino)==null?void 0:_.results];return t==null?void 0:t.reduce((l,n)=>(l.some(r=>(r==null?void 0:r.casino_id)===(n==null?void 0:n.casino_id))||l.push(n),l),[])}),!(c!=null&&c.length)&&((m=a==null?void 0:a.casino)!=null&&m.results)&&j((d=a==null?void 0:a.casino)==null?void 0:d.results)},[a]),i.useEffect(()=>{I()},[N]),i.useEffect(()=>{const s=()=>q(window.innerWidth<900);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const f=y?c:(w=a==null?void 0:a.casino)==null?void 0:w.results;return N?e.jsx(O,{}):e.jsx(R,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(Y,{}),e.jsx(K,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"All Bonuses",link:"https://cryptogamblers.pro/bonuses"}]}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"main-loyaltie-programs__top top",children:e.jsx("div",{className:"top__row",children:e.jsx("div",{className:"top__column",children:e.jsx("div",{className:"top__title-block",children:e.jsx("h2",{className:"top__title",children:a==null?void 0:a.category_name})})})})}),e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:f==null?void 0:f.map(s=>{var m,d,u,t,x,_,l,n,r,C,P,S,$,L,A;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(E,{to:`/casino/${M(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom",children:e.jsx(z,{img:(s==null?void 0:s.casino_image)||"",height:"auto",width:"100%"})})}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:H,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:s==null?void 0:s.likes})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[s.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:se(Number(s.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${(d=(m=s.min_dep)==null?void 0:m[0])==null?void 0:d.value} ${Q()}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[(t=(u=s==null?void 0:s.licenses)==null?void 0:u[0])==null?void 0:t.name,((_=(x=s==null?void 0:s.licenses)==null?void 0:x[0])==null?void 0:_.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:((n=(l=s==null?void 0:s.licenses)==null?void 0:l[0])==null?void 0:n.image)||"",alt:(C=(r=s==null?void 0:s.licenses)==null?void 0:r[0])==null?void 0:C.country_code})})]})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${U(((P=s==null?void 0:s.withdrawal_limit)==null?void 0:P.monthly)||((S=s==null?void 0:s.withdrawal_limit)==null?void 0:S.weekly)||(($=s==null?void 0:s.withdrawal_limit)==null?void 0:$.daily)||"Unlimited")} ${ae(s==null?void 0:s.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.payout_speed.toLocaleLowerCase()}`,children:s.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.vpn_usage?"yes":"no"}`,children:s.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{target:"_blank",href:(s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),e.jsx(E,{to:`/casino/${M(s==null?void 0:s.casino_name)}?queryId=${s==null?void 0:s.casino_id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(A=(L=s==null?void 0:s.loyalty_program)==null?void 0:L.loyalty_keypoint)==null?void 0:A.slice(0,3).map(p=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(z,{img:(p==null?void 0:p.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:p.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:p.text_2})]})]})}))})})]})})]})})})}),e.jsx(X,{countElem:(k=a==null?void 0:a.casino)==null?void 0:k.count,currentPage:o,countPageElem:W,setCurrentPage:s=>{g(s),y||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(V,{}),e.jsx(Z,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}export{ae as WithdrawalSeeAllCasinos,le as default,se as rankCasinosSeeAll};
