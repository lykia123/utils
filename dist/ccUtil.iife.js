/*!
 * @ccprivate/utils.js v0.0.9
 * (c) 2020-2020 Russell
 * Released under the MIT License.
 */
var ccUtil=function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){return"object"===e(t)&&t.constructor==Array}function i(t){return"object"===e(t)&&t.constructor==Date}var r=Object.freeze({__proto__:null,isMobile:function(t){return/^1[0-9]{10}$/.test(t)},isEmail:function(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)},isPhone:function(t){return/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(t)},isNumber:function(t){return"number"==typeof t&&t.constructor==Number},isString:function(t){return"string"==typeof t&&t.constructor==String},isObj:function(t){return"object"===e(t)&&t.constructor==Object},isArr:n,isDate:i,isCardId:function(t){return/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t)},isUrl:function(t){return/^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\\/])+$/.test(t)}});var o,s,a,u=Object.freeze({__proto__:null,numberSplitWithComma:function(t){if("string"!=typeof t&&"number"!=typeof t)return t;"string"!=typeof t&&(t=t.toString());var e=t.length;if(e<=3)return t;var n=e%3,i=t.slice(0,n),r=t.slice(n).match(/\d{3}/g).join(",");return n>0?i+","+r:r},fillNumber:function(t,e,n){var i=[],r=1;if("number"!=typeof t)return t;for(var o=e||3,s=n||",";0!==t;)r=t%Math.pow(10,o),t=Math.floor(t/Math.pow(10,o)),i.unshift(r);return i.join(s)},formatDate:function(t,e){var n=t?new Date(i(t)?t:t.replace(/-/g,"/")):new Date,r=e||"yyyy/MM/dd hh:mm:ss";/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var o=n.getHours(),s={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":o,"H+":o%12||12,"t+":o<12?"AM":"PM","m+":n.getMinutes(),"s+":n.getSeconds(),fff:n.getMilliseconds()};for(var a in s)if(new RegExp("(".concat(a,")")).test(r)){var u=s[a]+"";r=r.replace(RegExp.$1,1===RegExp.$1.length?u:u.padStart(a.length,"0"))}return r},changeToOptions:function(t,e,n){var i=[];return t.forEach((function(t){i.push({label:t[e],value:t[n]})})),i},deepClone:function t(n){if(n instanceof RegExp)return new RegExp(n);if(n instanceof Date)return new Date(n);if("object"!==e(n)||null===n)return n;var i=n instanceof Array?[]:{};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&("object"===e(n[r])?i[r]=t(n[r]):i[r]=n[r]);return i},uniq:function(t,e){if(!n(t))return t;for(var i=[],r=[],o=0;o<t.length;o++)e?r.includes(t[o][e])||(r.push(t[o][e]),i.push(t[o])):i.includes(t[o])||i.push(t[o]);return i}});function c(t,e,n,i,r,o){if(this.linkbuttons=$(t),0==this.linkbuttons.length&&(this.linkbuttons=$("body")),0!=$(e).length)this.curLink=$(e);else for(var s=0;s<this.linkbuttons.length;s++)if($(this.linkbuttons[s]).is(":visible")){this.curLink=$(this.linkbuttons[s]);break}this.keyDownEvent=o||function(){},this.hoverClass=n||"hover",this.input=null,this.setHeightLight(this),this.setVal=r||function(t){$(this).val(t)},this.getVal=i||function(){return $(this).val()};var a=this;$(t).unbind("keyinput").bind("keyinput",this.handleInputVal),$(window).unbind("keydown").bind("keydown",(function(t){a.keyHandler(a,t)})),this.cmd=[],this.iscmd=!1,this.debugCmd={cmd3739373938384040:function(){var t="访问地址:"+window.location.href;coocaa.alert(t,(function(){return a.handlerKeydown(),!0}))},cmd3737393938384040:function(){var t="版本号："+coocaa.version;coocaa.alert(t,(function(){return a.handlerKeydown(),!0}))}}}c.prototype.remove=function(t){this.linkbuttons=this.linkbuttons.not(t)},c.prototype.add=function(t){this.linkbuttons=this.linkbuttons.add(t)},c.prototype.handlerKeydown=function(){var t=this;$(window).unbind("keydown").bind("keydown",(function(e){t.keyHandler(t,e)}))},c.prototype.triggerCmd=function(t){if(null!=this.debugCmd&&0!=this.iscmd&&null!=this.debugCmd)if(this.cmd.push(t),this.cmd.length>10)this.cmd=[];else{var e="cmd"+this.cmd.join("");"function"==typeof this.debugCmd[e]&&(this.cmd=[],this.iscmd=!1,this.debugCmd[e]())}},c.prototype.setFocus=function(t){0!=t.length&&(t.is(":visible")||(t=null),this.curLink=t,this.setHeightLight(this))},c.prototype.handleClick=function(t){this.setFocus($(t)),this.curLink.trigger("itemClick")},c.prototype.keyHandler=function(t,e){var n=e.keyCode;switch(debug("<br/>"),debug("keyCode = "+e.keyCode),t.curLink.trigger("beforekeyinput",[n,e,t]),null!=t.input&&t.curLink.get(0)==t.input.get(0)&&(debug("开始执行keyinput事件"),t.input.trigger("keyinput",[n,t])),t.curLink.trigger("afterkeyinput",[n,e,t]),1==t.iscmd&&t.triggerCmd(n),n){case 8:t.iscmd=!0,t.cmd=[],8==n&&e.preventDefault();break;case 27:break;case 37:t.moveLeft(),e.stopPropagation();break;case 38:t.moveUp(),e.stopPropagation();break;case 39:t.moveRight(),e.stopPropagation();break;case 40:t.moveDown(),e.stopPropagation();break;case 13:t.curLink.trigger("itemClick")}t.curLink.trigger("focusChanged"),this.keyDownEvent(e)},c.prototype.setHeightLight=function(t){if(null==t.curLink)for(var e=0;e<t.linkbuttons.length;e++)if($(t.linkbuttons[e]).is(":visible")){t.curLink=$(t.linkbuttons[e]);break}t.linkbuttons.attr("readonly",!0);var n=t.hoverClass;t.linkbuttons.removeClass(n),t.curLink.addClass(n),t.curLink.trigger("itemFocus");t.curLink.attr("type");t.input=null,$(t.curLink).hasClass("input")&&(t.input=$(t.curLink)),$(document).focus(),this.curLink.trigger("itemSelected")},c.prototype.moveLeft=function(){var t=this;if(t.curLink.attr("leftTarget"))return t.curLink=$(t.curLink.attr("leftTarget")),void t.setHeightLight(t);var e,n,i,r=t.curLink,u=99999,c=r.offset().left,h=r.offset().top,f=99999;t.curLink==r&&t.linkbuttons.each((function(){if((e=$(this)).is(":hidden"))return!0;o=e.offset().left,s=e.offset().top,n=s<=h&&s+e.height()>h,i=s>=h&&s<h+r.height(),o<c&&(n||i)&&(a=c-o)<u&&(u=a,r=e),o<c&&(a=s>=h?t.lineDistance(o+e.width(),s,c,h):t.lineDistance(o+e.width(),s+e.height(),c,h))<f&&(f=a,r=e)})),t.curLink=r,t.setHeightLight(t)},c.prototype.lineDistance=function(t,e,n,i){var r=0,o=0;return r=Math.abs(t-n),r*=r,o=Math.abs(e-i),o*=o,Math.sqrt(r+o)},c.prototype.moveRight=function(){var t=this;if(t.curLink.attr("rightTarget"))return t.curLink=$(t.curLink.attr("rightTarget")),void t.setHeightLight(t);var e,n,i,r=t.curLink,u=99999,c=r.offset().left,h=r.offset().top,f=r,l=99999;t.curLink==r&&t.linkbuttons.each((function(){if((e=$(this)).is(":hidden"))return!0;o=e.offset().left,s=e.offset().top,n=s<=h&&s+e.height()>h,i=s>=h&&s<h+r.height(),o>c&&(n||i)&&(a=o-c)<u&&(u=a,r=e),o>c&&(a=s>=h?t.lineDistance(o,s,c+f.width(),h):t.lineDistance(o,s+e.height(),c+f.width(),h))<l&&(l=a,r=e)})),t.curLink=r,t.setHeightLight(t)},c.prototype.moveUp=function(){var t=this;if(t.curLink.attr("upTarget"))return t.curLink=$(t.curLink.attr("upTarget")),void t.setHeightLight(t);var e,n,i,r=t.curLink,u=99999,c=r.offset().left,h=r.offset().top,f=r,l=99999,g=!1;t.linkbuttons.each((function(){if((e=$(this)).is(":hidden"))return!0;o=e.offset().left,s=e.offset().top,n=o<=c&&o+e.width()>c,i=o>=c&&c+f.width()>o,s<h&&(n||i)?((a=h-s)<u&&(u=a,r=e),g=!0):0==g&&s<h&&(a=o>=c?t.lineDistance(o,s+e.height(),c,h):t.lineDistance(o+e.width(),s+e.height(),c,h))<l&&(l=a,r=e)})),t.curLink=r,t.setHeightLight(t)},c.prototype.moveDown=function(){var t=this;if(t.curLink.attr("downTarget"))return t.curLink=$(t.curLink.attr("downTarget")),void t.setHeightLight(t);var e,n,i,r=t.curLink,u=99999,c=r.offset().left,h=r.offset().top,f=r,l=99999,g=!1;t.linkbuttons.each((function(){if((e=$(this)).is(":hidden"))return!0;o=e.offset().left,s=e.offset().top,n=o<=c&&o+e.width()>c,i=o>=c&&c+f.width()>o,s>h&&(n||i)?((a=s-h)<u&&(u=a,r=e),g=!0):0==g&&s>h&&(a=o>=c?t.lineDistance(o,s,c,h+f.height()):t.lineDistance(o+e.width(),s,c,h+f.height()))<l&&(l=a,r=e)})),t.curLink=r,t.setHeightLight(t)},c.prototype.handleInputVal=function(t,e,n){if("function"==typeof n.setVal&&"function"==typeof n.getVal){var i=n,r="";switch(e){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(null==$(this).attr("readonly"))return;r=String.fromCharCode(e);var o=i.getVal.call(this);if("nudefined"!=typeof $(this).attr("maxlength")){var s=o.length;if(parseInt($(this).attr("maxlength"))<=s)return}i.setVal.call(this,o+r);break;case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:if(null==$(this).attr("readonly"))return;var a=e-48;r=String.fromCharCode(a);o=i.getVal.call(this);if("nudefined"!=typeof $(this).attr("maxlength")){s=o.length;if(parseInt($(this).attr("maxlength"))<=s)return}i.setVal.call(this,o+r);break;case 8:case 0:return void((o=i.getVal.call(this)).length>0&&i.setVal.call(this,o.substring(0,o.length-1)))}}};var h={coocaakeymap:c},f={format:u,validate:r,coocaaKeyMap:h};return t.coocaaKeyMap=h,t.default=f,t.format=u,t.validate=r,Object.defineProperty(t,"__esModule",{value:!0}),t}({});