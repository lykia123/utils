// 数字千分位用逗号分隔
function numberSplitWithComma(n) {
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
// 格式化日期为 年-月-日 传入的参数为类似new Date()
function formatDate (d) {
    const time = new Date(d)
    let y = time.getFullYear(); // 年份
    let m = (time.getMonth() + 1).toString().padStart(2,'0'); // 月份
    let r = time.getDate().toString().padStart(2,'0'); // 日子
    return `${y}-${m}-${r}`
}
// 将接口返回的数组格式化成下拉框、多个单选框option的label和value格式
function changeToOptions (data, name, id) {
    const a = []
    data.forEach(item => {
        a.push({label: item[name], value: item[id]})
    })
    return a
}
// 深度拷贝
function deepClone (arg) {
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
function uniq(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
export default {
    numberSplitWithComma,
    formatDate,
    changeToOptions,
    deepClone,
    uniq
}
