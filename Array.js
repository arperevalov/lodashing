function isArray (item) {
    return Array.isArray(item)
}

// console.log('isArray', isArray([1,2,3]))

function chunk (arr, parameter) {
    let newArr = [],
    index = 0
    while (index < Math.ceil(arr.length/parameter)) {
        newArr.push(arr.slice(index*parameter, index*parameter+parameter))
        index++
    }
    return newArr
}
// console.log('chunk', chunk([1,2,3,4,5,6,7], 2))

function compact (arr) {
    newArr = [],
    index = 0

    while (index < arr.length) {
        if (arr[index] !== NaN){
            if (arr[index]) {
                newArr.push(arr[index])
            }
        } 
        index++
    }

    return newArr
}
// console.log('compact', compact([0, 1, false, 2, '', 3]))

function concat () {
    let length = arguments.length,
    index = 0,
    newArr = []

    while (index < length) {
        if (isArray(arguments[index])) {
            for (let item of arguments[index]) {
                newArr.push(item)
            }
        } else {
            newArr.push(arguments[index])
        }
        index++
    }
    return newArr
}
// console.log('concat', concat([52], 3, [55], [[4]]))

function difference (arr1, arr2) {
    let length = arr1.length,
    index = 0

    while(index < length) {
        if (arr1[index] != arr2[index]){
            return arr1[index]
        }
    }

    return 0
}

console.log('difference', difference([2, 1], [2, 3]))