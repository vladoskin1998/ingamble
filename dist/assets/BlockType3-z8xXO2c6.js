import{r as I,E as qs,j as n,F as Ps,S as ts,a as Bs,L as r,s as c,b as q,C as Is,f as E,P as Ls,c as Es,d as zs}from"./index-DekCsLi4.js";function Cs({data:a}){var z,T,C,F,A,O,V,D,G,H,W;const e=I.useRef(null),l=I.useRef(null),[Ss,S]=I.useState("auto");return I.useEffect(()=>{const s=()=>{const o=window.innerWidth;o<1020?S("auto"):o<1220?S(1):o<1600?S(2):o>2100&&S(3)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),I.useEffect(()=>{var s;if(e!=null&&e.current&&(l!=null&&l.current)){const o=(s=e==null?void 0:e.current)==null?void 0:s.swiper;o&&(l!=null&&l.current)&&(o.params.pagination.el=l.current,o.pagination.init(),o.pagination.render(),o.pagination.update())}},[]),!a||a.items_block.type_block!==qs.BlockType3?n.jsx(n.Fragment,{}):n.jsx("section",{"aria-label":"BlockTypeNumber.BlockType3",className:"main-gamble__top-gainers-casinos top-gainers-casinos-gamble main-gamble__baner-block",children:n.jsxs("div",{className:"top-gainers-casinos-gamble__container container",children:[n.jsx("div",{className:"top-gainers-casinos-gamble__top top",children:n.jsxs("div",{className:"top__row",children:[n.jsxs("div",{className:"top__column",children:[n.jsxs("div",{className:"top__title-block",children:[((z=a==null?void 0:a.items_block)==null?void 0:z.title_image)&&n.jsx("span",{className:"top__title-icon",children:n.jsx("img",{src:(T=a==null?void 0:a.items_block)==null?void 0:T.title_image,alt:"security"})}),n.jsx("h2",{className:"top__title",children:(C=a==null?void 0:a.items_block)==null?void 0:C.block_title})]}),((F=a==null?void 0:a.items_block)==null?void 0:F.subtitle)&&n.jsx("div",{className:"top__subtitle",children:(A=a==null?void 0:a.items_block)==null?void 0:A.subtitle})]}),n.jsx("div",{className:"top__column",children:n.jsx(Ps,{type_category:(O=a==null?void 0:a.items_block)==null?void 0:O.type_category,parameter:((D=(V=a==null?void 0:a.items_block)==null?void 0:V.category)==null?void 0:D.name)||"",id:(H=(G=a==null?void 0:a.items_block)==null?void 0:G.category)==null?void 0:H.id})})]})}),n.jsxs("div",{className:"top-gainers-casinos-gamble__row main-gamble__row-block row-block row-block__right",children:[n.jsx("div",{className:"top-gainers-casinos-gamble__slider row-block__slider slider",children:n.jsx("div",{className:"slider__body",style:{overflow:"hidden"},children:n.jsx("div",{className:"top-gainers-casinos-gamble__swiper slider__swiper swiper",children:n.jsx(ts,{slidesPerView:Ss,className:"slider__wrapper swiper-wrapper",breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:(W=a==null?void 0:a.items_block)==null?void 0:W.data_cards.filter(s=>!(s!=null&&s.big_card)).reduce((s,o,i)=>(i%2===0?s.push([o]):s[(s==null?void 0:s.length)-1].push(o),s),[]).map(s=>{var o,i,_,d,b,f,h,u,p,g,x,j,w,N,k,v,y,$,t,B,J,K,M,Q,U,X,Y,Z,R,m,ss,ns,as,os,cs,rs,ls,es,is,_s,ds,bs,fs,hs,us,ps,gs,xs,js,ws,Ns,ks,vs,ys,$s;return n.jsx(Bs,{className:"slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide",style:{minHeight:"260px",height:"100%"},children:n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"slide-slider__item slide-slider__item-column slide-slider__item-column",children:n.jsx("div",{className:"different-casino-standart",children:n.jsxs("div",{className:"different-casino-standart__body",children:[n.jsx("div",{className:"different-casino-standart__image-block",children:n.jsx(r,{to:`/casino/${c((i=(o=s==null?void 0:s[0])==null?void 0:o.casino_info)==null?void 0:i.casino_name)}?queryId=${(d=(_=s==null?void 0:s[0])==null?void 0:_.casino_info)==null?void 0:d.casino_id}`,className:"different-casino-standart__image ibg--custom",children:n.jsx(q,{img:((f=(b=s==null?void 0:s[0])==null?void 0:b.casino_info)==null?void 0:f.casino_image)||"",width:"100%",height:"100%"})})}),n.jsx("div",{className:"different-casino-standart__content",children:n.jsxs("div",{className:"different-casino-standart__content-row",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((u=(h=s==null?void 0:s[0])==null?void 0:h.casino_info)==null?void 0:u.casino_name)}/bonuses/${c((g=(p=s==null?void 0:s[0])==null?void 0:p.bonus_info)==null?void 0:g.bonus_name)}?queryId=${(j=(x=s==null?void 0:s[0])==null?void 0:x.bonus_info)==null?void 0:j.bonus_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__name",children:(N=(w=s==null?void 0:s[0])==null?void 0:w.bonus_info)==null?void 0:N.bonus_name}),((y=(v=(k=s==null?void 0:s[0])==null?void 0:k.bonus_info)==null?void 0:v.labels)==null?void 0:y.length)&&n.jsx("div",{className:"different-casino-standart__tags tags-casino-card",children:(B=(t=($=s==null?void 0:s[0])==null?void 0:$.bonus_info)==null?void 0:t.labels)==null?void 0:B.map((P,L)=>n.jsx("div",{className:`tags-casino-card__item ${Is[L%4]}`,children:n.jsx("span",{className:"tags-casino-card__item-label",children:P})}))}),n.jsxs("div",{className:"info-casino-card__stake",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((K=(J=s==null?void 0:s[0])==null?void 0:J.casino_info)==null?void 0:K.casino_name)}?queryId=${(Q=(M=s==null?void 0:s[0])==null?void 0:M.casino_info)==null?void 0:Q.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:(X=(U=s==null?void 0:s[0])==null?void 0:U.casino_info)==null?void 0:X.casino_name}),n.jsxs("div",{className:"info-casino-card__stake-rating",children:[n.jsx("span",{className:"info-casino-card__stake-rating-icon",children:n.jsx("img",{src:E,alt:"star"})}),n.jsx("span",{className:"info-casino-card__stake__rating-number",children:(Z=(Y=s==null?void 0:s[0])==null?void 0:Y.casino_info)==null?void 0:Z.casino_rank})]})]})]})})]})})}),(s==null?void 0:s[1])&&n.jsx("div",{className:"slide-slider__item slide-slider__item-column slide-slider__item-column",children:n.jsx("div",{className:"different-casino-standart",children:n.jsxs("div",{className:"different-casino-standart__body",children:[n.jsx("div",{className:"different-casino-standart__image-block",children:n.jsx(r,{className:"different-casino-standart__image ibg--custom",to:`/casino/${c((m=(R=s==null?void 0:s[1])==null?void 0:R.casino_info)==null?void 0:m.casino_name)}?queryId=${(ns=(ss=s==null?void 0:s[1])==null?void 0:ss.casino_info)==null?void 0:ns.casino_id}`,children:n.jsx(q,{img:((os=(as=s==null?void 0:s[1])==null?void 0:as.casino_info)==null?void 0:os.casino_image)||"",height:"100%",width:"100%"})})}),n.jsx("div",{className:"different-casino-standart__content",children:n.jsxs("div",{className:"different-casino-standart__content-row",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((rs=(cs=s==null?void 0:s[1])==null?void 0:cs.casino_info)==null?void 0:rs.casino_name)}/bonuses/${c((es=(ls=s==null?void 0:s[1])==null?void 0:ls.bonus_info)==null?void 0:es.bonus_name)}?queryId=${(_s=(is=s==null?void 0:s[1])==null?void 0:is.bonus_info)==null?void 0:_s.bonus_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__name",children:(bs=(ds=s==null?void 0:s[1])==null?void 0:ds.bonus_info)==null?void 0:bs.bonus_name}),((hs=(fs=s==null?void 0:s[1].bonus_info)==null?void 0:fs.labels)==null?void 0:hs.length)&&n.jsx("div",{className:"different-casino-standart__tags tags-casino-card",children:(gs=(ps=(us=s==null?void 0:s[1])==null?void 0:us.bonus_info)==null?void 0:ps.labels)==null?void 0:gs.map((P,L)=>n.jsx("div",{className:`tags-casino-card__item ${Is[L%4]}`,children:n.jsx("span",{className:"tags-casino-card__item-label",children:P})}))}),n.jsxs("div",{className:"info-casino-card__stake",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((js=(xs=s==null?void 0:s[1])==null?void 0:xs.casino_info)==null?void 0:js.casino_name)}?queryId=${(Ns=(ws=s==null?void 0:s[1])==null?void 0:ws.casino_info)==null?void 0:Ns.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:(vs=(ks=s==null?void 0:s[1])==null?void 0:ks.casino_info)==null?void 0:vs.casino_name}),n.jsxs("div",{className:"info-casino-card__stake-rating",children:[n.jsx("span",{className:"info-casino-card__stake-rating-icon",children:n.jsx("img",{src:E,alt:"star"})}),n.jsx("span",{className:"info-casino-card__stake__rating-number",children:($s=(ys=s==null?void 0:s[1])==null?void 0:ys.casino_info)==null?void 0:$s.casino_rank})]})]})]})})]})})})]})})})})})})}),n.jsx("div",{className:"row-block__baner row-block__baner_right baner-row-block",children:n.jsxs("div",{className:"baner-row-block__slider",children:[n.jsx("div",{className:"baner-row-block__slider-body",children:n.jsx("div",{className:"baner-row-block__swiper top-gainers-casinos-baner__swiper swiper",children:n.jsx("div",{className:"baner-row-block__wrapper swiper-wrapper",children:n.jsx(ts,{slidesPerView:1,ref:e,modules:[Ls],pagination:{el:l.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:a.items_block.data_cards.filter(s=>s.big_card).map(s=>{var o,i,_,d,b,f,h,u,p,g,x,j,w,N,k,v;return n.jsx(Bs,{className:"baner-row-block__slide slide-baner-row-block ",children:n.jsx(r,{to:`/casino/${c((o=s==null?void 0:s.casino_info)==null?void 0:o.casino_name)}/bonuses/${c((i=s==null?void 0:s.bonus_info)==null?void 0:i.bonus_name)}?queryId=${(_=s==null?void 0:s.bonus_info)==null?void 0:_.bonus_id}`,children:n.jsxs("div",{className:"slide-baner-row-block__item item-baner-row-block",children:[n.jsx("div",{className:"item-baner-row-block__image ibg--custom",children:n.jsx(q,{img:((d=s==null?void 0:s.bonus_info)==null?void 0:d.bonus_image)||"",height:"100%",width:"100%"})}),n.jsxs("div",{className:"item-baner-row-block__row",children:[n.jsxs("div",{className:"item-baner-row-block__column",children:[n.jsxs("div",{className:"item-baner-row-block__small-card casino-small-card",children:[n.jsx("div",{className:"casino-small-card__image-block",children:n.jsx(r,{className:"casino-small-card__image ibg--custom",to:`/casino/${c((b=s==null?void 0:s.casino_info)==null?void 0:b.casino_name)}?queryId=${(f=s==null?void 0:s.casino_info)==null?void 0:f.casino_id}`,children:n.jsx(q,{img:((h=s==null?void 0:s.casino_info)==null?void 0:h.casino_image)||"",size:"medium",height:"100%",width:"100%"})})}),n.jsxs("div",{className:"casino-small-card__body",children:[n.jsx(r,{className:"casino-small-card__name",to:`/casino/${c((u=s==null?void 0:s.casino_info)==null?void 0:u.casino_name)}?queryId=${(p=s==null?void 0:s.casino_info)==null?void 0:p.casino_id}`,children:(g=s==null?void 0:s.casino_info)==null?void 0:g.casino_name}),n.jsxs("div",{className:"casino-small-card__rating",children:[n.jsx("span",{className:"casino-small-card__rating-icon",children:n.jsx("img",{src:E,alt:"star"})}),n.jsx("span",{className:"casino-small-card__rating-number",children:(x=s==null?void 0:s.casino_info)==null?void 0:x.casino_rank})]})]})]}),n.jsx(r,{to:`/casino/${c((j=s==null?void 0:s.casino_info)==null?void 0:j.casino_name)}/bonuses/${c((w=s==null?void 0:s.bonus_info)==null?void 0:w.bonus_name)}?queryId=${(N=s==null?void 0:s.bonus_info)==null?void 0:N.bonus_id}`,className:"item-baner-row-block__title",children:(k=s==null?void 0:s.bonus_info)==null?void 0:k.bonus_name})]}),n.jsx("div",{className:"item-baner-row-block__column",children:n.jsx("a",{rel:"nofollow noopener",href:Es((v=s==null?void 0:s.casino_info)==null?void 0:v.casino_name),onClick:y=>{var $,t,B;y.stopPropagation(),y.preventDefault(),zs(($=s==null?void 0:s.casino_info)==null?void 0:$.casino_affiliate_link),window.open(((t=s==null?void 0:s.casino_info)==null?void 0:t.casino_affiliate_link)||((B=s==null?void 0:s.casino_info)==null?void 0:B.url_casino),"_blank","noopener,noreferrer")},className:"item-baner-row-block__btn casino-card__bnt",children:"Play"})})]})]})})})})})})})}),n.jsx("div",{className:"baner-row-block__slider-bottom",children:n.jsx("div",{ref:l,className:"baner-row-block__pagination bottom-slider__pagination top-gainers-casinos-baner__pagination swiper-pagination"})})]})})]})]})})}export{Cs as default};
