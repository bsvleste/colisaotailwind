var m=Object.defineProperty;var s=(e,n)=>m(e,"name",{value:n,configurable:!0});import{r as o}from"./index.f0b6411c.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}s(a,"_extends");function x(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}s(x,"$6ed0406888f73fc4$var$setRef");function $(...e){return n=>e.forEach(t=>x(t,n))}s($,"$6ed0406888f73fc4$export$43e446d32b3d21af");const h=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e,l=o.exports.Children.toArray(t),c=l.find(b);if(c){const i=c.props.children,f=l.map(u=>u===c?o.exports.Children.count(i)>1?o.exports.Children.only(null):o.exports.isValidElement(i)?i.props.children:null:u);return o.exports.createElement(p,a({},r,{ref:n}),o.exports.isValidElement(i)?o.exports.cloneElement(i,void 0,f):null)}return o.exports.createElement(p,a({},r,{ref:n}),t)});h.displayName="Slot";const p=o.exports.forwardRef((e,n)=>{const{children:t,...r}=e;return o.exports.isValidElement(t)?o.exports.cloneElement(t,{...g(r,t.props),ref:$(n,t.ref)}):o.exports.Children.count(t)>1?o.exports.Children.only(null):null});p.displayName="SlotClone";const y=s(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function b(e){return o.exports.isValidElement(e)&&e.type===y}s(b,"$5e63c961fc1ce211$var$isSlottable");function g(e,n){const t={...n};for(const r in n){const l=e[r],c=n[r];/^on[A-Z]/.test(r)?l&&c?t[r]=(...f)=>{c(...f),l(...f)}:l&&(t[r]=l):r==="style"?t[r]={...l,...c}:r==="className"&&(t[r]=[l,c].filter(Boolean).join(" "))}return{...e,...t}}s(g,"$5e63c961fc1ce211$var$mergeProps");function d(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=d(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}s(d,"r");function C(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=d(e))&&(r&&(r+=" "),r+=n);return r}s(C,"clsx");export{h as $,C as c};
//# sourceMappingURL=clsx.m.4ccab594.js.map
