import{r as i,f as j,u as v,j as e,h as y,W as N,C as w,L as u,s as k,b as E,$ as C}from"./index-C__LFOZ5.js";import{B as P}from"./BreadCrumb-DO33u5eT.js";import{P as L}from"./PaginationPage-Bgsr1Kkq.js";import{S as z}from"./SubscribeForm-C3ZUHt5O.js";/* empty css              */const b=10;function T(){document.title="All Essentials Loyalty";const[o,h]=i.useState(1),[l,n]=i.useState([]),[m,x]=i.useState(window.innerWidth<900),f=async a=>(await C.get(`get-see-all-loyalties/?page=${a}&page_size=${b}`)).data,{data:s,isLoading:c}=j(["get-see-all-loyalties",o],()=>f(o),{keepPreviousData:!0});i.useEffect(()=>{p()},[c]),i.useEffect(()=>{s!=null&&s.results&&n(a=>[...a,...s==null?void 0:s.results])},[s]),i.useEffect(()=>{s!=null&&s.results&&m&&n(a=>{const t=[...a,...s==null?void 0:s.results];return t==null?void 0:t.reduce((_,r)=>(_.some(d=>(d==null?void 0:d.casino_id)===(r==null?void 0:r.casino_id))||_.push(r),_),[])}),!(l!=null&&l.length)&&(s!=null&&s.results)&&n(s==null?void 0:s.results)},[s]),i.useEffect(()=>{const a=()=>x(window.innerWidth<900);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const{initializeAdaptiveBehavior:p}=v();i.useEffect(()=>{p()},[c]);const g=m?l:s==null?void 0:s.results;return c?e.jsx(y,{}):e.jsx(N,{children:e.jsx("main",{className:"gamble__loyaltie-programs main-gamble loyaltie-programs loyaltie-filtered__main",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(w,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:" No Deposit Bonuses"},{name:"  VPN Allowed Casinos"}]}),e.jsx(P,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"Gambling Hub",link:"https://cryptogamblers.pro/bonuses"},{name:"Essential VIP Loyalty Programs",link:"#"}]}),e.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"main-loyaltie-programs__top top",children:e.jsx("div",{className:"top__row",children:e.jsx("div",{className:"top__column",children:e.jsx("div",{className:"top__title-block",children:e.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})})})}),e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:g==null?void 0:g.map(a=>e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx("a",{className:"item-loyaltie-programs__image loyalty-img-custom",children:e.jsx(u,{img:(a==null?void 0:a.casino_image)||"",width:"100%"})})}),e.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:a.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:k,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:a.casino_rank})]})]}),e.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[a.loyalty_program.loyalty_keypoint.map(t=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(u,{img:(t==null?void 0:t.image)||"",width:"100%",size:"medium"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:t.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:t.text_2})]})]})})),e.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:e.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:e.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[e.jsx("div",{className:"item-essential-programs-gamble__rating-number",children:"9/10"}),e.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[e.jsxs("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_1 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_2 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_3 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_4 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_5 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_6 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_7 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_8 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_9 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_10"})]}),e.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:"Excellent"})]})]})})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:a.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"View Casino"}),e.jsx("a",{href:"/loyaltie",target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})}))}),e.jsx(L,{countElem:s==null?void 0:s.count,currentPage:o,countPageElem:b,setCurrentPage:a=>{h(a),m||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(E,{}),e.jsx(z,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}export{T as default};