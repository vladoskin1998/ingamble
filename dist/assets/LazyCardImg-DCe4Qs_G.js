import{j as s,r as e}from"./index-yyE7bgY4.js";const o=({size:d})=>s.jsx("div",{className:`loader-body loader-body-size-${d}`,children:s.jsxs("div",{className:"lds-spinner",children:[s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{})]})}),l=e.memo(({img:d,size:i,width:a="auto",height:r,imgLoading:x="lazy"})=>{const[t,j]=e.useState(!0);return e.useEffect(()=>{d&&j(!1)},[d]),s.jsxs(s.Fragment,{children:[d?s.jsx(s.Fragment,{}):s.jsx(o,{size:i}),s.jsx("img",{src:d,alt:d,loading:x,style:{height:r,width:t?"0px":a}})]})});export{l as L};