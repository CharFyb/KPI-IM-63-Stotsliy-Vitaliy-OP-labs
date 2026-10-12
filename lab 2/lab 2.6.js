'use strict'

function funct() {
    const objConst = { name: "Олександр" }
    let objLet = { name: "Марія" }

    objConst.name = "Олексій"
    objLet.name = "Марта"

    console.log(objConst)
    console.log(objLet)

    objLet = { name: "Новий об'єкт" }
    console.log(objLet)
}

funct()
function createUser(name, city) {
    return { name, city }
}

console.log(createUser('Олександр Петренко', 'Київ'))