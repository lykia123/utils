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
    // 前六位数字为地址码，1-9开头，后面5位是0-9，/^[1-9]\d{5}/
    // 年份码规则:年份码长4位，以18、19或20开头，剩余两位数是0-9/(18|19|20)\d{2}/
    // 月份长度2，第一位为0，则第二位是1-9，第一位为1，则第二位是0-2/((0[1-9])|(1[0-2]))/
    // 日期长度2，第一位为0-2，则第二位是1-9，也可以是10，20，30，31/(([0-2][1-9])|10|20|30|31)/
    // 顺序码:三位数字/\d{3}/
    // 校验码规则 /[0-9Xx]/
    const strVal = n.toString()
    const normalRule = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    // 省份校验
    const provinceObj = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门'
    }
    const checkProvince = function (val) {
        const provincePattern = /^[1-9][0-9]/
        if (provincePattern.test(val)) {
            if (provinceObj[val]) {
                return true
            }
        }
        return false
    }
    // 日期校验
    const checkDate = function (val) {
        const datePattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
        if (datePattern.test(val)) {
            const year = val.substring(0, 4)
            const month = val.substring(4, 6)
            const day = val.substring(6, 8)
            const dateFormat = new Date(year + '-' + month + '-' + day)
            if (dateFormat && (dateFormat.getMonth() === parseInt(month) - 1)) {
                return true
            }
        }
        return false
    }
    // 校验码：根据身份证前17位分别对应的加权因子计算乘积再求和，根据所得结果与11取模得到X值，再根据X值查询表2得到校验码
    // 表2：X：0-1-2-3-4-5-6-7-8-9
    //    a18:1-0-X-9-8-7-6-5-4-3
    const checkCode = function (val) {
        const p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        const factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
        const parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ]
        const code = val.substring(17)
        if (p.test(val)) {
            let sum = 0
            for (let i = 0; i < 17; i++) {
                sum += val[i] * factor[i]
            }
            if (parity[sum % 11].toString() === code.toUpperCase()) {
                return true
            }
        }
        return false
    }
    if (normalRule.test(strVal)) {
        const checkProvinceResult = checkProvince(strVal.substring(0, 2))
        const checkDateResult = checkDate(strVal.substring(6, 14))
        const checkCodeResult = checkCode(strVal)
        if (checkProvinceResult && checkDateResult && checkCodeResult) {
            return true
        }
    }
    return false
}
export function isNumRange (num, min, max) {
    if (isNumber(num)) {
        if (isNumber(min) && isNumber(max)) {
            if (min < max) {
                if ( num >= min && num <= max ) {
                    return true
                }
            }
        }
    }
    return false
}
// export function isUrl (str) {
//     return /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})(www|(\w))\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\\/])+$/.test(str)
// }
