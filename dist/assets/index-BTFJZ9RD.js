import{r as n,h as G,u as O,d as R,j as e,k as U,W as Y,m as H,L as D,s as M,b as W,l as Q,f as V,N as J,c as K,n as X,y,$ as Z}from"./index-CfVvwapp.js";import{B as ee}from"./BreadCrumb-DuX3mP64.js";import{P as se}from"./PaginationPage-Cn562gb2.js";import{S as ae}from"./SubscribeForm-B4C3q9KL.js";const oe=async(o,d)=>(await Z.get(`get-see-all-casinos-category${d?"/"+d:""}/?page=${o}&page_size=${B}`)).data,ie=o=>o>=8?y.High:o>=5?y.Medium:y.Low,ne=o=>o.monthly?"Monthly":o.weekly?"Weekly":o.daily?"Daily":"",B=10;function me(){var j,b,N;const[o,d]=n.useState(1),[x,p]=n.useState([]),[l,I]=n.useState(window.innerWidth<900),[T]=G(),g=T.get("queryId"),[t,q]=n.useState(g||"");n.useEffect(()=>{q(g||""),window.scrollTo(0,0)},[g]);const{initializeAdaptiveBehavior:F,category:h}=O(),{data:a,isLoading:v}=R(["get-see-all-loyalties",o,t],()=>oe(o,t),{keepPreviousData:!0});n.useEffect(()=>{var s,r,c;if(l&&!((s=a==null?void 0:a.casino)!=null&&s.results)){p([]);return}if(l&&o===1&&((r=a==null?void 0:a.casino)!=null&&r.results)){p((c=a==null?void 0:a.casino)==null?void 0:c.results);return}if(l){p(_=>{var m;return[..._,...((m=a==null?void 0:a.casino)==null?void 0:m.results)||[]]});return}},[a,t]),n.useEffect(()=>{F()},[v]),n.useEffect(()=>{const s=()=>I(window.innerWidth<900);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const u=l?x:(j=a==null?void 0:a.casino)==null?void 0:j.results;return v?e.jsx(U,{}):e.jsx(Y,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(H,{}),e.jsx(ee,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"All Bonuses",link:"https://cryptogamblers.pro/bonuses"}]}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"main-loyaltie-programs__top top",children:e.jsx("div",{className:"top__row",children:e.jsx("div",{className:"top__column",children:e.jsx("div",{className:"top__title-block",children:e.jsx("h2",{className:"top__title",children:t?(a==null?void 0:a.category_name)||((b=h==null?void 0:h.find(s=>(s==null?void 0:s.casino_id)===Number(t)))==null?void 0:b.name):"Casino List"})})})})}),e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:u==null?void 0:u.map(s=>{var r,c,_,f,m,w,k,C,P,L,S,$,A,E,z;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(D,{to:`/casino/${M(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom",children:e.jsx(W,{img:(s==null?void 0:s.casino_image)||"",height:"auto",width:"100%"})})}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:Q,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:V(s==null?void 0:s.likes)})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[s.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:ie(Number(s.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${(c=(r=s.min_dep)==null?void 0:r[0])==null?void 0:c.value} $ USDT`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[(f=(_=s==null?void 0:s.licenses)==null?void 0:_[0])==null?void 0:f.name,((w=(m=s==null?void 0:s.licenses)==null?void 0:m[0])==null?void 0:w.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:((C=(k=s==null?void 0:s.licenses)==null?void 0:k[0])==null?void 0:C.image)||"",alt:(L=(P=s==null?void 0:s.licenses)==null?void 0:P[0])==null?void 0:L.country_code})})]})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${J(((S=s==null?void 0:s.withdrawal_limit)==null?void 0:S.monthly)||(($=s==null?void 0:s.withdrawal_limit)==null?void 0:$.weekly)||((A=s==null?void 0:s.withdrawal_limit)==null?void 0:A.daily)||"Unlimited")} ${ne(s==null?void 0:s.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.payout_speed.toLocaleLowerCase()}`,children:s.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.vpn_usage?"yes":"no"}`,children:s.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:K((s==null?void 0:s.url_casino)||(s==null?void 0:s.casino_affiliate_link)),onClick:i=>{i.stopPropagation(),i.preventDefault(),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),e.jsx(D,{to:`/casino/${M(s==null?void 0:s.casino_name)}?queryId=${s==null?void 0:s.casino_id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(z=(E=s==null?void 0:s.loyalty_program)==null?void 0:E.loyalty_keypoint)==null?void 0:z.slice(0,3).map(i=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(W,{img:(i==null?void 0:i.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:i.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:i.text_2})]})]})}))})})]})})]})})})}),e.jsx(se,{countElem:(N=a==null?void 0:a.casino)==null?void 0:N.count,currentPage:o,countPageElem:B,setCurrentPage:s=>{d(s),l||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(X,{}),e.jsx(ae,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}export{ne as WithdrawalSeeAllCasinos,me as default,ie as rankCasinosSeeAll};