var mountain1 = "K2", mountain2 = "Everest", mountain3 = "Nanga parbat";
var mountainList = [];
// method 1
for (var i = 1; i < 4; i++) {
    mountainList.push(eval("mountain" + i));
}
// method 2
// mountainList.push(mountain1, mountain2, mountain3)
// very poor choice of wordiing in this question. It looks like we should make a list (array) of items and then write 
// a program for an array containing these items that are already inside an array? 
// I am sorry but this just sounds redundant and does not make any sense to me. Please be more clear in the required output objectives.
console.log(mountainList);
