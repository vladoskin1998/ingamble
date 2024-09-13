import{e as O,c as T,m as f,a as q,b as H,d as G,r as D,j as a,S as Y,f as k,s as y,l as C,g as E}from"./index-BWNSpS5U.js";const K="/assets/09-CRoebOW3.jpg",W="/assets/03-B-69zSXk.jpg",Q="/assets/07-Bxb0-8W2.jpg",X="/assets/01-CH--NDwH.jpg",U="/assets/04-ClP5E8EQ.jpg";function V(h,s,u,o){return h.params.createElements&&Object.keys(o).forEach(g=>{if(!u[g]&&u.auto===!0){let c=O(h.el,`.${o[g]}`)[0];c||(c=T("div",o[g]),c.className=o[g],h.el.append(c)),u[g]=c,s[g]=c}}),u}function L(h){return h===void 0&&(h=""),`.${h.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function J(h){let{swiper:s,extendParams:u,on:o,emit:g}=h;const c="swiper-pagination";u({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),s.pagination={el:null,bullets:[]};let w,j=0;function M(){return!s.params.pagination.el||!s.pagination.el||Array.isArray(s.pagination.el)&&s.pagination.el.length===0}function B(e,i){const{bulletActiveClass:n}=s.params.pagination;e&&(e=e[`${i==="prev"?"previous":"next"}ElementSibling`],e&&(e.classList.add(`${n}-${i}`),e=e[`${i==="prev"?"previous":"next"}ElementSibling`],e&&e.classList.add(`${n}-${i}-${i}`)))}function I(e){const i=e.target.closest(L(s.params.pagination.bulletClass));if(!i)return;e.preventDefault();const n=H(i)*s.params.slidesPerGroup;if(s.params.loop){if(s.realIndex===n)return;s.slideToLoop(n)}else s.slideTo(n)}function b(){const e=s.rtl,i=s.params.pagination;if(M())return;let n=s.pagination.el;n=f(n);let l,_;const N=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,R=s.params.loop?Math.ceil(N/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop?(_=s.previousRealIndex||0,l=s.params.slidesPerGroup>1?Math.floor(s.realIndex/s.params.slidesPerGroup):s.realIndex):typeof s.snapIndex<"u"?(l=s.snapIndex,_=s.previousSnapIndex):(_=s.previousIndex||0,l=s.activeIndex||0),i.type==="bullets"&&s.pagination.bullets&&s.pagination.bullets.length>0){const r=s.pagination.bullets;let x,p,$;if(i.dynamicBullets&&(w=q(r[0],s.isHorizontal()?"width":"height"),n.forEach(t=>{t.style[s.isHorizontal()?"width":"height"]=`${w*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&_!==void 0&&(j+=l-(_||0),j>i.dynamicMainBullets-1?j=i.dynamicMainBullets-1:j<0&&(j=0)),x=Math.max(l-j,0),p=x+(Math.min(r.length,i.dynamicMainBullets)-1),$=(p+x)/2),r.forEach(t=>{const d=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(m=>`${i.bulletActiveClass}${m}`)].map(m=>typeof m=="string"&&m.includes(" ")?m.split(" "):m).flat();t.classList.remove(...d)}),n.length>1)r.forEach(t=>{const d=H(t);d===l?t.classList.add(...i.bulletActiveClass.split(" ")):s.isElement&&t.setAttribute("part","bullet"),i.dynamicBullets&&(d>=x&&d<=p&&t.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),d===x&&B(t,"prev"),d===p&&B(t,"next"))});else{const t=r[l];if(t&&t.classList.add(...i.bulletActiveClass.split(" ")),s.isElement&&r.forEach((d,m)=>{d.setAttribute("part",m===l?"bullet-active":"bullet")}),i.dynamicBullets){const d=r[x],m=r[p];for(let v=x;v<=p;v+=1)r[v]&&r[v].classList.add(...`${i.bulletActiveClass}-main`.split(" "));B(d,"prev"),B(m,"next")}}if(i.dynamicBullets){const t=Math.min(r.length,i.dynamicMainBullets+4),d=(w*t-w)/2-$*w,m=e?"right":"left";r.forEach(v=>{v.style[s.isHorizontal()?m:"top"]=`${d}px`})}}n.forEach((r,x)=>{if(i.type==="fraction"&&(r.querySelectorAll(L(i.currentClass)).forEach(p=>{p.textContent=i.formatFractionCurrent(l+1)}),r.querySelectorAll(L(i.totalClass)).forEach(p=>{p.textContent=i.formatFractionTotal(R)})),i.type==="progressbar"){let p;i.progressbarOpposite?p=s.isHorizontal()?"vertical":"horizontal":p=s.isHorizontal()?"horizontal":"vertical";const $=(l+1)/R;let t=1,d=1;p==="horizontal"?t=$:d=$,r.querySelectorAll(L(i.progressbarFillClass)).forEach(m=>{m.style.transform=`translate3d(0,0,0) scaleX(${t}) scaleY(${d})`,m.style.transitionDuration=`${s.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(r.innerHTML=i.renderCustom(s,l+1,R),x===0&&g("paginationRender",r)):(x===0&&g("paginationRender",r),g("paginationUpdate",r)),s.params.watchOverflow&&s.enabled&&r.classList[s.isLocked?"add":"remove"](i.lockClass)})}function P(){const e=s.params.pagination;if(M())return;const i=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.grid&&s.params.grid.rows>1?s.slides.length/Math.ceil(s.params.grid.rows):s.slides.length;let n=s.pagination.el;n=f(n);let l="";if(e.type==="bullets"){let _=s.params.loop?Math.ceil(i/s.params.slidesPerGroup):s.snapGrid.length;s.params.freeMode&&s.params.freeMode.enabled&&_>i&&(_=i);for(let N=0;N<_;N+=1)e.renderBullet?l+=e.renderBullet.call(s,N,e.bulletClass):l+=`<${e.bulletElement} ${s.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}e.type==="fraction"&&(e.renderFraction?l=e.renderFraction.call(s,e.currentClass,e.totalClass):l=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),e.type==="progressbar"&&(e.renderProgressbar?l=e.renderProgressbar.call(s,e.progressbarFillClass):l=`<span class="${e.progressbarFillClass}"></span>`),s.pagination.bullets=[],n.forEach(_=>{e.type!=="custom"&&(_.innerHTML=l||""),e.type==="bullets"&&s.pagination.bullets.push(..._.querySelectorAll(L(e.bulletClass)))}),e.type!=="custom"&&g("paginationRender",n[0])}function S(){s.params.pagination=V(s,s.originalParams.pagination,s.params.pagination,{el:"swiper-pagination"});const e=s.params.pagination;if(!e.el)return;let i;typeof e.el=="string"&&s.isElement&&(i=s.el.querySelector(e.el)),!i&&typeof e.el=="string"&&(i=[...document.querySelectorAll(e.el)]),i||(i=e.el),!(!i||i.length===0)&&(s.params.uniqueNavElements&&typeof e.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...s.el.querySelectorAll(e.el)],i.length>1&&(i=i.filter(n=>G(n,".swiper")[0]===s.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(s.pagination,{el:i}),i=f(i),i.forEach(n=>{e.type==="bullets"&&e.clickable&&n.classList.add(...(e.clickableClass||"").split(" ")),n.classList.add(e.modifierClass+e.type),n.classList.add(s.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(n.classList.add(`${e.modifierClass}${e.type}-dynamic`),j=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&n.classList.add(e.progressbarOppositeClass),e.clickable&&n.addEventListener("click",I),s.enabled||n.classList.add(e.lockClass)}))}function z(){const e=s.params.pagination;if(M())return;let i=s.pagination.el;i&&(i=f(i),i.forEach(n=>{n.classList.remove(e.hiddenClass),n.classList.remove(e.modifierClass+e.type),n.classList.remove(s.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(n.classList.remove(...(e.clickableClass||"").split(" ")),n.removeEventListener("click",I))})),s.pagination.bullets&&s.pagination.bullets.forEach(n=>n.classList.remove(...e.bulletActiveClass.split(" ")))}o("changeDirection",()=>{if(!s.pagination||!s.pagination.el)return;const e=s.params.pagination;let{el:i}=s.pagination;i=f(i),i.forEach(n=>{n.classList.remove(e.horizontalClass,e.verticalClass),n.classList.add(s.isHorizontal()?e.horizontalClass:e.verticalClass)})}),o("init",()=>{s.params.pagination.enabled===!1?A():(S(),P(),b())}),o("activeIndexChange",()=>{typeof s.snapIndex>"u"&&b()}),o("snapIndexChange",()=>{b()}),o("snapGridLengthChange",()=>{P(),b()}),o("destroy",()=>{z()}),o("enable disable",()=>{let{el:e}=s.pagination;e&&(e=f(e),e.forEach(i=>i.classList[s.enabled?"remove":"add"](s.params.pagination.lockClass)))}),o("lock unlock",()=>{b()}),o("click",(e,i)=>{const n=i.target,l=f(s.pagination.el);if(s.params.pagination.el&&s.params.pagination.hideOnClick&&l&&l.length>0&&!n.classList.contains(s.params.pagination.bulletClass)){if(s.navigation&&(s.navigation.nextEl&&n===s.navigation.nextEl||s.navigation.prevEl&&n===s.navigation.prevEl))return;const _=l[0].classList.contains(s.params.pagination.hiddenClass);g(_===!0?"paginationShow":"paginationHide"),l.forEach(N=>N.classList.toggle(s.params.pagination.hiddenClass))}});const F=()=>{s.el.classList.remove(s.params.pagination.paginationDisabledClass);let{el:e}=s.pagination;e&&(e=f(e),e.forEach(i=>i.classList.remove(s.params.pagination.paginationDisabledClass))),S(),P(),b()},A=()=>{s.el.classList.add(s.params.pagination.paginationDisabledClass);let{el:e}=s.pagination;e&&(e=f(e),e.forEach(i=>i.classList.add(s.params.pagination.paginationDisabledClass))),z()};Object.assign(s.pagination,{enable:F,disable:A,render:P,update:b,init:S,destroy:z})}const aa=({title:h,data:s})=>{const u=D.useRef(null),o=D.useRef(null);return a.jsx("section",{className:"simple-bonus__more-stake more-staket-simple-bonus",children:a.jsxs("div",{className:"more-staket-simple-bonus__container container",children:[a.jsx("div",{className:"more-staket-simple-bonus__top top",children:a.jsxs("div",{className:"top__row",children:[a.jsx("div",{className:"top__column",children:a.jsx("div",{className:"top__title-block",children:a.jsx("h2",{className:"top__title",children:h})})}),a.jsx("div",{className:"top__column",children:a.jsxs("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"top__btn",children:[a.jsx("span",{children:"See All"}),a.jsx("span",{className:"top__btn-arrow",children:a.jsx("svg",{children:a.jsx("use",{xlinkHref:"#arrow"})})})]})})]})}),a.jsxs("div",{className:"more-staket-simple-bonus__slider slider",children:[a.jsx("div",{className:"slider__body",children:a.jsx("div",{className:"more-staket-simple-bonus__swiper slider__swiper swiper",children:a.jsx("div",{className:"slider__wrapper",children:a.jsxs(Y,{slidesPerView:"auto",spaceBetween:20,ref:u,pagination:{el:o.current,clickable:!0},modules:[J],breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:[a.jsx(k,{children:a.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsxs("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[a.jsx("div",{className:"casino-card__image ibg",children:a.jsx("img",{src:K,alt:"Crazy Cash Bomb Winnings $1,000,000 asdasdas WQEasdasd",loading:"lazy"})}),a.jsx("a",{rel:"nofollow noopener",href:"",target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),a.jsxs("div",{className:"casino-card__tags tags-casino-card",children:[a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_green",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"WR:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"4.0x"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_blue",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Min Dep:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"10€"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_purple",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Max bet:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€5"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_grass",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:a.jsx("svg",{children:a.jsx("use",{xlinkHref:"#check-grass"})})}),a.jsx("span",{className:"tags-casino-card__item-value",children:"Safe"})]})]}),a.jsxs("div",{className:"casino-card__content",children:[a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:"Stake Casino"}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx("img",{src:y,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:"4.8"})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx("img",{src:C,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:"34K"})]})]}),a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:"Crazy Cash Bomb Winnings $1,000,000 asdasdas WQEasdasd"})]})]})})}),a.jsx(k,{children:a.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsxs("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[a.jsx("div",{className:"casino-card__image ibg",children:a.jsx("img",{src:W,alt:"Big Fat Race to$100 Moon coins"})}),a.jsx("a",{rel:"nofollow noopener",href:"",target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),a.jsxs("div",{className:"casino-card__tags tags-casino-card",children:[a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_green",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"WR:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"4.0x"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_blue",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Min Dep:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€10"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_purple",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Max bet:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€5"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_grass",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:a.jsx("svg",{children:a.jsx("use",{xlinkHref:"#check-grass"})})}),a.jsx("span",{className:"tags-casino-card__item-value",children:"Safe"})]})]}),a.jsxs("div",{className:"casino-card__content",children:[a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:"Stake Casino"}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx("img",{src:y,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:"4.8"})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx("img",{src:C,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:"34K"})]})]}),a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:"Big Fat Race to$100 Moon coins"})]})]})})}),a.jsx(k,{children:a.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsxs("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[a.jsx("div",{className:"casino-card__image ibg",children:a.jsx("img",{src:Q,alt:"Crazy Cash Bomb Winnings $1,000,",loading:"lazy"})}),a.jsx("a",{rel:"nofollow noopener",href:"",target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),a.jsxs("div",{className:"casino-card__tags tags-casino-card",children:[a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_green",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"WR:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"4.0x"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_blue",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Min Dep:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€10"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_purple",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Max bet:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€5"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_grass",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:a.jsx("svg",{children:a.jsx("use",{xlinkHref:"#check-grass"})})}),a.jsx("span",{className:"tags-casino-card__item-value",children:"Safe"})]})]}),a.jsxs("div",{className:"casino-card__content",children:[a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:"Stake Casino"}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx("img",{src:y,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:"4.8"})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx("img",{src:C,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:"34K"})]})]}),a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:"Crazy Cash Bomb Winnings $1,000,"})]})]})})}),a.jsx(k,{children:a.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsxs("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[a.jsx("div",{className:"casino-card__image ibg",children:a.jsx("img",{src:W,alt:"Big Fat Race to$100 Moon coins",loading:"lazy"})}),a.jsx("a",{rel:"nofollow noopener",href:"",target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),a.jsxs("div",{className:"casino-card__tags tags-casino-card",children:[a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_green",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"WR:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"4.0x"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_blue",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Min Dep:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€10"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_purple",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Max bet:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€5"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_grass",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:a.jsx("svg",{children:a.jsx("use",{xlinkHref:"#check-grass"})})}),a.jsx("span",{className:"tags-casino-card__item-value",children:"Safe"})]})]}),a.jsxs("div",{className:"casino-card__content",children:[a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:"Stake Casino"}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx(E.LazyLoadImage,{src:y,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:"4.8"})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx(E.LazyLoadImage,{src:C,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:"34K"})]})]}),a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:"Big Fat Race to $100 Moon coins"})]})]})})}),a.jsx(k,{children:a.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsxs("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[a.jsx("div",{className:"casino-card__image ibg",children:a.jsx("img",{src:X,alt:"New Year Bet Race - $30,000 Rocket Launcher With 10x Scope",loading:"lazy"})}),a.jsx("a",{rel:"nofollow noopener",href:"",target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),a.jsxs("div",{className:"casino-card__tags tags-casino-card",children:[a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_green",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"WR:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"4.0x"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_blue",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Min Dep:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€10"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_purple",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Max bet:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€5"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_grass",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:a.jsx("svg",{children:a.jsx("use",{xlinkHref:"#check-grass"})})}),a.jsx("span",{className:"tags-casino-card__item-value",children:"Safe"})]})]}),a.jsxs("div",{className:"casino-card__content",children:[a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:"Stake Casino"}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx("img",{src:y,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:"4.8"})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx("img",{src:C,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:"34K"})]})]}),a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:"New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"})]})]})})}),a.jsx(k,{children:a.jsx("div",{className:"slider__slide slide-slider swiper-slide",children:a.jsxs("div",{className:"slide-slider__item casino-card",children:[a.jsxs("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__image-block",children:[a.jsx("div",{className:"casino-card__image ibg",children:a.jsx("img",{src:U,alt:"New Year Bet Race - $30,000 Rocket Launcher With 10x Scope",loading:"lazy"})}),a.jsx("a",{rel:"nofollow noopener",href:"",target:"_blank","aria-label":"Put your description here.",className:"casino-card__bnt",children:"Play"})]}),a.jsxs("div",{className:"casino-card__tags tags-casino-card",children:[a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_green",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"WR:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"4.0x"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_blue",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Min Dep:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€10"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_purple",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:"Max bet:"}),a.jsx("span",{className:"tags-casino-card__item-value",children:"€5"})]}),a.jsxs("div",{className:"tags-casino-card__item tags-casino-card__item_grass",children:[a.jsx("span",{className:"tags-casino-card__item-label",children:a.jsx("svg",{children:a.jsx("use",{xlinkHref:"#check-grass"})})}),a.jsx("span",{className:"tags-casino-card__item-value",children:"Safe"})]})]}),a.jsxs("div",{className:"casino-card__content",children:[a.jsxs("div",{className:"casino-card__info info-casino-card",children:[a.jsxs("div",{className:"info-casino-card__stake",children:[a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"info-casino-card__stake-link",children:"Stake Casino"}),a.jsxs("div",{className:"info-casino-card__stake-rating",children:[a.jsx("span",{className:"info-casino-card__stake-rating-icon",children:a.jsx("img",{src:y,alt:"star"})}),a.jsx("span",{className:"info-casino-card__stake__rating-number",children:"4.8"})]})]}),a.jsxs("div",{className:"info-casino-card__likes",children:[a.jsx("span",{className:"info-casino-card__likes-icon",children:a.jsx("img",{src:C,alt:"like"})}),a.jsx("span",{className:"info-casino-card__likes-number",children:"34K"})]})]}),a.jsx("a",{rel:"nofollow noopener",href:"","aria-label":"Put your description here.",target:"_blank",className:"casino-card__name",children:"New Year Bet Race - $30,000 Rocket Launcher With 10x Scope"})]})]})})})]})})})}),a.jsx("div",{className:"slider__bottom bottom-slider",children:a.jsx("div",{ref:o,id:"#more-staket-simple-bonus__pagination",className:"bottom-slider__pagination more-staket-simple-bonus__pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"})})]})]})})};export{aa as default};