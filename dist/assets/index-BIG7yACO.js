const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CheckMoreWhatSuitsYouBest-DN1lLw-J.js","assets/index-CkRdimUH.js","assets/index-BM62F8gK.css","assets/search-filter-B3Q_Zd2F.js","assets/SubscribeForm-B99y78CD.js","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css","assets/BottomInfo-D-w5sTZF.js"])))=>i.map(i=>d[i]);
import{r as i,m as H,d as U,g as Y,j as e,h as Q,D as q,L as I,a as G,N as J,c as K,b as X,_ as v,P as x,$ as Z}from"./index-CkRdimUH.js";import{B as ee}from"./BreadCrumb-B50cemvN.js";import{C as se,L as T}from"./LazyCardImg-CuFZ3cgC.js";import{P as ae}from"./PaginationPage-BptKiHqT.js";import{i as oe,W as ie}from"./index-D9SqY6mL.js";import{l as le}from"./like-DhHpW3pT.js";import{N as ne}from"./index-Cs-4Kwac.js";const te=i.lazy(()=>v(()=>import("./CheckMoreWhatSuitsYouBest-DN1lLw-J.js"),__vite__mapDeps([0,1,2,3]))),re=i.lazy(()=>v(()=>import("./SubscribeForm-B99y78CD.js"),__vite__mapDeps([4,1,2,5,6]))),ce=i.lazy(()=>v(()=>import("./BottomInfo-D-w5sTZF.js"),__vite__mapDeps([7,1,2]))),M=[{name:"Home",link:"/    "},{name:"All Casinos",link:"/all-casinos"}],me=async(o,_)=>(await Z.get(`get-see-all-casinos-category${_?"/"+_:""}/?page=${o}&page_size=${R}`)).data,_e=o=>o>=8?x.High:o>=5?x.Medium:x.Low,de=o=>o.monthly?"Monthly":o.weekly?"Weekly":o.daily?"Daily":"",R=window.innerWidth<900?8:15;function ve(){var b,w,k;const[o,_]=i.useState(1),[j,p]=i.useState([]),[r,V]=i.useState(window.innerWidth<900),{casino_slug:u}=H(),[n,O]=i.useState(u||"");i.useEffect(()=>{O(u||""),window.scrollTo(0,0)},[u]);const{category:h}=U(),{data:a,isLoading:y}=Y(["get-see-all-loyalties",o,n],()=>me(o,n),{keepPreviousData:!0,cacheTime:1e3*60*5});i.useEffect(()=>{var s,d,c;if(r&&!((s=a==null?void 0:a.casino)!=null&&s.results)){p([]);return}if(r&&o===1&&((d=a==null?void 0:a.casino)!=null&&d.results)){p((c=a==null?void 0:a.casino)==null?void 0:c.results);return}if(r){p(g=>{var m;return[...g,...((m=a==null?void 0:a.casino)==null?void 0:m.results)||[]]});return}},[a,n]),i.useEffect(()=>{oe()},[y]),i.useEffect(()=>{const s=()=>V(window.innerWidth<900);return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const N=n?(a==null?void 0:a.category_name)||((b=h==null?void 0:h.find(s=>(s==null?void 0:s.slug)===n))==null?void 0:b.name):"Casino List",t=r?j:(w=a==null?void 0:a.casino)==null?void 0:w.results;return y?e.jsx(Q,{}):e.jsx(ie,{children:e.jsx("main",{className:"gamble__casinos-filtered main-gamble casinos-filtered",children:e.jsxs("div",{className:"main-gamble__body",children:[e.jsx(se,{type_category:q.casino_category}),e.jsx(ee,{path:n?[...M,{name:N||"Categories",link:`/all-bonuses/${n}`}]:M}),e.jsx("section",{className:"casinos-filtered__main main-loyaltie-programs",children:e.jsxs("div",{className:"main-loyaltie-programs__container container",children:[e.jsx("div",{className:"main-loyaltie-programs__top top",children:e.jsx("div",{className:"top__row",children:e.jsx("div",{className:"top__column",children:e.jsx("div",{className:"top__title-block",children:e.jsx("h2",{className:"top__title",children:N})})})})}),e.jsx("div",{className:"main-loyaltie-programs__items loyaltie-programs__items",children:t==null?void 0:t.map((s,d)=>{var c,g,f,m,P,L,C,E,$,S,A,D,z,W,B;return e.jsx("div",{className:"loyaltie-programs__item item-loyaltie-programs",children:e.jsxs("div",{className:"item-loyaltie-programs__row",children:[e.jsx("div",{className:"item-loyaltie-programs__main",children:e.jsx(I,{to:`/casino/${s.casino_slug}`,"aria-label":"Put your description here.",className:"item-loyaltie-programs__image item-loyaltie-programs__image-custom",children:e.jsx(T,{img:(s==null?void 0:s.casino_image)||"",height:"auto",width:"100%"})})}),e.jsx("div",{className:"item-loyaltie-programs__content content-item-loyaltie-programs",children:e.jsxs("div",{className:"content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_main",children:[e.jsxs("div",{className:"content-item-loyaltie-programs__top top-content-item-loyaltie-programs",children:[e.jsx("h2",{className:"top-content-item-loyaltie-programs__name",children:s.casino_name}),e.jsxs("div",{className:"info-casino-card__likes",children:[e.jsx("span",{className:"info-casino-card__likes-icon",children:e.jsx("img",{src:le,alt:"like"})}),e.jsx("span",{className:"info-casino-card__likes-number",children:G(s==null?void 0:s.likes)})]})]}),e.jsx("div",{className:"content-item-loyaltie-programs__info info-content-item-loyaltie-programs",children:e.jsxs("div",{className:"info-content-item-loyaltie-programs__row",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs item-info-content-item-loyaltie-programs_index-high",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Safety Index"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[s.casino_rank,e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-index",children:_e(Number(s.casino_rank))})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Min Dep"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${(g=(c=s.min_dep)==null?void 0:c[0])==null?void 0:g.value} ${window.location.origin.includes("ingamble.com")?"$":"$ USDT"}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"License"}),e.jsxs("div",{className:"item-info-content-item-loyaltie-programs__value",children:[(m=(f=s==null?void 0:s.licenses)==null?void 0:f[0])==null?void 0:m.name,((L=(P=s==null?void 0:s.licenses)==null?void 0:P[0])==null?void 0:L.image)&&e.jsx("span",{className:"item-info-content-item-loyaltie-programs__value-flag",children:e.jsx("img",{src:((E=(C=s==null?void 0:s.licenses)==null?void 0:C[0])==null?void 0:E.image)||"",alt:(S=($=s==null?void 0:s.licenses)==null?void 0:$[0])==null?void 0:S.country_code})})]})]})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__column",children:[e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Withdrawal Limit:"}),e.jsx("div",{className:"item-info-content-item-loyaltie-programs__value",children:`${J(((A=s==null?void 0:s.withdrawal_limit)==null?void 0:A.monthly)||((D=s==null?void 0:s.withdrawal_limit)==null?void 0:D.weekly)||((z=s==null?void 0:s.withdrawal_limit)==null?void 0:z.daily)||"Unlimited")} ${de(s==null?void 0:s.withdrawal_limit)}`})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"Payout Speed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.payout_speed.toLocaleLowerCase()}`,children:s.payout_speed})]}),e.jsxs("div",{className:"info-content-item-loyaltie-programs__item item-info-content-item-loyaltie-programs",children:[e.jsx("div",{className:"item-info-content-item-loyaltie-programs__label",children:"VPN Allowed"}),e.jsx("div",{className:`item-info-content-item-loyaltie-programs__value item-info-content-item-loyaltie-programs__value_${s.vpn_usage?"yes":"no"}`,children:s.vpn_usage?"Yes":"No"})]})]})]})}),e.jsx("div",{className:"content-item-loyaltie-programs__bottom bottom-content-item-loyaltie-programs",children:e.jsxs("div",{className:"bottom-content-item-loyaltie-programs__btns",children:[e.jsx("a",{href:K(s==null?void 0:s.casino_name),onClick:l=>{l.stopPropagation(),l.preventDefault(),X(s==null?void 0:s.casino_affiliate_link),window.open((s==null?void 0:s.casino_affiliate_link)||(s==null?void 0:s.url_casino),"_blank","noopener,noreferrer")},className:"bottom-content-item-loyaltie-programs__btn-view",children:"Visit Casino"}),e.jsx(I,{to:`/casino/${s==null?void 0:s.casino_slug}`,"aria-label":"Put your description here.",className:"bottom-content-item-loyaltie-programs__btn-more",children:"Read More"})]})})]}),e.jsx("div",{className:"content-item-loyaltie-programs__column content-item-loyaltie-programs__column_features",children:e.jsx("div",{className:"content-item-loyaltie-programs__features features-essential-programs-gamble",children:(B=(W=s==null?void 0:s.loyalty_program)==null?void 0:W.loyalty_keypoint)==null?void 0:B.slice(0,3).map((l,F)=>e.jsx("div",{className:"features-essential-programs-gamble__column",children:e.jsxs("div",{className:"features-essential-programs-gamble__item",children:[e.jsx("div",{className:"features-essential-programs-gamble__icon",children:e.jsx(T,{img:(l==null?void 0:l.image)||"",size:"medium",width:"100%"})}),e.jsxs("div",{className:"features-essential-programs-gamble__info",children:[e.jsx("div",{className:"features-essential-programs-gamble__name",children:l.text_1}),e.jsx("div",{className:"features-essential-programs-gamble__text",children:l.text_2})]})]})},F))})})]})})]})},d)})}),!(t!=null&&t.length)&&y&&e.jsx(ne,{}),e.jsx(ae,{countElem:(k=a==null?void 0:a.casino)==null?void 0:k.count,currentPage:o,countPageElem:R,setCurrentPage:s=>{_(s),r||window.scrollTo({behavior:"smooth",top:0})}})]})}),e.jsx(te,{}),e.jsx(re,{}),e.jsx(ce,{})]})})})}export{de as WithdrawalSeeAllCasinos,ve as default,_e as rankCasinosSeeAll};
