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
// 格式化日期为 年-月-日
function formatDate (d) {
    const time = new Date(d)
    let y = time.getFullYear(); // 年份
    let m = (time.getMonth() + 1).toString().padStart(2,'0'); // 月份
    let r = time.getDate().toString().padStart(2,'0'); // 日子
    return `${y}-${m}-${r}`
}
export default {
    numberSplitWithComma,
    formatDate
}
