import{r as q,B as qs,j as n,S as ts,a as Bs,L as r,s as c,C as Ss,c as Ps,b as Ls}from"./index-yyE7bgY4.js";import{s as E}from"./star-CJcP6Lxy.js";import{P as zs}from"./pagination-BstH5rUu.js";/* empty css               *//* empty css                   */import{L}from"./LazyCardImg-DCe4Qs_G.js";import{S as Es}from"./SeeAllButton-S1BCMlkp.js";function Gs({data:a}){var T,C,F,A,O,V,D,G,H,W,J;const i=q.useRef(null),l=q.useRef(null),[Is,P]=q.useState("auto");return q.useEffect(()=>{const s=()=>{const o=window.innerWidth;o<1020?P("auto"):o<1220?P(1):o<1600?P(2):o>2100&&P(3)};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]),q.useEffect(()=>{var s;if(i!=null&&i.current&&(l!=null&&l.current)){const o=(s=i==null?void 0:i.current)==null?void 0:s.swiper;o&&(l!=null&&l.current)&&(o.params.pagination.el=l.current,o.pagination.init(),o.pagination.render(),o.pagination.update())}},[]),!a||a.items_block.type_block!==qs.BlockType3?n.jsx(n.Fragment,{}):n.jsx("section",{"aria-label":"BlockTypeNumber.BlockType3",className:"main-gamble__top-gainers-casinos top-gainers-casinos-gamble main-gamble__baner-block",children:n.jsxs("div",{className:"top-gainers-casinos-gamble__container container",children:[n.jsx("div",{className:"top-gainers-casinos-gamble__top top",children:n.jsxs("div",{className:"top__row",children:[n.jsxs("div",{className:"top__column",children:[n.jsxs("div",{className:"top__title-block",children:[((T=a==null?void 0:a.items_block)==null?void 0:T.title_image)&&n.jsx("span",{className:"top__title-icon",children:n.jsx("img",{src:(C=a==null?void 0:a.items_block)==null?void 0:C.title_image,alt:"security"})}),n.jsx("h2",{className:"top__title",children:(F=a==null?void 0:a.items_block)==null?void 0:F.block_title})]}),((A=a==null?void 0:a.items_block)==null?void 0:A.subtitle)&&n.jsx("div",{className:"top__subtitle",children:(O=a==null?void 0:a.items_block)==null?void 0:O.subtitle})]}),n.jsx("div",{className:"top__column",children:n.jsx(Es,{type_category:(V=a==null?void 0:a.items_block)==null?void 0:V.type_category,parameter:((G=(D=a==null?void 0:a.items_block)==null?void 0:D.category)==null?void 0:G.name)||"",id:(W=(H=a==null?void 0:a.items_block)==null?void 0:H.category)==null?void 0:W.id})})]})}),n.jsxs("div",{className:"top-gainers-casinos-gamble__row main-gamble__row-block row-block row-block__right",children:[n.jsx("div",{className:"top-gainers-casinos-gamble__slider row-block__slider slider",children:n.jsx("div",{className:"slider__body",style:{overflow:"hidden"},children:n.jsx("div",{className:"top-gainers-casinos-gamble__swiper slider__swiper swiper",children:n.jsx(ts,{slidesPerView:Is,className:"slider__wrapper swiper-wrapper",breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:(J=a==null?void 0:a.items_block)==null?void 0:J.data_cards.filter(s=>!(s!=null&&s.big_card)).reduce((s,o,e)=>(e%2===0?s.push([o]):s[(s==null?void 0:s.length)-1].push(o),s),[]).map(s=>{var o,e,_,d,b,f,h,p,u,g,x,j,w,N,k,v,y,$,t,B,S,K,M,Q,U,X,Y,Z,R,m,ss,ns,as,os,cs,rs,ls,is,es,_s,ds,bs,fs,hs,ps,us,gs,xs,js,ws,Ns,ks,vs,ys,$s;return n.jsx(Bs,{className:"slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide",style:{minHeight:"260px",height:"100%"},children:n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"slide-slider__item slide-slider__item-column slide-slider__item-column",children:n.jsx("div",{className:"different-casino-standart",children:n.jsxs("div",{className:"different-casino-standart__body",children:[n.jsx("div",{className:"different-casino-standart__image-block",children:n.jsx(r,{to:`/casino/${c((e=(o=s==null?void 0:s[0])==null?void 0:o.casino_info)==null?void 0:e.casino_name)}?queryId=${(d=(_=s==null?void 0:s[0])==null?void 0:_.casino_info)==null?void 0:d.casino_id}`,className:"different-casino-standart__image ibg--custom",children:n.jsx(L,{img:((f=(b=s==null?void 0:s[0])==null?void 0:b.casino_info)==null?void 0:f.casino_image)||"",width:"100%",height:"100%"})})}),n.jsx("div",{className:"different-casino-standart__content",children:n.jsxs("div",{className:"different-casino-standart__content-row",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((p=(h=s==null?void 0:s[0])==null?void 0:h.casino_info)==null?void 0:p.casino_name)}/bonuses/${c((g=(u=s==null?void 0:s[0])==null?void 0:u.bonus_info)==null?void 0:g.bonus_name)}?queryId=${(j=(x=s==null?void 0:s[0])==null?void 0:x.bonus_info)==null?void 0:j.bonus_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__name",children:(N=(w=s==null?void 0:s[0])==null?void 0:w.bonus_info)==null?void 0:N.bonus_name}),((y=(v=(k=s==null?void 0:s[0])==null?void 0:k.bonus_info)==null?void 0:v.labels)==null?void 0:y.length)&&n.jsx("div",{className:"different-casino-standart__tags tags-casino-card",children:(B=(t=($=s==null?void 0:s[0])==null?void 0:$.bonus_info)==null?void 0:t.labels)==null?void 0:B.map((z,I)=>n.jsx("div",{className:`tags-casino-card__item ${Ss[I%4]}`,children:n.jsx("span",{className:"tags-casino-card__item-label",children:z})},I))}),n.jsxs("div",{className:"info-casino-card__stake",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((K=(S=s==null?void 0:s[0])==null?void 0:S.casino_info)==null?void 0:K.casino_name)}?queryId=${(Q=(M=s==null?void 0:s[0])==null?void 0:M.casino_info)==null?void 0:Q.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:(X=(U=s==null?void 0:s[0])==null?void 0:U.casino_info)==null?void 0:X.casino_name}),n.jsxs("div",{className:"info-casino-card__stake-rating",children:[n.jsx("span",{className:"info-casino-card__stake-rating-icon",children:n.jsx("img",{src:E,alt:"star"})}),n.jsx("span",{className:"info-casino-card__stake__rating-number",children:(Z=(Y=s==null?void 0:s[0])==null?void 0:Y.casino_info)==null?void 0:Z.casino_rank})]})]})]})})]})})}),(s==null?void 0:s[1])&&n.jsx("div",{className:"slide-slider__item slide-slider__item-column slide-slider__item-column",children:n.jsx("div",{className:"different-casino-standart",children:n.jsxs("div",{className:"different-casino-standart__body",children:[n.jsx("div",{className:"different-casino-standart__image-block",children:n.jsx(r,{className:"different-casino-standart__image ibg--custom",to:`/casino/${c((m=(R=s==null?void 0:s[1])==null?void 0:R.casino_info)==null?void 0:m.casino_name)}?queryId=${(ns=(ss=s==null?void 0:s[1])==null?void 0:ss.casino_info)==null?void 0:ns.casino_id}`,children:n.jsx(L,{img:((os=(as=s==null?void 0:s[1])==null?void 0:as.casino_info)==null?void 0:os.casino_image)||"",height:"100%",width:"100%"})})}),n.jsx("div",{className:"different-casino-standart__content",children:n.jsxs("div",{className:"different-casino-standart__content-row",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((rs=(cs=s==null?void 0:s[1])==null?void 0:cs.casino_info)==null?void 0:rs.casino_name)}/bonuses/${c((is=(ls=s==null?void 0:s[1])==null?void 0:ls.bonus_info)==null?void 0:is.bonus_name)}?queryId=${(_s=(es=s==null?void 0:s[1])==null?void 0:es.bonus_info)==null?void 0:_s.bonus_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__name",children:(bs=(ds=s==null?void 0:s[1])==null?void 0:ds.bonus_info)==null?void 0:bs.bonus_name}),((hs=(fs=s==null?void 0:s[1].bonus_info)==null?void 0:fs.labels)==null?void 0:hs.length)&&n.jsx("div",{className:"different-casino-standart__tags tags-casino-card",children:(gs=(us=(ps=s==null?void 0:s[1])==null?void 0:ps.bonus_info)==null?void 0:us.labels)==null?void 0:gs.map((z,I)=>n.jsx("div",{className:`tags-casino-card__item ${Ss[I%4]}`,children:n.jsx("span",{className:"tags-casino-card__item-label",children:z})},I))}),n.jsxs("div",{className:"info-casino-card__stake",children:[n.jsx(r,{rel:"nofollow noopener",to:`/casino/${c((js=(xs=s==null?void 0:s[1])==null?void 0:xs.casino_info)==null?void 0:js.casino_name)}?queryId=${(Ns=(ws=s==null?void 0:s[1])==null?void 0:ws.casino_info)==null?void 0:Ns.casino_id}`,"aria-label":"Put your description here.",className:"info-casino-card__stake-link",children:(vs=(ks=s==null?void 0:s[1])==null?void 0:ks.casino_info)==null?void 0:vs.casino_name}),n.jsxs("div",{className:"info-casino-card__stake-rating",children:[n.jsx("span",{className:"info-casino-card__stake-rating-icon",children:n.jsx("img",{src:E,alt:"star"})}),n.jsx("span",{className:"info-casino-card__stake__rating-number",children:($s=(ys=s==null?void 0:s[1])==null?void 0:ys.casino_info)==null?void 0:$s.casino_rank})]})]})]})})]})})})]})})})})})})}),n.jsx("div",{className:"row-block__baner row-block__baner_right baner-row-block",children:n.jsxs("div",{className:"baner-row-block__slider",children:[n.jsx("div",{className:"baner-row-block__slider-body",children:n.jsx("div",{className:"baner-row-block__swiper top-gainers-casinos-baner__swiper swiper",children:n.jsx("div",{className:"baner-row-block__wrapper swiper-wrapper",children:n.jsx(ts,{slidesPerView:1,ref:i,modules:[zs],pagination:{el:l.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:a.items_block.data_cards.filter(s=>s.big_card).map((s,o)=>{var e,_,d,b,f,h,p,u,g,x,j,w,N,k,v,y;return n.jsx(Bs,{className:"baner-row-block__slide slide-baner-row-block ",children:n.jsx(r,{to:`/casino/${c((e=s==null?void 0:s.casino_info)==null?void 0:e.casino_name)}/bonuses/${c((_=s==null?void 0:s.bonus_info)==null?void 0:_.bonus_name)}?queryId=${(d=s==null?void 0:s.bonus_info)==null?void 0:d.bonus_id}`,children:n.jsxs("div",{className:"slide-baner-row-block__item item-baner-row-block",children:[n.jsx("div",{className:"item-baner-row-block__image ibg--custom",children:n.jsx(L,{img:((b=s==null?void 0:s.bonus_info)==null?void 0:b.bonus_image)||"",height:"100%",width:"100%"})}),n.jsxs("div",{className:"item-baner-row-block__row",children:[n.jsxs("div",{className:"item-baner-row-block__column",children:[n.jsxs("div",{className:"item-baner-row-block__small-card casino-small-card",children:[n.jsx("div",{className:"casino-small-card__image-block",children:n.jsx(r,{className:"casino-small-card__image ibg--custom",to:`/casino/${c((f=s==null?void 0:s.casino_info)==null?void 0:f.casino_name)}?queryId=${(h=s==null?void 0:s.casino_info)==null?void 0:h.casino_id}`,children:n.jsx(L,{img:((p=s==null?void 0:s.casino_info)==null?void 0:p.casino_image)||"",size:"medium",height:"100%",width:"100%"})})}),n.jsxs("div",{className:"casino-small-card__body",children:[n.jsx(r,{className:"casino-small-card__name",to:`/casino/${c((u=s==null?void 0:s.casino_info)==null?void 0:u.casino_name)}?queryId=${(g=s==null?void 0:s.casino_info)==null?void 0:g.casino_id}`,children:(x=s==null?void 0:s.casino_info)==null?void 0:x.casino_name}),n.jsxs("div",{className:"casino-small-card__rating",children:[n.jsx("span",{className:"casino-small-card__rating-icon",children:n.jsx("img",{src:E,alt:"star"})}),n.jsx("span",{className:"casino-small-card__rating-number",children:(j=s==null?void 0:s.casino_info)==null?void 0:j.casino_rank})]})]})]}),n.jsx(r,{to:`/casino/${c((w=s==null?void 0:s.casino_info)==null?void 0:w.casino_name)}/bonuses/${c((N=s==null?void 0:s.bonus_info)==null?void 0:N.bonus_name)}?queryId=${(k=s==null?void 0:s.bonus_info)==null?void 0:k.bonus_id}`,className:"item-baner-row-block__title",children:(v=s==null?void 0:s.bonus_info)==null?void 0:v.bonus_name})]}),n.jsx("div",{className:"item-baner-row-block__column",children:n.jsx("a",{rel:"nofollow noopener",href:Ps((y=s==null?void 0:s.casino_info)==null?void 0:y.casino_name),onClick:$=>{var t,B,S;$.stopPropagation(),$.preventDefault(),Ls((t=s==null?void 0:s.casino_info)==null?void 0:t.casino_affiliate_link),window.open(((B=s==null?void 0:s.casino_info)==null?void 0:B.casino_affiliate_link)||((S=s==null?void 0:s.casino_info)==null?void 0:S.url_casino),"_blank","noopener,noreferrer")},className:"item-baner-row-block__btn casino-card__bnt",children:"Play"})})]})]})})},o)})})})})}),n.jsx("div",{className:"baner-row-block__slider-bottom",children:n.jsx("div",{ref:l,className:"baner-row-block__pagination bottom-slider__pagination top-gainers-casinos-baner__pagination swiper-pagination"})})]})})]})]})})}export{Gs as default};