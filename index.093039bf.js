var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n({name:t,capital:n,population:e,flags:o,languages:i}){return`<div class="country-info">\n        <div class="country-logo">\n            <img src="${o.svg}" alt="{{name}}"></img>\n            <h2 class="country-logo-tittle">${t}</h2>\n        </div>\n        <div class="card-body">\n            <p class="body-text">Name: ${n}</p>\n            <p class="body-text">Population: ${e}</p>\n            <p class="body-text">Languages: ${i}</p>\n        </div>\n    </div>`}const e={inputRef:document.querySelector("input#search-box"),cardInfo:document.querySelector(".country-info")};var o={},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,l=f||s||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return l.Date.now()};function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=c.test(t);return e||u.test(t)?a(t.slice(2),e?2:8):r.test(t)?NaN:+t}o=function(t,n,e){var o,i,r,c,u,a,f=0,s=!1,l=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=o,r=i;return o=i=void 0,f=n,c=t.apply(r,e)}function h(t){return f=t,u=setTimeout(x,n),s?m(t):c}function j(t){var e=t-a;return void 0===a||e>=n||e<0||l&&t-f>=r}function x(){var t=y();if(j(t))return T(t);u=setTimeout(x,function(t){var e=n-(t-a);return l?v(e,r-(t-f)):e}(t))}function T(t){return u=void 0,d&&o?m(t):(o=i=void 0,c)}function $(){var t=y(),e=j(t);if(o=arguments,i=this,a=t,e){if(void 0===u)return h(a);if(l)return u=setTimeout(x,n),m(a)}return void 0===u&&(u=setTimeout(x,n)),c}return n=b(n)||0,g(e)&&(s=!!e.leading,r=(l="maxWait"in e)?p(b(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),$.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=a=i=u=void 0},$.flush=function(){return void 0===u?c:T(y())},$},e.inputRef.addEventListener("input",o((function(t){const o=e.inputRef;console.log(o),fetch("https://restcountries.com/v3.1/name/{name}").then((t=>t.json())).then((t=>{console.log(t)})).catch((t=>{console.log(t)})).then((t=>{const o=n(t);e.cardInfo.innerHTML=o})).catch((t=>{console.log(t)}))}),300));
//# sourceMappingURL=index.093039bf.js.map
