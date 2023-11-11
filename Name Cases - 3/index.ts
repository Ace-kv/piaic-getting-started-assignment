const person = 'John'

function titleCase(str: string) {
    str = str.toLowerCase()
    let strList = str.split(' ')

    for (let i = 0; i < strList.length; i++) {
        strList[i] = strList[i].charAt(0).toUpperCase() + strList[i].slice(1)
    }

    return strList.join(' ')
}

console.log(person.toLowerCase(), person.toUpperCase(), titleCase(person));

