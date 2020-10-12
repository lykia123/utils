var myIife = (function () {
    'use strict';

    // 数字千分位用逗号分隔
    function numberSplitWithComma(n) {
        // 如果不是字符或者数字，则直接返回
        if (typeof n !== 'string' && typeof n !== 'number') {
            return n
        }
        if(typeof n !== 'string') {
            n = n.toString();
        }
        var len = n.length;
        if (len <= 3) { return n }
        var r = len % 3;
        const start = n.slice(0, r);
        const end = n.slice(r).match(/\d{3}/g).join(',');
        return r > 0 ? start + ',' + end : end
    }
    // 格式化日期为 年-月-日
    function formatDate (d) {
        const time = new Date(d);
        let y = time.getFullYear(); // 年份
        let m = (time.getMonth() + 1).toString().padStart(2,'0'); // 月份
        let r = time.getDate().toString().padStart(2,'0'); // 日子
        return `${y}-${m}-${r}`
    }
    var format = {
        numberSplitWithComma,
        formatDate
    };

    function isMobile (n) {
        return /^1[0-9]{10}$/.test(n)
    }
    function isEmail (n) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(n)
    }
    function isPhone(n) {
        return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(n)
    }
    // constructor: 属性返回对创建此对象的函数的引用
    function isNumber(n) {
        return (typeof n === 'number') && n.constructor == Number
    }
    function isString(n) {
        return (typeof n === 'string') && n.constructor == String
    }
    function isObj(n) {
        return (typeof n === 'object') && n.constructor == Object
    }
    function isArr(n) {
        return (typeof n === 'object') && n.constructor == Array
    }
    function isDate(n) {
        return (typeof n === 'object') && n.constructor == Date
    }
    function isCardId(n) {
        return (/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(n))
    }
    var validate = {
        isMobile,
        isEmail,
        isPhone,
        isNumber,
        isString,
        isObj,
        isArr,
        isDate,
        isCardId
    };

    function main () {
        return {
            format,
            validate
        }
        // console.log(validate.isMobile('13888889999'));
        // console.log(validate.isEmail('36292222@qq.com'));
        // console.log(format.numberSplitWithComma(123123213123));
        // const newDate = new Date();
        // console.log(format.formatDate(newDate.setTime(newDate.getTime() - 3600 * 1000 * 24 * 8)));
        // console.log(format.formatDate(newDate.setTime(newDate.getTime() - 3600 * 1000 * 24 * 1)))
    }

    return main;

}());
