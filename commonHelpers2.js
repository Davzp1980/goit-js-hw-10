import{i as l}from"./assets/bi_x-octagon-10af1a38.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const c="/goit-js-hw-10/assets/bi_check2-circle-286069d5.svg",o=document.querySelector(".form");o.addEventListener("submit",t=>{t.preventDefault();const s=o.elements.delay.value,i=o.elements.state.value;(e=>new Promise((n,m)=>{setTimeout(()=>{i==="fulfilled"?n(e):m(e)},e)}))(s).then(e=>a(e)).catch(e=>u(e)),o.reset()});function a(t){return r.show({iconUrl:c,backgroundColor:"#59a10d",message:`Fulfilled promise in ${t}ms`,position:"topCenter"})}function u(t){return r.show({iconUrl:l,backgroundColor:"#ef4040",message:`Rejected promise in ${t}ms`,position:"topCenter"})}
//# sourceMappingURL=commonHelpers2.js.map
