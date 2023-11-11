let animals = ["dog", "cat", "rabbit"]

animals.forEach((animal) => {
    // console.log(`Animal ${animals.indexOf(animal) + 1}:`, animal);
    if (animal == "dog") {
        console.log("A dog is an independent and playful companion.");
    } else if (animal == "cat") {
        console.log("A cat would make a great pet.");
    } else {
        console.log("A rabbit is a social and adorable pet.");
    }
})

console.log("\nWhat these animals have in common: Any of these animals would make a great pet!");