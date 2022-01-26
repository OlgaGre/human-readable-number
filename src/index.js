module.exports = function toReadable(number) {
    let strNum = String(number);
    let hundred;
    let remainder;
    let dozens;
    let units;

    let map = new Map();
    map.set('1', 'one')
        .set('2', 'two')
        .set('3', 'three')
        .set('4', 'four')
        .set('5', 'five')
        .set('6', 'six')
        .set('7', 'seven')
        .set('8', 'eight')
        .set('9', 'nine')
        .set('0', 'zero')
        .set('10', 'ten')
        .set('11', 'eleven')
        .set('12', 'twelve')
        .set('13', 'thirteen')
        .set('14', 'fourteen')
        .set('15', 'fifteen')
        .set('16', 'sixteen')
        .set('17', 'seventeen')
        .set('18', 'eighteen')
        .set('19', 'nineteen')
        .set('20', 'twenty')
        .set('30', 'thirty')
        .set('40', 'forty')
        .set('50', 'fifty')
        .set('60', 'sixty')
        .set('70', 'seventy')
        .set('80', 'eighty')
        .set('90', 'ninety');
    if (map.get(strNum) !== undefined) {
        return map.get(strNum);
    }
    hundred = String(Math.floor(number / 100)); // количество сотен в строке. для поиске по map
    remainder = String(number % 100); //  остаток от деления
    dozens = String(Math.floor(remainder / 10) * 10); // десятки в строке. для поиске в map
    units = String(remainder % 10); // единицы в строке для поиска

    if (strNum.length == 3) {
        if (strNum[1] == '0' && strNum[2] == '0') {
            return `${map.get(hundred)} hundred`
        }
        if (strNum[1] == '1' || strNum[1] == '0' || strNum[2] == '0') {
            return `${map.get(hundred)} hundred ${map.get(remainder)}`
        }
        if (strNum[1] !== '0' && strNum[2] !== '0') {
            return `${map.get(hundred)} hundred ${map.get(dozens)} ${map.get(units)}`
        }

    } else {

        return `${map.get(dozens)} ${map.get(units)}`

    }

}