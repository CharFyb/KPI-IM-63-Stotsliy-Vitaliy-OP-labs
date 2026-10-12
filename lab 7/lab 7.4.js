'use strict'

const difference = (array1, array2) => {
    const result = []
    for (const item of array1) {
        if (!array2.includes(item)) {
            result.push(item)
        }
    }
    return result
}

const array1 = ['Beijing', 'Kiev']
const array2 = ['Kiev', 'London', 'Baghdad']
const result = difference(array1, array2)
console.log(result)