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
export default {
    isMobile,
    isEmail,
    isPhone,
    isNumber,
    isString,
    isObj,
    isArr,
    isDate,
    isCardId
}
