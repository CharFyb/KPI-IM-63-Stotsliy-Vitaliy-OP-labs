'use strict'

const unique = array => {
    const result = []
    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item)
        }
    }
    return result
}

const result = unique(['top', 'bottom', 'top', 'left'])
console.log(result)