import{u as $,f as D,r as l,c as S,j as e,h as M,W as A,i as I,k as W,y as f,L as x,s as y,b as j,d as T,v as q,$ as B}from"./index-CypWx3UU.js";import{F as G}from"./FilterHeaderList-CXh161fF.js";import{l as v,v as O}from"./v4-CpRhp7P6.js";import{P as V}from"./PaginationPage-ByzI9tYD.js";/* empty css              */import{S as R}from"./SubscribeForm-CsoSSi5y.js";const N=15,H=v.debounce((i,s)=>s(i),1e3),Q=v.debounce((i,s,o,n)=>{n||o(!0),s(i).finally(()=>o(!1))}),Y=async(i,s)=>{const o=q(i);return(await B.post(`filter/loyalty/?page=${s}&page_size=${N}`,o)).data};function ae(){document.title="Filter Loyalties";const{initializeAdaptiveBehavior:i,isSidebarActive:s}=$(),{loyaltiesFilters:o,setLoyaltiesFilters:n}=D(),[c,a]=l.useState(1),[m,p]=l.useState([]),[d,w]=l.useState(window.innerWidth<900),[k,L]=l.useState(!0),{data:t,isLoading:F,refetch:_}=S(["filter/loyalty",o,c],()=>Y(o,c),{keepPreviousData:!0,enabled:!1});l.useEffect(()=>{Q(o,_,L,d)},[c,_,a]),l.useEffect(()=>{a(1),H(o,_),d?p([]):window.scrollTo({behavior:"smooth",top:0})},[o,_]),l.useEffect(()=>{t!=null&&t.results&&p(r=>[...r,...t==null?void 0:t.results].reduce((g,b)=>(g.some(z=>z.casino_id===b.casino_id)||g.push(b),g),[]))},[t]),l.useEffect(()=>{i()},[F,s]),l.useEffect(()=>{const r=()=>w(window.innerWidth<900);return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const E=d?m:t==null?void 0:t.results,C=()=>{n(f)},P=r=>{const u=f[r];n(h=>({...h,[r]:u}))};return k?e.jsx(M,{}):e.jsx(A,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered loyaltie-filtered__main",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(I,{}),e.jsx(G,{initList:o,clearAll:C,clearOne:r=>P(r)}),e.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"main-loyaltie-programs__top top",children:e.jsx("div",{className:"top__row",children:e.jsx("div",{className:"top__column",children:e.jsx("div",{className:"top__title-block",children:e.jsx("h2",{className:"top__title",children:"Essential VIP Loyalty Programs"})})})})}),e.jsx(J,{displayedData:E}),e.jsx(V,{countElem:t==null?void 0:t.count,currentPage:c,countPageElem:N,setCurrentPage:r=>{a(r),d||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(W,{}),e.jsx(R,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}const J=l.memo(({displayedData:i})=>e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:i==null?void 0:i.map(s=>{var o,n,c;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(x,{rel:"nofollow noopener",to:`/casino/${y(s.casino_name)}?queryId=${s.casino_id}`,className:"item-loyaltie-programs__image loyalty-img-custom ",children:e.jsx(j,{img:(s==null?void 0:s.casino_image)||"",height:"100%",width:"100%"})},O())}),e.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:T,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),e.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[(o=s==null?void 0:s.loyalty_program)==null?void 0:o.loyalty_keypoint.map(a=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(j,{img:(a==null?void 0:a.image)||"",width:"100%",size:"medium"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]})})),e.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:e.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:e.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[e.jsxs("div",{className:"item-essential-programs-gamble__rating-number",children:[((n=s==null?void 0:s.loyalty_program)==null?void 0:n.count_levels)||10,"/10"]}),e.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[e.jsx("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[1,2,3,4,5,6,7,8,9,10].map(a=>{var m;return e.jsx("div",{className:`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${a} ${a<=(((m=s==null?void 0:s.loyalty_program)==null?void 0:m.count_levels)||10)&&"full"}`})})}),e.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:((c=s==null?void 0:s.loyalty_program)==null?void 0:c.loyalty_level_description)||"Excellent"})]})]})})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{rel:"nofollow noopener",href:(s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),target:"_blank","aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),e.jsx(x,{rel:"nofollow noopener",to:`/casino/${y(s.casino_name)}?queryId=${s.casino_id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})})})}));export{ae as default};