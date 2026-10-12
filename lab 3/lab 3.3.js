'use strict'

function generateKey(length, characters) {
    let result = ''
    const charsLen = characters.length

    function random(min, max) {
        if (max === undefined) {
            max = min
            min = 0
        }

        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    for (let i = 0; i < length; i++) {
        const idx = random(charsLen - 1)
        result += characters[idx]
    }

    return result
}

const values = 'abcdefg0123456789'
const key = generateKey(16, values)

console.log(key)