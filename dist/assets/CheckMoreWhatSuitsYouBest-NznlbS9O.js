import{u as f,r as o,j as s,L as n,x as r}from"./index-DL6tpfyy.js";import{b as h}from"./index-kPSOFslq.js";import{s as u}from"./search-filter-B3Q_Zd2F.js";function p(){var l;const{isSidebarActive:c,setSidebarActive:d,category:i}=f(),e=i.find(t=>t.bonus_id===11),[a,_]=o.useState(window.innerWidth<=480);return o.useEffect(()=>{const t=()=>_(window.innerWidth<=480);return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),s.jsx("section",{className:"main-gamble__bottom-filter-tags bottom-filter-tags check-bottom-filter-tags",children:s.jsxs("div",{className:"bottom-filter-tags__container container",children:[s.jsx("div",{className:"bottom-filter-tags__top top",children:s.jsxs("div",{className:"top__title-block",children:[s.jsx("span",{className:"top__title-icon",children:s.jsx(h.LazyLoadImage,{src:u,alt:"search"})}),s.jsx("h2",{className:"top__title",children:"Get More of What Suits You Best"})]})}),s.jsxs("div",{className:"bottom-filter-tags__row",children:[s.jsx("div",{className:"bottom-filter-tags__column bottom-filter-tags__link",children:s.jsx(n,{to:(e==null?void 0:e.link)||"/","aria-label":"Put your description here.",className:"bottom-filter-tags__btn slide-filter-tags-gamble__btn",children:a?r(e==null?void 0:e.name,23):e==null?void 0:e.name})}),(l=i==null?void 0:i.filter(t=>(t==null?void 0:t.bonus_id)!==11))==null?void 0:l.map((t,b)=>s.jsx("div",{className:"bottom-filter-tags__column bottom-filter-tags__link",children:s.jsx(n,{to:(t==null?void 0:t.link)||"/","aria-label":"Put your description here.",className:"bottom-filter-tags__btn slide-filter-tags-gamble__btn",children:a?r(t==null?void 0:t.name,23):t==null?void 0:t.name})},b))]}),s.jsxs("button",{onClick:()=>d(!c),className:"bottom-filter-tags__btn-filter",children:[s.jsx("span",{children:s.jsx("svg",{children:s.jsx("use",{xlinkHref:"#filter"})})}),"Filter What You need"]})]})})}export{p as default};