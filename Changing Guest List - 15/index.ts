let impPeople = ["James", "John", "Sameul"]

impPeople.forEach((person) => {
    console.log(`\nHey ${person}, \n\nYou are cordially invited to my humble abode for dinner on the coming Friday. Please do come.\n\nRegards,\nMuhammadd Talha Shahid`);
})

console.log(`\n\n${impPeople[2]} couldn't make it.\n`);

impPeople.splice(2, 1, "Michael")

impPeople.forEach((person) => {
     console.log(`\nHey ${person}, \n\nYou are cordially invited to my humble abode for dinner on the coming Friday. Please do come.\n\nRegards,\nMuhammadd Talha Shahid`);
})
