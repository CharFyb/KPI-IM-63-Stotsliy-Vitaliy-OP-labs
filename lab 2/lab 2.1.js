const phoneHash = {
    'Олександр Петренко': '+380442345678',
    'Марія Шевченко': '+380671234567',
    'Іван Коваленко': '+380509876543',
    'Софія Мельник': '+380935557788'
}

function findPhoneByName(name) {
    return phoneHash[name]
}

console.log(findPhoneByName('Марія Шевченко'))
console.log(findPhoneByName('Іван Коваленко'))