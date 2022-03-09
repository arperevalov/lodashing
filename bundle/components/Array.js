import { isArray } from "./Lang.js";
export function chunk(arr, parameter) {
    let newArr = [], index = 0;
    while (index < Math.ceil(arr.length / parameter)) {
        newArr.push(arr.slice(index * parameter, index * parameter + parameter));
        index++;
    }
    return newArr;
}
export function compact(arr) {
    let newArr = [], index = 0;
    while (index < arr.length) {
        if (arr[index] !== NaN) {
            if (arr[index]) {
                newArr.push(arr[index]);
            }
        }
        index++;
    }
    return newArr;
}
// console.log('compact', compact([0, 1, false, 2, '', 3]))
export function concat() {
    let length = arguments.length, index = 0, newArr = [];
    while (index < length) {
        if (isArray(arguments[index])) {
            for (let item of arguments[index]) {
                newArr.push(item);
            }
        }
        else {
            newArr.push(arguments[index]);
        }
        index++;
    }
    return newArr;
}
// console.log('concat', concat([52], 3, [55], [[4]]))
export function difference(arr1, arr2) {
    let length = arr1.length, index = 0, newArr = [];
    while (index < length) {
        if (!arr2.includes(arr1[index]))
            newArr.push(arr1[index]);
        index++;
    }
    return newArr;
}
// console.log('difference', difference([2, 1], [2, 3]))
export function differenceBy(arr1, arr2, differ) {
    let length = arr1.length, index = 0, length1 = arr2.length, index1 = 0, type = typeof differ, result = [], arrCompare = [], arrCompare1 = [];
    console.log(type);
    switch (type) {
        case 'function':
            while (index < length) {
                arrCompare[index] = differ(arr1[index]);
                index++;
            }
            while (index1 < length1) {
                arrCompare1[index1] = differ(arr2[index1]);
                index1++;
            }
            result = difference(arrCompare, arrCompare1);
            return result;
            break;
        case 'string':
            while (index1 < length1) {
                arrCompare[index1] = arr2[index1][differ];
                index1++;
            }
            while (index < length) {
                arrCompare.includes(arr1[index][differ]) ? false : result.push(arr1[index]);
                index++;
            }
            return result;
            break;
        default:
            break;
    }
}
// console.log(lodashing.differenceBy([{ 'x': 2 }, { 'x': 2 }, {'y': 2}], [{ 'x': 1 }, {'y': 2}], 'x'), _.differenceBy([{ 'x': 2 }, { 'x': 2 }, {'y': 2}], [{ 'x': 1 }, {'y': 2}], 'x'))
