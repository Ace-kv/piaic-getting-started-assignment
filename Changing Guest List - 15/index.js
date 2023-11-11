var impPeople = ["James", "John", "Sameul"];
impPeople.forEach(function (person) {
    console.log("\nHey ".concat(person, ", \n\nYou are cordially invited to my humble abode for dinner on the coming Friday. Please do come.\n\nRegards,\nMuhammadd Talha Shahid"));
});
console.log("\n\n".concat(impPeople[2], " couldn't make it.\n"));
impPeople.splice(2, 1, "Michael");
impPeople.forEach(function (person) {
    console.log("\nHey ".concat(person, ", \n\nYou are cordially invited to my humble abode for dinner on the coming Friday. Please do come.\n\nRegards,\nMuhammadd Talha Shahid"));
});
