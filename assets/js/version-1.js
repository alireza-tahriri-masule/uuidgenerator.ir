(()=>{"use strict";let e;const n=new Uint8Array(16);function t(){if(!e){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");e=crypto.getRandomValues.bind(crypto)}return e(n)}const o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));const s={};function r(e,n,t,o,s,r,c=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(r){if(c<0||c+16>r.length)throw new RangeError(`UUID byte range ${c}:${c+15} is out of buffer bounds`)}else r=new Uint8Array(16),c=0;n??=Date.now(),t??=0,o??=16383&(e[8]<<8|e[9]),s??=e.slice(10,16);const i=(1e4*(268435455&(n+=122192928e5))+t)%4294967296;r[c++]=i>>>24&255,r[c++]=i>>>16&255,r[c++]=i>>>8&255,r[c++]=255&i;const d=n/4294967296*1e4&268435455;r[c++]=d>>>8&255,r[c++]=255&d,r[c++]=d>>>24&15|16,r[c++]=d>>>16&255,r[c++]=o>>>8|128,r[c++]=255&o;for(let e=0;e<6;++e)r[c++]=s[e];return r}const c=function(e,n,c){let i;const d=e?._v6??!1;if(e){const n=Object.keys(e);1===n.length&&"_v6"===n[0]&&(e=void 0)}if(e)i=r(e.random??e.rng?.()??t(),e.msecs,e.nsecs,e.clockseq,e.node,n,c);else{const e=Date.now(),o=t();!function(e,n,t){e.msecs??=-1/0,e.nsecs??=0,n===e.msecs?(e.nsecs++,e.nsecs>=1e4&&(e.node=void 0,e.nsecs=0)):n>e.msecs?e.nsecs=0:n<e.msecs&&(e.node=void 0),e.node||(e.node=t.slice(10,16),e.node[0]|=1,e.clockseq=16383&(t[8]<<8|t[9])),e.msecs=n}(s,e,o),i=r(o,s.msecs,s.nsecs,d?void 0:s.clockseq,d?void 0:s.node,n,c)}return n??function(e,n=0){return(o[e[n+0]]+o[e[n+1]]+o[e[n+2]]+o[e[n+3]]+"-"+o[e[n+4]]+o[e[n+5]]+"-"+o[e[n+6]]+o[e[n+7]]+"-"+o[e[n+8]]+o[e[n+9]]+"-"+o[e[n+10]]+o[e[n+11]]+o[e[n+12]]+o[e[n+13]]+o[e[n+14]]+o[e[n+15]]).toLowerCase()}(i)};(()=>{const[e,n,t,o,s,r,i,d]=[".uuid-count",".uuid-generate",".uuid-list",".uuid-display",".uuid-download",".uuid-copy",".nav-toggle-btn",".nav-dropdown"].map((e=>document.querySelector(e)));o&&(o.innerText=c()),n&&n.addEventListener("click",(n=>{if(n.preventDefault(),!t)return;t.innerHTML="",[t,s].forEach((e=>e?.classList.replace("hidden","visible")));const o=+e?.value||1;for(let e=0;e<o;e++){const e=document.createElement("li");e.textContent=c(),t.appendChild(e)}})),r&&r.addEventListener("click",(()=>{o&&navigator.clipboard.writeText(o.innerText).then((()=>{r.innerText="Copied!",setTimeout((()=>{r.innerText="Copy"}),2500)})).catch((e=>{console.error("Error copying text: ",e)}))})),s&&s.addEventListener("click",(()=>{if(!t?.children.length)return;const e=new Blob([Array.from(t.children).map((e=>e.innerText)).join("\n")],{type:"text/plain"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download="uuids.txt",n.click()})),i&&i.addEventListener("click",(()=>{d&&d?.classList.toggle("h-9")}))})()})();