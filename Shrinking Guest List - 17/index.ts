let impPeople = ["James", "John", "Sameul"]

impPeople.forEach((person) => {
    console.log(`\nHey ${person}, \n\nYou are cordially invited to my humble abode for dinner on the coming Friday. Please do come.\n\nRegards,\nMuhammadd Talha Shahid`);
})

console.log(`\n\nSorry boys, ${impPeople[2]} couldn't make it.\n`);

impPeople.splice(2, 1, "Michael")

impPeople.forEach((person) => {
    console.log(`\nHey ${person}, \n\nYou are cordially invited to my humble abode for dinner on the coming Friday. Please do come.\n\nRegards,\nMuhammadd Talha Shahid`);
})

console.log("\n\nSup Gents. We found a bigger table. So three more lads will be joining us.\n");

impPeople.unshift("Jack")
impPeople.splice(1, 0, "Daniel")
impPeople.push("Joseph")

impPeople.forEach((person) => {
    console.log(`\nHey ${person}, \n\nYou are cordially invited to my humble abode for dinner on the coming Friday. Please do come.\n\nRegards,\nMuhammadd Talha Shahid`);
})

console.log("\n\nYou won't believe it boys. Apparently the upcoming table was as durable as a WWE TLC one. The owner looked at it funny and it caved in.\n\nAnyways the new table is late and the previous table ... well I am told my dog took a hefty bite of it. I know. I know.\n\nWorry not, we will meet in a far better place in the coming day after this one. So look forward to it.\n\nI still have two spots left for my lucky victims, so look out for your messages.\n");

for (let i = impPeople.length - 1; i >= 0; i--) {
    if (i > 1) {
        console.log(`Sorry, ${impPeople[i]}. You gotta go bud. Be prepared though we will meet on the next day`);
        impPeople.pop()
    } else {
        console.log(`\nHey ${impPeople[i]}. You are still in. Make sure you come, or I will break your legs the next time I see ya.`);
        impPeople.pop()
    }
}

console.log(impPeople);
