var person = 'John';
function titleCase(str) {
    str = str.toLowerCase();
    var strList = str.split(' ');
    for (var i = 0; i < strList.length; i++) {
        strList[i] = strList[i].charAt(0).toUpperCase() + strList[i].slice(1);
    }
    return strList.join(' ');
}
console.log(person.toLowerCase(), person.toUpperCase(), titleCase(person));
