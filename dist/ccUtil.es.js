/*!
 * @ccprivate/utils.js v0.0.17
 * (c) 2020-2021 Russell
 * Released under the MIT License.
 */
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return"number"==typeof t&&t.constructor==Number}function n(e){return"object"===t(e)&&e.constructor==Array}function r(e){return"object"===t(e)&&e.constructor==Date}var o=Object.freeze({__proto__:null,isMobile:function(t){return/^1[0-9]{10}$/.test(t)},isEmail:function(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)},isPhone:function(t){return/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(t)},isNumber:e,isString:function(t){return"string"==typeof t&&t.constructor==String},isObj:function(e){return"object"===t(e)&&e.constructor==Object},isArr:n,isDate:r,isCardId:function(t){var e,n=t.toString(),r={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};if(/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(n)){var o=(e=n.substring(0,2),!(!/^[1-9][0-9]/.test(e)||!r[e])),i=function(t){if(/^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/.test(t)){var e=t.substring(0,4),n=t.substring(4,6),r=t.substring(6,8),o=new Date(e+"-"+n+"-"+r);if(o&&o.getMonth()===parseInt(n)-1)return!0}return!1}(n.substring(6,14)),u=function(t){var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],n=t.substring(17);if(/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(t)){for(var r=0,o=0;o<17;o++)r+=t[o]*e[o];if([1,0,"X",9,8,7,6,5,4,3,2][r%11].toString()===n.toUpperCase())return!0}return!1}(n);if(o&&i&&u)return!0}return!1},isNumRange:function(t,n,r){return!!(e(t)&&e(n)&&e(r)&&n<r&&t>=n&&t<=r)}});var i=Object.freeze({__proto__:null,numberSplitWithComma:function(t){if("string"!=typeof t&&"number"!=typeof t)return t;"string"!=typeof t&&(t=t.toString());var e=t.length;if(e<=3)return t;var n=e%3,r=t.slice(0,n),o=t.slice(n).match(/\d{3}/g).join(",");return n>0?r+","+o:o},fillNumber:function(t,e,n){var r=[],o=1;if("number"!=typeof t)return t;for(var i=e||3,u=n||",";0!==t;)o=t%Math.pow(10,i),t=Math.floor(t/Math.pow(10,i)),r.unshift(o);return r.join(u)},formatDateBy:function(t,e){var n=e.indexOf("/")>-1?"/":"-",r=new Date(t),o=e.indexOf("yyyy")>-1?r.getFullYear():"",i=e.indexOf("MM")>-1?(r.getMonth()+1).toString().padStart(2,"0"):"",u=e.indexOf("dd")>-1?r.getDate().toString().padStart(2,"0"):"",a=e.indexOf("hh")>-1?" "+r.getHours().toString().padEnd(2,"0"):"",f=e.indexOf("mm")>-1?":"+r.getMinutes().toString().padEnd(2,"0"):"",s=e.indexOf("ss")>-1?":"+r.getSeconds().toString().padEnd(2,"0"):"";return"".concat(o)+n+"".concat(i)+n+"".concat(u)+"".concat(a)+"".concat(f)+"".concat(s)},formatDate:function(t,e){var n=t?new Date(r(t)?t:t.replace(/-/g,"/")):new Date,o=e||"yyyy/MM/dd hh:mm:ss";/(y+)/.test(o)&&(o=o.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var i=n.getHours(),u={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":i,"H+":i%12||12,"t+":i<12?"AM":"PM","m+":n.getMinutes(),"s+":n.getSeconds(),fff:n.getMilliseconds()};for(var a in u)if(new RegExp("(".concat(a,")")).test(o)){var f=u[a]+"";o=o.replace(RegExp.$1,1===RegExp.$1.length?f:f.padStart(a.length,"0"))}return o},changeToOptions:function(t,e,n){var r=[];return t.forEach((function(t){r.push({label:t[e],value:t[n]})})),r},deepClone:function e(n){if(n instanceof RegExp)return new RegExp(n);if(n instanceof Date)return new Date(n);if("object"!==t(n)||null===n)return n;var r=n instanceof Array?[]:{};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&("object"===t(n[o])?r[o]=e(n[o]):r[o]=n[o]);return r},uniq:function(t,e){if(!n(t))return t;for(var r=[],o=[],i=0;i<t.length;i++)e?o.includes(t[i][e])||(o.push(t[i][e]),r.push(t[i])):r.includes(t[i])||r.push(t[i]);return r},dateDiff:function(t){if(!t)return"";var e=(new Date).getTime()-new Date(t),n=36e5,r=24*n,o=30*r,i=e/31104e6,u=e/o,a=e/(7*r),f=e/r,s=e/n,c=e/6e4;return i>=1?parseInt(i)+"年前":u>=1?parseInt(u)+"个月前":a>=1?parseInt(a)+"周前":f>=1?parseInt(f)+"天前":s>=1?parseInt(s)+"个小时前":c>=1?parseInt(c)+"分钟前":"刚刚"}}),u={format:i,validate:o};export default u;export{i as format,o as validate};
