import{r,j as e,p as i,L as t,E as y,$ as N}from"./index-C52nmlfn.js";const C="data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200.545898C3.85786%200.545898%200.5%203.90376%200.5%208.0459C0.5%2012.188%203.85786%2015.5459%208%2015.5459C12.1421%2015.5459%2015.5%2012.188%2015.5%208.0459C15.5%203.90376%2012.1421%200.545898%208%200.545898Z'%20stroke='%23ACE54E'/%3e%3cpath%20d='M5%208.0458L7.21053%2010.1458L11%205.9458'%20stroke='%23ACE54E'%20strokeWidth='1.5'%20strokeLinecap='round'%20strokeLinejoin='round'/%3e%3c/svg%3e",S="data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200.545898C3.85786%200.545898%200.5%203.90376%200.5%208.0459C0.5%2012.188%203.85786%2015.5459%208%2015.5459C12.1421%2015.5459%2015.5%2012.188%2015.5%208.0459C15.5%203.90376%2012.1421%200.545898%208%200.545898Z'%20stroke='%23FF3232'/%3e%3cpath%20d='M8%204.5459L8%208.5459'%20stroke='%23FF3232'%20strokeWidth='1.5'%20strokeLinecap='round'/%3e%3cpath%20d='M8%2011.0459L8%2011.5459'%20stroke='%23FF3232'%20strokeWidth='1.5'%20strokeLinecap='round'/%3e%3c/svg%3e",L="/assets/08-BS9aSs5x.webp",w="/assets/11-BJzdFpV8.jpg",E=async s=>{N.post("save-user-email/",{email:s})};function F(){const[s,a]=r.useState(""),[d,h]=r.useState(!1),[_,n]=r.useState(!1),[o,f]=r.useState(!1),[x,p]=r.useState(!1),[l,m]=r.useState(!1),[g,u]=r.useState(!1),j=c=>{a(c.target.value)},v=c=>{if(c.preventDefault(),!o){p(!0);return}b(s)&&o?(h(!0),u(!0),E(s),setTimeout(()=>{u(!1),a("")},5e3),n(!1)):n(!0)},b=c=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(c).toLowerCase()),k=()=>{f(!o)};return e.jsx("div",{className:"main-gamble__subscribe subscribe",children:e.jsx("div",{className:"subscribe__container container",children:e.jsxs("div",{className:"subscribe__body",children:[e.jsxs("div",{className:"subscribe__bg",children:[e.jsx(i.LazyLoadImage,{src:L,alt:"bg"}),e.jsx(i.LazyLoadImage,{src:w,alt:"bg"})]}),e.jsxs("div",{className:"subscribe__row",children:[e.jsxs("div",{className:"subscribe__column",children:[e.jsx(t,{to:"/","aria-label":"Put your description here.",rel:"noopener noreferrer",className:"subscribe__logo",children:e.jsx(i.LazyLoadImage,{src:y,alt:"logo"})}),e.jsxs("div",{className:"subscribe__content",children:[e.jsxs("div",{className:"subscribe__title",children:[e.jsx("span",{children:"Subscribe"})," to our newsletter"]}),e.jsx("div",{className:"subscribe__text",children:e.jsx("p",{children:"Get the highest potential bonuses right into your inbox"})})]})]}),e.jsx("div",{className:"subscribe__column",children:e.jsxs("form",{onSubmit:v,className:"subscribe__form form-subscribe",children:[e.jsxs("div",{className:"form-subscribe__row",children:[e.jsxs("div",{className:`form-item form-subscribe__item item-form-subscribe ${l&&"focus"} ${s&&"filled"} ${s&&!b(s)&&!l&&"error"}`,children:[e.jsx("span",{className:"form-item__icon item-form-subscribe__icon",children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"#email"})})}),e.jsx("input",{placeholder:"Your e-mail...",autoComplete:"off",type:"email",name:"email",className:`item-form-subscribe__input form-item__input ${_?"input-error":""}`,value:g?"You have successfully subscribed!🎉":s,onChange:j,required:!0,onFocus:()=>m(!0),onBlur:()=>m(!1)}),e.jsx("button",{className:"form-item__icon form-item__icon_delete item-form-subscribe__icon_delete",onClick:()=>a(""),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"#delete"})})}),d&&e.jsx("span",{className:"form-item__icon form-item__icon_confired",children:e.jsx(i.LazyLoadImage,{src:C,alt:"check"})}),e.jsx("span",{className:"form-item__icon form-item__icon_error",children:e.jsx(i.LazyLoadImage,{src:S,alt:"error"})})]}),e.jsx("button",{type:"submit",className:"form-subscribe__btn",children:"Subscribe"})]}),e.jsx("div",{className:"form-subscribe__bottom",children:e.jsxs("div",{className:"form-subscribe__checkbox",children:[e.jsx("input",{id:"formAgreement",type:"checkbox",name:"agreement",className:"form-subscribe__checkbox-input ",checked:o,onChange:k}),e.jsx("label",{htmlFor:"formAgreement",className:`form-subscribe__checkbox-label ${x&&"active"}`,children:e.jsxs("span",{children:["Feel free to unsubscribe anytime. Check our"," ",e.jsx(t,{to:"/privacy-policy","aria-label":"Terms of use",rel:"noopener noreferrer",children:"Terms of use"})," ","and"," ",e.jsx(t,{to:"/privacy-policy","aria-label":"Privacy Policy",rel:"noopener noreferrer",children:"Privacy Policy"})," ","here."]})})]})})]})})]})]})})})}const z=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{F as S,z as a,L as b};
