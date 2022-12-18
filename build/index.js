"use strict";
function getDiff(firstValue, secondValue) {
    let firstArray = secondValue.split('');
    let secondArray = firstValue.split('');
    let filterArray1 = secondArray.filter(item => !firstArray.includes(item));
    let filterArray2 = firstArray.filter(item => !secondArray.includes(item));
    const result = filterArray1.concat(filterArray2);
    let amountArray = result.length;
    const obj = {
        amount: amountArray,
        array: result
    };
    return obj;
};

console.log(getDiff('abc', 'abcd')); // { amount: 1, array: ['d'] }
console.log(getDiff('abcd', 'cdfe')); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff('abc', 'wbbcc')); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff('abc', 'abc')); // { amount: 0, array: [] }

