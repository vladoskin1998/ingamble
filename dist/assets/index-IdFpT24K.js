import{r as t,f as u,u as x,j as e,h as f,W as j,C as v,L as _,s as y,b as N,$ as w}from"./index-BjlPgakr.js";import{B as k}from"./BreadCrumb-RFpT8oqD.js";import{P as E}from"./PaginationPage-CaiNFuOz.js";import{S as C}from"./SubscribeForm-CtrJIHKe.js";/* empty css              */const d=10;function B(){document.title="See All Essentials Loyalty";const[l,p]=t.useState(1),[c,r]=t.useState([]),[o,b]=t.useState(window.innerWidth<900),h=async a=>(await w.get(`get-see-all-loyalties/?page=${a}&page_size=${d}`)).data,{data:s,isLoading:n}=u(["get-see-all-loyalties",l],()=>h(l),{keepPreviousData:!0});t.useEffect(()=>{g()},[n]),t.useEffect(()=>{s!=null&&s.results&&r(a=>[...a,...s==null?void 0:s.results])},[s]),t.useEffect(()=>{s!=null&&s.results&&o&&r(a=>[...a,...s==null?void 0:s.results]),!c.length&&(s!=null&&s.results)&&r(s==null?void 0:s.results)},[s]),t.useEffect(()=>{const a=()=>b(window.innerWidth<900);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]);const{initializeAdaptiveBehavior:g}=x();t.useEffect(()=>{g()},[n]);const m=o?c:s==null?void 0:s.results;return n?e.jsx(f,{}):e.jsx(j,{children:e.jsx("main",{className:"gamble__loyaltie-programs main-gamble loyaltie-programs loyaltie-filtered__main",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(v,{category:[{name:"All"},{name:"Hot Events"},{name:"Best Cash Back Casinos"},{name:"Highest RTP Slots"},{name:" No Deposit Bonuses"},{name:"  VPN Allowed Casinos"}]}),e.jsx(k,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"Gambling Hub",link:"https://cryptogamblers.pro/bonuses"},{name:"Essential VIP Loyalty Programs",link:"#"}]}),e.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"main-loyaltie-programs__top top",children:e.jsx("div",{className:"top__row",children:e.jsx("div",{className:"top__column",children:e.jsx("div",{className:"top__title-block",children:e.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})})})}),e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:m==null?void 0:m.map(a=>e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx("a",{className:"item-loyaltie-programs__image loyalty-img-custom",children:e.jsx(_,{img:(a==null?void 0:a.casino_image)||"",width:"100%"})})}),e.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:a.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:y,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:a.casino_rank})]})]}),e.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[a.loyalty_program.loyalty_keypoint.map(i=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(_,{img:(i==null?void 0:i.image)||"",width:"100%",size:"medium"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:i.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:i.text_2})]})]})})),e.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:e.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:e.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[e.jsx("div",{className:"item-essential-programs-gamble__rating-number",children:"9/10"}),e.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[e.jsxs("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_1 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_2 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_3 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_4 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_5 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_6 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_7 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_8 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_9 full"}),e.jsx("div",{className:"items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_10"})]}),e.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:"Excellent"})]})]})})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:a.casino_affiliate_link,target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"View Casino"}),e.jsx("a",{href:"/loyaltie",target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})}))}),e.jsx(E,{countElem:s==null?void 0:s.count,currentPage:l,countPageElem:d,setCurrentPage:a=>{p(a),o||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(N,{}),e.jsx(C,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}export{B as default};
