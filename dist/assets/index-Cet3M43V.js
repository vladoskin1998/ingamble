import{u as $,h as S,r as n,d as D,j as e,i as M,W as A,k as I,q as W,m as q,A as x,L as y,s as j,b as v,e as R,c as T,x as B,$ as G}from"./index-JgzFYtXT.js";import{F as O}from"./FilterHeaderList-Drhdsqut.js";import{l as N,v as V}from"./v4-BCBfgtaE.js";import{P as H}from"./PaginationPage-C7A4gudl.js";/* empty css              */import{S as Q}from"./SubscribeForm-BKZnV4Ay.js";import{N as Y}from"./index-CN5hRahf.js";const w=15,J=N.debounce((r,s)=>s(r),700),K=N.debounce((r,s,o,l)=>{l||o(!0),s(r).finally(()=>o(!1))}),U=async(r,s)=>{const o=B(r);return(await G.post(`filter/loyalty/?page=${s}&page_size=${w}`,o)).data};function ie(){document.title="Filter Loyalties";const{initializeAdaptiveBehavior:r,isSidebarActive:s}=$(),{loyaltiesFilters:o,setLoyaltiesFilters:l}=S(),[c,m]=n.useState(1),[a,d]=n.useState([]),[_,k]=n.useState(window.innerWidth<900),[L,F]=n.useState(!0),{data:t,isLoading:C,refetch:g}=D(["filter/loyalty",o,c],()=>U(o,c),{keepPreviousData:!0,enabled:!1});n.useEffect(()=>{K(o,g,F,_)},[c,g,m]),n.useEffect(()=>{m(1),J(o,g),_?d([]):window.scrollTo({behavior:"smooth",top:0})},[o,g]),n.useEffect(()=>{t!=null&&t.results&&d(i=>[...i,...t==null?void 0:t.results].reduce((u,f)=>(u.some(z=>z.casino_id===f.casino_id)||u.push(f),u),[]))},[t]),n.useEffect(()=>{r()},[C,s]),n.useEffect(()=>{const i=()=>k(window.innerWidth<900);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const p=_?a:t==null?void 0:t.results,E=()=>{l(x)},P=i=>{const h=x[i];l(b=>({...b,[i]:h}))};return L?e.jsx(M,{}):e.jsx(A,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered loyaltie-filtered__main",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(I,{}),e.jsx(O,{initList:o,clearAll:E,clearOne:i=>P(i)}),e.jsx("section",{className:"loyaltie-programs__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"results-filter-scenarios__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{src:W,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Results"})]})}),p!=null&&p.length?e.jsxs(e.Fragment,{children:[e.jsx(X,{displayedData:p}),e.jsx(H,{countElem:t==null?void 0:t.count,currentPage:c,countPageElem:w,setCurrentPage:i=>{m(i),_||window.scrollTo({behavior:"smooth",top:0})}})]}):e.jsx(Y,{})]})}),e.jsx(q,{}),e.jsx(Q,{}),e.jsx("section",{className:"main-gamble__bottom-info bottom-info-gamble",children:e.jsx("div",{className:"bottom-info-gamble__container container",children:e.jsxs("div",{className:"bottom-info-gamble__row",children:[e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"inGamble - The most popular New Casino and Bonus listing and review website"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"inGamble is a well-known and respected brand within the iGaming industry. We are the most popular gambling listing and review website. New players owners always look for opportunities to list their projects on our website. That ensures that the information on our platform is always accessible and up to date."}),e.jsx("p",{children:"Most of the cryptocurrencies are listed on CoinMooner even before they are listed on CoinMarketCap & CoinGecko."})]})]})}),e.jsx("div",{className:"bottom-info-gamble__column",children:e.jsxs("div",{className:"bottom-info-gamble__item",children:[e.jsx("h2",{className:"bottom-info-gamble__title",children:"Find DeFi tokens that will generate huge profits"}),e.jsxs("div",{className:"bottom-info-gamble__text",children:[e.jsx("p",{children:"CoinMooner became a platform that makes cryptocurrencies more accessible to the public and provides entertaining features, developments, crypto-related news, tutorials, and other valuable materials. One of the main goals is to stay relevant and keep up with the rapid growth of crypto."}),e.jsx("p",{children:"To follow our ideology, we developed state-of-the-art mechanisms and features that allow our visitors to analyze the tokens. Our visitors can use various rankings, filtering options, token contract audits, charts, trading history, and many other valuable options. All of this combined brings consistent results!"})]})]})})]})})})]})})})}const X=n.memo(({displayedData:r})=>e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:r==null?void 0:r.map(s=>{var o,l,c,m;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(y,{rel:"nofollow noopener",to:`/casino/${j(s.casino_name)}?queryId=${s.casino_id}`,className:"item-loyaltie-programs__image loyalty-img-custom ",children:e.jsx(v,{img:(s==null?void 0:s.casino_image)||"",height:"100%",width:"100%"})},V())}),e.jsxs("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s==null?void 0:s.casino_name}),e.jsxs("div",{className:"info-casino-card__stake-rating",children:[e.jsx("span",{className:"info-casino-card__stake-rating-icon",children:e.jsx("img",{src:R,alt:"star"})}),e.jsx("span",{className:"info-casino-card__stake__rating-number",children:s==null?void 0:s.casino_rank})]})]}),e.jsxs("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:[(o=s==null?void 0:s.loyalty_program)==null?void 0:o.loyalty_keypoint.map(a=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(v,{img:(a==null?void 0:a.image)||"",width:"100%",size:"medium"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:a==null?void 0:a.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:a==null?void 0:a.text_2})]})]})})),e.jsx("div",{className:"features-essential-programs-gamble__column features-essential-programs-gamble__column_rating",children:e.jsx("div",{className:"features-essential-programs-gamble__item features-essential-programs-gamble__item_rating",children:e.jsxs("div",{className:"item-essential-programs-gamble__rating",children:[e.jsxs("div",{className:"item-essential-programs-gamble__rating-number",children:[((l=s==null?void 0:s.loyalty_program)==null?void 0:l.count_levels)||10,"/10"]}),e.jsxs("div",{className:"item-essential-programs-gamble__rating-body",children:[e.jsx("div",{className:"item-essential-programs-gamble__rating-items items-rating-essential-programs-gamble",children:[1,2,3,4,5,6,7,8,9,10].map(a=>{var d;return e.jsx("div",{className:`items-rating-essential-programs-gamble__item items-rating-essential-programs-gamble__item_${a} ${a<=(((d=s==null?void 0:s.loyalty_program)==null?void 0:d.count_levels)||10)&&"full"}`})})}),e.jsx("div",{className:"item-essential-programs-gamble__rating-text",children:((c=s==null?void 0:s.loyalty_program)==null?void 0:c.loyalty_level_description)||"Excellent"})]})]})})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{target:"_blank",href:T((s==null?void 0:s.url_casino)||(s==null?void 0:s.casino_affiliate_link)),onClick:a=>{a.stopPropagation(),a.preventDefault(),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),e.jsx(y,{to:`/casino/${j(s.casino_name)}/loyalty?queryId=${(m=s==null?void 0:s.loyalty_program)==null?void 0:m.id}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]})]})})})}));export{ie as default};