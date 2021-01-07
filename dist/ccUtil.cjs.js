/*!
 * @ccprivate/utils.js v0.0.16
 * (c) 2020-2021 Russell
 * Released under the MIT License.
 */
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return"number"==typeof t&&t.constructor==Number}function n(e){return"object"===t(e)&&e.constructor==Array}function r(e){return"object"===t(e)&&e.constructor==Date}Object.defineProperty(exports,"__esModule",{value:!0});var o=Object.freeze({__proto__:null,isMobile:function(t){return/^1[0-9]{10}$/.test(t)},isEmail:function(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)},isPhone:function(t){return/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(t)},isNumber:e,isString:function(t){return"string"==typeof t&&t.constructor==String},isObj:function(e){return"object"===t(e)&&e.constructor==Object},isArr:n,isDate:r,isCardId:function(t){return/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t)},isNumRange:function(t,n,r){return!!e(t)&&(!(!e(n)||!e(r))&&(n<r&&(t>=n&&t<=r)))}});var i=Object.freeze({__proto__:null,numberSplitWithComma:function(t){if("string"!=typeof t&&"number"!=typeof t)return t;"string"!=typeof t&&(t=t.toString());var e=t.length;if(e<=3)return t;var n=e%3,r=t.slice(0,n),o=t.slice(n).match(/\d{3}/g).join(",");return n>0?r+","+o:o},fillNumber:function(t,e,n){var r=[],o=1;if("number"!=typeof t)return t;for(var i=e||3,a=n||",";0!==t;)o=t%Math.pow(10,i),t=Math.floor(t/Math.pow(10,i)),r.unshift(o);return r.join(a)},formatDateBy:function(t,e){var n=e.indexOf("/")>-1?"/":"-",r=new Date(t),o=e.indexOf("yyyy")>-1?r.getFullYear():"",i=e.indexOf("MM")>-1?(r.getMonth()+1).toString().padStart(2,"0"):"",a=e.indexOf("dd")>-1?r.getDate().toString().padStart(2,"0"):"",u=e.indexOf("hh")>-1?" "+r.getHours().toString().padEnd(2,"0"):"",c=e.indexOf("mm")>-1?":"+r.getMinutes().toString().padEnd(2,"0"):"",f=e.indexOf("ss")>-1?":"+r.getSeconds().toString().padEnd(2,"0"):"";return"".concat(o)+n+"".concat(i)+n+"".concat(a)+"".concat(u)+"".concat(c)+"".concat(f)},formatDate:function(t,e){var n=t?new Date(r(t)?t:t.replace(/-/g,"/")):new Date,o=e||"yyyy/MM/dd hh:mm:ss";/(y+)/.test(o)&&(o=o.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var i=n.getHours(),a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":i,"H+":i%12||12,"t+":i<12?"AM":"PM","m+":n.getMinutes(),"s+":n.getSeconds(),fff:n.getMilliseconds()};for(var u in a)if(new RegExp("(".concat(u,")")).test(o)){var c=a[u]+"";o=o.replace(RegExp.$1,1===RegExp.$1.length?c:c.padStart(u.length,"0"))}return o},changeToOptions:function(t,e,n){var r=[];return t.forEach((function(t){r.push({label:t[e],value:t[n]})})),r},deepClone:function e(n){if(n instanceof RegExp)return new RegExp(n);if(n instanceof Date)return new Date(n);if("object"!==t(n)||null===n)return n;var r=n instanceof Array?[]:{};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&("object"===t(n[o])?r[o]=e(n[o]):r[o]=n[o]);return r},uniq:function(t,e){if(!n(t))return t;for(var r=[],o=[],i=0;i<t.length;i++)e?o.includes(t[i][e])||(o.push(t[i][e]),r.push(t[i])):r.includes(t[i])||r.push(t[i]);return r},dateDiff:function(t){if(!t)return"";var e=(new Date).getTime()-new Date(t),n=36e5,r=24*n,o=30*r,i=e/31104e6,a=e/o,u=e/(7*r),c=e/r,f=e/n,s=e/6e4;return i>=1?parseInt(i)+"年前":a>=1?parseInt(a)+"个月前":u>=1?parseInt(u)+"周前":c>=1?parseInt(c)+"天前":f>=1?parseInt(f)+"个小时前":s>=1?parseInt(s)+"分钟前":"刚刚"}}),a={format:i,validate:o};exports.default=a,exports.format=i,exports.validate=o;
