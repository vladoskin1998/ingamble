const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SubscribeForm-DrpbzS6Y.js","assets/index-DGsHaERL.js","assets/index-C8pGztM1.css","assets/08-DKS33Ud4.js","assets/SubscribeForm-C_hzHGal.css","assets/CheckMoreWhatSuitsYouBest-UPDRnhxR.js","assets/search-filter-B3Q_Zd2F.js","assets/BottomInfo-DgNnxQyV.js"])))=>i.map(i=>d[i]);
import{e as ce,r as i,u as ie,n as re,f as te,j as s,_ as Q,p as ue,q as de,W as me,L as V,s as j,b as _e,c as fe,d as he,h as be,l as pe,i as ge,C as xe,$ as je}from"./index-DGsHaERL.js";import{B as Ne}from"./BreadCrumb-oBK-HKNE.js";import{P as ve}from"./PaginationPage-KCokwZo3.js";/* empty css              */import{N as ke}from"./index-CILhhwhS.js";const ye=i.lazy(()=>Q(()=>import("./SubscribeForm-DrpbzS6Y.js"),__vite__mapDeps([0,1,2,3,4]))),we=i.lazy(()=>Q(()=>import("./CheckMoreWhatSuitsYouBest-UPDRnhxR.js"),__vite__mapDeps([5,1,2,6]))),Pe=i.lazy(()=>Q(()=>import("./BottomInfo-DgNnxQyV.js"),__vite__mapDeps([7,1,2]))),Se=async(e,a)=>(await je.get(`get-see-all-bonus-category${a?"/"+a:""}/?page=${e}&page_size=${se}`)).data,se=window.innerWidth<900?10:20;function Re(){var H,Y,J,K,U;const e=ce.c(56),[a,G]=i.useState(1);let N;e[0]===Symbol.for("react.memo_cache_sentinel")?(N=[],e[0]=N):N=e[0];const[ne,O]=i.useState(N),[r,ae]=i.useState(window.innerWidth<900),{initializeAdaptiveBehavior:D,category:g}=ie(),[F]=re();let v;e[1]!==F?(v=F.get("queryId"),e[1]=F,e[2]=v):v=e[2];const x=v,[c,le]=i.useState(x||"");let k,y;e[3]!==x?(k=()=>{le(x||""),window.scrollTo(0,0)},y=[x],e[3]=x,e[4]=k,e[5]=y):(k=e[4],y=e[5]),i.useEffect(k,y);let w,P;e[6]!==a||e[7]!==c?(w=["get-see-all-bonus-category/",a,c],P=()=>Se(a,c),e[6]=a,e[7]=c,e[8]=w,e[9]=P):(w=e[8],P=e[9]);let S;e[10]===Symbol.for("react.memo_cache_sentinel")?(S={keepPreviousData:!0,cacheTime:3e5},e[10]=S):S=e[10];const{data:n,isLoading:t}=te(w,P,S);let E;e[11]!==a||e[12]!==((H=n==null?void 0:n.bonuses)==null?void 0:H.results)||e[13]!==r?(E=()=>{var l,X,Z;if(r&&!((l=n==null?void 0:n.bonuses)!=null&&l.results)){O([]);return}if(r&&a===1&&((X=n==null?void 0:n.bonuses)!=null&&X.results)){O((Z=n==null?void 0:n.bonuses)==null?void 0:Z.results);return}if(r){O(oe=>{var ee;return[...oe,...((ee=n==null?void 0:n.bonuses)==null?void 0:ee.results)||[]]});return}},e[11]=a,e[12]=(Y=n==null?void 0:n.bonuses)==null?void 0:Y.results,e[13]=r,e[14]=E):E=e[14];let L;e[15]!==n||e[16]!==c?(L=[n,c],e[15]=n,e[16]=c,e[17]=L):L=e[17],i.useEffect(E,L);let $,z;e[18]===Symbol.for("react.memo_cache_sentinel")?(z=()=>{const l=()=>ae(window.innerWidth<900);return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},$=[],e[18]=$,e[19]=z):($=e[18],z=e[19]),i.useEffect(z,$);const o=r?ne:(J=n==null?void 0:n.bonuses)==null?void 0:J.results;let A;e[20]!==D?(A=()=>{D()},e[20]=D,e[21]=A):A=e[21];let I;if(e[22]!==t?(I=[t],e[22]=t,e[23]=I):I=e[23],i.useEffect(A,I),t){let l;return e[24]===Symbol.for("react.memo_cache_sentinel")?(l=s.jsx(ue,{}),e[24]=l):l=e[24],l}let B;e[25]===Symbol.for("react.memo_cache_sentinel")?(B=s.jsx(de,{}),e[25]=B):B=e[25];let C;e[26]===Symbol.for("react.memo_cache_sentinel")?(C=s.jsx(Ne,{path:[{name:"Home",link:"https://cryptogamblers.pro"},{name:"All Bonuses",link:"https://cryptogamblers.pro/bonuses"}]}),e[26]=C):C=e[26];let u;e[27]!==g||e[28]!==(n==null?void 0:n.category_name)||e[29]!==c?(u=c?(n==null?void 0:n.category_name)||((K=g==null?void 0:g.find(l=>(l==null?void 0:l.bonus_id)===Number(c)))==null?void 0:K.name):"All Bonuses",e[27]=g,e[28]=n==null?void 0:n.category_name,e[29]=c,e[30]=u):u=e[30];let d;e[31]!==u?(d=s.jsx("div",{className:"main-see-all__top top",children:s.jsx("div",{className:"top__row",children:s.jsx("div",{className:"top__column",children:s.jsx("div",{className:"top__title-block",children:s.jsx("h2",{className:"top__title",children:u})})})})}),e[31]=u,e[32]=d):d=e[32];let m;e[33]!==o?(m=o==null?void 0:o.map(Ee),e[33]=o,e[34]=m):m=e[34];let _;e[35]!==m?(_=s.jsx("div",{className:"main-see-all__row custom-main-see-all__row",children:m}),e[35]=m,e[36]=_):_=e[36];const M=(U=n==null?void 0:n.bonuses)==null?void 0:U.count;let f;e[37]!==r?(f=l=>{G(l),r||window.scrollTo({behavior:"smooth",top:0})},e[37]=r,e[38]=f):f=e[38];let h;e[39]!==a||e[40]!==M||e[41]!==f?(h=s.jsx(ve,{countElem:M,currentPage:a,countPageElem:se,setCurrentPage:f}),e[39]=a,e[40]=M,e[41]=f,e[42]=h):h=e[42];let b;e[43]!==(o==null?void 0:o.length)||e[44]!==t?(b=!(o!=null&&o.length)&&t&&s.jsx(ke,{}),e[43]=o==null?void 0:o.length,e[44]=t,e[45]=b):b=e[45];let p;e[46]!==d||e[47]!==_||e[48]!==h||e[49]!==b?(p=s.jsx("section",{className:"see-all__main main-see-all",children:s.jsxs("div",{className:"main-see-all__container container",children:[d,_,h,b]})}),e[46]=d,e[47]=_,e[48]=h,e[49]=b,e[50]=p):p=e[50];let R,T,q;e[51]===Symbol.for("react.memo_cache_sentinel")?(R=s.jsx(we,{}),T=s.jsx(ye,{}),q=s.jsx(Pe,{}),e[51]=R,e[52]=T,e[53]=q):(R=e[51],T=e[52],q=e[53]);let W;return e[54]!==p?(W=s.jsx(me,{children:s.jsx("main",{className:"gamble__see-all main-gamble see-all",children:s.jsxs("div",{className:"main-gamble__body",children:[B,C,p,R,T,q]})})}),e[54]=p,e[55]=W):W=e[55],W}function Ee(e){return s.jsx("div",{className:"main-see-all__column",children:s.jsxs("div",{className:"slide-slider__item casino-card",children:[s.jsx("div",{className:"casino-card__top",children:s.jsxs("div",{style:{padding:"0 8px 50.432% 8px"},className:"casino-card__image-block",children:[s.jsx(V,{to:`/casino/${j(e.casino_name)}/bonuses/${j(e.bonus_name)}?queryId=${e.bonus_id}`,className:"casino-card__image see-all-custom__image-custom",children:s.jsx(_e,{img:e.bonus_image,width:"100%"})}),s.jsx("a",{href:fe(e==null?void 0:e.casino_name),onClick:a=>{a.stopPropagation(),a.preventDefault(),he(e==null?void 0:e.casino_affiliate_link),window.open((e==null?void 0:e.casino_affiliate_link)||(e==null?void 0:e.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]})}),s.jsxs("div",{className:"casino-card__content",children:[s.jsx("div",{className:"casino-card__tags tags-casino-card",children:e.labels.map(Le)}),s.jsxs("div",{className:"casino-card__info info-casino-card",children:[s.jsxs("div",{className:"info-casino-card__stake",children:[s.jsx(V,{to:`/casino/${j(e==null?void 0:e.casino_name)}?queryId=${e==null?void 0:e.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:e==null?void 0:e.casino_name}),s.jsxs("div",{className:"info-casino-card__stake-rating",children:[s.jsx("span",{className:"info-casino-card__stake-rating-icon",children:s.jsx("img",{src:be,alt:"star"})}),s.jsx("span",{className:"info-casino-card__stake__rating-number",children:e.casino_rank})]})]}),s.jsxs("div",{className:"info-casino-card__likes",children:[s.jsx("span",{className:"info-casino-card__likes-icon",children:s.jsx("img",{src:pe,alt:"like"})}),s.jsx("span",{className:"info-casino-card__likes-number",children:ge(e==null?void 0:e.bonus_likes)})]})]}),s.jsx(V,{to:`/casino/${j(e.casino_name)}/bonuses/${j(e.bonus_name)}?queryId=${e.bonus_id}`,className:"casino-card__name",children:e.bonus_name})]})]})})}function Le(e,a){return s.jsx("div",{className:`tags-casino-card__item ${xe[a%4]}`,children:s.jsx("span",{className:"tags-casino-card__item-label",children:typeof e=="string"?e:e.name})})}export{Re as default};
