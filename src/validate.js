export function isMobile (n) {
    return /^1[0-9]{10}$/.test(n)
}
export function isEmail (n) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(n)
}
export function isPhone (n) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(n)
}
// constructor: 属性返回对创建此对象的函数的引用
export function isNumber (n) {
    return (typeof n === 'number') && n.constructor == Number
}
export function isString (n) {
    return (typeof n === 'string') && n.constructor == String
}
export function isObj (n) {
    return (typeof n === 'object') && n.constructor == Object
}
export function isArr (n) {
    return (typeof n === 'object') && n.constructor == Array
}
export function isDate (n) {
    return (typeof n === 'object') && n.constructor == Date
}
export function isCardId (n) {
    return (/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(n))
}
// export function isUrl (str) {
//     return /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})(www|(\w))\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\\/])+$/.test(str)
// }
