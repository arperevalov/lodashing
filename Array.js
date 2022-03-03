const chunk = (arr, parameter) => {
    const newArr = []
    for (let i=0; i < Math.ceil(arr.length/parameter); i++ ) {
        newArr.push(arr.slice(i*parameter, i*parameter+parameter))
    }
    return newArr
}

// console.log(chunk([1,2,3,4,5,6,7], 2))

const compact = (arr) => {
    const falsey = [null, undefined, NaN, 0, false, '']
    const newArr = [];

    for (let i of arr) {
        if (i !== NaN){
            if (falsey.indexOf(i) == -1) {
                newArr.push(i)
            }
        } 
    }

    return newArr
}

// console.log(compact([0, 1, false, 2, '', 3]))

