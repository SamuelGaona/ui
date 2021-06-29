// @fancyapps/ui/Panzoom.Controls v4.0.0-alpha.3
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function n(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var o=0,e=new Array(n);o<n;o++)e[o]=t[o];return e}function e(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){u=!0,a=t},f:function(){try{l||null==e.return||e.return()}finally{if(u)throw a}}}}var r=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.panzoom=n,this.$container=null}var o,r,i;return o=t,(r=[{key:"addButton",value:function(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("button");return e.setAttribute("title",this.panzoom.localize("{{CONTROLS.".concat(t.toUpperCase(),"}}"))),e.classList.add("panzoom__button"),e.classList.add("panzoom__button--".concat(t)),e.innerHTML=this.panzoom.localize(this.panzoom.option("Controls.tpl.".concat(t),"")),o&&e.addEventListener("click",(function(o){o.stopPropagation(),n.panzoom[t]()})),this.$container.appendChild(e),e}},{key:"createContainer",value:function(){if(!this.$container){var t=document.createElement("div");t.classList.add("panzoom__controls"),this.$container=this.panzoom.$viewport.appendChild(t);var n,o=e(this.panzoom.option("Controls.buttons",[]));try{for(o.s();!(n=o.n()).done;){var r=n.value;this.addButton(r,!0)}}catch(t){o.e(t)}finally{o.f()}}}},{key:"removeContainer",value:function(){this.$container&&(this.$container.remove(),this.$container=null)}},{key:"attach",value:function(){this.createContainer()}},{key:"detach",value:function(){this.removeContainer()}}])&&n(o.prototype,r),i&&n(o,i),t}();r.defaults={l10n:{ZOOMIN:"Zoom in",ZOOMOUT:"Zoom out"},buttons:["zoomIn","zoomOut"],tpl:{zoomIn:'<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V20M20 12L4 12" /></svg>',zoomOut:'<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" /></svg>'}},t.Controls=r}));
