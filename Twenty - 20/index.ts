const mountain1: string = "K2", mountain2: string = "Everest", mountain3: string = "Nanga parbat"
let mountainList = []

// method 1
for (let i = 1; i < 4; i++) {
    mountainList.push(eval("mountain" + i))
}

// method 2
// mountainList.push(mountain1, mountain2, mountain3)

// very poor choice of wordiing in this question. It looks like we should make a list (array) of items and then write 
// a program for an array containing these items that are already inside an array? 
// I am sorry but this just sounds redundant and does not make any sense to me. Please be more clear in the required output objectives.
console.log(mountainList);
