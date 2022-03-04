import lodashing from './Lodashing'
import _ from 'lodash'


// console.log(lodashing.chunk(['a', 'b', 'c', 'd'], 2), _.chunk(['a', 'b', 'c', 'd'], 2))
// console.log(lodashing.compact([0, 1, false, 2, '', 3]), _.compact([0, 1, false, 2, '', 3]))
// console.log(lodashing.concat([1], 2, [3], [[4]]), _.concat([1], 2, [3], [[4]]))
// console.log(lodashing.difference([2.1, 1.2], [2.3, 3.4]), _.difference([2.1, 1.2], [2.3, 3.4]))
// console.log(lodashing.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor), _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))

// console.log(lodashing.isArray([1]), _.isArray([1]))
// console.log(lodashing.castArray(1), _.castArray(1))
console.log(lodashing.clone([{ 'a': 1 }, { 'b': 2 }]), _.clone([{ 'a': 1 }, { 'b': 2 }]))