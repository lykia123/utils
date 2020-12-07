import {isDate,isArr} from "./validate"
// 数字千分位用逗号分隔
/**
 *
 * @param number类型
 * @description 将数字用逗号进行千分位分割
 * @returns {用逗号分割千分位的数字字符串}
 */
export function numberSplitWithComma (n) {
    // 如果不是字符或者数字，则直接返回
    if (typeof n !== 'string' && typeof n !== 'number') {
        return n
    }
    if(typeof n !== 'string') {
        n = n.toString()
    }
    var len = n.length
    if (len <= 3) { return n }
    var r = len % 3
    const start = n.slice(0, r)
    const end = n.slice(r).match(/\d{3}/g).join(',')
    return r > 0 ? start + ',' + end : end
}

/**
 *
 * @param num 整型数字(例如：1234567)
 * @param len 分割长度,默认为3
 * @param fill 分割填充符，默认为"，"
 * @returns {字符串'1,234,567'}
 */
export function fillNumber (num, len, fill) {
    let result = []
    let nums = 1
    if (typeof num !== 'number') {
        return num
    }
    const lens = len || 3
    const fills = fill || ','
    while (num !== 0) {
        nums = num % Math.pow(10, lens)
        num = Math.floor(num / Math.pow(10, lens))
        result.unshift(nums)
    }
    return result.join(fills)
}
// 格式化日期为 年-月-日 传入的参数为类似new Date()
// /**
//  *
//  * @param date:日期,str: 格式化之后的字符串格式，如'yyyy-MM-dd hh:mm:ss'或'yyyy/MM/dd hh:mm'
//  * @description 将日期转换为传入参数str的格式
//  * @returns {yyyy-MM-dd hh:mm:ss等等}
//  */
// export function formatDate (date, str) {
//     let concatStr = str.indexOf('/') > -1 ? '/' : '-'
//     // 当d是1-11位数字，返回的都是1970年某月某日，当d是12-16，也会返回对应的日期，当大于16位，就是不合法的日期
//     const time = new Date(date)
//     let y = str.indexOf('yyyy') > -1 ? time.getFullYear() : ''// 年份
//     let m = str.indexOf('MM') > -1 ? (time.getMonth() + 1).toString().padStart(2,'0') : ''// 月份
//     let d = str.indexOf('dd') > -1 ? time.getDate().toString().padStart(2,'0') : ''// 日子
//     let hh = str.indexOf('hh') > -1 ? (' '+time.getHours().toString().padEnd(2,'0')) : ''// 小时
//     let mm = str.indexOf('mm') > -1 ? (':'+time.getMinutes().toString().padEnd(2,'0')) : ''// 分钟
//     let ss = str.indexOf('ss') > -1 ? (':'+time.getSeconds().toString().padEnd(2,'0')) : ''// 秒数
//     return `${y}`+concatStr+`${m}`+concatStr+`${d}`+`${hh}`+`${mm}`+`${ss}`
// }
/**
 *
 * @param time:时间,如2020-01-01或者new Date(),默认为new Date()
 * @param str:格式化之后的日期格式,如yyyy/MM/dd,默认yyyy/MM/dd hh:mm:ss
 * @returns {'yyyy/MM/dd hh:mm:ss'}
 */
export function formatDate(time, str) {
    const date = time ? new Date(isDate(time)? time : time.replace(/-/g, '/')) : new Date()
    let fmt = str || 'yyyy/MM/dd hh:mm:ss'
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const hour = date.getHours()
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': hour,
        'H+': hour % 12 || 12,
        't+': hour < 12 ? 'AM' : 'PM',
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'fff': date.getMilliseconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : str.padStart(k.length, '0'))
        }
    }
    return fmt
}
// 将接口返回的数组格式化成下拉框、多个单选框option的label和value格式
/**
 *
 * @param data:数组
 * @param name:要转换成下拉框显示的值label的字段名
 * @param id:要转换成下拉框value值的字段名
 * @returns {Array}
 */
export function changeToOptions (data, name, id) {
    const a = []
    data.forEach(item => {
        a.push({label: item[name], value: item[id]})
    })
    return a
}

/**
 *
 * @param arg
 * @returns {*}
 */
export function deepClone (arg) {
    if (arg instanceof RegExp) return new RegExp(arg)
    if (arg instanceof Date) return new Date(arg)
    if (typeof arg !== 'object' || arg === null) {
        return arg
    }
    var result = arg instanceof Array ? [] : {}
    for (const key in arg) {
        // arg.hasOwnProperty(key)
        if (Object.prototype.hasOwnProperty.call(arg, key)) {
            if (typeof arg[key] === 'object') {
                result[key] = deepClone(arg[key]) //递归复制
            } else {
                result[key] = arg[key]
            }
        }
    }
    return result
}
//数组去重
export function uniq (arr, filed) {
    if(!isArr(arr)) {
        return arr
    }
    const result = []
    const uniqResult = []
    for (let i = 0; i < arr.length; i++) {
        if (filed) {
            if(!uniqResult.includes((arr[i][filed]))){
                uniqResult.push(arr[i][filed])
                result.push(arr[i])
            }
        } else {
            if (!result.includes(arr[i])) {
                result.push(arr[i])
            }
        }
    }
    return result
}
