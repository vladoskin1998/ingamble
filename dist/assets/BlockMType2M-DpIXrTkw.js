import{r as x,B as Es,j as n,S as Fs,a as As,L as i,s as o,c as j,b as y}from"./index-IJv12g3l.js";import{P as Gs}from"./pagination-H6QBCFzy.js";/* empty css               *//* empty css                   */import{S as Hs}from"./SeeAllButton-zNX82IER.js";import{L as N}from"./LazyCardImg-C0JDTlkT.js";function Ys({data:a,lazyLoadImg:Js="lazy"}){var g,k,v,w,t,$,P,I,B,q;const b=x.useRef(null),c=x.useRef(null);return x.useEffect(()=>{var s;if(b!=null&&b.current&&(c!=null&&c.current)){const r=(s=b==null?void 0:b.current)==null?void 0:s.swiper;r&&(c!=null&&c.current)&&(r.params.pagination.el=c==null?void 0:c.current,r.pagination.init(),r.pagination.render(),r.pagination.update())}},[]),!a||((g=a==null?void 0:a.items_block)==null?void 0:g.type_block)!==Es.BlockType2M?n.jsx(n.Fragment,{}):n.jsx("section",{"aria-label":"BlockTypeNumber.BlockType2M",className:"main-gamble__payn-play-casinos payn-play-casinos-gamble",children:n.jsxs("div",{className:"payn-play-casinos-gamble__container container",children:[n.jsx("div",{className:"vpn-friendly-casinos-2-gamble__top top",children:n.jsxs("div",{className:"top__row",children:[n.jsxs("div",{className:"top__column",children:[n.jsxs("div",{className:"top__title-block",children:[((k=a==null?void 0:a.items_block)==null?void 0:k.title_image)&&n.jsx("span",{className:"top__title-icon",children:n.jsx("img",{src:(v=a==null?void 0:a.items_block)==null?void 0:v.title_image,alt:"security"})}),n.jsx("h2",{className:"top__title",children:(w=a==null?void 0:a.items_block)==null?void 0:w.block_title})]}),a.items_block.subtitle&&n.jsx("div",{className:"top__subtitle",children:(t=a==null?void 0:a.items_block)==null?void 0:t.subtitle})]}),n.jsx("div",{className:"top__column",children:n.jsx(Hs,{type_category:($=a==null?void 0:a.items_block)==null?void 0:$.type_category,parameter:((I=(P=a==null?void 0:a.items_block)==null?void 0:P.category)==null?void 0:I.name)||"",id:(q=(B=a==null?void 0:a.items_block)==null?void 0:B.category)==null?void 0:q.id})})]})}),n.jsxs("div",{className:"payn-play-casinos-gamble__slider slider",children:[n.jsx("div",{className:"slider__body",children:n.jsx("div",{className:"payn-play-casinos-gamble__swiper slider__swiper swiper",children:n.jsx(Fs,{ref:b,className:"slider__wrapper swiper-wrapper",slidesPerView:"auto",modules:[Gs],pagination:{el:c.current,clickable:!0},breakpoints:{320:{spaceBetween:16},1650.98:{spaceBetween:20},1920:{spaceBetween:20}},children:a.items_block.data_cards.reduce((s,r,h)=>(h%3===0?s.push([r]):s[s.length-1].push(r),s),[]).map(s=>{var r,h,z,L,S,T,C,M,V,D,E,F,A,G,H,J,K,O,Q,U,W,X,Y,Z,R,m,ss,ns,as,os,cs,rs,is,ls,es,_s,ds,fs,us,ps,bs,hs,xs,js,ys,Ns,gs,ks,vs,ws,ts,$s,Ps,Is,Bs,qs,zs,Ls,Ss,Ts,Cs,Ms,Vs,Ds;return n.jsx(As,{children:n.jsxs("div",{className:"slider__slide slide-slider slide-slider-column slide-slider-column_standart swiper-slide",children:[n.jsx("div",{className:"slide-slider__item slide-slider__item-column slide-slider__item-column_standart",children:n.jsx("div",{className:"different-casino-standart",children:n.jsxs("div",{className:"different-casino-standart__body",children:[n.jsx(i,{to:`/casino/${o((h=(r=s==null?void 0:s[0])==null?void 0:r.casino_info)==null?void 0:h.casino_name)}?queryId=${(L=(z=s==null?void 0:s[0])==null?void 0:z.casino_info)==null?void 0:L.casino_id}`,className:"different-casino-standart__image-block",children:n.jsx("span",{className:"different-casino-standart__image ibg--custom",children:n.jsx(N,{img:(s==null?void 0:s[0].casino_info.casino_image)||"",size:"medium",imgLoading:"lazy"})})}),n.jsxs("div",{className:"different-casino-standart__content",children:[n.jsxs("div",{className:"different-casino-standart__content-row",children:[n.jsx(i,{rel:"nofollow noopener",to:`/casino/${o((T=(S=s==null?void 0:s[0])==null?void 0:S.casino_info)==null?void 0:T.casino_name)}?queryId=${(M=(C=s==null?void 0:s[0])==null?void 0:C.casino_info)==null?void 0:M.casino_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__name",children:(D=(V=s==null?void 0:s[0])==null?void 0:V.casino_info)==null?void 0:D.casino_name}),n.jsx("div",{className:"different-casino-standart__info",children:n.jsx(i,{to:`/casino/${o((F=(E=s==null?void 0:s[0])==null?void 0:E.casino_info)==null?void 0:F.casino_name)}/bonuses/${o((G=(A=s==null?void 0:s[0])==null?void 0:A.bonus_info)==null?void 0:G.bonus_name)}?queryId=${(J=(H=s==null?void 0:s[0])==null?void 0:H.bonus_info)==null?void 0:J.bonus_id}`,rel:"nofollow noopener","aria-label":"Put your description here.",className:"different-casino-standart__info-link",children:(O=(K=s==null?void 0:s[0])==null?void 0:K.bonus_info)==null?void 0:O.bonus_name})})]}),n.jsx("a",{href:j((U=(Q=s==null?void 0:s[0])==null?void 0:Q.casino_info)==null?void 0:U.casino_name),onClick:l=>{var e,_,d,f,u,p;l.stopPropagation(),l.preventDefault(),y((_=(e=s==null?void 0:s[0])==null?void 0:e.casino_info)==null?void 0:_.casino_affiliate_link),window.open(((f=(d=s==null?void 0:s[0])==null?void 0:d.casino_info)==null?void 0:f.casino_affiliate_link)||((p=(u=s==null?void 0:s[0])==null?void 0:u.casino_info)==null?void 0:p.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"different-casino-standart__btn-visit",children:"Visit"})]})]})})}),n.jsx("div",{className:"slide-slider__item slide-slider__item-column slide-slider__item-column_standart",children:n.jsx("div",{className:"different-casino-standart",children:n.jsxs("div",{className:"different-casino-standart__body",children:[n.jsx(i,{to:`/casino/${o((X=(W=s==null?void 0:s[1])==null?void 0:W.casino_info)==null?void 0:X.casino_name)}?queryId=${(Z=(Y=s==null?void 0:s[1])==null?void 0:Y.casino_info)==null?void 0:Z.casino_id}`,className:"different-casino-standart__image-block",children:n.jsx("span",{className:"different-casino-standart__image ibg--custom",children:n.jsx(N,{img:((m=(R=s==null?void 0:s[1])==null?void 0:R.casino_info)==null?void 0:m.casino_image)||"",size:"medium"})})}),n.jsxs("div",{className:"different-casino-standart__content",children:[n.jsxs("div",{className:"different-casino-standart__content-row",children:[n.jsx(i,{to:`/casino/${o((ns=(ss=s==null?void 0:s[1])==null?void 0:ss.casino_info)==null?void 0:ns.casino_name)}?queryId=${(os=(as=s==null?void 0:s[1])==null?void 0:as.casino_info)==null?void 0:os.casino_id}`,rel:"nofollow noopener","aria-label":"Put your description here.",className:"different-casino-standart__name",children:(rs=(cs=s==null?void 0:s[1])==null?void 0:cs.casino_info)==null?void 0:rs.casino_name}),n.jsx("div",{className:"different-casino-standart__info",children:n.jsx(i,{rel:"nofollow noopener",to:`/casino/${o((ls=(is=s==null?void 0:s[1])==null?void 0:is.casino_info)==null?void 0:ls.casino_name)}/bonuses/${o((_s=(es=s==null?void 0:s[1])==null?void 0:es.bonus_info)==null?void 0:_s.bonus_name)}?queryId=${(fs=(ds=s==null?void 0:s[1])==null?void 0:ds.bonus_info)==null?void 0:fs.bonus_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__info-link",children:(ps=(us=s==null?void 0:s[1])==null?void 0:us.bonus_info)==null?void 0:ps.bonus_name})})]}),n.jsx("a",{href:j((hs=(bs=s==null?void 0:s[1])==null?void 0:bs.casino_info)==null?void 0:hs.casino_name),onClick:l=>{var e,_,d,f,u,p;l.stopPropagation(),l.preventDefault(),y((_=(e=s==null?void 0:s[1])==null?void 0:e.casino_info)==null?void 0:_.casino_affiliate_link),window.open(((f=(d=s==null?void 0:s[1])==null?void 0:d.casino_info)==null?void 0:f.casino_affiliate_link)||((p=(u=s==null?void 0:s[1])==null?void 0:u.casino_info)==null?void 0:p.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"different-casino-standart__btn-visit",children:"Visit"})]})]})})}),n.jsx("div",{className:"slide-slider__item slide-slider__item-column slide-slider__item-column_standart",children:n.jsx("div",{className:"different-casino-standart",children:n.jsxs("div",{className:"different-casino-standart__body",children:[n.jsx(i,{to:`/casino/${o((js=(xs=s==null?void 0:s[2])==null?void 0:xs.casino_info)==null?void 0:js.casino_name)}?queryId=${(Ns=(ys=s==null?void 0:s[2])==null?void 0:ys.casino_info)==null?void 0:Ns.casino_id}`,className:"different-casino-standart__image-block",children:n.jsx("span",{className:"different-casino-standart__image ibg--custom",children:n.jsx(N,{img:((ks=(gs=s==null?void 0:s[2])==null?void 0:gs.casino_info)==null?void 0:ks.casino_image)||"",size:"medium"})})}),n.jsxs("div",{className:"different-casino-standart__content",children:[n.jsxs("div",{className:"different-casino-standart__content-row",children:[n.jsx(i,{rel:"nofollow noopener",to:`/casino/${o((ws=(vs=s==null?void 0:s[2])==null?void 0:vs.casino_info)==null?void 0:ws.casino_name)}?queryId=${($s=(ts=s==null?void 0:s[2])==null?void 0:ts.casino_info)==null?void 0:$s.casino_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__name",children:(Is=(Ps=s==null?void 0:s[2])==null?void 0:Ps.casino_info)==null?void 0:Is.casino_name}),n.jsx("div",{className:"different-casino-standart__info",children:n.jsx(i,{rel:"nofollow noopener",to:`/casino/${o((qs=(Bs=s==null?void 0:s[1])==null?void 0:Bs.casino_info)==null?void 0:qs.casino_name)}/bonuses/${o((Ls=(zs=s==null?void 0:s[2])==null?void 0:zs.bonus_info)==null?void 0:Ls.bonus_name)}?queryId=${(Ts=(Ss=s==null?void 0:s[2])==null?void 0:Ss.bonus_info)==null?void 0:Ts.bonus_id}`,"aria-label":"Put your description here.",className:"different-casino-standart__info-link",children:(Ms=(Cs=s==null?void 0:s[2])==null?void 0:Cs.bonus_info)==null?void 0:Ms.bonus_name})})]}),n.jsx("a",{href:j((Ds=(Vs=s==null?void 0:s[2])==null?void 0:Vs.casino_info)==null?void 0:Ds.casino_name),onClick:l=>{var e,_,d,f,u,p;l.stopPropagation(),l.preventDefault(),y((_=(e=s==null?void 0:s[2])==null?void 0:e.casino_info)==null?void 0:_.casino_affiliate_link),window.open(((f=(d=s==null?void 0:s[2])==null?void 0:d.casino_info)==null?void 0:f.casino_affiliate_link)||((p=(u=s==null?void 0:s[2])==null?void 0:u.casino_info)==null?void 0:p.url_casino),"_blank","noopener,noreferrer")},"aria-label":"Put your description here.",className:"different-casino-standart__btn-visit",children:"Visit"})]})]})})})]})})})})})}),n.jsx("div",{className:"slider__bottom bottom-slider",children:n.jsx("div",{ref:c,className:"bottom-slider__pagination payn-play-casinos-gamble__pagination swiper-pagination"})})]})]})})}export{Ys as default};
