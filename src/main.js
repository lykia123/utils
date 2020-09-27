import format from './format.js';
import validate from './validate';
export default function () {
    console.log(validate.isMobile('13888889999'));
    console.log(validate.isEmail('36292222@qq.com'));
    console.log(format.numberSplitWithComma(123123213123));
    const newDate = new Date();
    console.log(format.formatDate(newDate.setTime(newDate.getTime() - 3600 * 1000 * 24 * 8)));
    console.log(format.formatDate(newDate.setTime(newDate.getTime() - 3600 * 1000 * 24 * 1)))
}
