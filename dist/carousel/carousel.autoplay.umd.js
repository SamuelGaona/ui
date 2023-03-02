!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";const t=(e,...s)=>{const i=s.length;for(let n=0;n<i;n++){const i=s[n]||{};Object.entries(i).forEach((([s,i])=>{const n=Array.isArray(i)?[]:{};var o;e[s]||Object.assign(e,{[s]:n}),"object"==typeof(o=i)&&null!==o&&o.constructor===Object&&"[object Object]"===Object.prototype.toString.call(o)?Object.assign(e[s],t(n,i)):Array.isArray(i)?Object.assign(e,{[s]:[...i]}):Object.assign(e,{[s]:i})}))}return e},s=function(e,t){return e.split(".").reduce(((e,t)=>"object"==typeof e?e[t]:void 0),t)};class i{constructor(e={}){Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),this.setOptions(e);for(const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))e.startsWith("on")&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}setOptions(e){this.options=e?t({},this.constructor.defaults,e):{};for(const[e,t]of Object.entries(this.option("on")||{}))this.on(e,t)}option(e,...t){let i=s(e,this.options);return i&&"function"==typeof i&&(i=i.call(this,this,...t)),i}optionFor(e,t,i,...n){let o=s(t,e);var r;"string"!=typeof(r=o)||isNaN(r)||isNaN(parseFloat(r))||(o=parseFloat(o)),"true"===o&&(o=!0),"false"===o&&(o=!1),o&&"function"==typeof o&&(o=o.call(this,this,e,...n));let a=s(t,this.options);return a&&"function"==typeof a?o=a.call(this,this,e,...n,o):void 0===o&&(o=a),void 0===o?i:o}cn(e){const t=this.options.classes;return t&&t[e]||""}localize(e,t=[]){e=String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g,((e,t,s)=>{let i="";return s?i=this.option(`${t[0]+t.toLowerCase().substring(1)}.l10n.${s}`):t&&(i=this.option(`l10n.${t}`)),i||(i=e),i}));for(let s=0;s<t.length;s++)e=e.split(t[s][0]).join(t[s][1]);return e=e.replace(/\{\{(.*)\}\}/,((e,t)=>t))}on(e,t){let s=[];"string"==typeof e?s=e.split(" "):Array.isArray(e)&&(s=e),this.events||(this.events=new Map),s.forEach((e=>{let s=this.events.get(e);s||(this.events.set(e,[]),s=[]),s.includes(t)||s.push(t),this.events.set(e,s)}))}off(e,t){let s=[];"string"==typeof e?s=e.split(" "):Array.isArray(e)&&(s=e),s.forEach((e=>{const s=this.events.get(e);if(Array.isArray(s)){const e=s.indexOf(t);e>-1&&s.splice(e,1)}}))}emit(e,...t){[...this.events.get(e)||[]].forEach((e=>e(this,...t))),"*"!==e&&this.emit("*",e,...t)}}Object.defineProperty(i,"version",{enumerable:!0,configurable:!0,writable:!0,value:"5.0.5"}),Object.defineProperty(i,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class n extends i{constructor(e,t){super(t),Object.defineProperty(this,"instance",{enumerable:!0,configurable:!0,writable:!0,value:e})}attach(){}detach(){}}const o=e=>`${e||""}`.split(" ").filter((e=>!!e)),r=(e,t)=>{o(t).forEach((t=>{e&&e.classList.add(t)}))};class a extends n{constructor(){super(...arguments),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:"ready"}),Object.defineProperty(this,"inHover",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"timer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"progressBar",{enumerable:!0,configurable:!0,writable:!0,value:null})}get isActive(){return"ready"!==this.state}onReady(e){this.option("autoStart")&&(e.isInfinite||e.page<e.pages.length-1)&&this.start()}onChange(){var e;(null===(e=this.instance.panzoom)||void 0===e?void 0:e.isResting)||(this.removeProgressBar(),this.pause())}onSettle(){this.resume()}onVisibilityChange(){"visible"===document.visibilityState?this.resume():this.pause()}onMouseEnter(){this.inHover=!0,this.pause()}onMouseLeave(){var e;this.inHover=!1,(null===(e=this.instance.panzoom)||void 0===e?void 0:e.isResting)&&this.resume()}onTimerEnd(){"play"===this.state&&(this.instance.isInfinite||this.instance.page!==this.instance.pages.length-1?this.instance.slideNext():this.instance.slideTo(0))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}createProgressBar(){var e;if(!this.option("showProgress"))return null;this.removeProgressBar();const t=this.instance,s=(null===(e=t.pages[t.page])||void 0===e?void 0:e.slides)||[];let i=this.option("progressParentEl");if(i||(i=(1===s.length?s[0].el:null)||t.viewport),!i)return null;const n=document.createElement("div");return r(n,"f-progress"),i.prepend(n),this.progressBar=n,n.offsetHeight,n}set(){if(this.instance.pages.length<2)return;if(this.progressBar)return;this.state="play",r(this.instance.container,"has-autoplay");let e=this.createProgressBar();if(e){const t=this.option("timeout");this.timer=setTimeout((()=>{this.timer=null,this.inHover||this.onTimerEnd()}),t),e.style.transitionDuration=`${t}ms`,e.style.transform="scaleX(1)"}this.emit("set")}clear(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.removeProgressBar()}start(){if(this.set(),this.option("pauseOnHover")){const e=this.instance.container;e.addEventListener("mouseenter",this.onMouseEnter,!1),e.addEventListener("mouseleave",this.onMouseLeave,!1)}document.addEventListener("visibilitychange",this.onVisibilityChange,!1)}stop(){const e=this.instance.container;var t;this.clear(),this.state="ready",e.removeEventListener("mouseenter",this.onMouseEnter,!1),e.removeEventListener("mouseleave",this.onMouseLeave,!1),document.removeEventListener("visibilitychange",this.onVisibilityChange,!1),t=e,o("has-autoplay").forEach((e=>{t&&t.classList.remove(e)})),this.emit("stop")}pause(){"play"===this.state&&(this.state="pause",this.clear(),this.emit("pause"))}resume(){const e=this.instance;if(e.isInfinite||e.page!==e.pages.length-1)if("play"!==this.state){if("pause"===this.state&&!this.inHover){const e=new Event("resume",{bubbles:!0,cancelable:!0});this.emit("resume",event),e.defaultPrevented||this.set()}}else this.set();else this.stop()}toggle(){"play"===this.state||"pause"===this.state?this.stop():this.set()}attach(){this.instance.on("ready",this.onReady),this.instance.on("Panzoom.startAnimation",this.onChange),this.instance.on("Panzoom.endAnimation",this.onSettle),this.instance.on("Panzoom.touchMove",this.onChange)}detach(){this.instance.off("ready",this.onReady),this.instance.off("Panzoom.startAnimation",this.onChange),this.instance.off("Panzoom.endAnimation",this.onSettle),this.instance.off("Panzoom.touchMove",this.onChange),this.stop()}}Object.defineProperty(a,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{autoStart:!0,pauseOnHover:!0,progressParentEl:null,showProgress:!0,timeout:3e3}}),e.Autoplay=a}));
