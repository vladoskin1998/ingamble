import{u as c,K as d,r as n,j as e,m as h,L as m,E as _}from"./index-BF0ZpRKJ.js";import{s as u}from"./search-filter-B3Q_Zd2F.js";function x(){const{isSidebarActive:t,category:s}=c(),{handlerSidebarActive:i}=d(),[o,r]=n.useState(window.innerWidth<=480);return n.useEffect(()=>{const a=()=>r(window.innerWidth<=480);return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)},[]),e.jsx("section",{className:"main-gamble__bottom-filter-tags bottom-filter-tags check-bottom-filter-tags",children:e.jsxs("div",{className:"bottom-filter-tags__container container",children:[e.jsx("div",{className:"bottom-filter-tags__top top",children:e.jsxs("div",{className:"top__title-block",children:[e.jsx("span",{className:"top__title-icon",children:e.jsx("img",{loading:"lazy",src:u,alt:"search"})}),e.jsx("h2",{className:"top__title",children:"Get More of What Suits You Best"})]})}),e.jsx("div",{className:"bottom-filter-tags__row",children:s==null?void 0:s.map((a,l)=>e.jsx("div",{className:"bottom-filter-tags__column bottom-filter-tags__link",children:e.jsx(b,{item:a,isMobile:o})},l))}),e.jsxs("button",{onClick:()=>i(!t),className:"bottom-filter-tags__btn-filter",children:[e.jsx("span",{children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"#filter"})})}),"Filter What You need"]})]})})}const b=({item:t,isMobile:s})=>{const{fooCategorySanitazeLink:i}=h(),{seeAllLink:o,seeAllFoo:r}=i({type_category:t.categoryType,slug:t.slug});return e.jsx(m,{to:o,onClick:r,"aria-label":"Put your description here.",className:"bottom-filter-tags__btn slide-filter-tags-gamble__btn",children:s?_(t==null?void 0:t.name,23):t==null?void 0:t.name})};export{x as default};
