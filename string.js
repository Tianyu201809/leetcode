/**
 * 字符串压缩算法
 * 实现效果：
 * 输入：aaaabbbbbccccccddddd
 * 输出：a4b5c6d5
 * @param {String} 输入的字符串 元素范围A~z
 */
function h(array) {
    if (!array) {
        //如果没有传递字符串，则给出一个默认的字符串
        array = 'aaaabbbbbccccccddddd';
    }
    debugger
    /**
     * 如果字符串长度不变，则返回原字符串
     */
    let sVal = array;
    let _Array = new Set(array);
    let str = '';
    for (const k of _Array) {
        str += k;
    }
    if (sVal === str) {
        return array;
    }

    /**
     * 字符串压缩逻辑
     */
    let num = 1; //元素出现的数量，默认是1
    let outPutArray = []; //输出数组
    for (let i = 0; i < array.length; i++) {
        //比较当前元素和后一个元素，如果相同，则需让数量+1,并继续循环下去
        if (array[i] == array[i + 1]) {
            num++
        } else {
            //如果当前元素和它后一个元素不相等，就将当前元素和当前元素出现的次数放到输出数组中
            outPutArray.push(array[i], num);
            //最后将数量重置为1
            num = 1;
        }
    }

    /**
     * 如果压缩后的字符串长度大于等于原长度，则返回原字符串
     */
    if (array.length <= outPutArray.length) {
        return array;
    } else {
        //压缩后的字符串长度小于原字符串长度时，输出新的压缩后的字符串
        return outPutArray.toString().replace(/,/g, '');
    }
}