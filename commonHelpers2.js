import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const i="/goit-js-hw-10/assets/bi_check2-circle-286069d5.svg",o=document.querySelector(".form");o.addEventListener("submit",t=>{t.preventDefault();const r=o.elements.delay.value,n=o.elements.state.value;(e=>new Promise((m,l)=>{setTimeout(n==="fulfilled"?()=>{m(c(e))}:()=>{l(u(e))},e)}))(r).then(e=>e).catch(e=>e),o.reset()});function c(t){return s.show({iconUrl:i,backgroundColor:"#59a10d",message:`Fulfilled promise in ${t}ms`,position:"topCenter"})}function u(t){return s.show({iconUrl:i,backgroundColor:"#ef4040",message:`Rejected promise in ${t}ms`,position:"topCenter"})}
//# sourceMappingURL=commonHelpers2.js.map