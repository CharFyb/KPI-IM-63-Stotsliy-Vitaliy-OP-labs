'use strict'

const contract = (fn, ...types) => {
    const resultType = types[types.length - 1]
    const argTypes = types.slice(0, -1)

    return (...args) => {
        for (let i = 0; i < args.length; i++) {
            const arg = args[i]
            const expectedType = argTypes[i]
            if (typeof arg !== expectedType.name.toLowerCase()) {
                throw new TypeError(`Invalid type for argument ${i}`)
            }
        }

        const result = fn(...args)

        if (typeof result !== resultType.name.toLowerCase()) {
            throw new TypeError('Invalid type for return value')
        }

        return result
    }
}

const add = (a, b) => a + b
const addNumbers = contract(add, Number, Number, Number)
const res = addNumbers(2, 3)
console.dir(res)

const concat = (s1, s2) => s1 + s2
const concatStrings = contract(concat, String, String, String)
const res2 = concatStrings('Hello ', 'world!')
console.dir(res2)