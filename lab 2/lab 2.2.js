'use strict'

const contacts = [
    { name: 'Олександр Петренко', phone: '+380442345678' },
    { name: 'Марія Шевченко', phone: '+380671234567' },
    { name: 'Іван Коваленко', phone: '+380509876543' },
    { name: 'Софія Мельник', phone: '+380935557788' }
]

function findPhoneByName(name) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i].phone
        }
    }
    return undefined
}

console.log(findPhoneByName('Марія Шевченко'))
console.log(findPhoneByName('Іван Коваленко'))